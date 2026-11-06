import { Fraunces, IBM_Plex_Mono, Public_Sans } from "next/font/google";
import Script from "next/script";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/SiteHeader";
import { ORGANIZATION_JSON_LD } from "@/lib/blog/site";
import { HTML_LANG, type Locale } from "@/lib/i18n";

const GA_MEASUREMENT_ID = "G-LP6N2JKP9G";
const GOOGLE_ADS_ID = "G-SLVYCHW3F4";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Documento HTML comum às duas raízes (português e inglês); muda só o idioma.
export function RootDocument({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html
      lang={HTML_LANG[locale]}
      className={`${fraunces.variable} ${publicSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              ...ORGANIZATION_JSON_LD,
            }),
          }}
        />
        <SiteHeader locale={locale} />
        {children}
        <SiteFooter locale={locale} />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
