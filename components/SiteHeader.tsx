import Link from "next/link";
import { SITE_NAME, WHATSAPP_URL } from "@/lib/blog/site";

export function SiteHeader() {
  return (
    <header className="bg-mast-bg text-mast-fg">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/blog" className="flex items-baseline gap-2.5">
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

        <nav aria-label="Navegação principal" className="flex flex-wrap items-center gap-6 text-sm tracking-wide">
          <Link href="/blog" className="text-mast-fg/85 hover:text-mast-fg">
            Blog
          </Link>
          <Link href="/blog/guia-calvicie-masculina" className="text-mast-fg/85 hover:text-mast-fg">
            Calvície
          </Link>
          <Link href="/blog/guia-transplante-capilar" className="text-mast-fg/85 hover:text-mast-fg">
            Transplante
          </Link>
          <Link href="/sobre" className="text-mast-fg/85 hover:text-mast-fg">
            Sobre
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-mast-fg pb-0.5 font-medium text-mast-fg"
          >
            Agendar
          </a>
        </nav>
      </div>
    </header>
  );
}
