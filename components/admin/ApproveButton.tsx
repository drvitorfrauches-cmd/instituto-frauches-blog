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
  const [confirming, setConfirming] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function approve() {
    setConfirming(false);
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
        onClick={() => setConfirming(true)}
        disabled={loading}
        className="rounded-lg bg-amber-800 px-4 py-2 font-medium text-white disabled:opacity-50"
      >
        {loading ? "Publicando..." : "Aprovar e publicar"}
      </button>
      <p className="text-sm text-amber-900">
        Salve os rascunhos primeiro. Isso mescla o PR e coloca o artigo no ar.
      </p>
      {message && <span className="text-sm text-amber-900">{message}</span>}

      {confirming && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl">
            <p className="mb-4 text-neutral-900">
              Publicar este artigo agora? Ele vai ficar no ar no blog.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setConfirming(false)}
                className="rounded-lg border border-neutral-300 px-3 py-2 text-sm"
              >
                Cancelar
              </button>
              <button
                onClick={approve}
                className="rounded-lg bg-amber-800 px-3 py-2 text-sm font-medium text-white"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
