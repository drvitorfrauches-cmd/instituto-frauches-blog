import Link from "next/link";
import { SITE_NAME, WHATSAPP_URL, WHATSAPP_URL_EN } from "@/lib/blog/site";
import type { Locale } from "@/lib/i18n";

const NAV = {
  pt: {
    home: "/blog",
    label: "Navegação principal",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/blog/guia-calvicie-masculina", label: "Calvície" },
      { href: "/blog/guia-transplante-capilar", label: "Transplante" },
      { href: "/sobre", label: "Sobre" },
    ],
    language: { href: "/en", label: "EN", title: "English version" },
    book: { href: WHATSAPP_URL, label: "Agendar" },
  },
  en: {
    home: "/en",
    label: "Main navigation",
    links: [
      { href: "/en", label: "International patients" },
      { href: "/en/blog/what-is-fue-hair-transplant", label: "FUE" },
      { href: "/en/about", label: "About" },
    ],
    language: { href: "/blog", label: "PT", title: "Versão em português" },
    book: { href: WHATSAPP_URL_EN, label: "Book" },
  },
};

export function SiteHeader({ locale = "pt" }: { locale?: Locale }) {
  const nav = NAV[locale];
  return (
    <header className="bg-mast-bg text-mast-fg">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href={nav.home} className="flex items-baseline gap-2.5">
          <svg
            viewBox="0 0 32 32"
            className="h-6 w-6 flex-none"
            aria-hidden="true"
          >
            <path d="M9 27V6h15" stroke="var(--mast-fg)" strokeWidth="1.6" fill="none" />
            <path d="M9 15.5H21" stroke="var(--mast-muted)" strokeWidth="1.6" fill="none" />
          </svg>
          <span className="flex flex-col leading-none">
            <span className="text-[0.62rem] tracking-[0.16em] text-mast-muted uppercase">
              {SITE_NAME}
            </span>
            <span className="font-display text-[1.05rem] font-medium">
              Journal
            </span>
          </span>
        </Link>

        <nav aria-label={nav.label} className="flex flex-wrap items-center gap-6 text-sm tracking-wide">
          {nav.links.map((link) => (
            <Link key={link.href} href={link.href} className="text-mast-fg/85 hover:text-mast-fg">
              {link.label}
            </Link>
          ))}
          <Link
            href={nav.language.href}
            title={nav.language.title}
            hrefLang={locale === "pt" ? "en" : "pt-BR"}
            className="font-data text-xs text-mast-muted hover:text-mast-fg"
          >
            {nav.language.label}
          </Link>
          <a
            href={nav.book.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-mast-fg pb-0.5 font-medium text-mast-fg"
          >
            {nav.book.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
