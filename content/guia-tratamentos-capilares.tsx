import type { PostMeta } from "@/lib/blog/types";
import Link from "next/link";
import { P, H2, UL, LI, Strong, Callout } from "@/components/article-ui";
import { AUTHOR, WHATSAPP_URL } from "@/lib/blog/site";

export const meta: PostMeta = {
  slug: "guia-tratamentos-capilares",
  title: "Tratamentos capilares: comece por aqui",
  description:
    "Por onde começar sobre tratamentos capilares: minoxidil, finasterida, dutasterida, PRP, MMP, mesoterapia e exossomos, com evidência, indicação e limites de cada um.",
  publishedAt: "2026-07-26",
  updatedAt: "2026-08-03",
  readingTime: 2,
  category: "Guias",
  author: AUTHOR,
  coverImage: {
    src: "/blog/guia-tratamentos-capilares/cover.jpg",
    alt: "Ilustração editorial representando os diferentes tratamentos clínicos para queda de cabelo",
  },
};

export default function Article() {
  return (
    <>
      <P>{"Existe uma diferença importante entre tratamentos com décadas de evidência acumulada, como minoxidil e finasterida, e procedimentos mais recentes, como MMP e exossomos, cuja evidência ainda está se consolidando. Este guia reúne os artigos do blog sobre cada tratamento, para que a comparação seja feita com informação, não com promessa."}</P>

      <H2 id="medicamentos">{"Medicamentos com mais evidência"}</H2>
      <UL>
        <LI><Link href="/blog/minoxidil-para-queda-de-cabelo" className="underline">{"Minoxidil para queda de cabelo"}</Link>{": tópico, oral, tempo de resultado e efeitos adversos."}</LI>
        <LI><Link href="/blog/finasterida-para-calvicie" className="underline">{"Finasterida para calvície"}</Link>{": como age, resultados esperados e cuidados."}</LI>
        <LI><Link href="/blog/dutasterida-para-calvicie" className="underline">{"Dutasterida para calvície"}</Link>{": eficácia, riscos e comparação com a finasterida."}</LI>
      </UL>

      <H2 id="procedimentos-complementares">{"Procedimentos complementares"}</H2>
      <P>{"Esses procedimentos costumam ser discutidos como terapia adjuvante, não como substituto dos medicamentos acima, e a indicação depende do diagnóstico e do estágio da calvície."}</P>
      <UL>
        <LI><Link href="/blog/prp-para-queda-de-cabelo" className="underline">{"PRP para queda de cabelo"}</Link>{": o que é, evidências e quem pode fazer."}</LI>
        <LI><Link href="/blog/mmp-capilar" className="underline">{"MMP capilar"}</Link>{": indicações, resultados e riscos."}</LI>
        <LI><Link href="/blog/mesoterapia-capilar" className="underline">{"Mesoterapia capilar"}</Link>{": indicações e riscos."}</LI>
        <LI><Link href="/blog/exossomos-para-queda-de-cabelo" className="underline">{"Exossomos para queda de cabelo"}</Link>{": evidências, riscos e cuidados."}</LI>
        <LI><Link href="/blog/nutraceuticos-para-queda-de-cabelo" className="underline">{"Nutracêuticos para queda de cabelo"}</Link>{": o que são, como agem marcas como Actrisave, Bioarct, Bloome e Keranat, e o que diz a evidência científica."}</LI>
      </UL>

      <H2 id="produtos-de-venda-livre">{"Produtos de venda livre"}</H2>
      <P>{"Shampoos e tônicos vendidos sem receita costumam ser o primeiro produto que o paciente tenta, antes de procurar avaliação médica. Vale entender o que eles realmente fazem antes de contar com eles como solução principal."}</P>
      <UL>
        <LI><Link href="/blog/shampoo-faz-nascer-cabelo" className="underline">{"Shampoo faz nascer cabelo?"}</Link>{": o que o shampoo realmente faz pelo couro cabeludo, o que dizem os shampoos antiqueda e quando o problema pede mais do que um produto de banho."}</LI>
      </UL>

      <H2 id="limitacoes">{"Limitações em comum"}</H2>
      <P>{"Nenhum tratamento clínico reverte perda de folículo já definitiva: o que eles controlam é a progressão e, em alguns casos, recuperam parte da densidade de folículos ainda ativos. Quando já existe perda definitiva numa região, o tratamento clínico deixa de ser suficiente sozinho, e entra a conversa sobre transplante capilar. Para entender essa etapa, veja o "}<Link href="/blog/guia-transplante-capilar" className="underline">{"guia do transplante capilar"}</Link>{"."}</P>

      <Callout>{"Este conteúdo tem caráter educativo e não substitui uma consulta médica. A escolha de tratamento depende de diagnóstico, estágio da calvície e avaliação individual."}</Callout>

      <P>{"Se você quer entender qual combinação de tratamentos faz sentido pro seu caso, "}<a href={WHATSAPP_URL} className="underline" target="_blank" rel="noopener noreferrer"><Strong>{"agende uma avaliação pelo WhatsApp"}</Strong></a>{"."}</P>
    </>
  );
}
