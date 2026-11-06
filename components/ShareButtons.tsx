"use client";

import { useState } from "react";
import { UI, type Locale } from "@/lib/i18n";

export function ShareButtons({
  url,
  title,
  locale = "pt",
}: {
  url: string;
  title: string;
  locale?: Locale;
}) {
  const t = UI[locale];
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
      <span className="font-data text-xs tracking-wide text-stone-soft uppercase">
        {t.share}
      </span>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-line px-3 py-1 text-ink hover:border-pine hover:text-pine"
        >
          {link.label}
        </a>
      ))}
      <button
        onClick={copyLink}
        className="border border-line px-3 py-1 text-ink hover:border-pine hover:text-pine"
      >
        {copied ? t.linkCopied : t.copyLink}
      </button>
    </div>
  );
}
