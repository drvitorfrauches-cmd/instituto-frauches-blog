"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function ApproveButton({
  prNumber,
  slugs,
}: {
  prNumber: number;
  slugs: string[];
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function approve() {
    if (!confirm("Publicar este artigo agora? Ele vai ficar no ar no blog.")) return;
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/merge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prNumber, slugs }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Erro ao publicar");
      }
      setMessage("Publicado! Redirecionando...");
      setTimeout(() => router.push("/admin"), 1200);
    } catch (err) {
      setMessage(`Erro: ${(err as Error).message}`);
      setLoading(false);
    }
  }

  return (
    <div className="sticky bottom-6 flex items-center gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4">
      <button
        onClick={approve}
        disabled={loading}
        className="rounded-lg bg-amber-800 px-4 py-2 font-medium text-white disabled:opacity-50"
      >
        {loading ? "Publicando..." : "Aprovar e publicar"}
      </button>
      <p className="text-sm text-amber-900">
        Salve os rascunhos primeiro. Isso mescla o PR e coloca o artigo no ar.
      </p>
      {message && <span className="text-sm text-amber-900">{message}</span>}
    </div>
  );
}
