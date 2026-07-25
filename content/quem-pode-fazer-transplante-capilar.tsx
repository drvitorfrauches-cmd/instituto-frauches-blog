import type { PostMeta } from "@/lib/blog/types";
import Link from "next/link";
import { P, H2, UL, LI, Strong, Callout } from "@/components/article-ui";
import { AUTHOR, WHATSAPP_URL } from "@/lib/blog/site";

export const meta: PostMeta = {
  slug: "quem-pode-fazer-transplante-capilar",
  title: "Quem é candidato ao transplante capilar?",
  description:
    "Idade, grau da calvície, área doadora e casos que exigem tratamento prévio: entenda quem pode fazer transplante capilar e quando vale a pena esperar.",
  publishedAt: "2026-07-25",
  readingTime: 5,
  category: "Transplante capilar",
  author: AUTHOR,
  coverImage: {
    src: "/blog/quem-pode-fazer-transplante-capilar/cover.jpg",
    alt: "Mesa de consulta médica com prancheta e formulário em branco, representando a avaliação de candidatura ao transplante capilar",
  },
};

export default function Article() {
  return (
    <>
      <P>
        Nem todo mundo que tem calvície é candidato ideal a um transplante
        capilar agora. Isso não é má notícia, é só um jeito de dizer que a
        indicação certa depende de alguns critérios técnicos, e entender
        esses critérios evita que o paciente chegue numa consulta com
        expectativa desalinhada. Explico abaixo o que a gente avalia.
      </P>

      <H2 id="idade">Idade</H2>
      <P>
        Não existe uma idade mínima rígida e universal, mas geralmente
        evitamos operar pacientes muito jovens, sobretudo antes dos 25 anos.
        O motivo é que a calvície ainda pode estar em evolução nessa faixa
        etária, e planejar uma linha frontal hoje sem saber como o padrão vai
        progredir nos próximos anos aumenta o risco de um resultado que
        pareça desalinhado com a calvície futura. Em pacientes mais jovens
        com queda ativa, costuma fazer mais sentido começar pelo tratamento
        clínico e reavaliar a cirurgia depois.
      </P>

      <H2 id="grau-da-calvicie">Grau da calvície</H2>
      <P>
        O padrão e o estágio da calvície (avaliados por escalas como a de
        Norwood, no caso masculino) ajudam a definir se o transplante já é
        indicado, e quantas sessões podem ser necessárias. Calvícies muito
        avançadas, com pouca área doadora disponível em relação à área a
        cobrir, exigem um planejamento mais cauteloso: às vezes o objetivo
        realista é reconstruir a região frontal com prioridade, não cobrir
        100% do couro cabeludo numa única cirurgia.
      </P>

      <H2 id="area-doadora">Área doadora</H2>
      <P>
        A área doadora, geralmente a região posterior e lateral da cabeça, é
        o que viabiliza tecnicamente a cirurgia. Pacientes com pouca
        densidade nessa região, seja por herança genética, seja por
        transplantes anteriores malfeitos, têm menos folículos disponíveis
        para transplantar, o que limita o resultado possível. Avaliar a
        qualidade e a densidade da área doadora é uma das primeiras coisas
        que fazemos numa consulta.
      </P>

      <H2 id="mulheres">Mulheres</H2>
      <P>
        Mulheres também podem ser candidatas a transplante capilar,
        principalmente em casos de perda de densidade frontal ou difusa.
        A diferença é que a calvície feminina costuma ter um padrão mais
        difuso (perda espalhada, não concentrada em entradas ou coroa), o
        que exige uma avaliação minuciosa da causa da queda antes de indicar
        cirurgia, já que fatores hormonais e nutricionais têm um peso maior
        nesses casos.
      </P>

      <H2 id="casos-que-devem-tratar-antes">Casos que devem tratar a queda antes de operar</H2>
      <P>
        Existe uma diferença importante entre calvície estabilizada e queda
        ativa. Quando o paciente ainda está perdendo cabelo nativo de forma
        acelerada, geralmente por alopecia androgenética não tratada,
        transplantar antes de controlar essa queda é um risco: os fios
        nativos ao redor da área transplantada continuam caindo, e o
        resultado visual piora com o tempo, mesmo que a cirurgia em si tenha
        sido bem-feita. Por isso, em boa parte dos casos, o primeiro passo é
        estabilizar a queda com tratamento clínico e só depois planejar a
        cirurgia.
      </P>
      <UL>
        <LI>Pacientes com queda ativa e não tratada.</LI>
        <LI>Pacientes com condições de couro cabeludo não diagnosticadas (infecções, dermatoses).</LI>
        <LI>Pacientes com expectativa de resultado incompatível com a área doadora disponível.</LI>
      </UL>

      <H2 id="saude-geral">Condições de saúde que entram na avaliação</H2>
      <P>
        Além do padrão de calvície, a avaliação pré-operatória considera a
        saúde geral do paciente, já que se trata de uma cirurgia com
        anestesia local e, na maioria dos casos, sedação venosa. Condições
        como diabetes não controlado, problemas de coagulação ou doenças
        cardiovasculares descompensadas podem exigir controle prévio, ou em
        alguns casos, contraindicar a cirurgia temporariamente até que a
        condição esteja estabilizada. O uso de determinados medicamentos
        também entra nessa conversa, porque alguns precisam ser ajustados ou
        suspensos antes do procedimento.
      </P>

      <H2 id="expectativa-realista">Expectativa realista é parte da candidatura</H2>
      <P>
        Ser tecnicamente elegível para a cirurgia não é a mesma coisa que
        ter uma expectativa compatível com o que a área doadora consegue
        entregar. Parte importante da consulta é justamente alinhar isso: se
        o paciente busca densidade máxima numa região extensa, mas a área
        doadora disponível é limitada, o resultado real vai ficar aquém do
        imaginado, mesmo com uma cirurgia tecnicamente bem executada. Por
        isso, um bom atendimento inclui explicar com clareza o que é
        fisicamente possível antes de qualquer cirurgia ser marcada, em vez
        de simplesmente aceitar qualquer expectativa do paciente.
      </P>

      <H2 id="tipos-de-fio">O tipo de fio também entra na avaliação</H2>
      <P>
        Cabelos lisos, ondulados, cacheados e afro têm comportamentos
        diferentes durante a extração e a implantação, o que influencia o
        planejamento cirúrgico. Fios muito cacheados ou crespos, por
        exemplo, costumam ter uma curvatura sob a pele que exige mais
        atenção na hora da extração, para não danificar o folículo. Isso não
        impede a cirurgia, mas reforça por que a experiência da equipe com
        diferentes tipos de cabelo é um critério relevante na escolha de
        onde operar, principalmente para pacientes com fios cacheados ou
        afro.
      </P>

      <H2 id="quando-vale-esperar">Quando vale a pena esperar mais um pouco</H2>
      <P>
        Além da queda ativa, existem outras situações em que esperar faz
        mais sentido do que operar imediatamente: recuperação recente de
        outra cirurgia, uso de medicação que interfere na cicatrização,
        gravidez e amamentação, ou simplesmente incerteza sobre o resultado
        desejado. Nenhuma dessas situações costuma ser definitiva, mas
        merecem ser conversadas abertamente numa avaliação, em vez de
        simplesmente marcar uma data sem considerar o momento certo para
        aquele paciente específico.
      </P>

      <Callout>
        Este conteúdo tem caráter educativo e não substitui uma consulta
        médica. Só uma avaliação presencial, com análise da área doadora e
        do padrão de calvície, define se e quando o transplante capilar é
        indicado para cada caso.
      </Callout>

      <P>
        A forma mais segura de saber se você é candidato é uma avaliação
        médica individual, que já leva em conta seu histórico e o estágio
        atual da sua calvície. Se você já pesquisou sobre{" "}
        <Link href="/blog/transplante-capilar-fue-o-que-e" className="underline">
          como funciona a técnica FUE
        </Link>{" "}
        e quer saber se o seu caso se encaixa,{" "}
        <a href={WHATSAPP_URL} className="underline" target="_blank" rel="noopener noreferrer">
          <Strong>agende sua avaliação pelo WhatsApp</Strong>
        </a>
        .
      </P>
    </>
  );
}
