import Link from "next/link";
import {
  ADDRESS_DISPLAY,
  CNPJ,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
  WHATSAPP_URL,
} from "@/lib/blog/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-stone">
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/blog" className="hover:text-pine">
            Blog
          </Link>
          <Link href="/sobre" className="hover:text-pine">
            Sobre o Dr. Vitor Frauches
          </Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-pine">
            WhatsApp
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-pine">
            Instagram
          </a>
        </nav>
        <p className="font-data text-xs">
          {SITE_NAME} · {ADDRESS_DISPLAY} ·{" "}
          <a href={`tel:${PHONE_TEL}`} className="hover:text-pine">
            {PHONE_DISPLAY}
          </a>{" "}
          · CNPJ {CNPJ}
        </p>
        <p className="text-xs text-stone-soft">
          © {new Date().getFullYear()} {SITE_NAME}. Conteúdo educativo, não
          substitui consulta médica.
        </p>
      </div>
    </footer>
  );
}
