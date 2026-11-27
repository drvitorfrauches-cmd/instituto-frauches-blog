import type { PostMeta } from "@/lib/blog/types";
import Link from "next/link";
import { P, H2, H3, UL, OL, LI, Strong, Callout, Cta } from "@/components/article-ui";
import { AUTHOR, WHATSAPP_URL } from "@/lib/blog/site";

export const meta: PostMeta = {
  slug: "dermatite-seborreica-queda-de-cabelo",
  title: "Dermatite seborreica causa queda de cabelo? O que se sabe",
  description:
    "Dermatite seborreica e queda de cabelo: quando a inflamação do couro cabeludo derruba fios, como diferenciar da calvície genética e o que a ciência mostra.",
  publishedAt: "2026-11-27",
  updatedAt: "2026-11-27",
  readingTime: 10,
  category: "Calvície e tricologia",
  author: AUTHOR,
  coverImage: {
    src: "/blog/dermatite-seborreica-queda-de-cabelo/cover.jpg",
    alt: "Tricoscópio e frasco de shampoo sobre bancada clínica, representando a avaliação da dermatite seborreica e da queda de cabelo",
  },
};

export default function Article() {
  return (
    <>
      <P>{"Caspa que não vai embora, coceira, vermelhidão perto da testa e, no meio disso tudo, mais fios no ralo do que o normal. É comum o paciente chegar à consulta convencido de que a "}<Strong>{"dermatite seborreica"}</Strong>{" é a culpada pela "}<Strong>{"queda de cabelo"}</Strong>{". Às vezes ela é mesmo parte do problema. Muitas vezes, porém, ela está só dividindo o mesmo couro cabeludo com uma calvície genética que avança por conta própria."}</P>
      <P>{"Separar uma coisa da outra muda o tratamento. Neste texto explico o que a dermatite seborreica faz com o folículo, quando ela derruba fios, quando não derruba e por que tratar a inflamação raramente basta para quem já tem alopecia androgenética."}</P>

      <H2 id="resposta-direta">{"Dermatite seborreica causa queda de cabelo?"}</H2>
      <P>{"A dermatite seborreica pode aumentar a queda de cabelo, mas de forma indireta e, na maioria dos casos, reversível. A inflamação crônica do couro cabeludo e o hábito de coçar e esfregar a pele irritada favorecem um desprendimento maior de fios. Ela não destrói o folículo nem causa calvície permanente por si só. Quando a queda vem acompanhada de afinamento progressivo nas entradas e no topo, o mais provável é que exista uma alopecia androgenética junto, e essa sim precisa de tratamento próprio."}</P>
      <Cta href={WHATSAPP_URL}>{"Caspa, coceira e fios mais finos ao mesmo tempo? Na tricoscopia dá para ver se é só inflamação ou se já existe miniaturização por calvície."}</Cta>

      <H2 id="o-que-e-dermatite-seborreica">{"O que é a dermatite seborreica?"}</H2>
      <P>{"Dermatite seborreica é uma inflamação crônica da pele que aparece nas regiões com mais glândulas sebáceas: couro cabeludo, sobrancelhas, laterais do nariz, atrás das orelhas e centro do peito. No couro cabeludo, a forma leve é a caspa comum. A forma mais intensa traz placas avermelhadas, descamação amarelada e oleosa, coceira e às vezes ardor."}</P>
      <P>{"O quadro vai e volta. Costuma piorar no frio, em períodos de estresse, com noites mal dormidas e com o couro cabeludo pouco lavado. Não é contagiosa e não tem relação com falta de higiene no sentido de sujeira, embora lavar pouco favoreça as crises."}</P>
      <H3>{"Qual o papel do fungo Malassezia?"}</H3>
      <P>{"A Malassezia é uma levedura que vive normalmente na pele de todo mundo e se alimenta do sebo. Em pessoas predispostas, ela e os subprodutos que gera a partir da oleosidade disparam uma resposta inflamatória exagerada. Uma revisão de 2024 sobre o microbioma do couro cabeludo encontrou maior abundância de Malassezia, Staphylococcus e Brevibacterium em pacientes com caspa e dermatite seborreica do que em pessoas saudáveis. Como são estudos de associação, eles mostram um desequilíbrio presente na doença, sem provar sozinhos que ele seja a causa inicial."}</P>

      <H2 id="como-a-inflamacao-afeta-o-fio">{"Como a inflamação do couro cabeludo afeta o fio?"}</H2>
      <P>{"O folículo piloso, a estrutura dentro da pele que produz o fio, fica mergulhado no mesmo tecido que está inflamado. Um ambiente com inflamação persistente, coceira e microlesões de arranhadura não é o melhor lugar para o fio crescer. Na prática, isso aparece de algumas formas:"}</P>
      <UL>
        <LI><Strong>{"Queda por eflúvio:"}</Strong>{" a inflamação pode empurrar parte dos fios para a fase de queda antes da hora, o que aumenta o volume no ralo e no travesseiro por algumas semanas."}</LI>
        <LI><Strong>{"Quebra mecânica:"}</Strong>{" coçar com força e esfregar as placas para tirar a descamação parte fios na altura da haste, o que dá impressão de queda."}</LI>
        <LI><Strong>{"Cabelo com aspecto mais ralo:"}</Strong>{" a oleosidade excessiva faz os fios grudarem em mechas e deixa o couro cabeludo mais visível, mesmo sem perda real de fios."}</LI>
      </UL>
      <P>{"O ponto em comum é que nenhum desses mecanismos encolhe o folículo de forma definitiva. Quando a inflamação é controlada, a tendência é o volume de queda voltar ao padrão anterior em alguns meses. O tempo exato varia de pessoa para pessoa."}</P>

      <H2 id="dermatite-seborreica-ou-calvicie">{"Como diferenciar dermatite seborreica de calvície?"}</H2>
      <P>{"A diferença principal está no tipo de fio e no padrão de perda. A dermatite seborreica dá sintomas na pele (coceira, descamação, vermelhidão) e uma queda difusa de fios de espessura normal. A "}<Link href="/blog/alopecia-androgenetica" className="underline">{"alopecia androgenética"}</Link>{" quase não dá sintoma na pele e provoca miniaturização, ou seja, os fios vão ficando mais finos e curtos em áreas típicas, como entradas, topo e coroa."}</P>
      <OL>
        <LI><Strong>{"Onde está a perda:"}</Strong>{" calvície segue um desenho (entradas, coroa, risca alargada no topo). Queda por inflamação tende a ser espalhada."}</LI>
        <LI><Strong>{"Como são os fios que caem:"}</Strong>{" na queda por eflúvio caem fios longos, com a pontinha branca da raiz. Na calvície, os fios que sobram na região afetada são finos e de comprimentos variados."}</LI>
        <LI><Strong>{"O que a pele mostra:"}</Strong>{" placas, escamas e vermelhidão apontam para dermatite. Pele de aspecto normal com fios afinando aponta para calvície."}</LI>
        <LI><Strong>{"Como evolui:"}</Strong>{" a dermatite melhora e piora em crises. A calvície avança aos poucos, sem trégua, enquanto não é tratada."}</LI>
        <LI><Strong>{"O que a tricoscopia encontra:"}</Strong>{" o exame com aumento mostra descamação e vasos dilatados na dermatite, e variação de calibre entre os fios na calvície."}</LI>
      </OL>
      <P>{"Os dois quadros podem coexistir, e isso é frequente. Quem tem couro cabeludo oleoso e predisposição genética para calvície pode ter as duas coisas ao mesmo tempo, assim como acontece com o "}<Link href="/blog/calvicie-e-efluvio-telogeno" className="underline">{"eflúvio telógeno somado à calvície"}</Link>{". Nesse cenário, tratar só a dermatite alivia a coceira e a queda extra, mas não freia a miniaturização."}</P>

      <H3>{"Quando a suspeita deve ir além da dermatite?"}</H3>
      <P>{"Existem doenças do couro cabeludo que imitam a combinação de calvície com dermatite seborreica. Uma revisão de 2021 publicada no Journal of the American Academy of Dermatology reuniu 188 pacientes com alopecia fibrosante em padrão de distribuição (FAPD, uma forma de alopecia cicatricial que ocupa as mesmas áreas da calvície genética) e alertou que esse quadro pode ser confundido com alopecia androgenética associada à dermatite seborreica. A diferença é importante porque a FAPD destrói o folículo. O diagnóstico depende de tricoscopia e, às vezes, de biópsia guiada pelo exame. A revisão reúne apenas 15 artigos publicados, e os próprios autores apontam que os dados sobre tratamento ainda são limitados."}</P>
      <P>{"Sinais que pedem investigação mais cuidadosa: perda de óstios foliculares (a pele fica lisa, sem os pontinhos de saída dos fios), dor ou ardor intensos, crostas, pústulas, áreas que não respondem ao tratamento habitual e queda em placas bem delimitadas. Uma coorte americana de 2025, com mais de 5 milhões de pacientes de um banco de dados de planos de saúde, encontrou associação nos dois sentidos entre dermatite seborreica e alopecia areata: quem tinha uma das condições teve risco maior de receber o diagnóstico da outra. É um estudo baseado em registros de diagnóstico, que mostra associação e não causa, mas reforça que queda em placas no meio de uma dermatite merece exame."}</P>

      <H2 id="tratamento-reduz-a-queda">{"Tratar a dermatite seborreica reduz a queda de cabelo?"}</H2>
      <P>{"Tratar a dermatite costuma reduzir a parte da queda que vem da inflamação e da coceira. O efeito aparece em semanas a poucos meses e depende de manter o controle, porque a doença é crônica. A parte da queda que vem da calvície genética não responde da mesma forma e continua exigindo tratamento específico."}</P>
      <P>{"O tratamento é sempre individualizado, mas costuma envolver:"}</P>
      <UL>
        <LI><Strong>{"Shampoos antifúngicos"}</Strong>{" (cetoconazol, ciclopirox, piritionato de zinco, sulfeto de selênio), usados com tempo de contato na pele antes do enxágue."}</LI>
        <LI><Strong>{"Anti-inflamatórios tópicos"}</Strong>{" por períodos curtos nas crises, conforme prescrição."}</LI>
        <LI><Strong>{"Ajustes de rotina:"}</Strong>{" lavar com a frequência que o couro cabeludo pede (para muita gente, isso significa lavar todos os dias), evitar óleos e pomadas pesadas na raiz e não arrancar as escamas com as unhas."}</LI>
        <LI><Strong>{"Fatores que pioram o quadro:"}</Strong>{" sono, estresse e consumo de álcool entram na conversa da consulta."}</LI>
      </UL>
      <P>{"Sobre o cetoconazol tópico, uma revisão sistemática de 2019 analisou 40 ensaios clínicos randomizados com 4.566 pacientes e encontrou eficácia entre 63% e 90% para dermatite seborreica, com bom perfil de segurança (a dermatite de contato alérgica foi o efeito adverso a lembrar). Para a queda de cabelo em si, os mesmos autores concluíram que faltam estudos de qualidade. Os percentuais variam bastante entre os ensaios porque cada um usou formulação, tempo e critério de melhora diferentes."}</P>
      <P>{"Sobre dieta, uma revisão sistemática de 2024 com 13 estudos e 13.906 pacientes encontrou associação entre dermatite seborreica e níveis mais baixos de zinco e de vitaminas D e E, além de relação com consumo regular de álcool e com dieta ocidental em mulheres. A maioria dos estudos era do tipo caso-controle ou transversal, então ainda não dá para afirmar que suplementar esses nutrientes trata a dermatite. Os autores pedem ensaios de intervenção antes de qualquer recomendação."}</P>

      <H2 id="cetoconazol-na-calvicie">{"O shampoo de cetoconazol ajuda na calvície?"}</H2>
      <P>{"O shampoo de cetoconazol aparece como coadjuvante no tratamento da alopecia androgenética, com evidência mais fraca que a dos medicamentos principais. Um consenso canadense de 2025, feito por um painel de 11 médicos pelo método Delphi (rodadas de votação entre especialistas), classificou o shampoo de cetoconazol como recomendado com quase consenso, em um grupo abaixo de finasterida, dutasterida e minoxidil. Vale registrar que o documento teve coautores ligados a uma empresa de cosméticos, e que um consenso reflete a opinião de especialistas, não um ensaio clínico."}</P>
      <P>{"Na prática, isso significa que o cetoconazol pode ter lugar no plano de quem tem calvície e couro cabeludo oleoso ou descamativo, porque trata a dermatite e talvez ajude um pouco a densidade. Ele não substitui o tratamento clínico da calvície. Expliquei esse limite com mais detalhe no artigo sobre "}<Link href="/blog/shampoo-faz-nascer-cabelo" className="underline">{"se shampoo faz nascer cabelo"}</Link>{"."}</P>

      <H2 id="dermatite-e-transplante">{"Quem tem dermatite seborreica pode fazer transplante capilar?"}</H2>
      <P>{"Ter dermatite seborreica, por si só, não impede o transplante capilar. O que se busca é operar com o couro cabeludo controlado, sem placas inflamadas ativas na área receptora ou na área doadora, porque pele inflamada sangra mais, cicatriza com mais desconforto e coça mais no pós-operatório. Por isso a avaliação pré-operatória inclui o exame da pele, e uma crise ativa costuma ser tratada antes de marcar a cirurgia."}</P>
      <P>{"Também vale lembrar o motivo da cirurgia. O transplante trata a calvície genética, não a dermatite. A doença de pele continua existindo depois e segue precisando de controle com os mesmos cuidados de antes, respeitando as orientações de lavagem do pós-operatório nas primeiras semanas. Cada caso é avaliado individualmente, e a liberação para a cirurgia depende do exame presencial."}</P>

      <H2 id="quando-procurar-avaliacao">{"Quando procurar avaliação médica?"}</H2>
      <P>{"Caspa leve que melhora com shampoo comum não costuma precisar de consulta. Vale procurar avaliação quando:"}</P>
      <UL>
        <LI>{"a queda continua aumentada por mais de três meses, mesmo com a coceira controlada;"}</LI>
        <LI>{"você nota afinamento nas entradas, no topo ou na coroa, além da descamação;"}</LI>
        <LI>{"aparecem áreas sem fios, dor, crostas ou pele lisa e brilhante;"}</LI>
        <LI>{"os shampoos antifúngicos não resolvem as crises;"}</LI>
        <LI>{"existe histórico de calvície na família e você quer entender o seu risco."}</LI>
      </UL>
      <P>{"A consulta começa pela história e pelo exame com tricoscopia. Quando há suspeita de outra causa, entram exames de sangue e, em casos selecionados, biópsia."}</P>

      <H2 id="resumo">{"Resumo"}</H2>
      <UL>
        <LI>{"A dermatite seborreica pode aumentar a queda de cabelo por inflamação e coceira, e essa queda tende a ser reversível com o controle da doença."}</LI>
        <LI>{"Ela não causa calvície definitiva. Afinamento em entradas, topo e coroa sugere alopecia androgenética junto."}</LI>
        <LI>{"Tricoscopia ajuda a separar os dois quadros e a reconhecer doenças que imitam essa combinação."}</LI>
        <LI>{"Cetoconazol trata bem a dermatite e é coadjuvante, com evidência limitada, na calvície."}</LI>
        <LI>{"Dermatite controlada não impede transplante capilar."}</LI>
      </UL>

      <Callout>{"Este conteúdo é educativo e não substitui consulta, diagnóstico ou prescrição individual. Coceira, descamação e queda de cabelo podem ter causas diferentes, e algumas exigem investigação específica. Medicamentos e procedimentos devem ser indicados após avaliação médica, considerando histórico, exame do couro cabeludo, riscos e objetivos do paciente. Os resultados variam de pessoa para pessoa."}</Callout>
      <H2 id="referencias">{"Referências"}</H2>
      <UL>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/30668185/" className="underline" target="_blank" rel="noopener noreferrer">{"Choi FD et al. Topical ketoconazole: a systematic review of current dermatological applications and future developments. J Dermatolog Treat, 2019."}</a> <a href="https://doi.org/10.1080/09546634.2019.1573309" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/40986632/" className="underline" target="_blank" rel="noopener noreferrer">{"Landells I et al. A Canadian Consensus on Androgenetic Alopecia: Approach and Management. J Cutan Med Surg, 2025."}</a> <a href="https://doi.org/10.1177/12034754251368849" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/39073596/" className="underline" target="_blank" rel="noopener noreferrer">{"Shah RR et al. Scalp microbiome: a guide to better understanding scalp diseases and treatments. Arch Dermatol Res, 2024."}</a> <a href="https://doi.org/10.1007/s00403-024-03235-2" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/31926219/" className="underline" target="_blank" rel="noopener noreferrer">{"Griggs J et al. Fibrosing alopecia in a pattern distribution. J Am Acad Dermatol, 2021."}</a> <a href="https://doi.org/10.1016/j.jaad.2019.12.056" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/41144761/" className="underline" target="_blank" rel="noopener noreferrer">{"Meng S et al. Bidirectional Associations Between Seborrheic Dermatitis and Epithelial Barrier Diseases: A Retrospective Cohort Study. Allergy, 2026."}</a> <a href="https://doi.org/10.1111/all.70112" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/39102684/" className="underline" target="_blank" rel="noopener noreferrer">{"Woolhiser E et al. Nutrition, Obesity, and Seborrheic Dermatitis: Systematic Review. JMIR Dermatol, 2024."}</a> <a href="https://doi.org/10.2196/50143" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
      </UL>
      <P>{"Se a sua dúvida é se a queda que você está vendo é inflamação, calvície ou as duas coisas, o próximo passo é uma avaliação com tricoscopia com o Dr. Vitor Frauches. "}<a href={WHATSAPP_URL} className="underline" target="_blank" rel="noopener noreferrer"><Strong>{"Agende pelo WhatsApp"}</Strong></a>{"."}</P>
      <P>{"Este artigo faz parte do nosso "}<Link href="/blog/guia-calvicie-masculina" className="underline">{"guia completo sobre calvície masculina"}</Link>{"."}</P>
    </>
  );
}
