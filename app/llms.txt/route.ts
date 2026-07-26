import { getAllPosts } from "@/lib/blog/registry";
import { SITE_URL, SITE_NAME } from "@/lib/blog/site";

export const dynamic = "force-static";

const GUIDE_SLUGS = [
  "guia-calvicie-masculina",
  "guia-transplante-capilar",
  "guia-tratamentos-capilares",
];

export async function GET() {
  const posts = getAllPosts();
  const guides = posts.filter((p) => GUIDE_SLUGS.includes(p.slug));
  const articles = posts.filter((p) => !GUIDE_SLUGS.includes(p.slug));

  const lines: string[] = [];

  lines.push(`# Blog do ${SITE_NAME}`);
  lines.push("");
  lines.push(
    "> Blog educativo sobre transplante capilar, tricologia e calvície, escrito e " +
      "revisado pelo Dr. Vitor Frauches (CRM-ES 10.229), especialista em transplante " +
      "capilar com o Protocolo Frauches Precision FUE®, em Vitória/ES, Brasil.",
  );
  lines.push("");
  lines.push(
    "Todo o conteúdo é educativo e não substitui consulta médica. Cobre a técnica " +
      "FUE, planejamento cirúrgico, tratamentos clínicos (minoxidil, finasterida, " +
      "dutasterida, PRP, MMP, mesoterapia, exossomos) e calvície/tricologia em geral. " +
      "O blog segue as normas de publicidade médica do CFM (Resolução 2.336/2023): " +
      "sem promessa de resultado garantido, sempre com nota de variação individual.",
  );
  lines.push("");

  lines.push("## Guias completos");
  lines.push("");
  for (const guide of guides) {
    lines.push(`- [${guide.title}](${SITE_URL}/blog/${guide.slug}): ${guide.description}`);
  }
  lines.push("");

  lines.push("## Artigos");
  lines.push("");
  for (const article of articles) {
    lines.push(`- [${article.title}](${SITE_URL}/blog/${article.slug}): ${article.description}`);
  }
  lines.push("");

  lines.push("## Sobre");
  lines.push("");
  lines.push(`- [Sobre o Dr. Vitor Frauches](${SITE_URL}/sobre)`);

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
