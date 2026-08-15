import type { PostMeta } from "@/lib/blog/types";
import Link from "next/link";
import { P, H2, UL, OL, LI, Strong, Callout, Cta, Figure } from "@/components/article-ui";
import { AUTHOR, WHATSAPP_URL } from "@/lib/blog/site";

export const meta: PostMeta = {
  slug: "escala-de-norwood",
  title: "Escala de Norwood: o que é e como identificar seu estágio?",
  description:
    "Entenda o que é a escala de Norwood-Hamilton, como ela classifica os estágios da calvície masculina e por que ela orienta diagnóstico e planejamento capilar.",
  publishedAt: "2026-08-14",
  updatedAt: "2026-08-14",
  readingTime: 9,
  category: "Calvície e tricologia",
  author: AUTHOR,
  coverImage: {
    src: "/blog/escala-de-norwood/cover.png",
    alt: "Ilustração clínica de estágios progressivos de calvície ao lado de uma lupa sobre uma mesa de consultório, representando a escala de Norwood",
  },
};

export default function Article() {
  return (
    <>
      <P>{"A "}<Strong>{"escala de Norwood"}</Strong>{" (também chamada de escala de Norwood-Hamilton) é o sistema mais usado no mundo para classificar o padrão e o grau de avanço da calvície masculina. Ela divide a perda capilar em estágios numerados, do mais discreto ao mais avançado, e serve como referência tanto para o próprio paciente entender onde está quanto para o médico planejar tratamento clínico ou cirurgia. Neste artigo explico como a escala funciona, o que cada estágio representa e por que ela sozinha não decide o tratamento."}</P>
      <Cta href={WHATSAPP_URL}>{"Quer saber em que estágio da escala de Norwood você está e o que isso significa pro seu caso? Uma avaliação com tricoscopia mostra o grau real, não só o que aparece no espelho."}</Cta>

      <H2 id="o-que-e-a-escala-de-norwood">{"O que é a escala de Norwood?"}</H2>
      <P>{"É um sistema de classificação visual criado nos anos 1950 pelo Dr. James Hamilton e revisado em 1975 pelo Dr. O'Tar Norwood, hoje o mais usado por médicos do mundo todo pra descrever o padrão de calvície masculina. Ela organiza a evolução da perda capilar em estágios, geralmente numerados de I a VII, cada um representando uma combinação diferente de recuo da linha frontal e afinamento na coroa (o topo posterior da cabeça)."}</P>
      <P>{"A escala existe porque a alopecia androgenética, a "}<Link href="/blog/alopecia-androgenetica" className="underline">{"calvície de causa genética e hormonal"}</Link>{", não avança de forma aleatória. Ela segue padrões reconhecíveis de onde a queda começa e como se espalha, e foi justamente esse padrão que Hamilton e Norwood documentaram e organizaram em categorias comparáveis."}</P>

      <H2 id="como-funciona-a-classificacao">{"Como funciona a classificação por estágios?"}</H2>
      <P>{"Cada estágio da escala corresponde a uma fotografia de referência que descreve a posição da linha frontal e o grau de rarefação na coroa. Na consulta, o médico compara o padrão do paciente com essas referências pra situar o caso num estágio aproximado. Não é uma medição exata em milímetros, é uma classificação visual comparativa, então dois pacientes no mesmo estágio podem ter pequenas diferenças entre si."}</P>
      <P>{"Além dos sete estágios principais, a escala tem uma variante chamada "}<Strong>{"tipo A"}</Strong>{", usada quando o recuo da linha frontal avança de forma mais uniforme, sem a ilha de cabelo central que aparece no padrão clássico. Essa distinção importa porque muda a estratégia de planejamento cirúrgico, um padrão tipo A costuma pedir uma abordagem diferente de desenho de linha frontal."}</P>

      <H2 id="quais-sao-os-estagios">{"Quais são os estágios da escala de Norwood?"}</H2>
      <P>{"Os sete estágios clássicos, do mais inicial ao mais avançado, são:"}</P>
      <OL>
        <LI><Strong>{"Estágio I:"}</Strong>{" nenhum recuo perceptível da linha frontal, ou uma perda tão discreta que não chega a configurar calvície. É o padrão de referência, sem sinais clínicos relevantes."}</LI>
        <LI><Strong>{"Estágio II:"}</Strong>{" leve recuo simétrico nas têmporas, formando o que costuma ser chamado de entradas. Ainda dentro da variação considerada normal em boa parte dos homens adultos, mas pode ser o primeiro sinal de um padrão que vai evoluir."}</LI>
        <LI><Strong>{"Estágio III:"}</Strong>{" o primeiro estágio considerado calvície clinicamente significativa. O recuo nas têmporas fica mais profundo e definido, formando reentrâncias em "}<Strong>{"M"}</Strong>{" ou em "}<Strong>{"U"}</Strong>{" na linha frontal."}</LI>
        <LI><Strong>{"Estágio III vertex:"}</Strong>{" variante do estágio III em que o recuo frontal é discreto, mas já existe afinamento perceptível isolado na coroa, sem conexão com a linha frontal ainda."}</LI>
        <LI><Strong>{"Estágio IV:"}</Strong>{" recuo frontal mais acentuado e afinamento de coroa mais evidente, mas as duas áreas ainda são separadas por uma faixa de cabelo com densidade preservada."}</LI>
        <LI><Strong>{"Estágio V:"}</Strong>{" a faixa que separava a linha frontal da coroa fica mais estreita e rala, embora as duas áreas de calvície ainda não estejam totalmente conectadas."}</LI>
        <LI><Strong>{"Estágio VI:"}</Strong>{" a faixa central desaparece e a área frontal se conecta à coroa, formando uma única região extensa de calvície no topo da cabeça."}</LI>
        <LI><Strong>{"Estágio VII:"}</Strong>{" o estágio mais avançado. Resta apenas uma faixa estreita de cabelo nas laterais e na parte posterior da cabeça, a mesma região que costuma servir como área doadora em cirurgia."}</LI>
      </OL>
      <Figure
        src="/blog/escala-de-norwood/estagios.jpg"
        alt="Diagrama da escala de Norwood-Hamilton mostrando, em vista lateral e superior, os estágios I a VII e as variantes IIA a VA de recuo da linha frontal e afinamento da coroa"
        width={1080}
        height={1029}
        caption="Estágios clássicos (I a VII) e variantes tipo A (IIA a VA) da escala de Norwood-Hamilton, mostrados em vista lateral e superior."
      />
      <P>{"Vale reforçar que a maioria dos homens com calvície genética nunca chega ao estágio VII. Como já expliquei no artigo sobre "}<Link href="/blog/calvicie-piora-com-a-idade" className="underline">{"se a calvície piora com a idade"}</Link>{", o processo costuma estabilizar num estágio intermediário na maior parte dos casos, não no mais avançado da escala."}</P>

      <H2 id="para-que-serve-na-pratica">{"Para que a escala de Norwood serve na prática clínica?"}</H2>
      <P>{"Na consulta, a escala funciona como uma linguagem comum entre médico e paciente, e também entre médicos, pra descrever rapidamente um padrão de calvície sem depender só de fotos individuais. Três usos práticos se destacam:"}</P>
      <UL>
        <LI><Strong>{"Comunicação objetiva do estágio atual:"}</Strong>{" em vez de descrever a calvície de forma vaga, o estágio dá um ponto de referência comparável, útil também para acompanhar a evolução ao longo dos anos."}</LI>
        <LI><Strong>{"Estimativa da quantidade de folículos necessária:"}</Strong>{" estágios mais avançados, com área de calvície maior, tendem a exigir mais unidades foliculares num eventual transplante. É só uma referência inicial, a contagem real sempre depende da avaliação da densidade da área doadora e do planejamento individual."}</LI>
        <LI><Strong>{"Previsão de necessidade de mais de uma sessão cirúrgica:"}</Strong>{" em estágios muito avançados (VI e VII), a área a cobrir pode ser grande demais pra uma única cirurgia entregar a densidade desejada, o que já entra na conversa sobre planejamento de longo prazo."}</LI>
      </UL>

      <H2 id="norwood-decide-tratamento">{"O estágio da escala decide sozinho o tratamento?"}</H2>
      <P>{"Não. A escala de Norwood descreve o padrão visual da calvície, mas não substitui uma avaliação médica completa. Dois pacientes no mesmo estágio podem receber recomendações bem diferentes, dependendo de fatores que a escala não capta:"}</P>
      <UL>
        <LI>{"A velocidade de progressão da calvície nos últimos anos, não só o ponto em que ela está agora."}</LI>
        <LI>{"A qualidade e a densidade real da área doadora, avaliada por tricoscopia."}</LI>
        <LI>{"A idade do paciente e se o padrão já está relativamente estável ou ainda em avanço ativo."}</LI>
        <LI>{"As expectativas estéticas individuais, principalmente sobre desenho de linha frontal e densidade desejada."}</LI>
      </UL>
      <P>{"Por isso, no Protocolo Frauches Precision FUE®, o estágio de Norwood é só um dos pontos de partida da avaliação, não a conclusão dela. Um paciente em estágio III pode já ser candidato ideal à cirurgia, enquanto outro no mesmo estágio, mas com calvície ainda em progressão ativa, pode se beneficiar mais de começar pelo "}<Link href="/blog/quem-pode-fazer-transplante-capilar" className="underline">{"tratamento clínico antes de considerar a cirurgia"}</Link>{"."}</P>

      <H2 id="escala-existe-para-mulheres">{"Existe uma escala equivalente para calvície feminina?"}</H2>
      <P>{"Existe, mas é outra: a escala de Ludwig, criada especificamente pra descrever o padrão mais comum de calvície em mulheres, que costuma ser difuso na região central do couro cabeludo em vez de seguir o recuo frontal e de coroa típico dos homens. A escala de Norwood é usada quase exclusivamente para padrões masculinos, embora alguns casos femininos com padrão mais próximo do masculino também possam ser descritos por ela em contextos clínicos específicos."}</P>

      <H2 id="entradas-x-estagio-inicial">{"Toda entrada nas têmporas já é um estágio da escala?"}</H2>
      <P>{"Nem sempre. Um recuo leve e simétrico nas têmporas (o que corresponderia ao estágio II) é comum em boa parte dos homens adultos e pode representar apenas o amadurecimento natural da linha frontal, sem configurar calvície de fato. Já detalhei essa diferença no artigo sobre "}<Link href="/blog/entradas-aumentando" className="underline">{"entradas aumentando"}</Link>{", que ajuda a distinguir entre linha frontal madura e início real de alopecia androgenética. A tricoscopia é o exame que consegue diferenciar as duas situações com mais precisão do que a comparação visual sozinha."}</P>

      <H2 id="como-descobrir-meu-estagio">{"Como descobrir meu estágio de forma confiável?"}</H2>
      <P>{"Comparar o próprio cabelo com fotos da escala de Norwood na internet dá uma noção inicial, mas tem limitações reais: a iluminação, o ângulo da foto e a forma como o cabelo está penteado no momento da comparação podem levar a uma autoavaliação equivocada, para mais ou para menos. O caminho mais confiável é:"}</P>
      <OL>
        <LI><Strong>{"Tricoscopia:"}</Strong>{" exame que amplia o couro cabeludo em até 100 vezes e mostra a miniaturização dos folículos antes mesmo de ela ficar visível a olho nu, ajudando a situar o estágio real e sua velocidade de progressão."}</LI>
        <LI><Strong>{"Avaliação presencial com histórico familiar:"}</Strong>{" o padrão de calvície de pai, avós e tios ajuda a estimar a tendência de evolução do próprio caso, complementando a foto do estágio atual."}</LI>
        <LI><Strong>{"Comparação fotográfica seriada:"}</Strong>{" registrar fotos padronizadas ao longo do tempo (mesmo ângulo, mesma iluminação) permite acompanhar se o estágio está mudando, em vez de confiar numa única comparação isolada."}</LI>
      </OL>

      <Callout>{"Este conteúdo tem caráter educativo e não substitui uma consulta médica. A classificação do estágio de calvície e a indicação de tratamento clínico ou cirúrgico variam de paciente para paciente, conforme avaliação individual e presencial."}</Callout>

      <P>{"Se você quer saber com precisão em que estágio da escala de Norwood está e o que isso significa pro seu planejamento, "}<a href={WHATSAPP_URL} className="underline" target="_blank" rel="noopener noreferrer"><Strong>{"agende uma avaliação com o Dr. Vitor Frauches pelo WhatsApp"}</Strong></a>{"."}</P>
      <P>{"Este artigo faz parte do nosso "}<Link href="/blog/guia-calvicie-masculina" className="underline">{"guia sobre calvície masculina"}</Link>{"."}</P>
    </>
  );
}
