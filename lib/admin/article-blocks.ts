import { parse } from "@babel/parser";
import type {
  Expression,
  JSXElement,
  JSXExpressionContainer,
  JSXFragment,
  JSXText,
  Node,
  StringLiteral,
} from "@babel/types";

export type Block =
  | { id: string; type: "heading2"; text: string }
  | { id: string; type: "heading3"; text: string }
  | { id: string; type: "paragraph"; text: string }
  | { id: string; type: "quote"; text: string }
  | { id: string; type: "callout"; text: string }
  | { id: string; type: "list"; ordered: boolean; items: string[] }
  | { id: string; type: "raw"; label: string };

export interface ParsedArticle {
  title: string;
  description: string;
  blocks: Block[];
}

interface Range {
  start: number;
  end: number;
}

interface ParsedInternal {
  ast: ReturnType<typeof parse>;
  titleNode: StringLiteral;
  descriptionNode: StringLiteral;
  readingTimeNode: Node;
  updatedAtNode: StringLiteral | null;
  frag: JSXFragment;
  topLevelElements: { node: JSXElement; deleteStart: number }[];
}

const SIMPLE_TAGS: Record<string, Block["type"]> = {
  H2: "heading2",
  H3: "heading3",
  P: "paragraph",
  Quote: "quote",
  Callout: "callout",
};

function parseInternal(source: string): ParsedInternal {
  const ast = parse(source, { sourceType: "module", plugins: ["jsx", "typescript"] });

  let titleNode: StringLiteral | null = null;
  let descriptionNode: StringLiteral | null = null;
  let readingTimeNode: Node | null = null;
  let updatedAtNode: StringLiteral | null = null;
  let frag: JSXFragment | null = null;

  for (const node of ast.program.body) {
    if (
      node.type === "ExportNamedDeclaration" &&
      node.declaration?.type === "VariableDeclaration"
    ) {
      const decl = node.declaration.declarations[0];
      if (decl.id.type === "Identifier" && decl.id.name === "meta") {
        const init = decl.init;
        if (init?.type === "ObjectExpression") {
          for (const prop of init.properties) {
            if (prop.type !== "ObjectProperty" || prop.key.type !== "Identifier") continue;
            if (prop.key.name === "title" && prop.value.type === "StringLiteral") {
              titleNode = prop.value;
            }
            if (prop.key.name === "description" && prop.value.type === "StringLiteral") {
              descriptionNode = prop.value;
            }
            if (prop.key.name === "readingTime") {
              readingTimeNode = prop.value;
            }
            if (prop.key.name === "updatedAt" && prop.value.type === "StringLiteral") {
              updatedAtNode = prop.value;
            }
          }
        }
      }
    }
    if (node.type === "ExportDefaultDeclaration") {
      const fn = node.declaration;
      if (fn.type === "FunctionDeclaration") {
        const ret = fn.body.body.find((s) => s.type === "ReturnStatement");
        if (ret && ret.type === "ReturnStatement" && ret.argument?.type === "JSXFragment") {
          frag = ret.argument;
        }
      }
    }
  }

  if (!titleNode || !descriptionNode || !readingTimeNode || !frag) {
    throw new Error("Não foi possível localizar meta.title/description/readingTime ou o JSX principal do artigo.");
  }

  const topLevelElements: { node: JSXElement; deleteStart: number }[] = [];
  const children = frag.children;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.type !== "JSXElement") continue;
    let deleteStart = child.start ?? 0;
    for (let j = i - 1; j >= 0; j--) {
      const sib = children[j];
      if (sib.type === "JSXText") {
        deleteStart = sib.start ?? deleteStart;
        break;
      }
      break;
    }
    topLevelElements.push({ node: child, deleteStart });
  }

  return { ast, titleNode, descriptionNode, readingTimeNode, updatedAtNode, frag, topLevelElements };
}

function tagName(el: JSXElement): string {
  const name = el.openingElement.name;
  return name.type === "JSXIdentifier" ? name.name : "";
}

function innerRange(el: JSXElement): Range {
  return { start: el.openingElement.end ?? 0, end: el.closingElement?.start ?? el.end ?? 0 };
}

// --- Inline serialization: JSX children -> plain-ish markup string ---

function cleanupWhitespace(text: string): string {
  return text
    .replace(/\s+/g, " ")
    .replace(/ ([.,;:!?])/g, "$1")
    .trim();
}

function serializeInlineChildren(nodes: Node[]): string {
  let out = "";
  for (const node of nodes) {
    out += serializeInlineNode(node);
  }
  return cleanupWhitespace(out);
}

function serializeInlineNode(node: Node): string {
  if (node.type === "JSXText") {
    const text = (node as JSXText).value;
    return /\s/.test(text) && text.trim() === "" ? " " : text;
  }
  if (node.type === "JSXExpressionContainer") {
    const expr = (node as JSXExpressionContainer).expression as Expression;
    if (expr.type === "StringLiteral") {
      return expr.value === " " ? " " : expr.value;
    }
    return "";
  }
  if (node.type === "JSXElement") {
    const el = node as JSXElement;
    const name = tagName(el);
    const inner = serializeInlineChildrenRaw(el.children);
    if (name === "Strong") {
      return `**${inner}**`;
    }
    if (name === "Link") {
      const href = getStringAttr(el, "href") ?? "#";
      return `[${inner}](${href})`;
    }
    if (name === "a") {
      const hrefAttr = el.openingElement.attributes.find(
        (a) => a.type === "JSXAttribute" && a.name.name === "href",
      );
      let href = "#";
      if (hrefAttr && hrefAttr.type === "JSXAttribute") {
        if (hrefAttr.value?.type === "StringLiteral") {
          href = hrefAttr.value.value;
        } else if (
          hrefAttr.value?.type === "JSXExpressionContainer" &&
          hrefAttr.value.expression.type === "Identifier"
        ) {
          const idName = hrefAttr.value.expression.name;
          if (idName === "WHATSAPP_URL") href = "wa";
          else if (idName === "INSTAGRAM_URL") href = "ig";
          else href = "#";
        }
      }
      return `[${inner}](${href})`;
    }
    return inner;
  }
  return "";
}

function serializeInlineChildrenRaw(nodes: Node[]): string {
  let out = "";
  for (const node of nodes) out += serializeInlineNode(node);
  return cleanupWhitespace(out);
}

function getStringAttr(el: JSXElement, attrName: string): string | undefined {
  const attr = el.openingElement.attributes.find(
    (a) => a.type === "JSXAttribute" && a.name.name === attrName,
  );
  if (attr && attr.type === "JSXAttribute" && attr.value?.type === "StringLiteral") {
    return attr.value.value;
  }
  return undefined;
}

// --- Inline deserialization: markup string -> JSX source (children only) ---

const LINK_RE = /\[([^\]]*)\]\((wa|ig|\/[^\s)]+|https?:\/\/[^\s)]+)\)/g;

function jsxTextExpr(text: string): string {
  return `{${JSON.stringify(text)}}`;
}

function boldAwareSegments(text: string): string {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter((p) => p !== "");
  return parts
    .map((part) => {
      if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
        return `<Strong>${jsxTextExpr(part.slice(2, -2))}</Strong>`;
      }
      return jsxTextExpr(part);
    })
    .join("");
}

function buildInlineJSX(markup: string): string {
  let out = "";
  let lastIndex = 0;
  LINK_RE.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = LINK_RE.exec(markup))) {
    const [full, label, href] = match;
    if (match.index > lastIndex) {
      out += boldAwareSegments(markup.slice(lastIndex, match.index));
    }
    const labelJsx = boldAwareSegments(label);
    if (href === "wa") {
      out += `<a href={WHATSAPP_URL} className="underline" target="_blank" rel="noopener noreferrer">${labelJsx}</a>`;
    } else if (href === "ig") {
      out += `<a href={INSTAGRAM_URL} className="underline" target="_blank" rel="noopener noreferrer">${labelJsx}</a>`;
    } else if (href.startsWith("/")) {
      out += `<Link href="${href}" className="underline">${labelJsx}</Link>`;
    } else {
      out += `<a href="${href}" className="underline" target="_blank" rel="noopener noreferrer">${labelJsx}</a>`;
    }
    lastIndex = match.index + full.length;
  }
  if (lastIndex < markup.length) {
    out += boldAwareSegments(markup.slice(lastIndex));
  }
  return out;
}

// --- Public API ---

export function parseArticle(source: string): ParsedArticle {
  const internal = parseInternal(source);
  const blocks: Block[] = internal.topLevelElements.map(({ node }, i) => {
    const name = tagName(node);
    const id = `b${i}`;
    if (name in SIMPLE_TAGS) {
      const { start, end } = innerRange(node);
      const text = serializeInlineChildren(sliceChildren(node, start, end));
      return { id, type: SIMPLE_TAGS[name], text } as Block;
    }
    if (name === "UL" || name === "OL") {
      const items = node.children
        .filter((c): c is JSXElement => c.type === "JSXElement" && tagName(c) === "LI")
        .map((li) => {
          const { start, end } = innerRange(li);
          return serializeInlineChildren(sliceChildren(li, start, end));
        });
      return { id, type: "list", ordered: name === "OL", items } as Block;
    }
    return { id, type: "raw", label: name || "elemento" } as Block;
  });

  return {
    title: internal.titleNode.value,
    description: internal.descriptionNode.value,
    blocks,
  };
}

function sliceChildren(el: JSXElement, start: number, end: number): Node[] {
  return el.children.filter((c) => (c.start ?? 0) >= start && (c.end ?? 0) <= end);
}

function estimateReadingTime(blocks: Block[]): number {
  const words = blocks
    .map((b) => {
      if (b.type === "list") return b.items.join(" ");
      if (b.type === "raw") return "";
      return b.text;
    })
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function regenerateArticle(
  originalSource: string,
  updated: { title: string; description: string; blocks: Block[] },
): string {
  const internal = parseInternal(originalSource);
  const edits: { start: number; end: number; text: string }[] = [];

  edits.push({
    start: internal.titleNode.start ?? 0,
    end: internal.titleNode.end ?? 0,
    text: JSON.stringify(updated.title),
  });
  edits.push({
    start: internal.descriptionNode.start ?? 0,
    end: internal.descriptionNode.end ?? 0,
    text: JSON.stringify(updated.description),
  });
  edits.push({
    start: internal.readingTimeNode.start ?? 0,
    end: internal.readingTimeNode.end ?? 0,
    text: String(estimateReadingTime(updated.blocks)),
  });
  if (internal.updatedAtNode) {
    edits.push({
      start: internal.updatedAtNode.start ?? 0,
      end: internal.updatedAtNode.end ?? 0,
      text: JSON.stringify(new Date().toISOString().slice(0, 10)),
    });
  }

  const originalById = new Map(internal.topLevelElements.map((el, i) => [`b${i}`, el]));
  const updatedIds = new Set(updated.blocks.filter((b) => originalById.has(b.id)).map((b) => b.id));

  for (const [id, { node, deleteStart }] of originalById) {
    if (!updatedIds.has(id)) {
      edits.push({ start: deleteStart, end: node.end ?? 0, text: "" });
    }
  }

  let insertionSource = "";
  for (const block of updated.blocks) {
    const existing = originalById.get(block.id);
    if (existing) {
      const { node } = existing;
      const name = tagName(node);
      if (block.type === "list" && (name === "UL" || name === "OL")) {
        const { start, end } = innerRange(node);
        edits.push({ start, end, text: buildListItemsJSX(block.items) });
      } else if (block.type !== "list" && block.type !== "raw" && name in SIMPLE_TAGS) {
        const { start, end } = innerRange(node);
        edits.push({ start, end, text: buildInlineJSX(block.text) });
      }
      continue;
    }
    insertionSource += buildNewBlockJSX(block);
  }

  if (insertionSource) {
    const insertAt = internal.frag.closingFragment.start ?? internal.frag.end ?? 0;
    edits.push({ start: insertAt, end: insertAt, text: insertionSource });
  }

  return applyEdits(originalSource, edits);
}

function buildListItemsJSX(items: string[]): string {
  return (
    "\n" +
    items
      .filter((item) => item.trim() !== "")
      .map((item) => `        <LI>${buildInlineJSX(item)}</LI>`)
      .join("\n") +
    "\n      "
  );
}

function buildNewBlockJSX(block: Block): string {
  if (block.type === "paragraph") return `      <P>${buildInlineJSX(block.text)}</P>\n`;
  if (block.type === "heading2") return `      <H2 id="secao">${buildInlineJSX(block.text)}</H2>\n`;
  if (block.type === "heading3") return `      <H3>${buildInlineJSX(block.text)}</H3>\n`;
  if (block.type === "quote") return `      <Quote>${buildInlineJSX(block.text)}</Quote>\n`;
  if (block.type === "callout") return `      <Callout>${buildInlineJSX(block.text)}</Callout>\n`;
  if (block.type === "list") {
    const tag = block.ordered ? "OL" : "UL";
    return `      <${tag}>${buildListItemsJSX(block.items)}</${tag}>\n`;
  }
  return "";
}

function applyEdits(source: string, edits: { start: number; end: number; text: string }[]): string {
  const sorted = [...edits].sort((a, b) => b.start - a.start);
  let result = source;
  for (const edit of sorted) {
    result = result.slice(0, edit.start) + edit.text + result.slice(edit.end);
  }
  return result;
}
