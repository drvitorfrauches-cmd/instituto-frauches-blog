import type { PostMeta } from "@/lib/blog/types";
import Link from "next/link";
import { P, H2, UL, OL, LI, Strong, Callout, Cta } from "@/components/article-ui";
import { AUTHOR, WHATSAPP_URL } from "@/lib/blog/site";

export const meta: PostMeta = {
  slug: "alopecia-androgenetica",
  title: "O que é alopecia androgenética? Causas e fases",
  description:
    "Alopecia androgenética: entenda o que é, por que a DHT causa a miniaturização do folículo, como ela evolui e a diferença entre o padrão masculino e feminino.",
  publishedAt: "2026-08-05",
  updatedAt: "2026-08-05",
  readingTime: 9,
  category: "Calvície e tricologia",
  author: AUTHOR,
  coverImage: {
    src: "/blog/alopecia-androgenetica/cover.jpg",
    alt: "Ilustração científica de um folículo capilar em corte ao lado de uma lupa sobre bloco de notas clínico, representando o diagnóstico da alopecia androgenética",
  },
};

export default function Article() {
  return (
    <>
      <P>{"Quase todo mundo que procura um médico por causa de queda de cabelo ouve o mesmo termo técnico: "}<Strong>{"alopecia androgenética"}</Strong>{". É o nome médico da calvície mais comum, tanto em homens quanto em mulheres, e entender o que ela realmente é ajuda a separar fato de mito antes de decidir qualquer tratamento. Neste artigo explico o que é a alopecia androgenética, por que ela acontece, como evolui ao longo dos anos e o que diferencia o padrão masculino do feminino."}</P>
      <Cta href={WHATSAPP_URL}>{"Quer saber em que fase da alopecia androgenética você está? Uma avaliação com tricoscopia mostra o grau real de miniaturização do folículo."}</Cta>

      <H2 id="o-que-e-alopecia-androgenetica">{"O que é alopecia androgenética?"}</H2>
      <P>{"Alopecia androgenética é a perda progressiva de cabelo causada pela ação de hormônios andrógenos sobre folículos geneticamente sensíveis a eles. Ao contrário da queda temporária, que costuma se resolver sozinha, a alopecia androgenética segue um padrão previsível de avanço: começa em regiões específicas do couro cabeludo e tende a progredir aos poucos, ao longo de anos, se não for identificada e acompanhada."}</P>
      <P>{"O nome já indica os dois fatores centrais: \"andro\" se refere aos hormônios andrógenos (a testosterona e seus derivados), e \"genética\" porque só afeta quem herda a predisposição para essa sensibilidade hormonal. Ter o hormônio circulando no corpo não é suficiente para causar a calvície, é preciso também ter o folículo geneticamente programado para reagir a ele dessa forma."}</P>

      <H2 id="quais-as-causas-da-alopecia-androgenetica">{"Quais são as causas da alopecia androgenética?"}</H2>
      <P>{"A causa central é a combinação entre predisposição genética herdada e a ação da di-hidrotestosterona (DHT), um hormônio derivado da testosterona pela ação da enzima 5-alfa-redutase. Em folículos sensíveis à DHT, esse hormônio se liga a receptores na raiz do fio e desencadeia um processo de enfraquecimento progressivo."}</P>
      <P>{"A herança genética da alopecia androgenética é poligênica, ou seja, envolve vários genes, não um único gene dominante. Por isso a ideia popular de que "}<Strong>{"\"calvície vem só do lado da mãe\""}</Strong>{" não é precisa: o histórico familiar dos dois lados da família, pai e mãe, contribui para o risco. Ter parentes próximos com calvície de início precoce aumenta a probabilidade, mas não garante que a pessoa vá desenvolver o mesmo padrão nem na mesma intensidade."}</P>
      <P>{"Outros fatores, como estresse crônico, tabagismo e alterações metabólicas, podem acelerar a percepção da queda em quem já tem a predisposição genética, mas não criam alopecia androgenética em quem não tem essa sensibilidade hormonal de base. É uma distinção importante: eles são agravantes, não a causa raiz."}</P>

      <H2 id="como-a-dht-causa-a-queda">{"Como a testosterona e a DHT causam a queda de cabelo?"}</H2>
      <P>{"O mecanismo se chama miniaturização folicular. A cada ciclo de crescimento, o folículo exposto à ação da DHT produz um fio um pouco mais fino e com um período de crescimento (a fase anágena) um pouco mais curto que o anterior. Com o tempo, o fio grosso e pigmentado dá lugar a um fio fino, claro e curto, até que o folículo praticamente para de produzir cabelo visível."}</P>
      <P>{"O importante é entender que o folículo raramente desaparece de uma hora para outra: ele encolhe aos poucos, ciclo após ciclo, o que explica por que a alopecia androgenética costuma ser percebida como um processo gradual de "}<Strong>{"afinamento"}</Strong>{" antes de virar uma área sem cabelo perceptível. Esse é também o motivo pelo qual identificar o problema cedo, enquanto o folículo ainda produz algum fio, amplia as opções de tratamento clínico disponíveis."}</P>

      <H2 id="fases-e-evolucao">{"Quais são as fases e como a alopecia androgenética evolui?"}</H2>
      <P>{"A evolução costuma seguir um padrão espacial característico, que difere entre homens e mulheres, mas o princípio é o mesmo nos dois casos: a queda avança de forma gradual, não de um dia para o outro, e tende a se intensificar se não houver intervenção."}</P>
      <OL>
        <LI><Strong>{"Fase inicial:"}</Strong>{" afinamento sutil dos fios em regiões específicas (entradas e coroa nos homens, região frontal e parte central do couro cabeludo nas mulheres), muitas vezes percebido primeiro pelo cabeleireiro ou por fotos, não no espelho do dia a dia."}</LI>
        <LI><Strong>{"Fase intermediária:"}</Strong>{" a diferença de densidade entre a área afetada e o restante do couro cabeludo já fica visível a olho nu, e pode haver aumento real na quantidade de fios que caem por dia."}</LI>
        <LI><Strong>{"Fase avançada:"}</Strong>{" perda quase completa de cabelo terminal (o fio grosso e pigmentado) na região afetada, com os folículos ali reduzidos a produzir apenas fios finos, claros e de crescimento curto, quando ainda produzem algo."}</LI>
      </OL>
      <P>{"Sistemas de classificação, como a escala de Norwood-Hamilton para homens e a escala de Ludwig para mulheres, ajudam o médico a documentar e comparar o grau de avanço ao longo do tempo, mas nenhuma escala substitui a avaliação clínica individual do padrão de cada paciente."}</P>

      <H2 id="homens-e-mulheres">{"Alopecia androgenética afeta homens e mulheres da mesma forma?"}</H2>
      <P>{"Não. Embora a causa hormonal e genética seja a mesma, o padrão visual de perda costuma ser diferente entre os sexos, e reconhecer essa diferença evita diagnóstico tardio, sobretudo nas mulheres."}</P>
      <UL>
        <LI>{"Nos homens, o padrão mais comum começa pelas entradas na linha frontal e pela coroa, podendo evoluir até a fusão das duas áreas em casos avançados."}</LI>
        <LI>{"Nas mulheres, o padrão mais comum é uma rarefação difusa na região central do couro cabeludo, preservando geralmente a linha frontal, o que faz a queda parecer \"o cabelo perdeu volume\" em vez de \"apareceu uma área sem cabelo\"."}</LI>
        <LI>{"Por causa desse padrão mais difuso, a alopecia androgenética feminina costuma demorar mais para ser identificada corretamente, sendo às vezes confundida com queda temporária ou com efeito de estresse."}</LI>
      </UL>
      <P>{"Vale reforçar: calvície feminina existe, é comum e tem base hormonal e genética assim como a masculina, mesmo que o assunto seja menos discutido publicamente."}</P>

      <H2 id="como-e-o-diagnostico">{"Como é feito o diagnóstico da alopecia androgenética?"}</H2>
      <P>{"O diagnóstico começa pela história clínica (idade de início, histórico familiar, ritmo de progressão) e pelo exame físico do couro cabeludo. A ferramenta central é a tricoscopia, um exame que amplia a imagem do couro cabeludo em até 100 vezes e permite observar diretamente sinais de miniaturização folicular, como a variação no diâmetro dos fios numa mesma região, mesmo antes de a perda ser visível a olho nu."}</P>
      <P>{"Em alguns casos, exames de sangue complementares ajudam a descartar outras causas de queda, como alterações da tireoide ou deficiência de ferro, que podem coexistir com a alopecia androgenética ou ser confundidas com ela. Por isso a avaliação médica individual é sempre o ponto de partida, nunca a autoavaliação pelo espelho."}</P>

      <H2 id="alopecia-androgenetica-tem-cura">{"Alopecia androgenética tem cura?"}</H2>
      <P>{"O termo mais correto hoje é controle, não cura. A predisposição genética não muda, mas o processo de miniaturização pode ser desacelerado, e em muitos casos parcialmente revertido nos folículos que ainda respondem a tratamento, quando a intervenção começa cedo o suficiente. "}<Link href="/blog/calvicie-tem-cura" className="underline">{"Este outro artigo do blog"}</Link>{" detalha essa diferença entre cura e controle, e por que o tempo de diagnóstico influencia tanto o resultado do tratamento."}</P>

      <H2 id="quais-tratamentos-existem">{"Quais tratamentos existem para a alopecia androgenética?"}</H2>
      <P>{"A escolha do tratamento depende da fase em que a alopecia androgenética está, do padrão de queda e da resposta individual de cada paciente, sempre definida após avaliação médica. De forma geral, as frentes disponíveis são:"}</P>
      <UL>
        <LI>{"Tratamento clínico com "}<Link href="/blog/minoxidil-para-queda-de-cabelo" className="underline">{"minoxidil"}</Link>{", que estimula o folículo e prolonga a fase de crescimento do fio."}</LI>
        <LI>{"Tratamento clínico com "}<Link href="/blog/finasterida-para-calvicie" className="underline">{"finasterida"}</Link>{" (ou dutasterida), que reduz a conversão de testosterona em DHT, agindo diretamente na causa hormonal."}</LI>
        <LI>{"Procedimentos complementares, como PRP e mesoterapia capilar, usados como suporte ao tratamento medicamentoso em alguns casos."}</LI>
        <LI>{"Transplante capilar, indicado quando já existe perda definitiva de densidade que o tratamento clínico isolado não reverte, redistribuindo folículos da área doadora (resistente à ação da DHT) para as áreas afetadas."}</LI>
      </UL>
      <P>{"Essas frentes não são mutuamente excludentes. É comum um planejamento combinar tratamento clínico contínuo com transplante capilar, já que o primeiro ajuda a preservar os fios nativos que ainda restam enquanto o segundo repõe densidade na área já comprometida."}</P>

      <H2 id="quando-procurar-avaliacao">{"Quando vale procurar avaliação médica?"}</H2>
      <P>{"Quanto antes a alopecia androgenética for identificada, maior o número de folículos ainda ativos que um tratamento clínico consegue preservar. Sinais que justificam buscar avaliação incluem aumento perceptível de fios na escova ou no travesseiro por vários meses seguidos, fios visivelmente mais finos numa região específica, entradas ou coroa em processo de rarefação, ou histórico familiar relevante de calvície de início precoce."}</P>
      <P>{"No Instituto Frauches, essa avaliação sempre começa pela tricoscopia e pelo histórico do paciente, antes de qualquer indicação de tratamento clínico ou cirúrgico. É esse diagnóstico individual, não a idade nem o grau de queda isoladamente, que define o melhor caminho para cada caso."}</P>

      <Callout>{"Este conteúdo tem caráter educativo e não substitui uma consulta médica. O diagnóstico da alopecia androgenética e a indicação de tratamento variam de paciente para paciente, conforme avaliação individual."}</Callout>

      <P>{"Se você notou afinamento ou queda progressiva e quer confirmar se é alopecia androgenética, "}<a href={WHATSAPP_URL} className="underline" target="_blank" rel="noopener noreferrer"><Strong>{"agende uma avaliação pelo WhatsApp"}</Strong></a>{"."}</P>
      <P>{"Este artigo faz parte do nosso "}<Link href="/blog/guia-calvicie-masculina" className="underline">{"guia sobre calvície masculina"}</Link>{"."}</P>
    </>
  );
}
