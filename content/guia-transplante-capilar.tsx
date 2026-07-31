import type { PostMeta } from "@/lib/blog/types";
import Link from "next/link";
import { P, H2, UL, LI, Strong, Callout } from "@/components/article-ui";
import { AUTHOR, WHATSAPP_URL } from "@/lib/blog/site";

export const meta: PostMeta = {
  slug: "guia-transplante-capilar",
  title: "Transplante capilar: comece por aqui",
  description:
    "Por onde começar sobre transplante capilar: técnica FUE, área doadora, preço, dor, recuperação, resultado e como escolher uma clínica, tudo em um só lugar.",
  publishedAt: "2026-07-26",
  updatedAt: "2026-07-31",
  readingTime: 2,
  category: "Guias",
  author: AUTHOR,
  coverImage: {
    src: "/blog/guia-transplante-capilar/cover.jpg",
    alt: "Ilustração editorial representando o planejamento cirúrgico do transplante capilar",
  },
};

export default function Article() {
  return (
    <>
      <P>{"Transplante capilar envolve decisões em sequência: entender a técnica, avaliar a área doadora, planejar a linha frontal, entender o que esperar de dor e recuperação, e só depois chegar ao resultado final. Este guia organiza os artigos do blog na ordem em que essas dúvidas costumam aparecer."}</P>

      <H2 id="a-tecnica">{"A técnica"}</H2>
      <UL>
        <LI><Link href="/blog/transplante-capilar-fue-o-que-e" className="underline">{"O que é transplante capilar FUE"}</Link>{": guia completo sobre a técnica, do início ao fim."}</LI>
        <LI><Link href="/blog/tecnica-fue-transplante-capilar" className="underline">{"Como funciona a técnica FUE"}</Link>{": extração, punch, cicatrizes e diferenças para a FUT."}</LI>
        <LI><Link href="/blog/fue-ou-fut" className="underline">{"FUE ou FUT"}</Link>{": qual a diferença e por que a FUE é hoje a mais usada."}</LI>
        <LI><Link href="/blog/tecnologias-transplante-capilar" className="underline">{"Tecnologias no transplante capilar"}</Link>{": o que cada equipamento realmente muda no resultado."}</LI>
        <LI><Link href="/blog/graftis-contagem-ao-vivo-transplante-capilar" className="underline">{"Graftis: controle de qualidade no transplante capilar"}</Link>{": o sistema próprio do Instituto Frauches para contagem folicular ao vivo."}</LI>
        <LI><Link href="/blog/microscopio-no-transplante-capilar" className="underline">{"Microscópio no transplante capilar"}</Link>{": por que a triagem sob aumento reduz a transecção e ajuda na sobrevivência do enxerto."}</LI>
      </UL>

      <H2 id="planejamento-e-area-doadora">{"Planejamento e área doadora"}</H2>
      <UL>
        <LI><Link href="/blog/area-doadora-transplante-capilar" className="underline">{"Área doadora: o patrimônio do transplante capilar"}</Link>{": por que ela é limitada e como se preserva."}</LI>
        <LI><Link href="/blog/hairline-natural-transplante-capilar" className="underline">{"Hairline natural"}</Link>{": como é desenhada a linha frontal."}</LI>
        <LI><Link href="/blog/como-identificar-transplante-capilar-natural" className="underline">{"Como identificar um transplante capilar natural"}</Link>{": os sinais de um bom planejamento."}</LI>
      </UL>

      <H2 id="decisao-e-orcamento">{"Decisão e orçamento"}</H2>
      <UL>
        <LI><Link href="/blog/quanto-custa-transplante-capilar" className="underline">{"Quanto custa um transplante capilar"}</Link>{": o que define o preço, e por que desconfiar de valores muito baixos."}</LI>
        <LI><Link href="/blog/como-escolher-clinica-transplante-capilar" className="underline">{"Como escolher uma clínica de transplante capilar"}</Link>{": os critérios que realmente importam."}</LI>
        <LI><Link href="/blog/transplante-capilar-espirito-santo-como-escolher-clinica" className="underline">{"Transplante capilar no ES: como escolher a clínica certa"}</Link>{": o mesmo checklist aplicado a quem pesquisa no Espírito Santo."}</LI>
        <LI><Link href="/blog/o-que-perguntar-consulta-transplante-capilar" className="underline">{"O que perguntar antes do transplante capilar"}</Link>{": o checklist pra levar na consulta."}</LI>
        <LI><Link href="/blog/exames-antes-do-transplante-capilar" className="underline">{"Exames antes do transplante capilar"}</Link>{": o que costuma ser pedido na avaliação pré-operatória."}</LI>
      </UL>

      <H2 id="cirurgia-dor-e-recuperacao">{"Cirurgia, dor e recuperação"}</H2>
      <UL>
        <LI><Link href="/blog/transplante-capilar-doi" className="underline">{"Transplante capilar dói?"}</Link>{": anestesia, sedação e o que esperar durante a cirurgia."}</LI>
        <LI><Link href="/blog/sedacao-transplante-capilar" className="underline">{"Sedação no transplante capilar"}</Link>{": como funciona e a segurança do procedimento."}</LI>
        <LI><Link href="/blog/recuperacao-transplante-capilar" className="underline">{"Recuperação do transplante capilar"}</Link>{": cuidados e cronograma dos primeiros dias."}</LI>
      </UL>

      <H2 id="resultado">{"Resultado"}</H2>
      <UL>
        <LI><Link href="/blog/resultado-transplante-capilar-linha-do-tempo" className="underline">{"Quanto tempo demora o resultado"}</Link>{": a linha do tempo mês a mês, da queda inicial ao resultado final."}</LI>
        <LI><Link href="/blog/antes-e-depois-transplante-capilar" className="underline">{"Antes e depois do transplante capilar"}</Link>{": como analisar fotos de resultado com critério."}</LI>
        <LI><Link href="/blog/sinais-transplante-capilar-mal-feito" className="underline">{"Sinais de transplante capilar mal feito"}</Link>{": o que observar, e quando vale buscar uma correção."}</LI>
        <LI><Link href="/blog/transplante-capilar-e-definitivo" className="underline">{"Transplante capilar dura para sempre?"}</Link>{": a durabilidade dos fios e o papel do tratamento clínico complementar."}</LI>
      </UL>

      <H2 id="perguntas-frequentes">{"Perguntas frequentes"}</H2>
      <P>{"Reunimos as dúvidas mais comuns sobre transplante capilar, com respostas diretas, em um só lugar: "}<Link href="/blog/faq-transplante-capilar" className="underline">{"FAQ completo sobre transplante capilar"}</Link>{"."}</P>

      <Callout>{"Este conteúdo tem caráter educativo e não substitui uma consulta médica. O planejamento cirúrgico depende de avaliação individual da área doadora e do padrão de calvície."}</Callout>

      <P>{"Se você já entendeu o processo e quer saber como ele se aplica ao seu caso, o próximo passo é uma avaliação com o Dr. Vitor Frauches. "}<a href={WHATSAPP_URL} className="underline" target="_blank" rel="noopener noreferrer"><Strong>{"Agende pelo WhatsApp"}</Strong></a>{"."}</P>
    </>
  );
}
