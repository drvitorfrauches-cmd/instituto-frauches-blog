import type { PostMeta } from "@/lib/blog/types";
import Link from "next/link";
import { P, H2, H3, UL, OL, LI, Strong, Callout, Cta } from "@/components/article-ui";
import { AUTHOR, WHATSAPP_URL } from "@/lib/blog/site";

export const meta: PostMeta = {
  slug: "exames-para-queda-de-cabelo",
  title: "Exames para queda de cabelo: quando e quais fazer",
  description:
    "Entenda quais exames para queda de cabelo existem, como a tricoscopia funciona, quando pedir exames de sangue e quando a biópsia do couro cabeludo é indicada.",
  publishedAt: "2026-08-07",
  updatedAt: "2026-08-20",
  readingTime: 7,
  category: "Calvície e tricologia",
  author: AUTHOR,
  coverImage: {
    src: "/blog/exames-para-queda-de-cabelo/cover.jpg",
    alt: "Tricoscópio e instrumentos de diagnóstico capilar organizados sobre uma bandeja clínica",
  },
};

export default function Article() {
  return (
    <>
      <P>{"Perceber mais fios no travesseiro ou no ralo do banho não diz, sozinho, se você está com calvície ou apenas passando por uma queda temporária. Essa resposta só vem de uma investigação clínica real, e existem "}<Strong>{"exames para queda de cabelo"}</Strong>{" específicos que ajudam a diferenciar as duas situações e a identificar a causa por trás do problema. Neste artigo explico quais são esses exames, o que cada um mostra e em que momento cada um costuma ser pedido."}</P>
      <Cta href={WHATSAPP_URL}>{"Já reparou queda acima do normal e quer confirmar a causa? Uma tricoscopia mostra em poucos minutos se o padrão é compatível com calvície."}</Cta>

      <H2 id="quando-vale-a-pena-investigar">{"Quando vale a pena investigar a queda de cabelo com exames?"}</H2>
      <P>{"Vale procurar avaliação quando a queda deixa de ser pontual e passa a mudar a aparência do cabelo: mais fios finos aparecendo no lugar dos grossos, entradas ou coroa perdendo densidade de forma perceptível, ou queda que persiste por mais de três meses sem melhora. Uma quantidade maior de fios caindo por um período curto (após febre alta, estresse agudo ou pós-parto, por exemplo) costuma ser fisiológica e nem sempre exige investigação imediata, mas quando o padrão persiste ou já existe afinamento visível, os exames deixam de ser opcionais e passam a orientar o tratamento."}</P>
      <P>{"Um médico especialista em tricologia consegue, muitas vezes, já formar uma hipótese só pela história clínica e pelo exame físico do couro cabeludo. Os exames complementares entram para confirmar essa hipótese com dados objetivos, o que muda o tipo de conduta recomendada."}</P>

      <H2 id="quais-exames-diagnosticam-a-queda">{"Quais exames ajudam a diagnosticar a queda de cabelo?"}</H2>
      <P>{"Não existe um único exame padrão para toda queda capilar. A investigação combina, conforme o caso, os seguintes recursos:"}</P>
      <OL>
        <LI><Strong>{"Tricoscopia (dermatoscopia capilar):"}</Strong>{" exame de imagem que amplia o couro cabeludo em até 100 vezes para avaliar densidade, miniaturização dos fios e sinais de inflamação. É o exame inicial mais usado."}</LI>
        <LI><Strong>{"Teste de tração (pull test):"}</Strong>{" o médico puxa suavemente um grupo de fios para verificar quantos se soltam, o que ajuda a diferenciar queda ativa de queda estável."}</LI>
        <LI><Strong>{"Exames de sangue:"}</Strong>{" avaliam causas metabólicas e hormonais que podem estar por trás da queda, como deficiência de ferro ou alteração da tireoide."}</LI>
        <LI><Strong>{"Biópsia do couro cabeludo:"}</Strong>{" reservada para casos em que o diagnóstico permanece incerto depois dos exames anteriores, ou quando há suspeita de uma condição inflamatória específica."}</LI>
      </OL>
      <P>{"Na prática, a maioria dos pacientes resolve a dúvida diagnóstica só com consulta, tricoscopia e, se indicado, um painel de exames de sangue. A biópsia é a exceção, não a regra."}</P>

      <H2 id="como-funciona-a-tricoscopia">{"Como funciona a tricoscopia (dermatoscopia capilar)?"}</H2>
      <P>{"A tricoscopia usa um dermatoscópio ou um tricoscópio digital para fotografar o couro cabeludo com grande ampliação, permitindo enxergar detalhes invisíveis a olho nu. É um exame indolor, feito no consultório, sem necessidade de preparo prévio."}</P>
      <P>{"Nessa imagem ampliada, o médico observa três sinais principais:"}</P>
      <UL>
        <LI>{"Variação no diâmetro dos fios (miniaturização): fios mais finos misturados com fios grossos costumam indicar calvície de padrão genético em andamento."}</LI>
        <LI>{"Número de fios por unidade folicular: unidades com apenas um fio, em vez de dois ou três, sugerem perda de densidade progressiva."}</LI>
        <LI>{"Sinais de inflamação, descamação ou vermelhidão ao redor dos folículos, que podem apontar para uma causa diferente da calvície genética, como uma dermatose do couro cabeludo ou uma alopecia cicatricial."}</LI>
      </UL>
      <P>{"Esse padrão de miniaturização é justamente o que diferencia a "}<Link href="/blog/alopecia-androgenetica" className="underline">{"calvície (alopecia androgenética)"}</Link>{" de uma queda temporária: na queda temporária os fios que voltam a crescer mantêm o diâmetro original, enquanto na calvície cada ciclo capilar produz um fio progressivamente mais fino."}</P>

      <H2 id="quais-exames-de-sangue-sao-pedidos">{"Quais exames de sangue são pedidos na investigação da queda de cabelo?"}</H2>
      <P>{"O painel de sangue não serve para confirmar calvície genética (isso é papel da tricoscopia), serve para descartar ou identificar causas associadas que agravam a queda ou explicam um quadro diferente. Os mais pedidos costumam ser:"}</P>
      <UL>
        <LI><Strong>{"Ferritina:"}</Strong>{" reserva de ferro no corpo. Níveis baixos, mesmo sem anemia declarada, estão associados a queda aumentada, principalmente em mulheres."}</LI>
        <LI><Strong>{"TSH e T4 livre:"}</Strong>{" avaliam a função da tireoide. Tanto o hipotireoidismo quanto o hipertireoidismo podem causar queda difusa."}</LI>
        <LI><Strong>{"Vitamina D:"}</Strong>{" a deficiência é comum na população em geral e tem relação com o ciclo de crescimento capilar."}</LI>
        <LI><Strong>{"Zinco:"}</Strong>{" participa da síntese de queratina; deficiências mais raras também entram na investigação de queda difusa."}</LI>
        <LI><Strong>{"Hormônios androgênicos:"}</Strong>{" em mulheres com sinais de calvície associados a outras alterações (acne, irregularidade menstrual, excesso de pelos), o médico pode investigar quadros hormonais como a síndrome dos ovários policísticos."}</LI>
      </UL>
      <P>{"Nem todo paciente precisa de todos esses exames. A escolha depende do que a história clínica e o exame físico já sugerem, então o painel é individualizado, não um pacote genérico pedido para qualquer pessoa que chega com queixa de queda."}</P>

      <H2 id="quando-a-biopsia-e-necessaria">{"Quando a biópsia do couro cabeludo é necessária?"}</H2>
      <P>{"A biópsia do couro cabeludo é indicada quando a tricoscopia e os exames de sangue não fecham o diagnóstico, ou quando existe suspeita de uma alopecia cicatricial (um grupo de condições em que o folículo é destruído de forma definitiva por um processo inflamatório, diferente da calvície comum)."}</P>
      <P>{"O procedimento remove um pequeno fragmento de pele do couro cabeludo, sob anestesia local, para análise em laboratório de patologia. É um exame pouco frequente na rotina de quem já tem um quadro compatível com calvície androgenética clássica, mas se torna importante quando os sinais não são típicos: queda em placas, vermelhidão persistente, coceira intensa ou cicatriz visível na região afetada."}</P>

      <H2 id="exames-diferenciam-calvicie-de-outras-causas">{"Os exames conseguem diferenciar calvície de outras causas de queda?"}</H2>
      <P>{"Sim, essa é justamente a função central da investigação. A combinação de história clínica, exame físico e tricoscopia consegue diferenciar, na maioria dos casos, a calvície de padrão genético (que evolui aos poucos, com miniaturização progressiva em áreas típicas como entradas e coroa) do "}<Link href="/blog/queda-de-cabelo-e-normal" className="underline">{"eflúvio telógeno"}</Link>{", uma queda difusa e temporária, geralmente ligada a um evento de estresse físico ou emocional recente, febre alta, cirurgia, parto ou mudança abrupta de peso."}</P>
      <P>{"A diferença prática é importante para o tratamento: na calvície genética a conduta costuma envolver medicação de uso contínuo e, dependendo do grau, avaliação para transplante capilar; no eflúvio telógeno, a queda geralmente se resolve sozinha em alguns meses depois que a causa é identificada e tratada, sem necessidade de intervenção cirúrgica."}</P>

      <H2 id="resultado-muda-tratamento">{"O resultado dos exames muda o tratamento recomendado?"}</H2>
      <P>{"Muda, e é exatamente por isso que a etapa de exames não deve ser pulada. Um resultado de ferritina baixa direciona para reposição de ferro antes de qualquer outra conduta. Uma tireoide alterada pede acompanhamento endocrinológico junto com o cuidado capilar. Já um padrão de miniaturização compatível com calvície genética direciona para as opções específicas dessa condição, que vão de medicação (como minoxidil e finasterida/dutasterida) até o transplante capilar, dependendo do grau de perda já instalado e da área doadora disponível."}</P>
      <P>{"Chegar à consulta já com os exames recentes em mãos (quando o paciente já os tiver feito) ajuda a acelerar essa etapa, mas não é obrigatório: o médico pode solicitar o que for necessário durante a própria avaliação. Em tratamentos que já estão em andamento, repetir a tricoscopia a cada alguns meses também serve para acompanhar se a densidade está estável, melhorando ou ainda em queda, o que ajuda a ajustar a conduta ao longo do tempo."}</P>

      <H2 id="o-que-levar-para-a-consulta">{"O que levar para a consulta de investigação da queda de cabelo?"}</H2>
      <P>{"Alguns itens simples tornam a primeira consulta bem mais objetiva, principalmente quando a queda já dura meses e o paciente quer entender de uma vez o que está acontecendo:"}</P>
      <UL>
        <LI>{"Exames de sangue recentes, se já tiver feito algum nos últimos meses (ferro, tireoide, vitamina D e outros)."}</LI>
        <LI>{"Fotos do couro cabeludo tiradas em momentos diferentes, se existirem, para o médico comparar a evolução da densidade."}</LI>
        <LI>{"Lista de medicamentos e suplementos em uso, incluindo anticoncepcional, já que alguns fármacos influenciam o ciclo capilar."}</LI>
        <LI>{"Histórico familiar de calvície, tanto do lado paterno quanto materno."}</LI>
        <LI>{"Uma linha do tempo aproximada de quando a queda aumentou e se houve algum evento associado (parto, cirurgia, febre alta, dieta restritiva, período de estresse intenso)."}</LI>
      </UL>
      <P>{"Nenhum desses itens é obrigatório para marcar a avaliação, mas quanto mais informação o médico tiver de partida, mais direcionado fica o exame físico e a escolha dos exames complementares."}</P>

      <H2 id="perguntas-frequentes">{"Perguntas frequentes"}</H2>
      <H3>{"A tricoscopia dói ou machuca?"}</H3>
      <P>{"Não. É um exame indolor, feito apenas com aproximação do aparelho ao couro cabeludo, sem necessidade de anestesia ou preparo prévio."}</P>
      <H3>{"Preciso pedir os exames antes da consulta?"}</H3>
      <P>{"Não é obrigatório. O médico pode solicitar os exames necessários durante a própria avaliação, mas exames recentes que o paciente já tiver em mãos ajudam a agilizar o processo."}</P>
      <H3>{"Plano de saúde costuma cobrir exames para queda de cabelo?"}</H3>
      <P>{"Depende do plano e da cobertura contratada. Exames de sangue costumam ter cobertura mais comum do que a tricoscopia em consultório particular, então vale confirmar diretamente com o convênio."}</P>
      <H3>{"Quanto tempo leva para sair o resultado dos exames de sangue?"}</H3>
      <P>{"Varia conforme o laboratório e o exame específico, mas a maioria dos exames de rotina fica pronta entre um e poucos dias úteis."}</P>
      <H3>{"Aplicativo de celular substitui a tricoscopia feita em consultório?"}</H3>
      <P>{"Não. Ferramentas caseiras não têm a mesma precisão de ampliação e padronização de um exame feito com equipamento clínico, interpretado por um médico especialista."}</P>

      <Callout>{"Este conteúdo tem caráter educativo e não substitui uma consulta médica. Apenas uma avaliação presencial, com histórico clínico completo e os exames pertinentes ao seu caso, pode confirmar a causa da sua queda de cabelo e indicar o tratamento adequado."}</Callout>

      <P>{"Se você quer investigar sua queda de cabelo com uma avaliação completa, incluindo tricoscopia, "}<a href={WHATSAPP_URL} className="underline" target="_blank" rel="noopener noreferrer"><Strong>{"agende uma avaliação pelo WhatsApp"}</Strong></a>{" com o Dr. Vitor Frauches."}</P>
      <P>{"Este artigo faz parte do nosso "}<Link href="/blog/guia-calvicie-masculina" className="underline">{"guia completo sobre calvície masculina"}</Link>{"."}</P>
    </>
  );
}
