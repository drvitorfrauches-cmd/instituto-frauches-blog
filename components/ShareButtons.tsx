"use client";

import { useState } from "react";

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
  ];

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard indisponível; sem efeito, o usuário ainda pode copiar a URL manualmente
    }
  }

  return (
    <div className="mb-8 flex flex-wrap items-center gap-2 text-sm">
      <span className="text-neutral-500">Compartilhar:</span>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-neutral-300 px-3 py-1 text-neutral-700 hover:border-neutral-500"
        >
          {link.label}
        </a>
      ))}
      <button
        onClick={copyLink}
        className="rounded-full border border-neutral-300 px-3 py-1 text-neutral-700 hover:border-neutral-500"
      >
        {copied ? "Link copiado!" : "Copiar link"}
      </button>
    </div>
  );
}
