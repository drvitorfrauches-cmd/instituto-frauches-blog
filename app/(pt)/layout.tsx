import type { Metadata } from "next";
import { RootDocument } from "@/components/RootDocument";
import { LOGO_PATH, SITE_NAME, SITE_URL } from "@/lib/blog/site";
import "../globals.css";

export const metadata: Metadata = {
  title: "Transplante Capilar e Tricologia | Instituto Frauches",
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
  return <RootDocument locale="pt">{children}</RootDocument>;
}
