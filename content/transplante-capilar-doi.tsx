import type { PostMeta } from "@/lib/blog/types";
import Link from "next/link";
import { P, H2, UL, LI, Strong, Callout } from "@/components/article-ui";
import { AUTHOR, WHATSAPP_URL } from "@/lib/blog/site";

export const meta: PostMeta = {
  slug: "transplante-capilar-doi",
  title: "Transplante capilar dói? O que esperar da cirurgia",
  description:
    "Transplante capilar dói? Entenda como funciona a anestesia, o que sentir durante e depois da cirurgia FUE e como é o controle da dor no pós-operatório.",
  publishedAt: "2026-07-24",
  readingTime: 5,
  category: "Dúvidas frequentes",
  author: AUTHOR,
  coverImage: {
    src: "/blog/transplante-capilar-doi/cover.jpg",
    alt: "Ambiente de recuperação confortável, com travesseiro e toalhas limpas, representando o conforto no pós-operatório do transplante capilar",
  },
};

export default function Article() {
  return (
    <>
      <P>
        Essa é, disparada, a pergunta que mais escuto na primeira consulta.
        Resposta direta: durante a cirurgia, não. O transplante capilar FUE é
        feito com anestesia local associada a sedação venosa, então o
        paciente fica confortável do início ao fim do procedimento. O que
        existe, sim, é algum desconforto pontual no pós-operatório, que tem
        controle simples. Explico cada etapa abaixo.
      </P>

      <H2 id="durante-a-cirurgia">Durante a cirurgia: anestesia e sedação</H2>
      <P>
        Antes de qualquer extração de folículo, a área doadora e as áreas
        receptoras recebem anestesia local. A sedação venosa entra para
        deixar o paciente relaxado durante as horas de cirurgia, que costuma
        ser longa por envolver centenas ou milhares de implantes individuais.
        Na prática, a maioria dos pacientes relata sonolência ou até
        cochila em parte do procedimento, e não dor. O uso de instrumentos
        de implantação como o IMPLANTER PEN®, que dispensa pinça, também
        ajuda a reduzir o trauma nos folículos durante a cirurgia, o que
        contribui pro conforto no pós-operatório.
      </P>

      <H2 id="logo-apos">Logo depois da cirurgia</H2>
      <P>
        Quando o efeito da anestesia local passa, é comum sentir o couro
        cabeludo mais sensível, parecido com uma queimadura de sol leve. Isso
        é esperado e costuma ser controlado com a medicação analgésica
        prescrita pela equipe médica. Também pode aparecer um inchaço
        discreto na testa nos primeiros dias, que resolve sozinho.
      </P>

      <H2 id="dias-seguintes">Nos dias seguintes</H2>
      <P>
        A sensibilidade tende a diminuir rápido. A maior parte dos pacientes
        relata desconforto leve nos primeiros dois ou três dias, controlável
        com analgésico comum, e não dor limitante. Como a técnica FUE não usa
        corte nem pontos, não existe uma incisão grande para doer ou puxar
        durante a cicatrização, diferente do que acontecia nas técnicas mais
        antigas.
      </P>
      <UL>
        <LI>
          <Strong>Área doadora:</Strong> pequenos pontos de extração, geralmente
          descritos como um leve incômodo, não dor aguda.
        </LI>
        <LI>
          <Strong>Área receptora:</Strong> sensibilidade que diminui dia após
          dia, sem necessidade de curativo grande.
        </LI>
        <LI>
          <Strong>Casca/crostas:</Strong> podem coçar durante a cicatrização.
          Coçar é desaconselhado; seguir as orientações de higienização evita
          esse incômodo.
        </LI>
      </UL>

      <P>
        Cada paciente tem um limiar de sensibilidade diferente, então a
        experiência exata varia de pessoa para pessoa. Por isso a orientação
        pós-operatória é sempre individualizada e ajustada se o paciente
        relatar mais desconforto do que o esperado.
      </P>

      <P>
        Se você já leu sobre{" "}
        <Link href="/blog/transplante-capilar-fue-o-que-e" className="underline">
          o que é o transplante capilar FUE
        </Link>{" "}
        e ainda tem dúvida sobre a experiência da cirurgia em si, essa costuma
        ser resolvida com clareza numa avaliação presencial, onde dá pra
        explicar o passo a passo específico para o seu caso.
      </P>

      <Callout>
        Este conteúdo tem caráter educativo e não substitui uma consulta
        médica. A percepção de dor e o tempo de recuperação variam conforme
        cada paciente, e só uma avaliação individual permite orientações
        precisas.
      </Callout>

      <P>
        Quer entender como seria o seu procedimento e tirar essa e outras
        dúvidas com o Dr. Vitor Frauches?{" "}
        <a href={WHATSAPP_URL} className="underline" target="_blank" rel="noopener noreferrer">
          <Strong>Agende sua avaliação pelo WhatsApp</Strong>
        </a>
        .
      </P>
    </>
  );
}
