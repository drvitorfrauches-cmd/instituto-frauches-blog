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
    <footer className="mt-auto border-t border-neutral-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-neutral-500">
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/sobre" className="hover:underline">
            Sobre o Dr. Vitor Frauches
          </Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
            WhatsApp
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
            Instagram
          </a>
        </nav>
        <p>
          {SITE_NAME} · {ADDRESS_DISPLAY} ·{" "}
          <a href={`tel:${PHONE_TEL}`} className="hover:underline">
            {PHONE_DISPLAY}
          </a>{" "}
          · CNPJ {CNPJ}
        </p>
        <p>
          © {new Date().getFullYear()} {SITE_NAME}. Conteúdo educativo, não
          substitui consulta médica.
        </p>
      </div>
    </footer>
  );
}
