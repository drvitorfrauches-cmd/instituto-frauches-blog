import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { LOGO_PATH, SITE_NAME, SITE_URL } from "@/lib/blog/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog de Transplante Capilar e Tricologia | Instituto Frauches",
  description:
    "Conteúdo educativo sobre transplante capilar FUE, tricologia, calvície e tratamentos capilares, assinado pelo Dr. Vitor Frauches. Agende sua avaliação.",
  verification: {
    google: "xWPxYfpzRIg4Z-iynPZShG3nYBxgpZthHYdluABAo0I",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [{ url: `${SITE_URL}${LOGO_PATH}` }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
