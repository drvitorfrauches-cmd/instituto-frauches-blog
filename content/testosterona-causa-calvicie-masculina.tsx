import type { PostMeta } from "@/lib/blog/types";
import Link from "next/link";
import { P, H2, H3, UL, OL, LI, Strong, Callout, Cta } from "@/components/article-ui";
import { AUTHOR, WHATSAPP_URL } from "@/lib/blog/site";

export const meta: PostMeta = {
  slug: "testosterona-causa-calvicie-masculina",
  title: "Testosterona causa calvície masculina? O papel do DHT",
  description:
    "Testosterona causa calvície masculina? Entenda o papel do DHT, da genética e da reposição hormonal, e o que os estudos em humanos realmente mostram.",
  publishedAt: "2026-10-14",
  updatedAt: "2026-10-15",
  readingTime: 11,
  category: "Calvície e tricologia",
  author: AUTHOR,
  coverImage: {
    src: "/blog/testosterona-causa-calvicie-masculina/cover.jpg",
    alt: "Tubos de coleta de sangue em um suporte, um microscópio e um caderno sobre uma mesa clara, representando a investigação hormonal na calvície masculina",
  },
};

export default function Article() {
  return (
    <>
      <H2 id="resposta-direta">{"Testosterona causa calvície masculina?"}</H2>
      <P>{"Não diretamente. A calvície masculina (alopecia androgenética) depende de dois fatores que precisam coincidir: uma sensibilidade genética dos folículos e a ação da di-hidrotestosterona (DHT), um hormônio derivado da testosterona. A testosterona em si é só a matéria-prima. Quem decide se o folículo vai miniaturizar é a herança genética de cada pessoa."}</P>
      <P>{"Por isso, ter testosterona normal ou até alta não significa que o cabelo vai cair, e ter testosterona baixa não protege ninguém. A pergunta mais útil é outra: esse hormônio está chegando a um folículo que já é sensível a ele? Se a resposta for sim, o afinamento tende a acontecer, em ritmo que varia de pessoa para pessoa."}</P>
      <Cta href={WHATSAPP_URL}>{"Usa reposição de testosterona, ou suspeita que seus hormônios estejam ligados ao afinamento do cabelo? O Dr. Vitor avalia o padrão da sua queda e explica o que realmente depende de hormônio."}</Cta>
      <H2 id="testosterona-e-dht">{"Qual é a diferença entre testosterona e DHT?"}</H2>
      <P>{"A testosterona é o principal hormônio androgênico masculino, produzido sobretudo nos testículos. A DHT (di-hidrotestosterona) é formada a partir dela pela enzima 5-alfa-redutase, que está presente em tecidos como a pele e o couro cabeludo. A DHT se liga ao receptor de andrógeno com mais força que a testosterona."}</P>
      <P>{"Na alopecia androgenética, as células da papila dérmica (a estrutura que comanda o crescimento do fio) expressam receptores de andrógeno e a enzima que gera DHT. Quando a DHT ativa esses receptores em um folículo geneticamente suscetível, o ciclo de crescimento encurta e o fio vai ficando mais curto e fino a cada ciclo, até virar um fio quase invisível. Esse processo se chama miniaturização."}</P>
      <P>{"Uma revisão de 2025 sobre as opções de tratamento resume bem a lógica: a DHT é o principal andrógeno envolvido, e é por isso que finasterida e dutasterida, que reduzem a DHT no folículo, estão entre os tratamentos centrais. Os detalhes desses medicamentos estão nos artigos sobre "}<Link href="/blog/finasterida-para-calvicie" className="underline">{"finasterida"}</Link>{" e "}<Link href="/blog/dutasterida-para-calvicie" className="underline">{"dutasterida"}</Link>{"."}</P>
      <H2 id="por-que-testosterona-normal">{"Por que homens com testosterona normal ficam carecas?"}</H2>
      <P>{"Porque o gatilho da calvície masculina é a sensibilidade do folículo, não a quantidade de hormônio circulante. Dois irmãos com a mesma testosterona no exame podem ter cabelos muito diferentes, simplesmente porque herdaram folículos com sensibilidade diferente à DHT."}</P>
      <P>{"Essa sensibilidade também é regional. Os folículos da frente, das entradas e do topo costumam ser sensíveis, enquanto os da nuca e das laterais costumam ser resistentes. É essa diferença que torna o transplante capilar possível: o fio da área doadora leva consigo a resistência e continua crescendo quando é implantado em outra região. Para entender o lado hereditário, veja também "}<Link href="/blog/calvicie-genetica-pode-ser-evitada" className="underline">{"calvície genética pode ser evitada?"}</Link></P>
      <H2 id="o-que-os-estudos-mostram">{"O que os estudos mostram sobre níveis de testosterona e calvície?"}</H2>
      <P>{"Os resultados são inconsistentes, e isso reforça que o nível de testosterona isolado não explica a calvície. Um estudo caso-controle de 2016, feito em um hospital da Índia, comparou 57 homens de 19 a 30 anos com calvície precoce e 32 homens sem perda de cabelo. O grupo com calvície teve testosterona total um pouco mais alta (24,61 contra 20,57 nmol/L), mas os autores não encontraram associação entre os valores hormonais e a gravidade da calvície. A amostra é pequena e vem de um único centro."}</P>
      <P>{"Outro estudo caso-controle, de 2009, com 80 homens de 18 a 35 anos com calvície de grau III ou maior na escala de Hamilton-Norwood e 80 controles pareados, encontrou o oposto para a testosterona livre: os valores foram maiores nos controles do que nos homens com calvície. Esse trabalho chamou mais atenção para a resistência à insulina, que foi maior no grupo com calvície."}</P>
      <P>{"Dois estudos pequenos, com métodos diferentes e resultados em direções opostas, não permitem concluir que testosterona mais alta cause calvície. O que sustentam, no máximo, é que o hormônio circulante não é o fator que separa quem fica careca de quem não fica."}</P>
      <H2 id="ensaio-com-dutasterida">{"O que o ensaio com dutasterida revela sobre testosterona e DHT?"}</H2>
      <P>{"Um ensaio clínico randomizado com 416 homens de 21 a 45 anos, com 24 semanas de duração, mostrou que baixar a DHT melhora o cabelo mesmo quando a testosterona sobe. Os participantes receberam diferentes doses de dutasterida, finasterida 5 mg ou placebo. A dutasterida aumentou a contagem de fios na área avaliada de forma dependente da dose, e a dose de 2,5 mg foi superior à finasterida nas semanas 12 e 24."}</P>
      <P>{"O detalhe que importa para esta pergunta é hormonal. Com a dutasterida, os níveis de DHT no couro cabeludo e no sangue caíram e os de testosterona aumentaram, também de forma dose-dependente. Ou seja, mais testosterona circulando e, ao mesmo tempo, melhora do cabelo. É a DHT, e não a testosterona, que acompanha a miniaturização. A limitação é o prazo curto de 24 semanas, e o desenho não permite extrapolar para uso prolongado."}</P>
      <H2 id="reposicao-de-testosterona">{"Reposição de testosterona acelera a calvície?"}</H2>
      <P>{"Pode acelerar em quem já tem predisposição, mas não cria calvície em quem não tem folículos sensíveis. Esse é o raciocínio fisiológico, e é o que se observa na prática clínica. Ao aumentar a testosterona, aumenta também a quantidade de substrato para a formação de DHT. Em um couro cabeludo geneticamente suscetível, isso pode antecipar ou intensificar um afinamento que já viria em algum momento."}</P>
      <P>{"Vale ser honesto sobre o estado da evidência. Na busca que fizemos no PubMed para este artigo, não encontramos ensaio clínico randomizado que tenha avaliado o cabelo de homens cisgênero em reposição de testosterona como desfecho principal. Os dados disponíveis vêm de populações específicas, como pessoas transgênero em terapia com testosterona, em que a alopecia androgenética é um efeito colateral conhecido do tratamento. Esses grupos ajudam a entender o mecanismo, mas não podem ser transpostos automaticamente para outros contextos."}</P>
      <P>{"Por isso, a resposta honesta para quem usa ou pensa em usar testosterona é: o risco é individual, depende do seu histórico familiar e do estado atual do seu couro cabeludo, e deve ser conversado com o médico que prescreve e com quem avalia o cabelo."}</P>
      <H2 id="o-que-fazer-com-trt">{"O que fazer se você usa testosterona e percebeu o cabelo afinando?"}</H2>
      <P>{"O primeiro passo é investigar, e não suspender ou ajustar o hormônio por conta própria. A reposição tem indicação médica própria, e interrompê-la sem acompanhamento pode trazer problemas maiores que o cabelo. Uma sequência razoável é esta:"}</P>
      <OL>
        <LI>{"Avise o médico que prescreve a testosterona sobre o afinamento, em vez de mudar dose ou intervalo por conta própria."}</LI>
        <LI>{"Procure uma avaliação capilar com tricoscopia, para confirmar se é alopecia androgenética (com miniaturização) ou outra causa, como eflúvio telógeno."}</LI>
        <LI>{"Leve a lista completa do que usa: testosterona, anabolizantes, suplementos, medicamentos e a dose prescrita."}</LI>
        <LI>{"Discuta com o médico as opções de tratamento da queda e se elas combinam com o seu esquema hormonal e seus planos de fertilidade."}</LI>
        <LI>{"Registre fotos periódicas do topo, da linha frontal e da coroa, sempre com a mesma luz, para acompanhar a evolução com objetividade."}</LI>
      </OL>
      <P>{"Quando a causa é outra, o afinamento pode ter relação com tireoide, ferro, vitamina D ou estresse. Entender quais exames fazem sentido ajuda a não atribuir tudo ao hormônio. Veja "}<Link href="/blog/exames-para-queda-de-cabelo" className="underline">{"exames para queda de cabelo"}</Link>{"."}</P>
      <H2 id="tratamento-em-quem-usa-testosterona">{"É possível tratar a calvície enquanto se usa testosterona?"}</H2>
      <P>{"Sim, mas a escolha do tratamento muda o cálculo. O minoxidil age no folículo sem passar pela via hormonal, e por isso costuma ser mais simples de combinar com um esquema de testosterona. Um ensaio randomizado de 2026, com 46 pessoas transgênero em testosterona (23 por grupo), testou minoxidil sublingual contra placebo por 24 semanas. Na região frontal, o grupo do minoxidil teve ganho de 15,7 fios por cm² em relação ao placebo, sem diferença no vértice nesse prazo, e o medicamento não alterou a testosterona. A limitação é que a calvície dos participantes era leve, o que dificulta detectar mudanças."}</P>
      <P>{"Já os medicamentos que bloqueiam a conversão em DHT, como a finasterida, interferem na mesma via que a testosterona usa em alguns tecidos. Há um relato de série de casos com apenas três homens transgênero em que a finasterida melhorou o estágio da calvície, mas duas participantes tiveram retorno da menstruação, o que mostra que o bloqueio pode reduzir parte dos efeitos desejados da testosterona. Com três pessoas, isso é só um sinal de alerta, não uma recomendação. Qualquer combinação desse tipo exige acompanhamento de quem prescreve a testosterona e de quem trata o cabelo."}</P>
      <H2 id="anabolizantes">{"E os anabolizantes?"}</H2>
      <P>{"Os anabolizantes androgênicos seguem a mesma lógica do hormônio, só que em doses e combinações muito maiores que as de uma reposição médica. Em quem tem predisposição, a carga androgênica elevada pode antecipar a calvície, e o afinamento costuma estar entre os efeitos relatados por quem os utiliza."}</P>
      <P>{"Este artigo não incentiva nem orienta o uso dessas substâncias, que têm riscos cardiovasculares, hepáticos, hormonais e de fertilidade muito além do cabelo. Se você usa e notou queda, o caminho é contar isso com franqueza ao médico, porque a avaliação correta depende dessa informação."}</P>
      <H2 id="transplante-e-testosterona">{"Quem usa testosterona pode fazer transplante capilar?"}</H2>
      <P>{"Pode ser avaliado, mas o planejamento precisa considerar que a calvície pode continuar evoluindo. O fio transplantado vem da área doadora, que é resistente à DHT, e mantém essa característica. Os fios nativos que ficam ao redor, porém, seguem sensíveis e podem continuar afinando, o que muda o desenho da cirurgia e o número de enxertos reservados para o futuro."}</P>
      <P>{"Em quem faz reposição ou usa outros andrógenos, a avaliação inclui o quanto a calvície já avançou, se ela está estabilizada e como será o acompanhamento depois da cirurgia. A decisão depende de avaliação médica individual e presencial. Para os critérios gerais de indicação, veja "}<Link href="/blog/quem-pode-fazer-transplante-capilar" className="underline">{"quem pode fazer transplante capilar"}</Link>{"."}</P>
      <H2 id="mitos">{"Quais mitos sobre testosterona e cabelo circulam por aí?"}</H2>
      <UL>
        <LI><Strong>{"\"Testosterona alta causa calvície.\""}</Strong>{" Não é regra. Os estudos de nível hormonal são inconsistentes e a sensibilidade do folículo pesa mais."}</LI>
        <LI><Strong>{"\"Testosterona baixa protege o cabelo.\""}</Strong>{" Também não. Baixar testosterona não é tratamento para calvície e traz outros problemas."}</LI>
        <LI><Strong>{"\"Quem tem muito pelo no corpo fica careca mais cedo.\""}</Strong>{" A pelagem corporal e o cabelo respondem de formas opostas aos andrógenos. Uma coisa não prevê a outra."}</LI>
        <LI><Strong>{"\"Se eu parar a testosterona, o cabelo volta.\""}</Strong>{" Folículos já miniaturizados nem sempre recuperam o calibre. A decisão de suspender é médica e envolve muito mais que o cabelo."}</LI>
        <LI><Strong>{"\"Exame de testosterona diz se vou ficar careca.\""}</Strong>{" Não diz. O exame avalia o hormônio circulante, não a sensibilidade dos seus folículos."}</LI>
      </UL>
      <H2 id="perguntas-frequentes">{"Perguntas frequentes"}</H2>
      <H3>{"Dosar testosterona ajuda a investigar queda de cabelo?"}</H3>
      <P>{"Em homens sem outros sinais, geralmente não. O diagnóstico da calvície masculina é clínico e feito pela tricoscopia. A dosagem hormonal entra quando há sinais de desequilíbrio, como alterações sexuais, de humor ou metabólicas, ou em mulheres com suspeita de hiperandrogenismo."}</P>
      <H3>{"Testosterona causa calvície em mulheres?"}</H3>
      <P>{"Em mulheres, a calvície tem outras particularidades e frequentemente um padrão difuso, sem os recuos frontais típicos. Quando há excesso de andrógenos, como em algumas doenças hormonais, o afinamento pode acontecer. Por isso a avaliação feminina é diferente e inclui investigação própria."}</P>
      <H3>{"Posso usar testosterona e minoxidil juntos?"}</H3>
      <P>{"Em geral não há interação direta entre os dois, e o minoxidil não depende da via hormonal. Ainda assim, a combinação, a forma de uso e a dose precisam ser definidas por um médico, porque o minoxidil oral tem efeitos próprios sobre pressão e retenção de líquidos."}</P>
      <H3>{"O cabelo que caiu por causa da testosterona volta?"}</H3>
      <P>{"Depende do estágio. Folículos em miniaturização, que ainda existem, podem responder ao tratamento. Áreas lisas e avançadas dificilmente recuperam cobertura só com medicamento, e podem exigir cirurgia."}</P>
      <H3>{"Quanto tempo leva para a testosterona afetar o cabelo?"}</H3>
      <P>{"O ciclo capilar é lento e o tempo varia conforme a predisposição de cada pessoa. Não existe prazo único: o afinamento costuma aparecer de forma gradual, ao longo de meses, e é por isso que o acompanhamento com fotos e tricoscopia importa."}</P>
      <H2 id="conclusao">{"Conclusão"}</H2>
      <P>{"A testosterona é parte da história, mas não é a vilã sozinha. A calvície masculina nasce do encontro entre DHT e folículos geneticamente sensíveis, e o nível de testosterona no exame não prevê quem vai ficar careca. Em quem já tem predisposição, aumentar a carga androgênica pode acelerar o processo, e isso merece uma conversa franca antes e durante qualquer reposição."}</P>
      <P>{"O melhor caminho é diagnosticar bem, entender o seu padrão e tratar cedo, porque tratar enquanto ainda há fio miniaturizado oferece mais chance de preservar o que existe."}</P>
      <Callout>{"Este conteúdo é educativo e não substitui consulta, diagnóstico ou prescrição individual. Hormônios e medicamentos para a queda de cabelo devem ser indicados, ajustados ou suspensos apenas por médico, após avaliação do histórico, exame do couro cabeludo e dos riscos. O resultado dos tratamentos varia de paciente para paciente."}</Callout>
      <H2 id="referencias">{"Referências"}</H2>
      <UL>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/41331712/" className="underline" target="_blank" rel="noopener noreferrer">{"Shin JW, Huh CH. Updates in Treatment for Androgenetic Alopecia. Annals of Dermatology, 2025."}</a>{" "}<a href="https://doi.org/10.5021/ad.25.042" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/17110217/" className="underline" target="_blank" rel="noopener noreferrer">{"Olsen EA et al. Dual 5alpha-reductase inhibition in male pattern hair loss: dutasteride versus finasteride. Journal of the American Academy of Dermatology, 2006."}</a>{" "}<a href="https://doi.org/10.1016/j.jaad.2006.05.007" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/27304785/" className="underline" target="_blank" rel="noopener noreferrer">{"Sanke S et al. Hormonal profile of early androgenetic alopecia in men. JAMA Dermatology, 2016."}</a>{" "}<a href="https://doi.org/10.1001/jamadermatol.2016.1776" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/19094069/" className="underline" target="_blank" rel="noopener noreferrer">{"González-González JG et al. Androgenetic alopecia and insulin resistance in young men. Clinical Endocrinology, 2009."}</a>{" "}<a href="https://doi.org/10.1111/j.1365-2265.2008.03508.x" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/42140362/" className="underline" target="_blank" rel="noopener noreferrer">{"Tang GT et al. Sublingual minoxidil for androgenetic alopecia in transgender people receiving testosterone. Journal of the American Academy of Dermatology, 2026."}</a>{" "}<a href="https://doi.org/10.1016/j.jaad.2026.05.020" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/41024043/" className="underline" target="_blank" rel="noopener noreferrer">{"Tominaga Y et al. Finasteride for transgender men with androgenetic alopecia: a case series. Journal of Medical Case Reports, 2025."}</a>{" "}<a href="https://doi.org/10.1186/s13256-025-05562-y" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
      </UL>
      <P>{"Se a sua dúvida é sobre o que está acontecendo com o seu cabelo, o próximo passo é uma avaliação com o Dr. Vitor Frauches. "}<a href={WHATSAPP_URL} className="underline" target="_blank" rel="noopener noreferrer"><Strong>{"Agende pelo WhatsApp"}</Strong></a>{"."}</P>
      <P>{"Este artigo faz parte do nosso "}<Link href="/blog/guia-calvicie-masculina" className="underline">{"guia completo sobre calvície masculina"}</Link>{"."}</P>
    </>
  );
}
