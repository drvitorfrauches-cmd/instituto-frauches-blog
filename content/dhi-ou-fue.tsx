import type { PostMeta } from "@/lib/blog/types";
import Link from "next/link";
import { P, H2, H3, UL, OL, LI, Strong, Callout, Cta } from "@/components/article-ui";
import { AUTHOR, WHATSAPP_URL } from "@/lib/blog/site";

export const meta: PostMeta = {
  title: "DHI ou FUE: são técnicas concorrentes? Entenda a confusão",
  description:
    "DHI ou FUE? Entenda por que FUE descreve a extração dos folículos e DHI a forma de implantar, e o que de fato muda no planejamento do transplante capilar.",
  slug: "dhi-ou-fue",
  publishedAt: "2026-11-06",
  updatedAt: "2026-11-06",
  readingTime: 10,
  category: "Técnica FUE",
  author: AUTHOR,
  coverImage: {
    src: "/blog/dhi-ou-fue/cover.jpg",
    alt: "Instrumento de extração FUE e caneta implanter sobre uma mesa clínica clara, com uma placa de Petri com folículos entre eles, ilustrando a diferença entre DHI ou FUE",
  },
};

export default function Post() {
  return (
    <>
      <P>{"Quem pesquisa transplante capilar acaba encontrando a pergunta \"DHI ou FUE?\" como se fosse preciso escolher entre duas cirurgias diferentes. Não é. A FUE (Follicular Unit Extraction, ou extração de unidades foliculares) descreve como os folículos são retirados da área doadora. A DHI (Direct Hair Implantation, ou implantação direta) descreve uma forma de colocar esses folículos na área receptora. Em quase todo transplante chamado de DHI, a extração continua sendo feita pela técnica FUE."}</P>

      <P>{"A confusão nasceu mais do marketing do que da medicina. Uma sigla nova vende a ideia de técnica nova, e o paciente fica com a impressão de que precisa comparar as duas como se compara um carro com outro. Neste texto eu explico o que cada sigla quer dizer, quais são as formas reais de implantar os fios e o que vale a pena perguntar na consulta."}</P>

      <Cta href={WHATSAPP_URL}>
        Recebeu orçamentos de FUE e de DHI e não sabe comparar? Na avaliação a
        gente explica, etapa por etapa, como seria extraído e implantado cada
        folículo no seu caso.
      </Cta>

      <H2 id="dhi-ou-fue-qual-a-diferenca">{"DHI ou FUE: qual é a diferença de verdade?"}</H2>

      <P>{"A diferença entre DHI e FUE é de etapa, não de técnica concorrente. Todo transplante capilar tem dois momentos principais: tirar os folículos de onde eles sobram (a área doadora, em geral a nuca e as laterais) e colocá-los onde faltam (a área receptora). A FUE responde à primeira parte. A DHI responde à segunda."}</P>

      <UL>
        <LI><Strong>{"FUE:"}</Strong>{" retirada de cada unidade folicular, uma a uma, com um punch (um microbisturi circular) de diâmetro pequeno. Não há corte em faixa nem pontos na nuca."}</LI>
        <LI><Strong>{"DHI:"}</Strong>{" implantação com uma caneta chamada implanter, em que o folículo é carregado numa agulha e inserido no couro cabeludo. No uso mais comum do termo, a própria agulha do implanter abre o orifício e deposita o enxerto no mesmo movimento."}</LI>
      </UL>

      <P>{"Por isso, dizer \"fiz DHI e não FUE\" costuma ser impreciso. O mais correto seria dizer \"fiz extração por FUE e implantação com implanter\". Se quiser entender a extração em detalhe (punch, transecção, cicatrizes), o artigo sobre "}<Link href="/blog/tecnica-fue-transplante-capilar" className="underline">{"como funciona a técnica FUE"}</Link>{" cobre essa parte."}</P>

      <H2 id="de-onde-veio-a-sigla-dhi">{"De onde veio a sigla DHI?"}</H2>

      <P>{"A sigla DHI se popularizou como nome comercial para a implantação com implanter, mas o instrumento em si é bem mais antigo que o termo. Uma revisão publicada em 2023 na Facial Plastic Surgery, escrita por cirurgiões brasileiros, conta que por décadas a colocação dos enxertos foi feita só com pinça, até que em 1992 o Dr. Choi apresentou o implanter, capaz de criar a incisão e colocar a unidade folicular ao mesmo tempo. A mesma revisão lembra que a FUE foi descrita em 2002 e só se difundiu cerca de uma década depois, e que a uniformidade dos enxertos obtidos por FUE ajudou o implanter a ganhar espaço no Ocidente."}</P>

      <P>{"Ou seja, o implanter não substituiu a FUE. Ele cresceu junto com ela, porque os enxertos extraídos por FUE são mais frágeis (vêm com menos tecido de proteção ao redor) e se beneficiam de uma manipulação mais delicada. Vale a ressalva: trata-se de uma revisão narrativa, que organiza a experiência dos autores e a literatura, sem comparar grupos de pacientes."}</P>

      <H2 id="quais-sao-as-formas-de-implantar">{"Quais são as formas de implantar os folículos?"}</H2>

      <P>{"Hoje existem três caminhos principais para colocar os enxertos na área receptora, e todos podem vir depois de uma extração por FUE:"}</P>

      <OL>
        <LI><Strong>{"Pinça em canais prévios:"}</Strong>{" o médico abre antes todos os orifícios (as pré-incisões) com lâmina ou agulha, e a equipe encaixa cada folículo com pinças finas. É o método mais antigo e continua válido em mãos treinadas."}</LI>
        <LI><Strong>{"Implanter em canais prévios:"}</Strong>{" as pré-incisões também são feitas antes, mas o folículo entra com o implanter, que protege o bulbo durante a inserção. Alguns chamam essa combinação de DNI."}</LI>
        <LI><Strong>{"Implanter afiado sem pré-incisão (o que o mercado costuma chamar de DHI):"}</Strong>{" a agulha do implanter perfura a pele e deposita o enxerto num único gesto, conhecido na literatura em inglês como stick and place."}</LI>
      </OL>

      <P>{"Os nomes comerciais variam de clínica para clínica, o que alimenta a confusão. Por isso, mais útil que a sigla é perguntar duas coisas simples: quem abre os canais e com qual instrumento o folículo é colocado."}</P>

      <H2 id="o-que-a-ciencia-compara">{"O que os estudos mostram ao comparar pré-incisão e implantação direta?"}</H2>

      <P>{"Os estudos que comparam as duas estratégias de implantação são poucos e, em geral, retrospectivos. O mais completo que encontrei é um estudo multicêntrico chinês de 2025, publicado na Aesthetic Plastic Surgery, que revisou 191 pacientes operados por FUE em quatro hospitais: 95 receberam os enxertos em pré-incisões e 96 pela implantação direta com implanter (stick and place)."}</P>

      <UL>
        <LI>{"O grupo das pré-incisões teve implantação mais rápida e uma curva de aprendizado mais curta para cirurgiões em treinamento."}</LI>
        <LI>{"O grupo da implantação direta alcançou densidade de enxertos maior e maior satisfação dos pacientes."}</LI>
        <LI>{"Não houve diferença significativa na taxa de sobrevivência dos enxertos nem na taxa de complicações entre os dois grupos."}</LI>
      </UL>

      <P>{"O dado mais importante para quem está decidindo é o último: a sobrevivência dos fios foi semelhante. As limitações também pesam. O estudo é retrospectivo (os pacientes não foram sorteados para cada método), envolve apenas pacientes chineses, cujo fio costuma ser liso e grosso, e não dá para transferir automaticamente o resultado para cabelos cacheados ou afro."}</P>

      <P>{"Outro estudo, de 2019, descreveu o uso de implanters em pré-incisões em 104 pacientes operados por FUE. Os autores relatam crescimento visível entre dois e cinco meses e melhora na classificação da calvície na maior parte dos casos, mas eles mesmos reconhecem que não houve avaliação objetiva do crescimento. É um relato de série de casos, útil para mostrar que a combinação funciona na prática, não para provar que é superior."}</P>

      <H2 id="implanter-aumenta-a-pega-dos-fios">{"A implantação com implanter aumenta a pega dos fios?"}</H2>

      <P>{"Não existe prova de que o implanter, sozinho, aumente a sobrevivência dos enxertos. O que a literatura sugere é que ele reduz a manipulação do folículo e pode encurtar o tempo que o enxerto passa fora do corpo, dois fatores ligados à qualidade do resultado. Mas o comparativo de 2025 citado acima não encontrou diferença de sobrevivência entre pré-incisão e implantação direta."}</P>

      <P>{"Um consenso de especialistas chineses publicado em 2025 na Plastic and Reconstructive Surgery, construído a partir de uma revisão sistemática, organizou as recomendações para melhorar a sobrevivência dos enxertos na FUE em sete pontos: preparo pré-operatório, extração, dissecção e lapidação, preservação dos enxertos, implantação, cuidados pós-operatórios e prevenção de complicações. A implantação é só um dos sete. Esse é o recado que mais importa ao paciente: a pega depende da cadeia inteira, e uma etapa bem feita não compensa outra mal feita."}</P>

      <H2 id="velocidade-importa">{"Implantar mais rápido significa implantar melhor?"}</H2>

      <P>{"Velocidade ajuda a reduzir o tempo fora do corpo, mas não é sinônimo de qualidade. Um estudo retrospectivo publicado em 2026 na Dermatologic Surgery analisou 612 sessões de FUE em 526 pacientes, feitas por oito cirurgiões em cinco clínicas, e encontrou velocidade média próxima de 700 enxertos por hora tanto na extração quanto na implantação. O uso de vários implanters em rodízio esteve associado a implantação mais rápida."}</P>

      <P>{"O estudo mede rapidez, não resultado estético nem sobrevivência, então não dá para concluir dele que a cirurgia mais rápida é a melhor. O que ele mostra é que o implanter permite organizar o trabalho em equipe de forma eficiente. A qualidade continua dependendo do ângulo, da direção e da profundidade de cada fio."}</P>

      <H2 id="o-que-decide-o-resultado">{"Se a sigla não decide, o que decide o resultado?"}</H2>

      <P>{"O resultado de um transplante capilar depende muito mais do planejamento e da execução do que do nome dado à técnica de implantação. Na prática, estes são os pontos que pesam:"}</P>

      <OL>
        <LI><Strong>{"Desenho da linha frontal:"}</Strong>{" altura, formato e irregularidade natural da hairline, compatíveis com a idade e o rosto."}</LI>
        <LI><Strong>{"Ângulo e direção de cada fio:"}</Strong>{" os canais precisam seguir a inclinação dos fios nativos. Um fio implantado em pé aparece mesmo com boa densidade."}</LI>
        <LI><Strong>{"Distribuição dos enxertos:"}</Strong>{" unidades de um fio na primeira linha, unidades de dois e três fios mais atrás."}</LI>
        <LI><Strong>{"Qualidade da extração:"}</Strong>{" baixa transecção (corte acidental do folículo) e retirada distribuída para não deixar a área doadora com aspecto ralo."}</LI>
        <LI><Strong>{"Cuidado com o enxerto fora do corpo:"}</Strong>{" hidratação, temperatura, tempo e manipulação mínima."}</LI>
        <LI><Strong>{"Treinamento da equipe:"}</Strong>{" o implanter só protege o folículo quando é bem carregado e bem usado."}</LI>
      </OL>

      <P>{"Repare que nenhum desses pontos aparece na sigla. Duas clínicas podem anunciar \"DHI\" e entregar resultados bem diferentes, assim como duas clínicas que anunciam \"FUE\"."}</P>

      <H2 id="como-funciona-no-instituto-frauches">{"Como funciona a implantação no Instituto Frauches?"}</H2>

      <P>{"No Instituto Frauches, a extração é sempre feita por FUE, dentro do Protocolo Frauches Precision FUE®. Toda a extração dos folículos e todas as pré-incisões da área receptora são feitas exclusivamente pelos médicos. Depois, a equipe cirúrgica implanta cada folículo nos canais já abertos usando o IMPLANTER PEN®, uma caneta que coloca o enxerto sem pinça e reduz o trauma ao folículo."}</P>

      <P>{"Prefiro abrir os canais antes por um motivo de controle: é nesse momento que eu defino o ângulo, a direção e a densidade de cada região, olhando a área receptora inteira antes de qualquer folículo entrar. As incisões usam lâminas cirúrgicas customizadas, dimensionadas conforme o tamanho do folículo de cada paciente, com espessura máxima de 0,7 mm. Isso não torna a implantação direta errada em outras mãos. É uma escolha de método, coerente com a forma como planejo a cirurgia. Quem quiser entender quem faz o quê na sala cirúrgica pode ler o artigo sobre "}<Link href="/blog/quem-realiza-transplante-capilar" className="underline">{"quem realiza o transplante capilar"}</Link>{"."}</P>

      <H2 id="o-que-perguntar-na-consulta">{"O que perguntar na consulta para não cair na confusão de siglas?"}</H2>

      <P>{"Em vez de perguntar \"vocês fazem DHI ou FUE?\", faça perguntas que revelam como a cirurgia acontece de fato:"}</P>

      <OL>
        <LI>{"Como os folículos serão extraídos e qual o diâmetro do punch previsto para o meu fio?"}</LI>
        <LI>{"Quem abre os canais da área receptora: o médico ou outro profissional?"}</LI>
        <LI>{"Os folículos serão colocados com pinça, com implanter em canais prévios ou com implanter sem pré-incisão?"}</LI>
        <LI>{"Quantos enxertos o planejamento prevê e como eles serão distribuídos na linha frontal?"}</LI>
        <LI>{"Como os enxertos ficam armazenados enquanto esperam a implantação?"}</LI>
      </OL>

      <P>{"Respostas concretas a essas perguntas dizem muito mais sobre a cirurgia do que qualquer sigla. Para entender o restante dos instrumentos que costumam aparecer em orçamentos, veja o artigo sobre "}<Link href="/blog/tecnologias-transplante-capilar" className="underline">{"tecnologias no transplante capilar"}</Link>{"."}</P>

      <H2 id="perguntas-frequentes">{"Perguntas frequentes"}</H2>

      <H3>{"DHI é mais moderno que FUE?"}</H3>
      <P>{"Não dá para comparar assim, porque uma sigla fala da implantação e a outra da extração. O implanter usado na DHI existe desde 1992, antes mesmo da descrição da FUE em 2002."}</P>

      <H3>{"DHI dispensa raspar a cabeça?"}</H3>
      <P>{"A raspagem depende da modalidade de extração e do planejamento, não da sigla. Existem cirurgias com extração por FUE sem raspar (Non-Shave FUE), e implanters ajudam a implantar entre fios existentes, mas cada caso exige avaliação."}</P>

      <H3>{"DHI deixa menos cicatriz?"}</H3>
      <P>{"As cicatrizes da área doadora vêm da extração, que é feita por FUE nos dois casos. Elas dependem do diâmetro do punch, da quantidade extraída e da cicatrização de cada pessoa."}</P>

      <H3>{"Posso escolher entre implantação direta e pré-incisão?"}</H3>
      <P>{"Você pode e deve perguntar qual método a clínica usa e por quê. A escolha final faz parte do planejamento médico, conforme o tipo de fio, a área a tratar e a experiência da equipe com cada instrumento."}</P>

      <Callout><Strong>{"Aviso médico:"}</Strong>{" este conteúdo é educativo e não substitui a consulta médica. A indicação do transplante capilar, da técnica de extração e do método de implantação depende de avaliação médica individual e presencial. O resultado varia de paciente para paciente, conforme avaliação médica, características do cabelo e da área doadora e cuidados no pós-operatório."}</Callout>

      <Cta href={WHATSAPP_URL}>
        Quer entender como seria a extração e a implantação no seu caso, sem
        depender de siglas? Agende uma avaliação com o Dr. Vitor Frauches.
      </Cta>

      <H2 id="referencias">{"Referências"}</H2>

      <UL>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/37879353/" className="underline" target="_blank" rel="noopener noreferrer">{"Speranzini M, Souza SEG. Advancements in Graft Placement Techniques. Facial Plastic Surgery, 2023."}</a>{" "}<a href="https://doi.org/10.1055/a-2198-2782" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/40316792/" className="underline" target="_blank" rel="noopener noreferrer">{"Zhao Y et al. Premade Incisions vs. Stick and Place: A Multicenter Retrospective Comparison of Hair Transplantation Outcomes in China. Aesthetic Plastic Surgery, 2025."}</a>{" "}<a href="https://doi.org/10.1007/s00266-025-04871-3" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/40489742/" className="underline" target="_blank" rel="noopener noreferrer">{"Zhang J et al. Enhancing Graft Survival Rates in Follicular Unit Excision: A Chinese Expert Consensus on Perioperative Procedures. Plastic and Reconstructive Surgery, 2025."}</a>{" "}<a href="https://doi.org/10.1097/PRS.0000000000012228" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/42975514/" className="underline" target="_blank" rel="noopener noreferrer">{"Chong LSL. Extraction and Implantation Speeds in Follicular Unit Excision: A Multicenter Retrospective Study of 612 Cases. Dermatologic Surgery, 2026."}</a>{" "}<a href="https://doi.org/10.1097/DSS.0000000000005417" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/32001973/" className="underline" target="_blank" rel="noopener noreferrer">{"Bansal A et al. Use of Implanters in Premade Recipient Sites for Hair Transplantation. Journal of Cutaneous and Aesthetic Surgery, 2019."}</a>{" "}<a href="https://doi.org/10.4103/JCAS.JCAS_33_19" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
      </UL>

      <P>{"Este artigo faz parte do nosso "}<Link href="/blog/guia-transplante-capilar" className="underline">{"guia completo do transplante capilar"}</Link>{"."}</P>
    </>
  );
}
