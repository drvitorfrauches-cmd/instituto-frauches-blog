import type { Metadata } from "next";
import Image from "next/image";
import { P, H2, UL, LI, Strong } from "@/components/article-ui";
import { AUTHOR, AUTHOR_CREDENTIALS, INSTAGRAM_URL, SITE_NAME, SITE_URL, WHATSAPP_URL } from "@/lib/blog/site";

const TITLE = `Sobre o Dr. Vitor Frauches | ${SITE_NAME}`;
const DESCRIPTION =
  "Dr. Vitor Frauches, CRM-ES 10.229, médico especialista em transplante capilar e tricologia, professor da pós-graduação em Transplante Capilar e Tricologia (BWS).";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/sobre` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "profile",
    url: `${SITE_URL}/sobre`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/author/dr-vitor-frauches.jpg` }],
  },
};

export default function SobrePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR.name,
    jobTitle: AUTHOR.role,
    description: AUTHOR_CREDENTIALS.join(". "),
    url: `${SITE_URL}/sobre`,
    image: `${SITE_URL}/author/dr-vitor-frauches.jpg`,
    worksFor: {
      "@type": "MedicalOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    memberOf: [
      { "@type": "Organization", name: "International Society of Hair Restoration Surgery" },
      { "@type": "Organization", name: "World FUE Institute" },
      { "@type": "Organization", name: "Sociedade Brasileira de Restauração Capilar e Cirurgia" },
    ],
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
          alt="Dr. Vitor Frauches, médico especialista em transplante capilar e tricologia"
          width={900}
          height={1200}
          className="aspect-[3/4] w-40 flex-none rounded-lg object-cover sm:w-48"
          priority
        />
        <div>
          <h1 className="mb-1 text-3xl font-bold text-neutral-900">{AUTHOR.name}</h1>
          <p className="text-neutral-600">{AUTHOR.role}</p>
        </div>
      </div>

      <H2 id="quem-e">Quem é o Dr. Vitor Frauches</H2>
      <P>
        Vitor Frauches é médico especialista em transplante capilar e
        tricologia, com atuação em Vitória, Espírito Santo. É um dos
        fundadores do Instituto Frauches, clínica de restauração capilar
        criada junto com seu irmão, o Dr. Bruno Frauches. Antes de se dedicar
        à tricologia, atuou também na área de diagnóstico por imagem, o que
        traz ao seu trabalho atual um rigor técnico voltado à análise
        detalhada de cada caso.
      </P>
      <P>
        Seu foco é o transplante capilar pela técnica FUE (Follicular Unit
        Extraction), com o Protocolo Frauches Precision FUE®, um método
        próprio de planejamento, execução e acompanhamento desenvolvido junto
        com o Dr. Bruno Frauches. O trabalho combina técnica cirúrgica,
        planejamento estético individualizado e preservação da área doadora,
        com foco em resultado natural.
      </P>

      <H2 id="formacao">Formação e credenciais</H2>
      <UL>
        <LI>
          <Strong>CRM-ES 10.229.</Strong>
        </LI>
        <LI>Graduação em Medicina pela UFES.</LI>
        <LI>Graduação em Farmácia pela EMESCAM.</LI>
        <LI>Mestrado em Ciências Cardiovasculares pela UFF.</LI>
        <LI>Pós-graduação em Diagnóstico por Imagem.</LI>
        <LI>Pós-graduação em Tricologia Médica pela FAPECS.</LI>
        <LI>
          <Strong>Professor da Pós-graduação em Transplante Capilar e
          Tricologia da instituição BWS.</Strong>
        </LI>
      </UL>

      <H2 id="fellowships">Fellowships em restauração capilar</H2>
      <UL>
        <LI>Com o Dr. Daniel Dourado, em Belo Horizonte.</LI>
        <LI>Na Clínica Natural Hair, na Turquia.</LI>
        <LI>Com o Dr. Paulo Miorali, em Marília, São Paulo.</LI>
      </UL>

      <H2 id="associacoes">Associações e participação científica</H2>
      <P>
        Membro da ISHRS (International Society of Hair Restoration Surgery),
        da WFI (World FUE Institute) e da SBRCC (Sociedade Brasileira de
        Restauração Capilar e Cirurgia). Participa de congressos
        internacionais da área, incluindo encontros da ISHRS, do WFI e o
        LAHRC.
      </P>

      <H2 id="instituto-frauches">Instituto Frauches</H2>
      <P>
        O Instituto Frauches fica na Av. Rio Branco, 507, sala 1, Santa
        Lúcia, Vitória, Espírito Santo. A clínica conta com centro cirúrgico
        próprio e equipe de anestesistas, e atende pacientes de outras
        regiões do Brasil e do exterior, com pré-avaliação online disponível.
      </P>

      <H2 id="sobre-o-blog">Sobre este blog</H2>
      <P>
        Este blog reúne conteúdo educativo sobre transplante capilar,
        tricologia e calvície, assinado pelo Dr. Vitor Frauches. O objetivo é
        ajudar pacientes a chegar mais informados a uma consulta, sem
        substituir a avaliação médica individual. Todo o conteúdo segue as
        diretrizes de publicidade médica do Conselho Federal de Medicina
        (Resolução CFM nº 2.336/2023): sem promessa de resultado, com nota de
        variação individual sempre que relevante.
      </P>

      <H2 id="contato">Contato</H2>
      <P>
        Para agendar uma avaliação ou tirar dúvidas,{" "}
        <a href={WHATSAPP_URL} className="underline" target="_blank" rel="noopener noreferrer">
          <Strong>fale pelo WhatsApp</Strong>
        </a>
        . Você também pode acompanhar conteúdo no{" "}
        <a href={INSTAGRAM_URL} className="underline" target="_blank" rel="noopener noreferrer">
          Instagram @drvitorfrauches
        </a>
        .
      </P>
    </main>
  );
}
