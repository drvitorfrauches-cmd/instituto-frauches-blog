import Link from "next/link";
import {
  ADDRESS_DISPLAY,
  CNPJ,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_DISPLAY_INTL,
  PHONE_TEL,
  SITE_NAME,
  WHATSAPP_URL,
  WHATSAPP_URL_EN,
} from "@/lib/blog/site";
import { UI, type Locale } from "@/lib/i18n";

export function SiteFooter({ locale = "pt" }: { locale?: Locale }) {
  const en = locale === "en";
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-stone">
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href={en ? "/en" : "/blog"} className="hover:text-pine">
            {en ? "International patients" : "Blog"}
          </Link>
          <Link href={UI[locale].aboutHref} className="hover:text-pine">
            {en ? "About Dr. Vitor Frauches" : "Sobre o Dr. Vitor Frauches"}
          </Link>
          <a href={en ? WHATSAPP_URL_EN : WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-pine">
            WhatsApp
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-pine">
            Instagram
          </a>
        </nav>
        <p className="font-data text-xs">
          {SITE_NAME} · {ADDRESS_DISPLAY}{en ? ", Brazil" : ""} ·{" "}
          <a href={`tel:${PHONE_TEL}`} className="hover:text-pine">
            {en ? PHONE_DISPLAY_INTL : PHONE_DISPLAY}
          </a>{" "}
          · {en ? "Brazilian company ID (CNPJ)" : "CNPJ"} {CNPJ}
        </p>
        <p className="text-xs text-stone-soft">
          © {new Date().getFullYear()} {SITE_NAME}. {UI[locale].disclaimer}
        </p>
      </div>
    </footer>
  );
}
