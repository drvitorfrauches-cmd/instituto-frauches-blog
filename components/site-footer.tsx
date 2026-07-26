import Link from "next/link";
import { INSTAGRAM_URL, SITE_NAME, WHATSAPP_URL } from "@/lib/blog/site";

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
          © {new Date().getFullYear()} {SITE_NAME}. Conteúdo educativo, não
          substitui consulta médica.
        </p>
      </div>
    </footer>
  );
}
