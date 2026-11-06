import type { Metadata } from "next";
import { RootDocument } from "@/components/RootDocument";
import { LOGO_PATH, SITE_NAME, SITE_URL } from "@/lib/blog/site";
import "../../globals.css";

export const metadata: Metadata = {
  title: "Hair Transplant in Brazil | Instituto Frauches",
  description:
    "Hair transplant in Vitória, Brazil, with Dr. Vitor Frauches: FUE technique, English-speaking team and concierge support for international patients.",
  verification: {
    google: "xWPxYfpzRIg4Z-iynPZShG3nYBxgpZthHYdluABAo0I",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: `${SITE_URL}/en`,
    locale: "en_US",
    images: [{ url: `${SITE_URL}${LOGO_PATH}` }],
  },
};

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
