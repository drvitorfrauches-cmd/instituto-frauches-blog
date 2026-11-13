import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { P, H2, UL, LI, Strong } from "@/components/article-ui";
import { IshrsBadge } from "@/components/IshrsBadge";
import {
  ADDRESS_DISPLAY,
  AUTHOR_CREDENTIALS_EN,
  AUTHOR_EN,
  INSTAGRAM_URL,
  ORGANIZATION_JSON_LD,
  PHYSICIAN_JSON_LD,
  PHONE_DISPLAY_INTL,
  PHONE_TEL,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_URL_EN,
} from "@/lib/blog/site";

const TITLE = `About Dr. Vitor Frauches | ${SITE_NAME}`;
const DESCRIPTION =
  "Dr. Vitor Frauches, CRM-ES 10.229, physician specializing in hair transplantation and trichology in Vitória, Brazil, and postgraduate professor (BWS).";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/en/about`,
    languages: {
      "pt-BR": `${SITE_URL}/sobre`,
      en: `${SITE_URL}/en/about`,
      "x-default": `${SITE_URL}/en/about`,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "profile",
    locale: "en_US",
    url: `${SITE_URL}/en/about`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/author/dr-vitor-frauches.jpg` }],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    ...PHYSICIAN_JSON_LD,
    jobTitle: "Physician specializing in hair transplantation and trichology",
    description: AUTHOR_CREDENTIALS_EN.join(". "),
    url: `${SITE_URL}/en/about`,
    worksFor: ORGANIZATION_JSON_LD,
  };

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mb-10 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <Image
          src="/author/dr-vitor-frauches.jpg"
          alt="Dr. Vitor Frauches, physician specializing in hair transplantation and trichology"
          width={900}
          height={1200}
          className="aspect-[3/4] w-40 flex-none border border-line object-cover sm:w-48"
          priority
        />
        <div>
          <h1 className="font-display mb-1.5 text-3xl font-medium text-ink">{AUTHOR_EN.name}</h1>
          <p className="mb-4 text-stone">{AUTHOR_EN.role}</p>
          <IshrsBadge locale="en" width={130} />
        </div>
      </div>

      <H2 id="who-is">Who is Dr. Vitor Frauches?</H2>
      <P>
        Vitor Frauches is a physician specializing in hair transplantation and
        trichology, based in Vitória, Espírito Santo, Brazil. He is one of the
        founders of Instituto Frauches, a hair restoration clinic created with
        his brother, Dr. Bruno Frauches. Before dedicating himself to
        trichology he also worked in diagnostic imaging, which brings a
        technical rigor focused on detailed analysis of each case to his
        current work.
      </P>
      <P>
        His focus is FUE (Follicular Unit Extraction) hair transplantation
        with the Frauches Precision FUE® Protocol, a method of planning,
        surgery and follow-up developed with Dr. Bruno Frauches. The work
        combines surgical technique, individualized aesthetic planning and
        preservation of the donor area, with a natural-looking result as the
        goal.
      </P>

      <H2 id="training">Training and credentials</H2>
      <UL>
        <LI>
          <Strong>CRM-ES 10.229</Strong> (Brazilian medical license).
        </LI>
        <LI>Medical degree from UFES (Federal University of Espírito Santo).</LI>
        <LI>Pharmacy degree from EMESCAM.</LI>
        <LI>Master&apos;s degree in Cardiovascular Sciences from UFF (Fluminense Federal University).</LI>
        <LI>Postgraduate training in Diagnostic Imaging.</LI>
        <LI>Postgraduate training in Medical Trichology from FAPECS.</LI>
        <LI>
          <Strong>Professor of the Postgraduate Program in Hair Transplantation
          and Trichology at BWS.</Strong>
        </LI>
      </UL>

      <H2 id="fellowships">Fellowships in hair restoration</H2>
      <UL>
        <LI>With Dr. Daniel Dourado, in Belo Horizonte, Brazil.</LI>
        <LI>At Natural Hair Clinic, in Turkey.</LI>
        <LI>With Dr. Paulo Miorali, in Marília, São Paulo, Brazil.</LI>
      </UL>

      <H2 id="memberships">Memberships and scientific activity</H2>
      <P>
        Member of the ISHRS (International Society of Hair Restoration
        Surgery), the WFI (World FUE Institute) and the SBRCC (Brazilian
        Society of Hair Restoration and Surgery). He takes part in
        international meetings in the field, including those of the ISHRS,
        the WFI and LAHRC.
      </P>

      <H2 id="clinic">Instituto Frauches</H2>
      <P>
        Instituto Frauches is located at Av. Rio Branco, 507, sala 1, Santa
        Lúcia, Vitória, Espírito Santo, Brazil. The clinic has its own
        surgical center and anesthesiology team, and welcomes patients from
        other regions of Brazil and from abroad, with an online
        pre-assessment available. International patients have an
        English-speaking team and concierge support. See{" "}
        <Link href="/en" className="underline">
          how the trip is organized
        </Link>
        .
      </P>

      <H2 id="about-this-site">About this content</H2>
      <P>
        These guides are educational content about hair transplantation,
        written and reviewed by Dr. Vitor Frauches. They are meant to help
        patients arrive better informed at a consultation, not to replace an
        individual medical evaluation. All content follows the medical
        advertising rules of Brazil&apos;s Federal Council of Medicine (CFM
        Resolution 2,336/2023): no promised results, and a note on individual
        variation wherever relevant.
      </P>

      <H2 id="contact">Contact</H2>
      <P>
        To book an evaluation or ask questions,{" "}
        <a href={WHATSAPP_URL_EN} className="underline" target="_blank" rel="noopener noreferrer">
          <Strong>message us on WhatsApp</Strong>
        </a>
        . You can also follow Dr. Vitor on{" "}
        <a href={INSTAGRAM_URL} className="underline" target="_blank" rel="noopener noreferrer">
          Instagram @drvitorfrauches
        </a>
        .
      </P>
      <P>
        <Strong>Instituto Frauches</Strong>, {ADDRESS_DISPLAY}, Brazil. Phone and
        WhatsApp:{" "}
        <a href={`tel:${PHONE_TEL}`} className="underline">
          {PHONE_DISPLAY_INTL}
        </a>
        .
      </P>
    </main>
  );
}
