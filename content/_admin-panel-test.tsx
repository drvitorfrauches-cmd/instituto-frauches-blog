import type { PostMeta } from "@/lib/blog/types";
import Link from "next/link";
import { P, H2, UL, LI, Strong, Callout } from "@/components/article-ui";
import { AUTHOR, WHATSAPP_URL } from "@/lib/blog/site";

export const meta: PostMeta = {
  slug: "_admin-panel-test",
  title: "Artigo de teste do painel de revisão",
  description: "Artigo temporário usado só para testar o painel de edição antes de publicação.",
  publishedAt: "2026-07-26",
  readingTime: 1,
  category: "Teste",
  author: AUTHOR,
};

export default function Article() {
  return (
    <>
      <P>{"Começamos a fazer a revisao dos textos e este é um parágrafo de teste pra você experimentar o painel: tente apagar uma frase, adicionar outra, ou colocar algo em negrito."}</P>

      <H2 id="secao-teste">{"Uma seção de teste"}</H2>
      <P>{"Outro parágrafo, este com um link pro "}<Link href="/blog/guia-transplante-capilar" className="underline">{"guia do transplante capilar"}</Link>{". Edite este texto à vontade pra ver como o link se comporta depois de salvar."}</P>

      <UL>
        <LI>{"Primeiro item da lista."}</LI>
        <LI>{"Segundo item da lista."}</LI>
      </UL>

      <Callout>{"Este conteúdo é só um teste técnico e será removido do blog depois que você validar o painel.\n\nTESTE TESTE TESTE"}</Callout>

      <P><a href={WHATSAPP_URL} className="underline" target="_blank" rel="noopener noreferrer"><Strong>{"Agende pelo WhatsApp"}</Strong></a>{"."}</P>
    </>
  );
}
