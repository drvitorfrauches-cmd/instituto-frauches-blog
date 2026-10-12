import type { PostMeta } from "@/lib/blog/types";
import Link from "next/link";
import { P, H2, H3, UL, OL, LI, Strong, Callout, Cta } from "@/components/article-ui";
import { AUTHOR, WHATSAPP_URL } from "@/lib/blog/site";

export const meta: PostMeta = {
  slug: "quem-realiza-transplante-capilar",
  title: "Quem realiza o transplante capilar? O médico e a equipe",
  description:
    "Quem realiza o transplante capilar: veja o que cabe ao médico, o que a equipe faz sob supervisão e o que perguntar antes de marcar a sua cirurgia.",
  publishedAt: "2026-10-12",
  updatedAt: "2026-10-12",
  readingTime: 10,
  category: "Dúvidas frequentes",
  author: AUTHOR,
  coverImage: {
    src: "/blog/quem-realiza-transplante-capilar/cover.jpg",
    alt: "Bandeja de instrumentos, lupa cirúrgica e aventais dobrados em sala de cirurgia, representando o médico e a equipe que realizam o transplante capilar",
  },
};

export default function Article() {
  return (
    <>
      <H2 id="resposta-direta">{"Quem realiza o transplante capilar?"}</H2>
      <P>{"Quem realiza o transplante capilar é um médico, que responde pelo diagnóstico, pelo planejamento, pelos atos cirúrgicos e por qualquer intercorrência, com o apoio de uma equipe treinada que trabalha sob a supervisão dele. É uma cirurgia longa, feita enxerto por enxerto, e por isso ninguém a faz sozinho. A dúvida que vale levar para a consulta é outra: qual etapa fica na mão de quem, e se o médico está na sala enquanto ela acontece."}</P>
      <P>{"Essa pergunta ganhou peso nos últimos anos. A técnica FUE (Follicular Unit Extraction, ou extração de unidade folicular), em que cada folículo é retirado individualmente, parece simples para quem olha de fora, e revisões recentes da literatura médica descrevem clínicas em que boa parte da cirurgia é entregue a pessoas sem formação médica. Saber como a responsabilidade é dividida ajuda a decidir com mais segurança."}</P>
      <Cta href={WHATSAPP_URL}>{"Quer saber quem vai avaliar o seu caso, desenhar a sua linha frontal e estar na sala no dia da cirurgia? Pergunte isso na avaliação, antes de qualquer orçamento."}</Cta>

      <H2 id="por-que-importa">{"Por que importa saber quem realiza o transplante capilar?"}</H2>
      <P>{"Importa porque o resultado de um transplante capilar depende muito de quem opera. Um capítulo de revisão publicado em 2023 na Facial Plastic Surgery, dedicado às complicações da FUE, afirma que a cirurgia de restauração capilar costuma ser um procedimento ambulatorial seguro quando o médico segue os padrões da especialidade, e que o desfecho do paciente é, na maior parte, dependente do operador. Os mesmos autores relatam taxas de complicação acima da média em dois cenários: médicos sem treinamento adequado e delegação imprópria do procedimento a pessoas sem licença e sem formação."}</P>
      <P>{"É preciso ler essa afirmação com o cuidado que ela pede. Trata-se de uma revisão narrativa, escrita por dois cirurgiões a partir da experiência deles e de casos que receberam para corrigir. O resumo não traz números de incidência, e não existe ensaio clínico que sorteie pacientes entre equipes mais e menos qualificadas (seria antiético). A direção do achado, porém, se repete em todos os textos que encontrei sobre o tema."}</P>
      <P>{"Outro artigo de 2023, na mesma revista, explica o motivo técnico. A FUE é descrita ali como uma técnica feita às cegas: o instrumento entra na pele sem que o operador veja o trajeto do folículo abaixo da superfície, e lesar o enxerto é fácil. Segundo o autor, só uma técnica apurada reduz esse dano, e ela leva anos para ser dominada. Ele também critica a propaganda que apresenta a FUE como \"minimamente invasiva\", \"sem cicatriz\" ou algo que \"nem é cirurgia\". É a opinião de um único especialista, mas coincide com o que já explicamos sobre "}<Link href="/blog/tecnica-fue-transplante-capilar" className="underline">{"como funciona a técnica FUE"}</Link>{": existe cicatriz, ela só é pequena e espalhada."}</P>

      <H2 id="o-que-cabe-ao-medico">{"O que cabe ao médico no transplante capilar?"}</H2>
      <P>{"Cabe ao médico tudo o que envolve decisão clínica e ato cirúrgico. No Brasil, a Lei 12.842, de 2013 (conhecida como Lei do Ato Médico), reserva ao médico a indicação e a execução de intervenções cirúrgicas e de procedimentos invasivos, inclusive os estéticos. A ISHRS (International Society of Hair Restoration Surgery), sociedade internacional da especialidade, tem posição pública no mesmo sentido e lista as etapas que considera indelegáveis a quem não é médico. Na prática, elas são estas:"}</P>
      <OL>
        <LI><Strong>{"Diagnóstico e indicação:"}</Strong>{" definir se a queda é mesmo alopecia androgenética (a calvície de origem genética e hormonal), se existe outra doença do couro cabeludo e se a cirurgia faz sentido agora. A consulta sobre "}<Link href="/blog/quem-pode-fazer-transplante-capilar" className="underline">{"quem pode fazer transplante capilar"}</Link>{" é um ato médico, e não uma conversa de vendas."}</LI>
        <LI><Strong>{"Planejamento cirúrgico:"}</Strong>{" avaliar a área doadora, calcular quantos folículos podem sair com segurança e decidir onde eles rendem mais, pensando também na calvície que ainda pode avançar."}</LI>
        <LI><Strong>{"Desenho da linha frontal:"}</Strong>{" a posição e o formato da hairline (a linha onde o cabelo começa na testa) são decisões que o paciente vai carregar por décadas."}</LI>
        <LI><Strong>{"Anestesia e sedação:"}</Strong>{" a anestesia local é um ato médico. A sedação venosa, quando usada, fica a cargo de um anestesiologista."}</LI>
        <LI><Strong>{"Extração dos folículos:"}</Strong>{" cada passagem do punch (o instrumento cilíndrico que contorna o folículo) é uma incisão na pele. É a etapa que define quanto da área doadora será preservado."}</LI>
        <LI><Strong>{"Abertura dos canais na área receptora:"}</Strong>{" as incisões que recebem os enxertos determinam ângulo, direção e densidade dos fios. É aqui que se decide se o resultado vai parecer natural."}</LI>
        <LI><Strong>{"Condução de intercorrências e do pós-operatório:"}</Strong>{" sangramento, reação a medicamento, queda de pressão, infecção. Quem prescreve e decide é o médico."}</LI>
      </OL>
      <P>{"Uma revisão alemã de 2022, publicada na revista Der Hautarzt, resume a mesma lógica: reserva doadora suficiente, expectativa realista e planejamento individual da distribuição dos fios precisam ser avaliados em exame e consulta pessoal com o cirurgião. O texto é de um autor só e reflete a posição das sociedades de cirurgia capilar, não um estudo comparativo."}</P>

      <H2 id="o-que-a-equipe-faz">{"O que a equipe pode fazer durante a cirurgia?"}</H2>
      <P>{"A equipe assistente cuida das etapas de apoio, sempre com o médico presente e responsável. Um transplante envolve milhares de enxertos frágeis, que precisam ser conferidos, separados, hidratados e contados enquanto a cirurgia continua. Sem gente treinada para isso, o folículo passaria tempo demais fora do corpo. As tarefas habituais da equipe são:"}</P>
      <UL>
        <LI>{"preparar a sala, o instrumental e o paciente;"}</LI>
        <LI>{"recolher os enxertos já liberados pelo punch, conferir cada um com ampliação e separar por número de fios;"}</LI>
        <LI>{"manter os enxertos em solução e temperatura adequadas até o implante (tema do artigo sobre "}<Link href="/blog/armazenamento-enxertos-transplante-capilar" className="underline">{"armazenamento dos enxertos"}</Link>{");"}</LI>
        <LI>{"contar e registrar os enxertos;"}</LI>
        <LI>{"auxiliar na colocação dos enxertos, conforme a rotina de cada serviço;"}</LI>
        <LI>{"acompanhar o conforto do paciente e orientar os cuidados na saída, seguindo a prescrição médica."}</LI>
      </UL>
      <P>{"A colocação dos enxertos é a etapa em que os serviços mais variam. Um artigo de 2023 sobre técnicas de implantação, assinado por cirurgiões brasileiros, conta que a possibilidade de delegar essa fase foi um dos atrativos que popularizaram o implanter (instrumento em forma de caneta que posiciona o enxerto sem pinçá-lo) depois da difusão da FUE. O mesmo texto reconhece que a pinça permite colocação segura nas mãos de equipes bem treinadas. É uma revisão descritiva, sem comparação entre quem coloca os enxertos."}</P>
      <P>{"Não há consenso mundial sobre esse limite. As diretrizes de prática da associação indiana de cirurgiões dermatológicos, de 2021, admitem que existe debate sobre quem pode fazer o quê, qual deve ser o treinamento da equipe e qual é o papel dos técnicos. Os autores avisam que o documento estabelece padrões mínimos e que, onde falta evidência publicada, o que está escrito é consenso de especialistas. Para o paciente, a consequência prática é que o desenho da equipe muda de uma clínica para outra, e precisa ser perguntado."}</P>

      <H2 id="riscos-da-delegacao">{"Quais são os riscos quando o médico não participa das etapas principais?"}</H2>
      <P>{"Quando as etapas cirúrgicas ficam com pessoas sem formação médica, ninguém na sala tem preparo para decidir. A literatura descreve dois tipos de problema. O primeiro é técnico: extração mal distribuída, enxertos lesados, canais abertos em ângulo errado. O capítulo de 2023 sobre complicações da FUE associa esse cenário a resultados estéticos ruins e a lesões causadas pelo próprio procedimento. Boa parte disso não tem conserto simples, porque o folículo perdido não volta para a área doadora. O artigo sobre "}<Link href="/blog/sinais-transplante-capilar-mal-feito" className="underline">{"sinais de transplante capilar mal feito"}</Link>{" mostra como esses erros aparecem depois."}</P>
      <P>{"O segundo problema é clínico. Um transplante usa volumes consideráveis de anestésico local, muitas vezes com sedação, por várias horas. Reconhecer uma reação adversa e tratá-la exige formação médica."}</P>
      <P>{"Uma revisão de 2025 na Aesthetic Plastic Surgery, sobre o turismo de transplante capilar, documenta a ampliação do papel de técnicos sem supervisão, a prática de vender a cirurgia com um profissional e entregá-la com outro, e taxas de complicação que os autores chamam de alarmantes, relatadas por órgãos reguladores. O mesmo trabalho reconhece que parte dos centros entrega alta sobrevivência dos enxertos. E admite a própria limitação: como não há padronização nem registro consistente de resultados, os autores falam em um \"buraco negro de dados\". Ninguém sabe ao certo com que frequência as coisas dão errado."}</P>
      <P>{"Essa revisão usa a Turquia como estudo de caso, mas a revisão alemã de 2022 deixa claro que o problema não tem endereço fixo. Ela alerta para os riscos médicos da cirurgia em linha de montagem, feita por pessoal sem licença e sem formação médica, relatados tanto em clínicas do próprio país quanto no turismo médico. Vale para qualquer cidade. Preço e localização dizem pouco sobre uma clínica. A informação útil é quem faz o quê."}</P>

      <H2 id="o-que-perguntar">{"O que perguntar antes de marcar a cirurgia?"}</H2>
      <P>{"Pergunte, de forma direta, quem executa cada etapa e peça que a resposta venha com nome e registro profissional. Uma clínica que trabalha de forma correta responde a isso sem desconforto. Estas perguntas cobrem o essencial:"}</P>
      <OL>
        <LI>{"Quem fará a minha avaliação e o planejamento? Vou conversar com o médico antes do dia da cirurgia?"}</LI>
        <LI>{"Qual é o CRM do médico responsável, e qual a formação dele em restauração capilar? O registro pode ser conferido no site do Conselho Regional de Medicina do estado."}</LI>
        <LI>{"Quem desenha a linha frontal e quem aprova o desenho comigo?"}</LI>
        <LI>{"Quem faz a extração dos folículos?"}</LI>
        <LI>{"Quem abre os canais na área receptora?"}</LI>
        <LI>{"Quem coloca os enxertos, e com qual treinamento?"}</LI>
        <LI>{"O médico fica na sala durante todo o procedimento? Quantas cirurgias ele acompanha no mesmo dia?"}</LI>
        <LI>{"Quem aplica a sedação e monitora os meus sinais vitais?"}</LI>
        <LI>{"Se houver uma intercorrência durante ou depois da cirurgia, quem me atende e onde?"}</LI>
        <LI>{"O nome do médico responsável consta no termo de consentimento e no contrato?"}</LI>
      </OL>
      <P>{"Desconfie de respostas vagas, como \"nossa equipe é muito experiente\", e de situações em que a consulta é feita só por um consultor comercial. O checklist completo, com outros temas além da equipe, está no artigo sobre "}<Link href="/blog/o-que-perguntar-consulta-transplante-capilar" className="underline">{"o que perguntar na consulta de transplante capilar"}</Link>{"."}</P>

      <H2 id="perguntas-frequentes">{"Perguntas frequentes"}</H2>
      <H3>{"Um técnico pode fazer o transplante capilar inteiro?"}</H3>
      <P>{"Não. No Brasil, a indicação e a execução de procedimento cirúrgico são atos privativos do médico. A equipe assistente participa de etapas de apoio, sob supervisão."}</P>
      <H3>{"É normal ter várias pessoas na sala?"}</H3>
      <P>{"Sim. Uma cirurgia de milhares de enxertos precisa de várias mãos para triagem, contagem e conservação dos folículos. Equipe grande não é sinal de problema. O sinal de alerta é a ausência do médico."}</P>
      <H3>{"O médico precisa colocar pessoalmente cada enxerto?"}</H3>
      <P>{"Os serviços variam nesse ponto, e a literatura reconhece que a colocação pode contar com assistentes treinados. O que não muda é a responsabilidade: o médico define onde, em que ângulo e com que densidade os fios entram, e responde pelo resultado."}</P>
      <H3>{"Como confirmo que o profissional é médico?"}</H3>
      <P>{"Pelo número do CRM, que pode ser consultado no site do Conselho Regional de Medicina do estado ou no portal do Conselho Federal de Medicina. A consulta mostra o nome, a situação do registro e as especialidades registradas."}</P>
      <H3>{"Cirurgia feita por médico garante o resultado?"}</H3>
      <P>{"Não garante. A participação do médico reduz riscos evitáveis, mas o resultado varia de paciente para paciente, conforme a área doadora, o grau de calvície, a cicatrização e os cuidados depois da cirurgia."}</P>

      <H2 id="conclusao">{"O que fazer com essa informação?"}</H2>
      <P>{"Antes de comparar orçamentos, compare quem estará na sala. Peça o nome e o CRM de quem vai operar, entenda o que a equipe faz e confirme quem responde se algo sair do previsto. As revisões citadas aqui são, em sua maioria, opinião de especialistas, sem números sólidos por trás. Ainda assim, todas chegam à mesma recomendação: a cirurgia capilar deve ser planejada e conduzida por um médico treinado, com uma equipe que ele conhece e supervisiona."}</P>
      <P>{"No Instituto Frauches, a divisão é esta: toda a extração dos folículos e todas as pré-incisões (os canais da área receptora) são feitas exclusivamente pelos médicos. A implantação, que é a colocação de cada folículo nas pré-incisões com o implanter, fica com a nossa equipe cirúrgica, treinada para essa etapa e supervisionada pelos médicos."}</P>
      <P>{"Cada cirurgia segue o Protocolo Frauches Precision FUE®, que cobre o mapeamento da calvície, o planejamento da linha frontal, a definição da quantidade de folículos e a preservação da área doadora, em centro cirúrgico próprio e com equipe de anestesistas. A indicação e o resultado variam de paciente para paciente e dependem de avaliação médica individual."}</P>

      <Callout>{"Este conteúdo é educativo e não substitui consulta, diagnóstico ou prescrição individual. A indicação do transplante capilar, o planejamento e a condução da cirurgia dependem de avaliação médica presencial, considerando histórico, exame do couro cabeludo, riscos, contraindicações e objetivos de cada paciente. As menções à legislação têm caráter informativo e não constituem orientação jurídica."}</Callout>

      <H2 id="referencias">{"Referências"}</H2>
      <P>{"Estudos consultados no PubMed para este artigo:"}</P>
      <UL>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/37907286/" className="underline" target="_blank" rel="noopener noreferrer">{"Williams KL, El-Maghraby S. Complications with follicular unit excision. Facial Plastic Surgery, 2023."}</a>{" "}<a href="https://doi.org/10.1055/a-2201-8302" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/38092043/" className="underline" target="_blank" rel="noopener noreferrer">{"Anastassakis K. Paradigm shift from linear strip to follicular unit excision in hair restoration surgery. Facial Plastic Surgery, 2023."}</a>{" "}<a href="https://doi.org/10.1055/s-0043-1777311" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/40660034/" className="underline" target="_blank" rel="noopener noreferrer">{"Haider SA et al. The allures and the alarms of the hair transplant tourism industry. Aesthetic Plastic Surgery, 2025."}</a>{" "}<a href="https://doi.org/10.1007/s00266-025-05018-0" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/35428954/" className="underline" target="_blank" rel="noopener noreferrer">{"Finner AM. Hair transplantation, sustainably planned and performed by the physician. Der Hautarzt, 2022."}</a>{" "}<a href="https://doi.org/10.1007/s00105-022-04985-8" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/34908769/" className="underline" target="_blank" rel="noopener noreferrer">{"Mysore V et al. Hair transplant practice guidelines. Journal of Cutaneous and Aesthetic Surgery, 2021."}</a>{" "}<a href="https://doi.org/10.4103/JCAS.JCAS_104_20" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/37879353/" className="underline" target="_blank" rel="noopener noreferrer">{"Speranzini M, Souza SEG. Advancements in graft placement techniques. Facial Plastic Surgery, 2023."}</a>{" "}<a href="https://doi.org/10.1055/a-2198-2782" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI>{"Brasil. Lei nº 12.842, de 10 de julho de 2013. Dispõe sobre o exercício da Medicina."}</LI>
        <LI>{"International Society of Hair Restoration Surgery (ISHRS). Posição sobre as etapas da cirurgia de restauração capilar que devem ser realizadas por médico."}</LI>
      </UL>
      <P>{"Quer entender como seria o planejamento do seu caso e tirar essas dúvidas pessoalmente? O próximo passo é uma avaliação com o Dr. Vitor Frauches. "}<a href={WHATSAPP_URL} className="underline" target="_blank" rel="noopener noreferrer"><Strong>{"Agende pelo WhatsApp"}</Strong></a>{"."}</P>
      <P>{"Este artigo faz parte do nosso "}<Link href="/blog/guia-transplante-capilar" className="underline">{"guia completo do transplante capilar"}</Link>{"."}</P>
    </>
  );
}
