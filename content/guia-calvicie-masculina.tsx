import type { PostMeta } from "@/lib/blog/types";
import Link from "next/link";
import { P, H2, UL, LI, Strong, Callout } from "@/components/article-ui";
import { AUTHOR, WHATSAPP_URL } from "@/lib/blog/site";

export const meta: PostMeta = {
  slug: "guia-calvicie-masculina",
  title: "Calvície masculina: comece por aqui",
  description:
    "Por onde começar sobre calvície masculina: primeiros sinais, diagnóstico, tratamento clínico e quando considerar a cirurgia, com links pra cada tema em detalhe.",
  publishedAt: "2026-07-26",
  updatedAt: "2026-08-13",
  readingTime: 2,
  category: "Guias",
  author: AUTHOR,
  coverImage: {
    src: "/blog/guia-calvicie-masculina/cover.jpg",
    alt: "Ilustração editorial representando o acompanhamento e diagnóstico da calvície masculina",
  },
};

export default function Article() {
  return (
    <>
      <P>{"Calvície masculina não é um evento único, é um processo que passa por fases: primeiro os sinais discretos, depois a confirmação do diagnóstico, depois a decisão sobre tratar clinicamente, cirurgicamente, ou as duas coisas. Este guia reúne, na ordem que faz sentido pra quem está descobrindo o assunto agora, os artigos do blog que cobrem cada uma dessas etapas."}</P>

      <H2 id="primeiros-sinais-e-diagnostico">{"Primeiros sinais e diagnóstico"}</H2>
      <P>{"Antes de qualquer tratamento, vem a pergunta mais básica: isso que estou vendo é calvície mesmo, ou outra coisa? Esses quatro artigos ajudam a reconhecer o padrão e diferenciar calvície de queda temporária ou quebra de fio."}</P>
      <UL>
        <LI><Link href="/blog/alopecia-androgenetica" className="underline">{"O que é alopecia androgenética"}</Link>{": a causa hormonal e genética por trás da calvície, e como ela evolui em fases."}</LI>
        <LI><Link href="/blog/meu-cabelo-esta-afinando" className="underline">{"Meu cabelo está afinando"}</Link>{": causas, sinais e quando isso já justifica investigar."}</LI>
        <LI><Link href="/blog/entradas-aumentando" className="underline">{"Entradas aumentando"}</Link>{": como diferenciar calvície de linha frontal naturalmente madura."}</LI>
        <LI><Link href="/blog/queda-de-cabelo-e-normal" className="underline">{"Queda de cabelo é normal?"}</Link>{": o ciclo capilar e os sinais de alerta que fogem do esperado."}</LI>
        <LI><Link href="/blog/como-saber-se-estou-ficando-careca" className="underline">{"Como saber se estou ficando careca"}</Link>{": os primeiros sinais e o papel da tricoscopia no diagnóstico."}</LI>
        <LI><Link href="/blog/bone-causa-calvicie-masculina" className="underline">{"Boné causa calvície masculina?"}</Link>{": o que realmente causa a queda, o mito por trás do boné e como diferenciar causa genética de causa mecânica."}</LI>
        <LI><Link href="/blog/exames-para-queda-de-cabelo" className="underline">{"Exames para queda de cabelo"}</Link>{": quando investigar, o que a tricoscopia mostra e quando pedir exames de sangue ou biópsia."}</LI>
        <LI><Link href="/blog/calvicie-genetica-pode-ser-evitada" className="underline">{"Calvície genética pode ser evitada?"}</Link>{": o que realmente determina a calvície herdada, o que influencia sua velocidade e por que agir cedo faz diferença."}</LI>
        <LI><Link href="/blog/calvicie-piora-com-a-idade" className="underline">{"A calvície piora com a idade?"}</Link>{": como o avanço costuma se comportar década a década e a diferença entre calvície genética e o envelhecimento capilar comum."}</LI>
      </UL>

      <H2 id="tratamento-clinico">{"Tratamento clínico"}</H2>
      <P>{"Em muitos casos, principalmente quando pego cedo, o primeiro passo não é a cirurgia. É entender se existe controle eficaz da progressão com medicação."}</P>
      <UL>
        <LI><Link href="/blog/calvicie-tem-cura" className="underline">{"Calvície tem cura?"}</Link>{": a diferença entre cura e controle, e o que a ciência diz hoje."}</LI>
        <LI>{"Para as opções de medicação em detalhe (finasterida, dutasterida, minoxidil e outras), veja o "}<Link href="/blog/guia-tratamentos-capilares" className="underline">{"guia de tratamentos capilares"}</Link>{"."}</LI>
      </UL>

      <H2 id="quando-considerar-cirurgia">{"Quando considerar a cirurgia"}</H2>
      <P>{"Quando o tratamento clínico sozinho não é suficiente, ou quando já existe perda definitiva de folículos numa região, entra a conversa sobre transplante capilar."}</P>
      <UL>
        <LI><Link href="/blog/quem-pode-fazer-transplante-capilar" className="underline">{"Quem é candidato ao transplante capilar"}</Link>{": idade, grau da calvície e área doadora que entram nessa decisão."}</LI>
        <LI>{"Para entender a cirurgia em si, do preço ao pós-operatório, veja o "}<Link href="/blog/guia-transplante-capilar" className="underline">{"guia do transplante capilar"}</Link>{"."}</LI>
      </UL>

      <Callout>{"Este conteúdo tem caráter educativo e não substitui uma consulta médica. O diagnóstico e a indicação de tratamento dependem de avaliação individual."}</Callout>

      <P>{"Se você já reconhece os sinais e quer entender o que fazer no seu caso específico, "}<a href={WHATSAPP_URL} className="underline" target="_blank" rel="noopener noreferrer"><Strong>{"agende uma avaliação pelo WhatsApp"}</Strong></a>{"."}</P>
    </>
  );
}
