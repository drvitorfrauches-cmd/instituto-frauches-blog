import type { PostMeta } from "@/lib/blog/types";
import Link from "next/link";
import { P, H2, H3, UL, OL, LI, Strong, Quote, Callout, Cta } from "@/components/article-ui";
import { AUTHOR, WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/blog/site";

export const meta: PostMeta = {
  title: "Continuar finasterida ou dutasterida após transplante capilar?",
  description:
    "Descubra por que manter medicamentos como finasterida e dutasterida é essencial após o transplante capilar para preservar o cabelo nativo.",
  slug: "finasterida-dutasterida-apos-transplante",
  publishedAt: "2026-10-26",
  updatedAt: "2026-10-26",
  readingTime: 6,
  category: "Transplante capilar",
  author: AUTHOR,
  coverImage: {
    src: "/blog/finasterida-dutasterida-apos-transplante/cover.jpg",
    alt: "Dois frascos de vidro âmbar com tampas brancas, comprimidos brancos, um porta-comprimidos e um calendário de mesa sobre uma mesa bege, representando o uso contínuo de medicação após o transplante capilar",
  },
};

export default function Post() {
  return (
    <>
      <P>{"O transplante capilar resolve uma parte do problema da calvície: ele coloca cabelo onde havia calvície. Mas a calvície não para. Se você não continuar tratando o cabelo nativo com medicamentos como finasterida ou dutasterida, aqueles fios que não foram transplantados continuam caindo. Neste artigo, você entende por que manter o tratamento médico após a cirurgia é tão importante quanto o transplante em si."}</P>

      <Cta href={WHATSAPP_URL}>
        Tem dúvidas se seu caso precisa continuar com finasterida após a
        cirurgia? Agende uma avaliação.
      </Cta>

      <H2 id="por-que-cabelo-nativo-continua-caindo">{"Por que o cabelo nativo continua caindo após o transplante?"}</H2>

      <P>{"O transplante coloca folículos genéticamente resistentes na área receptora. Mas o fio transplantado não muda o padrão genético que afeta o resto da sua cabeça. Se você tem predisposição genética para calvície (alopecia androgenética), aqueles fios nativos que ficaram na sua cabeça continuam miniaturizando, porque a causa da queda continua atuando."}</P>

      <P>{"Finasterida e dutasterida atacam exatamente essa causa: eles reduzem a conversão de testosterona em DHT (dihidrotestosterona), o hormônio que miniaturiza o folículo em pessoas predispostas. Sem esses medicamentos, o padrão de queda continua nos fios nativos, mesmo após o transplante."}</P>

      <H2 id="transplante-sufocado-fios-caindo">{"O transplante pode ser \"sufocado\" pelos fios caindo ao redor?"}</H2>

      <P>{"Sim, em certa medida. Seu transplante fica bonito quando rodeado por densidade adequada. Se a calvície continua progredindo nos fios nativos, em alguns meses ou anos você pode se ver com um resultado bonito onde foi transplantado, mas cercado por calvície ativa que progride. O efeito visual fica desequilibrado. O gráfico de resultados planejado no seu pré-operatório contava com uma certa densidade de cabelo nativo preservada. Sem medicação, essa suposição cai por terra."}</P>

      <H2 id="qual-medicamento-escolher">{"Qual medicamento escolher: finasterida ou dutasterida após o transplante?"}</H2>

      <P>{"Ambos funcionam. A diferença está no potencial de eficácia e no tempo de ação."}</P>

      <H3>{"Finasterida (Propecia, Proscar)"}</H3>

      <UL>
        <LI><Strong>{"Dose:"}</Strong>{" 1 mg ao dia para calvície (a dose de 5 mg é para próstata)."}</LI>
        <LI><Strong>{"Mecanismo:"}</Strong>{" inibe apenas a enzima 5-alfa redutase tipo 2, responsável por converter testosterona em DHT na pele do couro cabeludo."}</LI>
        <LI><Strong>{"Eficácia:"}</Strong>{" segundo pesquisa do PubMed com 46 homens acompanhados por 24 semanas, finasterida melhora a densidade capilar com boa resposta terapêutica. Também está aprovada pela FDA há mais de 20 anos, com vasto histórico de segurança."}</LI>
        <LI><Strong>{"Tempo:"}</Strong>{" resultados começam entre 3 e 6 meses, com efeito máximo em torno de 12 meses."}</LI>
      </UL>

      <H3>{"Dutasterida (Avodart)"}</H3>

      <UL>
        <LI><Strong>{"Dose:"}</Strong>{" 0,5 mg ao dia para calvície (também existe dose de 2,5 mg em alguns países, mas começar com 0,5 mg é padrão)."}</LI>
        <LI><Strong>{"Mecanismo:"}</Strong>{" inibe tanto a enzima 5-alfa redutase tipo 1 quanto tipo 2, bloqueando a formação de DHT em mais de uma via."}</LI>
        <LI><Strong>{"Eficácia:"}</Strong>{" uma revisão sistemática publicada no PubMed analisou 9 estudos e concluiu que dutasterida é mais potente que finasterida. Em um estudo randomizado com 46 homens, dutasterida e finasterida melhoraram a densidade com resultados semelhantes em 24 semanas, mas a redução do PSA foi mais forte com dutasterida, sugerindo bloqueio mais completo do DHT."}</LI>
        <LI><Strong>{"Tempo:"}</Strong>{" também leva entre 3 e 6 meses para começar a agir, mas por ser mais potente, pode alcançar efeito máximo um pouco antes que finasterida."}</LI>
      </UL>

      <H2 id="qual-escolher-apos-transplante">{"Qual escolher para após o transplante?"}</H2>

      <P>{"A escolha depende de discussão com o seu médico, considerando:"}</P>

      <OL>
        <LI><Strong>{"Histórico de tolerância:"}</Strong>{" se você já toma finasterida antes do transplante e está bem, continuar com ela é seguro e comprovado. Não é necessário trocar."}</LI>
        <LI><Strong>{"Potência desejada:"}</Strong>{" se você tem calvície agressiva ( "}<Link href="/blog/escala-de-norwood" className="underline">{"graus avançados na escala de Norwood"}</Link>{" ) ou calvície difusa, dutasterida pode ser mais adequada por ser mais potente."}</LI>
        <LI><Strong>{"Tolerância a efeitos adversos:"}</Strong>{" ambos têm perfis de segurança semelhantes. Os efeitos colaterais mais comuns são disfunção erétil e redução da libido (em até 1-2% dos pacientes), e afetam finasterida e dutasterida de forma similar, segundo o PubMed."}</LI>
        <LI><Strong>{"Custo:"}</Strong>{" finasterida genérica é mais barata. Dutasterida (genérica) é um pouco mais cara, mas a diferença é pequena."}</LI>
      </OL>

      <H2 id="parar-medicamento-apos-transplante">{"E se eu parar o medicamento após o transplante?"}</H2>

      <P>{"Aqui está o ponto crítico: "}<Strong>{"parar finasterida ou dutasterida"}</Strong>{" após o transplante significa voltar ao padrão de queda original. O que foi preservado de cabelo nativo volta a cair, porque a causa (o DHT) volta a agir. O transplante continua lá (fios transplantados são resistentes ao DHT), mas o resultado fica cada vez mais desigual conforme o cabelo nativo desaparece."}</P>

      <P>{"Não é reversível de imediato. Se você parar hoje, em alguns meses a queda volta. Se você reintroduz o medicamento depois, a queda para e o fio estabiliza, mas o cabelo que caiu durante o período sem medicação não volta por si só."}</P>

      <H2 id="quanto-tempo-tomar-medicamento">{"Quanto tempo preciso tomar finasterida ou dutasterida após o transplante?"}</H2>

      <P>{"A resposta é: enquanto você quiser manter a densidade de cabelo nativo que você tem hoje. Para a maioria dos pacientes, isso significa:"}</P>

      <UL>
        <LI><Strong>{"Indefinidamente,"}</Strong>{" se você quer preservar o máximo de cabelo nativo possível."}</LI>
        <LI><Strong>{"Até estabilizar a calvície,"}</Strong>{" se você aceita um certo grau de miniaturização e quer apenas parar a progressão."}</LI>
        <LI><Strong>{"Não é obrigatório tomar para sempre,"}</Strong>{" mas qualquer pausa resulta em retomada da queda. Isso é uma escolha pessoal, não médica."}</LI>
      </UL>

      <P>{"O transplante é uma cirurgia. Os medicamentos são uma manutenção. Uma não substitui a outra; elas trabalham juntas."}</P>

      <H2 id="risco-interacao-transplante-medicamentos">{"Há risco de interação entre o transplante e os medicamentos?"}</H2>

      <P>{"Não. Finasterida e dutasterida são seguros para usar antes, durante e após o transplante. Nenhum deles afeta a cicatrização, a fixação do enxerto ou a recuperação pós-operatória. Você pode estar tomando finasterida quando chega o dia da cirurgia sem qualquer problema."}</P>

      <P>{"O que muda é apenas o contexto: após o transplante, você não está mais tratando só para parar a queda. Você está tratando para manter o resultado do investimento que fez na cirurgia."}</P>

      <H2 id="o-que-fazer-efeitos-colaterais">{"O que fazer se tiver efeitos colaterais?"}</H2>

      <P>{"Se você desenvolve disfunção erétil ou redução da libido com finasterida ou dutasterida:"}</P>

      <OL>
        <LI><Strong>{"Não para abruptamente."}</Strong>{" Avise seu médico primeiro."}</LI>
        <LI><Strong>{"Avalie se é o medicamento."}</Strong>{" Efeitos colaterais sexuais podem ter outras causas. Seu médico pode ajudar a diferenciar."}</LI>
        <LI><Strong>{"Considere trocar para a outra opção."}</Strong>{" Se você não tolera finasterida, dutasterida às vezes é melhor tolerada (e vice-versa), porque bloqueiam o DHT por vias ligeiramente diferentes."}</LI>
        <LI><Strong>{"Se nenhuma das duas funcionar para você,"}</Strong>{" converse com seu médico sobre alternativas como minoxidil tópico (que não tem efeitos hormonais) ou tratamentos combinados."}</LI>
      </OL>

      <Callout><Strong>{"Aviso médico:"}</Strong>{" este conteúdo é informativo e não substitui a consulta com seu médico. Finasterida e dutasterida são medicamentos que exigem prescrição e acompanhamento médico. As decisões sobre iniciar, continuar ou parar esses medicamentos devem ser individualizadas conforme a sua avaliação clínica. A resposta a cada medicação varia de pessoa para pessoa. Sempre converse com seu médico ou dermatologista antes de fazer mudanças."}</Callout>

      <Cta href={WHATSAPP_URL}>
        Não sabe se seu caso requer continuar com finasterida ou dutasterida
        após o transplante? Agende uma avaliação com o Dr. Vitor Frauches.
      </Cta>

      <H2 id="referencias">{"Referências"}</H2>

      <UL>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/42466626/" className="underline" target="_blank" rel="noopener noreferrer">{"Poostiyan N et al. Efficacy and safety of oral finasteride/dutasteride in moderate-to-severe androgenetic alopecia. Journal of dermatological treatment, 2026."}</a>{" "}<a href="https://doi.org/10.1080/09546634.2025.2583849" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/39749123/" className="underline" target="_blank" rel="noopener noreferrer">{"Almudimeegh A et al. Comparison between dutasteride and finasteride in hair regrowth and reversal of miniaturization. Dermatology reports, 2024."}</a>{" "}<a href="https://doi.org/10.4081/dr.2024.9909" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/38725143/" className="underline" target="_blank" rel="noopener noreferrer">{"Gupta AK et al. The impact of monotherapies for male androgenetic alopecia: a network meta-analysis study. Journal of cosmetic dermatology, 2024."}</a>{" "}<a href="https://doi.org/10.1111/jocd.16362" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/42546161/" className="underline" target="_blank" rel="noopener noreferrer">{"Gallo G et al. Long-term effectiveness and safety of topical finasteride 0.25% monotherapy in male androgenetic alopecia. Clinical and experimental dermatology, 2026."}</a>{" "}<a href="https://doi.org/10.1093/ced/llag333" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
      </UL>

      <P>{"Este artigo faz parte do nosso "}<Link href="/blog/guia-transplante-capilar" className="underline">{"guia completo do transplante capilar"}</Link>{"."}</P>
    </>
  );
}
