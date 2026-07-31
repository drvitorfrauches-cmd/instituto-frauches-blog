import type { PostMeta } from "@/lib/blog/types";
import Link from "next/link";
import { P, H2, UL, LI, Strong, Callout, Cta} from "@/components/article-ui";
import { AUTHOR, WHATSAPP_URL } from "@/lib/blog/site";

export const meta: PostMeta = {
  slug: "exames-antes-do-transplante-capilar",
  title: "Exames antes do transplante capilar",
  description:
    "Veja quais exames laboratoriais, avaliações clínicas e cuidados pré-operatórios costumam ser pedidos antes de um transplante capilar.",
  publishedAt: "2026-07-25",
  updatedAt: "2026-07-31",
  readingTime: 4,
  category: "Transplante capilar",
  author: AUTHOR,
  coverImage: {
    src: "/blog/exames-antes-do-transplante-capilar/cover.jpg",
    alt: "Tubos de exame laboratorial organizados em uma bancada clínica, representando os exames pré-operatórios do transplante capilar",
  },
};

export default function Article() {
  return (
    <>
      <P>{"Transplante capilar é uma cirurgia, e como toda cirurgia, exige uma avaliação pré-operatória cuidadosa antes de marcar a data. Essa etapa existe para garantir que o procedimento seja seguro para aquele paciente específico, não é burocracia. Veja o que costuma entrar nessa avaliação."}</P>
      <Cta href={WHATSAPP_URL}>{"Quer saber quais desses exames se aplicam ao seu caso? Isso já é definido na consulta de avaliação inicial."}</Cta>

      <H2 id="exames-laboratoriais">{"Exames laboratoriais"}</H2>
      <P>{"O conjunto exato de exames varia conforme a idade e o histórico de saúde do paciente, mas em geral inclui hemograma completo, coagulograma (fundamental antes de qualquer procedimento cirúrgico), glicemia, sorologias e avaliação da função hepática e renal. Esses exames ajudam a identificar qualquer condição que precise ser controlada antes da cirurgia, ou que exija ajuste na conduta anestésica."}</P>

      <H2 id="avaliacao-clinica">{"Avaliação clínica e capilar"}</H2>
      <P>{"Além dos exames laboratoriais, a avaliação clínica inclui o exame físico do couro cabeludo (às vezes com tricoscopia, que amplia a imagem em até 100 vezes para analisar a densidade e a miniaturização dos fios), o mapeamento do padrão de calvície e a análise da qualidade da área doadora. É nessa etapa que se define se a queda está ativa ou estabilizada, o que muda diretamente a indicação cirúrgica."}</P>

      <H2 id="medicacoes">{"Medicações em uso"}</H2>
      <P>{"É importante informar todas as medicações e suplementos em uso na consulta pré-operatória. Alguns medicamentos, principalmente anticoagulantes e certos suplementos que afetam a coagulação, precisam ser suspensos temporariamente antes da cirurgia, sempre sob orientação médica, nunca por conta própria."}</P>

      <H2 id="avaliacao-cardiologica">{"Quando entra a avaliação cardiológica"}</H2>
      <P>{"Pacientes com histórico cardiovascular, mais de 45 anos, ou que vão passar por sedação venosa mais prolongada costumam precisar de uma avaliação cardiológica prévia, incluindo eletrocardiograma e, em alguns casos, avaliação com o cardiologista. Isso garante que o procedimento seja conduzido com segurança do ponto de vista anestésico, principalmente em cirurgias que podem durar várias horas."}</P>

      <H2 id="por-que-essa-etapa-importa">{"Por que pular essa etapa é um risco"}</H2>
      <P>{"Clínicas que dispensam essa avaliação, ou que marcam a cirurgia sem pedir exames prévios, estão abrindo mão de uma camada de segurança que existe justamente para identificar riscos antes que eles se tornem um problema durante o procedimento. Uma condição não diagnosticada, como um distúrbio de coagulação, pode transformar uma cirurgia planejada e segura numa situação de risco desnecessário. A avaliação pré-operatória não é uma formalidade, é parte da segurança da cirurgia."}</P>

      <H2 id="cuidados-pre-operatorios">{"Cuidados nos dias antes da cirurgia"}</H2>
      <UL>
        <LI>{"Evitar consumo de álcool nos dias que antecedem o procedimento."}</LI>
        <LI>{"Seguir o jejum orientado pela equipe, no caso de sedação venosa."}</LI>
        <LI>{"Evitar cortes de cabelo muito curtos antes da avaliação, para facilitar o planejamento visual."}</LI>
        <LI>{"Comunicar qualquer sintoma novo (febre, infecção, mal-estar) antes da data marcada."}</LI>
      </UL>

      <H2 id="validade-dos-exames">{"Por quanto tempo os exames valem"}</H2>
      <P>{"A maioria dos exames laboratoriais tem validade de 30 a 90 dias, dependendo do protocolo da clínica e do tipo de exame. Se a cirurgia for remarcada para uma data muito posterior à avaliação inicial, pode ser necessário repetir alguns exames para garantir que os resultados ainda refletem o estado atual de saúde do paciente no dia do procedimento."}</P>

      <H2 id="tricoscopia-detalhe">{"O papel da tricoscopia na avaliação pré-operatória"}</H2>
      <P>{"A tricoscopia merece destaque à parte porque muda a qualidade do planejamento cirúrgico. Ao ampliar a imagem do couro cabeludo em até 100 vezes, ela permite enxergar o que o olho nu não vê: a miniaturização inicial dos fios, a densidade folicular real por centímetro quadrado, e até sinais de outras condições do couro cabeludo que poderiam interferir na cirurgia. Sem esse exame, o planejamento acaba se baseando mais em estimativa visual do que em dado objetivo, o que reduz a precisão do número de folículos calculado para o procedimento."}</P>

      <H2 id="reavaliacao-se-mudar-algo">{"O que fazer se algo mudar entre a avaliação e a cirurgia"}</H2>
      <P>{"Se, entre a data da avaliação e a da cirurgia, o paciente tiver algum problema de saúde novo, começar uma medicação diferente ou passar por qualquer procedimento médico relevante, o ideal é comunicar a equipe antes da data marcada, mesmo que pareça algo pequeno. Em muitos casos isso não muda nada no planejamento, mas cabe à equipe médica avaliar, não ao paciente decidir sozinho que \"não é importante\"."}</P>

      <H2 id="jejum-e-medicacao-no-dia">{"No dia da cirurgia"}</H2>
      <P>{"No dia do procedimento, além do jejum orientado para os casos com sedação, é comum pedir que o paciente venha com roupas confortáveis e fáceis de vestir (evitando blusas que precisem passar pela cabeça), sem produtos no cabelo e acompanhado, já que o efeito da sedação pode persistir por algumas horas depois da alta. Essas orientações específicas variam de clínica para clínica e costumam ser passadas por escrito na consulta de planejamento."}</P>

      <Callout>{"Este conteúdo tem caráter educativo e não substitui uma consulta médica. A lista exata de exames e cuidados pré-operatórios é definida individualmente, conforme a saúde e o histórico de cada paciente."}</Callout>

      <P>{"Se você está pensando em fazer um transplante capilar e quer saber quais exames seriam pedidos no seu caso, "}<a href={WHATSAPP_URL} className="underline" target="_blank" rel="noopener noreferrer"><Strong>{"agende uma avaliação pelo WhatsApp"}</Strong></a>{"."}</P>
      <P>{"Este artigo faz parte do nosso "}<Link href="/blog/guia-transplante-capilar" className="underline">{"guia sobre transplante capilar"}</Link>{"."}</P>
    </>
  );
}
