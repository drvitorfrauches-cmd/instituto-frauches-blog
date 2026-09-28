import type { PostMeta } from "@/lib/blog/types";
import Link from "next/link";
import { P, H2, H3, UL, OL, LI, Strong, Callout, Cta } from "@/components/article-ui";
import { AUTHOR, WHATSAPP_URL } from "@/lib/blog/site";

export const meta: PostMeta = {
  slug: "transplante-de-sobrancelha",
  title: "Transplante de sobrancelha: como funciona e para quem é indicado",
  description:
    "Transplante de sobrancelha usa a técnica FUE para repor fios com direção e ângulo naturais. Veja quem pode fazer, como é a cirurgia e os cuidados depois.",
  publishedAt: "2026-09-28",
  updatedAt: "2026-09-28",
  readingTime: 10,
  category: "Transplante capilar",
  author: AUTHOR,
  coverImage: {
    src: "/blog/transplante-de-sobrancelha/cover.jpg",
    alt: "Instrumentos cirúrgicos delicados e lupa sobre bandeja clínica, representando a precisão exigida no transplante de sobrancelha",
  },
};

export default function Article() {
  return (
    <>
      <H2 id="resposta-direta">{"Resposta direta"}</H2>
      <P>{"O transplante de sobrancelha é uma cirurgia que repõe fios em sobrancelhas ralas, falhadas ou ausentes usando a técnica FUE (Follicular Unit Extraction, ou extração de unidade folicular). Os folículos são retirados um a um, geralmente da nuca, e implantados na sobrancelha respeitando a direção, o ângulo e a densidade de cada região. Como o fio transplantado mantém a característica da área de onde veio, o resultado tende a ser permanente, mas cresce como cabelo e precisa ser aparado."}</P>
      <P>{"Costuma ser indicado para quem perdeu fios por depilação excessiva ao longo dos anos, cicatriz, queimadura ou micropigmentação que não resolveu a falta de volume real. Quando a causa é uma doença em atividade, a cirurgia espera."}</P>
      <Cta href={WHATSAPP_URL}>{"Sua sobrancelha afinou depois de anos de pinça ou tem uma falha que a maquiagem não disfarça? Uma avaliação mostra primeiro qual é a causa e se o transplante faz sentido no seu caso."}</Cta>

      <H2 id="o-que-e-o-transplante-de-sobrancelha">{"O que é o transplante de sobrancelha?"}</H2>
      <P>{"É um procedimento cirúrgico em que folículos pilosos saudáveis são transferidos de uma área doadora para a sobrancelha. Cada folículo vai inteiro, com raiz e estruturas de suporte, e segue vivo depois de implantado. Por isso ele volta a produzir fio no novo lugar."}</P>
      <P>{"A lógica é a mesma do transplante capilar no couro cabeludo e do "}<Link href="/blog/transplante-de-barba" className="underline">{"transplante de barba"}</Link>{", mas a escala muda bastante. Uma sobrancelha costuma receber algumas centenas de unidades foliculares, não milhares. Em compensação, cada fio fica a poucos centímetros dos olhos de quem conversa com você. Um erro de alguns graus na angulação, que passaria despercebido no alto da cabeça, aparece na hora numa sobrancelha."}</P>

      <H2 id="quem-pode-fazer-transplante-de-sobrancelha">{"Quem pode fazer transplante de sobrancelha?"}</H2>
      <P>{"Pode fazer quem tem uma falha estável, uma causa já identificada e área doadora suficiente. As situações mais comuns no consultório são estas:"}</P>
      <UL>
        <LI><Strong>{"Depilação excessiva no passado:"}</Strong>{" anos de pinça, cera ou linha podem danificar o folículo até ele parar de produzir fio. É o motivo mais frequente entre mulheres que procuram o procedimento."}</LI>
        <LI><Strong>{"Cicatrizes:"}</Strong>{" cortes, acidentes, cirurgias ou queimaduras deixam áreas onde o pelo não nasce mais."}</LI>
        <LI><Strong>{"Sobrancelha rala de nascença:"}</Strong>{" algumas pessoas simplesmente nunca tiveram densidade na cauda ou no início da sobrancelha."}</LI>
        <LI><Strong>{"Micropigmentação sem volume:"}</Strong>{" o pigmento desenha a forma, mas não tem fio, relevo nem movimento. Parte dos pacientes busca o transplante para ter pelo de verdade por cima ou no lugar do desenho."}</LI>
        <LI><Strong>{"Alopecia areata já estabilizada:"}</Strong>{" só depois de um período sem atividade da doença e com liberação médica."}</LI>
      </UL>
      <P>{"Homens também procuram, principalmente por cicatriz ou por falhas no meio da sobrancelha. A indicação é a mesma para os dois sexos. O que muda é o desenho, já que a sobrancelha masculina costuma ser mais reta e mais baixa."}</P>

      <H2 id="quando-o-transplante-nao-e-indicado">{"Quando o transplante de sobrancelha não é indicado?"}</H2>
      <P>{"O transplante não é indicado enquanto a causa da perda estiver ativa. Algumas condições derrubam os fios da sobrancelha e continuariam derrubando os fios transplantados, porque o problema não está no folículo em si:"}</P>
      <UL>
        <LI>{"Alopecia frontal fibrosante, que costuma afetar a linha do cabelo e a sobrancelha ao mesmo tempo, sobretudo em mulheres depois da menopausa."}</LI>
        <LI>{"Alopecia areata em atividade, com placas novas surgindo."}</LI>
        <LI>{"Alterações de tireoide sem controle (a perda do terço externo da sobrancelha é um sinal clássico de hipotireoidismo)."}</LI>
        <LI>{"Tricotilomania, o hábito compulsivo de arrancar os pelos, que precisa de acompanhamento próprio antes de qualquer cirurgia."}</LI>
        <LI>{"Dermatites ou infecções na região no momento da avaliação."}</LI>
      </UL>
      <P>{"Por isso a primeira consulta é diagnóstica. A tricoscopia (exame da pele e dos fios com aumento de até 100 vezes) ajuda a separar uma falha por dano mecânico antigo de uma alopecia inflamatória, e exames de sangue entram quando há suspeita de causa hormonal ou nutricional. O artigo sobre "}<Link href="/blog/exames-para-queda-de-cabelo" className="underline">{"exames para queda de cabelo"}</Link>{" detalha esse raciocínio."}</P>

      <H2 id="de-onde-vem-os-fios">{"De onde vêm os fios usados na sobrancelha?"}</H2>
      <P>{"Na maioria dos casos, os fios vêm da nuca, a região da área doadora com fios mais finos e macios. A escolha não é aleatória. Pelo de sobrancelha é fino e curto, então quanto mais parecido o fio doador for com ele, mais natural fica o resultado."}</P>
      <P>{"Outro ponto: na sobrancelha se usam quase só unidades foliculares de um fio. No couro cabeludo, grupos de dois ou três fios são desejáveis para dar volume, mas na sobrancelha eles criariam tufos. Durante a separação dos enxertos no microscópio, a equipe seleciona e, quando preciso, divide as unidades para chegar a fios isolados."}</P>
      <P>{"Como a quantidade é pequena, o impacto sobre a reserva do couro cabeludo costuma ser mínimo. Mesmo assim, entra no planejamento de quem já tem sinais de calvície. A lógica de preservação está no artigo sobre "}<Link href="/blog/area-doadora-transplante-capilar" className="underline">{"área doadora no transplante capilar"}</Link>{"."}</P>

      <H2 id="como-funciona-a-cirurgia">{"Como funciona a cirurgia de transplante de sobrancelha, etapa por etapa?"}</H2>
      <OL>
        <LI><Strong>{"Desenho com o paciente acordado:"}</Strong>{" antes de qualquer anestesia, o formato é marcado na pele e ajustado com o paciente olhando no espelho. Começo, arco e cauda são definidos a partir da anatomia do rosto e do que a pessoa quer, com uma ressalva: o desenho precisa continuar bonito daqui a 20 anos, não só seguir a moda do momento."}</LI>
        <LI><Strong>{"Anestesia local e sedação venosa:"}</Strong>{" as duas regiões (nuca e sobrancelha) recebem anestesia local, e o paciente fica sob sedação venosa durante o procedimento."}</LI>
        <LI><Strong>{"Extração na nuca:"}</Strong>{" os folículos são retirados um a um com punch de pequeno diâmetro, sem corte linear e sem pontos."}</LI>
        <LI><Strong>{"Separação no microscópio:"}</Strong>{" os enxertos são triados e mantidos em solução resfriada até a implantação, reduzindo o tempo de exposição e o trauma."}</LI>
        <LI><Strong>{"Implantação fio a fio:"}</Strong>{" cada fio entra numa incisão muito pequena, feita num ângulo quase rente à pele e na direção certa daquela parte da sobrancelha."}</LI>
      </OL>
      <P>{"A cirurgia costuma levar algumas horas, bem menos que um transplante capilar completo. No Instituto Frauches, o Protocolo Frauches Precision FUE® orienta também esse planejamento, com mapeamento da falha, escolha de fios compatíveis e atenção redobrada à angulação."}</P>

      <H2 id="por-que-a-direcao-dos-fios-importa">{"Por que a direção dos fios é o ponto mais crítico?"}</H2>
      <P>{"Porque a sobrancelha tem três direções de crescimento diferentes em poucos centímetros, e errar qualquer uma delas deixa o resultado artificial. Isso é o que mais diferencia esse procedimento de um transplante no couro cabeludo."}</P>
      <UL>
        <LI><Strong>{"Início (perto do nariz):"}</Strong>{" os fios crescem para cima, quase na vertical, levemente abertos em leque."}</LI>
        <LI><Strong>{"Corpo:"}</Strong>{" os fios de cima apontam para baixo e para fora, os de baixo apontam para cima e para fora. Eles se cruzam e formam uma espécie de trama no meio da sobrancelha."}</LI>
        <LI><Strong>{"Cauda:"}</Strong>{" os fios deitam quase na horizontal, em direção à têmpora."}</LI>
      </UL>
      <P>{"Além da direção, o ângulo em relação à pele é muito fechado. Um fio implantado \"em pé\" vai crescer espetado, e nenhum gel resolve isso de forma definitiva. A densidade também não é uniforme: o corpo da sobrancelha é mais cheio, a cauda afina, e as bordas precisam de fios espaçados para o contorno não ficar com cara de carimbo."}</P>

      <H2 id="transplante-de-sobrancelha-doi">{"Transplante de sobrancelha dói?"}</H2>
      <P>{"Durante a cirurgia, o paciente não sente dor, porque o procedimento é feito com anestesia local e sedação venosa. A sensação mais relatada depois é de repuxamento e sensibilidade na nuca e na sobrancelha nos primeiros dias, controlados com a medicação prescrita."}</P>
      <P>{"Inchaço ao redor dos olhos pode aparecer nos dois ou três primeiros dias, porque a pálpebra é uma região que acumula líquido com facilidade. Costuma regredir sozinho, e a equipe orienta como dormir e como usar compressas para reduzir esse efeito."}</P>

      <H2 id="recuperacao">{"Como é a recuperação do transplante de sobrancelha?"}</H2>
      <P>{"A recuperação é mais curta que a do transplante capilar, mas a região é visível, então vale planejar a agenda. Um cronograma típico, sempre ajustado pela equipe em cada caso:"}</P>
      <OL>
        <LI><Strong>{"Primeiros dias:"}</Strong>{" pequenas crostas em cada ponto de implantação, possível inchaço nas pálpebras e cuidados de higiene orientados, sem esfregar a região."}</LI>
        <LI><Strong>{"Primeira semana a dez dias:"}</Strong>{" as crostas se soltam. Até lá, nada de maquiagem, pinça ou produtos sobre a sobrancelha."}</LI>
        <LI><Strong>{"Semanas seguintes:"}</Strong>{" liberação gradual de maquiagem, exercícios e exposição ao sol, conforme a cicatrização."}</LI>
        <LI><Strong>{"Entre 2 e 8 semanas:"}</Strong>{" a maior parte dos fios transplantados cai. É esperado e faz parte do ciclo, o folículo continua lá."}</LI>
        <LI><Strong>{"A partir de 3 a 4 meses:"}</Strong>{" os novos fios começam a crescer."}</LI>
        <LI><Strong>{"Entre 8 e 12 meses:"}</Strong>{" o resultado se aproxima do final, com fios mais grossos e estáveis."}</LI>
      </OL>
      <P>{"Esse ritmo varia de paciente para paciente. A queda temporária dos primeiros meses é o mesmo fenômeno explicado no artigo sobre "}<Link href="/blog/shock-loss-transplante-capilar" className="underline">{"shock loss no transplante capilar"}</Link>{"."}</P>

      <H2 id="fio-cresce-como-cabelo">{"O fio transplantado na sobrancelha cresce como cabelo?"}</H2>
      <P>{"Sim. O folículo guarda a programação da região de origem, então o fio vindo da nuca cresce com o ritmo e o comprimento de um fio de cabelo, não de sobrancelha. Na prática, isso significa aparar a sobrancelha com tesoura pequena a cada uma ou duas semanas e, em muitos casos, usar um gel fixador para manter os fios na direção desejada."}</P>
      <P>{"Com o tempo, parte dos pacientes percebe que o fio fica um pouco mais dócil e fácil de pentear, mas não conte com isso ao decidir. Quem não quer ter essa manutenção deve saber disso antes da cirurgia, não depois. Para muitos, é uma troca justa: aparar um fio que existe é mais simples do que desenhar um que não existe todos os dias."}</P>

      <H2 id="transplante-ou-micropigmentacao">{"Transplante de sobrancelha ou micropigmentação: qual escolher?"}</H2>
      <P>{"São procedimentos diferentes, que resolvem problemas diferentes, e às vezes se complementam. A micropigmentação deposita pigmento na pele para simular fios ou preencher a forma. Não exige área doadora, tem recuperação rápida e desbota com o tempo, pedindo retoques. O transplante coloca fios reais, com relevo e movimento, e tende a ser permanente, mas é uma cirurgia e cresce como cabelo."}</P>
      <P>{"Quem tem micropigmentação antiga e quer fazer o transplante pode, em geral, fazer. O pigmento na pele não impede o fio de crescer, embora um pigmento muito escuro ou fora do lugar possa pedir clareamento ou remoção antes, para o desenho novo não brigar com o antigo. Essa análise é feita caso a caso na avaliação."}</P>

      <H2 id="perguntas-frequentes">{"Perguntas frequentes"}</H2>
      <H3>{"O transplante de sobrancelha é definitivo?"}</H3>
      <P>{"Os fios transplantados tendem a ser permanentes, porque vêm de uma área resistente à queda. Doenças que atacam a sobrancelha, como a alopecia frontal fibrosante, podem afetar também os fios transplantados, e por isso o diagnóstico da causa vem antes da cirurgia."}</P>
      <H3>{"Precisa raspar a cabeça para tirar os fios?"}</H3>
      <P>{"Não. Como a quantidade de fios é pequena, a extração costuma ser feita numa faixa discreta da nuca, que fica escondida pelo próprio cabelo ao redor."}</P>
      <H3>{"Quantos fios são implantados em cada sobrancelha?"}</H3>
      <P>{"Depende do tamanho da falha. Uma correção pontual na cauda pode precisar de poucas dezenas de fios, enquanto a reconstrução de uma sobrancelha inteira chega a algumas centenas. O número é definido na avaliação."}</P>
      <H3>{"Dá para fazer transplante de sobrancelha junto com o do couro cabeludo?"}</H3>
      <P>{"Em alguns casos, sim, no mesmo dia. A decisão depende do tempo total de cirurgia, da quantidade de folículos disponíveis e do planejamento de cada área."}</P>
      <H3>{"Posso fazer design de sobrancelha depois?"}</H3>
      <P>{"Pode, depois da liberação médica. Só é preciso cuidado com pinça e cera nos fios transplantados, porque arrancá-los repetidamente pode danificar o folículo, o mesmo processo que muitas vezes levou à falha original."}</P>

      <Callout>{"Este conteúdo tem caráter educativo e não substitui uma consulta médica. A indicação do transplante de sobrancelha, a quantidade de fios e o desenho dependem sempre de avaliação individual, incluindo a investigação da causa da falha. O resultado varia de paciente para paciente."}</Callout>

      <P>{"Se você quer entender se a sua falha tem indicação cirúrgica ou se o caminho é outro, o primeiro passo é uma avaliação com o Dr. Vitor Frauches. "}<a href={WHATSAPP_URL} className="underline" target="_blank" rel="noopener noreferrer"><Strong>{"Agende sua avaliação pelo WhatsApp"}</Strong></a>{"."}</P>
      <P>{"Este artigo faz parte do nosso "}<Link href="/blog/guia-transplante-capilar" className="underline">{"guia completo do transplante capilar"}</Link>{"."}</P>
    </>
  );
}
