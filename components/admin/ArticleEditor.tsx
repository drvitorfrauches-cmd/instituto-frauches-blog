"use client";

import { useState } from "react";
import type { Block } from "@/lib/admin/article-blocks";

const TYPE_LABELS: Record<Block["type"], string> = {
  heading2: "Título de seção (H2)",
  heading3: "Subtítulo (H3)",
  paragraph: "Parágrafo",
  quote: "Citação",
  callout: "Aviso (callout)",
  list: "Lista",
  raw: "Bloco não editável",
};

let newBlockCounter = 0;

export function ArticleEditor({
  prNumber,
  path,
  initialTitle,
  initialDescription,
  initialBlocks,
}: {
  prNumber: number;
  path: string;
  initialTitle: string;
  initialDescription: string;
  initialBlocks: Block[];
}) {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [blocks, setBlocks] = useState<Block[]>(initialBlocks);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  function updateBlock(id: string, updater: (b: Block) => Block) {
    setBlocks((prev) => prev.map((b) => (b.id === id ? updater(b) : b)));
  }

  function removeBlock(id: string) {
    setBlocks((prev) => prev.filter((b) => b.id !== id));
  }

  function addParagraph() {
    newBlockCounter += 1;
    setBlocks((prev) => [
      ...prev,
      { id: `new-${newBlockCounter}`, type: "paragraph", text: "" },
    ]);
  }

  async function save() {
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prNumber, path, title, description, blocks }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Erro ao salvar");
      }
      setMessage("Rascunho salvo.");
    } catch (err) {
      setMessage(`Erro: ${(err as Error).message}`);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mb-10 rounded-xl border border-neutral-200 p-5">
      <p className="mb-4 font-mono text-xs text-neutral-400">{path}</p>

      <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-neutral-500">
        Título
      </label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-4 w-full rounded-lg border border-neutral-300 px-3 py-2 text-neutral-900"
      />

      <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-neutral-500">
        Descrição (meta description)
      </label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={2}
        className="mb-6 w-full rounded-lg border border-neutral-300 px-3 py-2 text-neutral-900"
      />

      <div className="flex flex-col gap-4">
        {blocks.map((block) => (
          <div key={block.id} className="rounded-lg border border-neutral-200 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                {TYPE_LABELS[block.type]}
              </span>
              <button
                onClick={() => removeBlock(block.id)}
                className="text-xs text-red-600 underline"
              >
                Remover
              </button>
            </div>

            {block.type === "raw" ? (
              <p className="text-sm text-neutral-400">
                Conteúdo especial não editável aqui (ex.: imagem no corpo). Use
                "Remover" para excluir, ou edite direto no código se precisar
                mudar o conteúdo.
              </p>
            ) : block.type === "list" ? (
              <textarea
                value={block.items.join("\n")}
                onChange={(e) =>
                  updateBlock(block.id, (b) =>
                    b.type === "list"
                      ? { ...b, items: e.target.value.split("\n") }
                      : b,
                  )
                }
                rows={Math.max(3, block.items.length + 1)}
                placeholder="Um item por linha"
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-neutral-900"
              />
            ) : block.type === "heading2" || block.type === "heading3" ? (
              <input
                value={block.text}
                onChange={(e) =>
                  updateBlock(block.id, (b) =>
                    "text" in b ? { ...b, text: e.target.value } : b,
                  )
                }
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 font-medium text-neutral-900"
              />
            ) : (
              <textarea
                value={block.text}
                onChange={(e) =>
                  updateBlock(block.id, (b) =>
                    "text" in b ? { ...b, text: e.target.value } : b,
                  )
                }
                rows={4}
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-neutral-900"
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={addParagraph}
          className="rounded-lg border border-neutral-300 px-3 py-2 text-sm"
        >
          + Adicionar parágrafo
        </button>
        <button
          onClick={save}
          disabled={saving}
          className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          {saving ? "Salvando..." : "Salvar rascunho"}
        </button>
        {message && <span className="text-sm text-neutral-600">{message}</span>}
      </div>

      <p className="mt-3 text-xs text-neutral-400">
        Dica de formatação no texto: <code>**negrito**</code>, e links como{" "}
        <code>[texto](/blog/outro-slug)</code> ou{" "}
        <code>[texto](wa)</code> para o botão de WhatsApp.
      </p>
    </div>
  );
}
