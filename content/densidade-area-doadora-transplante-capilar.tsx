import type { PostMeta } from "@/lib/blog/types";
import Link from "next/link";
import { P, H2, H3, UL, OL, LI, Strong, Callout, Cta } from "@/components/article-ui";
import { AUTHOR, WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/blog/site";

export const meta: PostMeta = {
  slug: "densidade-area-doadora-transplante-capilar",
  title: "Densidade da área doadora: como é calculada antes do transplante",
  description: "Como se calcula a densidade da área doadora antes do transplante capilar: unidades foliculares por cm², calibre dos fios e quanto dá para extrair com segurança.",
  publishedAt: "2026-11-17",
  updatedAt: "2026-11-17",
  readingTime: 11,
  category: "Técnica FUE",
  author: AUTHOR,
  coverImage: {
    src: "/blog/densidade-area-doadora-transplante-capilar/cover.jpg",
    alt: "Tricoscópio digital, gabarito de um centímetro quadrado, régua e diagrama da cabeça sobre mesa clínica, representando o cálculo da densidade da área doadora",
  },
};

export default function Article() {
  return (
    <>
      <P>{"A densidade da área doadora é o número que mais pesa no planejamento de um transplante capilar, e quase nenhum paciente sabe qual é o seu. Ela diz quantas unidades foliculares existem em cada centímetro quadrado da nuca e das laterais, e é a partir dela que se descobre quantos enxertos podem sair dali sem deixar a região rala."}</P>
      <P>{"Na consulta, muita gente pergunta \"quantos fios eu tenho atrás?\" esperando uma resposta no olho. Não dá. A nuca pode parecer cheia com o cabelo comprido e mostrar outra realidade com uma lente de aumento. Abaixo explico como essa medida é feita, o que entra na conta além do número de folículos e por que o mesmo valor pode significar coisas diferentes em pessoas diferentes."}</P>

      <H2 id="resposta-direta">{"Resposta direta"}</H2>
      <P>{"Para calcular a densidade da área doadora, o médico usa a tricoscopia (exame com lente de aumento do couro cabeludo) e conta, em pequenas janelas de um centímetro quadrado, quantas unidades foliculares existem, quantos fios cada uma tem e qual é a espessura desses fios. Faz isso em vários pontos da nuca e das laterais, multiplica pela área da zona segura e chega a uma estimativa da reserva total. Só uma parte dessa reserva pode ser extraída sem afinamento visível, e é essa parte, não o total, que define o tamanho possível da cirurgia."}</P>

      <Cta href={WHATSAPP_URL}>{"Quer saber quantas unidades foliculares a sua nuca tem de verdade? Na avaliação, a densidade da área doadora é medida por tricoscopia, ponto a ponto."}</Cta>

      <H2 id="o-que-e-densidade-da-area-doadora">{"O que é a densidade da área doadora?"}</H2>
      <P>{"Densidade da área doadora é a quantidade de unidades foliculares por centímetro quadrado (UF/cm²) na região da nuca e das laterais da cabeça, a parte do couro cabeludo que costuma resistir à calvície androgenética. Unidade folicular é o agrupamento natural em que o cabelo nasce: de um a quatro fios saindo pelo mesmo poro, com glândula sebácea e tecido de sustentação em volta. Na técnica FUE (Follicular Unit Extraction, a extração folicular individual), cada enxerto retirado é uma dessas unidades."}</P>
      <P>{"Existem duas formas de expressar densidade, e confundir as duas gera muita conta errada:"}</P>
      <UL>
        <LI><Strong>{"Densidade de unidades foliculares"}</Strong>{": quantas unidades existem por cm². É o número que importa para saber quantos enxertos dá para retirar."}</LI>
        <LI><Strong>{"Densidade de fios"}</Strong>{": quantos fios existem por cm². É sempre maior que a anterior, porque muitas unidades têm dois, três ou quatro fios."}</LI>
      </UL>
      <P>{"A relação entre as duas (fios por unidade) já é uma informação de planejamento. Duas nucas com o mesmo número de unidades podem render volumes bem diferentes se uma tiver mais unidades de três fios e a outra mais unidades de um fio só."}</P>

      <H2 id="como-se-mede-a-densidade-da-area-doadora">{"Como se mede a densidade da área doadora na prática?"}</H2>
      <P>{"A densidade da área doadora é medida com tricoscopia digital, que amplia o couro cabeludo e permite contar unidades e fios dentro de uma área conhecida. Contar a olho nu, ou por foto de celular, não tem precisão suficiente para planejar uma cirurgia."}</P>
      <P>{"Uma revisão alemã de 2026 sobre transplante microcirúrgico cita a tricoscopia digital e as medições assistidas por inteligência artificial como ferramentas que ajudam a avaliar a área doadora e a receptora, além de afastar doenças inflamatórias do couro cabeludo que contraindicariam a cirurgia. É uma revisão narrativa, sem dados próprios, mas resume bem o papel do exame."}</P>
      <P>{"No meu planejamento, a sequência costuma ser esta:"}</P>
      <OL>
        <LI><Strong>{"Aparar uma pequena janela"}</Strong>{": fios bem curtos deixam ver a saída de cada unidade no couro cabeludo. Com cabelo comprido, unidades vizinhas se sobrepõem na imagem."}</LI>
        <LI><Strong>{"Escolher vários pontos"}</Strong>{": nuca central, regiões mais altas e mais baixas da faixa doadora e as duas laterais. A densidade não é igual em toda a cabeça, e medir um ponto só esconde regiões mais fracas."}</LI>
        <LI><Strong>{"Contar dentro de 1 cm²"}</Strong>{": o software do tricoscópio delimita a área, e a contagem separa unidades de um, dois, três e quatro fios."}</LI>
        <LI><Strong>{"Medir o calibre"}</Strong>{": a espessura dos fios, que aparece com a ampliação."}</LI>
        <LI><Strong>{"Procurar fios miniaturizados"}</Strong>{": fios bem mais finos que os vizinhos podem indicar que aquela região também está sendo afetada pela calvície."}</LI>
        <LI><Strong>{"Registrar e comparar"}</Strong>{": as imagens ficam no prontuário e servem de referência para avaliações futuras."}</LI>
      </OL>

      <H2 id="por-que-o-calibre-importa">{"Por que o calibre do fio muda tanto a conta?"}</H2>
      <P>{"O calibre (a espessura de cada fio) muda a cobertura visual tanto quanto o número de fios. Um fio grosso cobre mais couro cabeludo do que um fio fino, então uma área doadora com densidade moderada e fios grossos pode render um resultado mais cheio do que outra com densidade alta e fios finos."}</P>
      <P>{"Um estudo transversal de 2025 com 122 sul-africanos de cabelo afro, todos jovens (média de 20,9 anos), mediu por tricoscopia a densidade de fios, a espessura, a proporção de fios finos e grossos e a densidade de unidades foliculares. A densidade média ficou em 139,1 fios por cm² e a espessura média em 62,59 micrômetros, com variação importante entre as regiões da cabeça. A região occipital, a nuca, foi a que teve a maior proporção de unidades de três fios. Os autores concluíram que os valores dessa população diferem dos de outros grupos e que referências próprias são necessárias para o planejamento do transplante."}</P>
      <P>{"O estudo tem limites claros: uma única população, jovem, sem calvície e sem acompanhamento cirúrgico. Ainda assim, ele mostra um ponto que vale para qualquer paciente. Não existe um \"número normal\" universal de densidade, e comparar a própria nuca com uma tabela genérica da internet pode levar a conclusões erradas nos dois sentidos."}</P>
      <P>{"Além do calibre, outras características do fio mexem na cobertura: fios ondulados e cacheados ocupam mais volume, e pouco contraste entre a cor do cabelo e a da pele faz a mesma densidade parecer maior."}</P>

      <H2 id="como-a-densidade-vira-numero-de-enxertos">{"Como a densidade da área doadora vira um número de enxertos?"}</H2>
      <P>{"A densidade da área doadora vira número de enxertos por uma conta em etapas: área útil em cm² vezes unidades por cm² dá a reserva total, e dessa reserva só uma fração pode ser retirada sem a nuca ficar visivelmente rala. O raciocínio é este:"}</P>
      <OL>
        <LI><Strong>{"Delimitar a zona segura"}</Strong>{": a faixa da nuca e das laterais que deve continuar estável mesmo com o avanço da calvície."}</LI>
        <LI><Strong>{"Medir a área dessa zona"}</Strong>{" em centímetros quadrados."}</LI>
        <LI><Strong>{"Multiplicar pela densidade média"}</Strong>{" de unidades foliculares encontrada na tricoscopia. Isso dá a reserva total estimada."}</LI>
        <LI><Strong>{"Aplicar o limite de extração"}</Strong>{": só uma parte das unidades pode sair sem afinamento perceptível."}</LI>
        <LI><Strong>{"Separar o que fica para o futuro"}</Strong>{": a calvície pode progredir, e uma segunda cirurgia pode ser necessária anos depois."}</LI>
        <LI><Strong>{"Comparar com a área receptora"}</Strong>{": só aqui se descobre se a reserva cobre o objetivo do paciente ou se é preciso priorizar uma região."}</LI>
      </OL>
      <P>{"O quarto passo é o mais incompreendido. Uma revisão de 2023, assinada por cirurgiões dos Estados Unidos, da Argentina e do Brasil, lembra que na FUE apenas uma porcentagem dos fios da zona segura pode ser retirada antes que a área doadora fique visivelmente rala, enquanto na técnica de faixa (FUT) todas as unidades dentro da faixa removida são aproveitadas. Os autores defendem combinar os dois métodos em alguns pacientes com calvície avançada, mas a própria revisão reconhece que a experiência com a variante técnica que propõem ainda é limitada."}</P>
      <P>{"Como esse cálculo conversa com o tamanho da área calva é assunto do artigo sobre "}<Link href="/blog/quantos-fios-transplante-capilar" className="underline">{"quantos fios são necessários no transplante capilar"}</Link>{"."}</P>

      <H2 id="quanto-se-retira-por-centimetro-quadrado">{"Quantas unidades se retiram por centímetro quadrado na extração?"}</H2>
      <P>{"Não existe um número único de extração por centímetro quadrado que sirva para todos. O valor depende da densidade inicial, do calibre e de quanto a região precisa continuar parecendo cheia. A lógica é sempre a mesma: retirar de forma distribuída, deixando unidades suficientes entre os pontos de extração para que a falta não apareça."}</P>
      <P>{"Um estudo retrospectivo chinês de 2024, com 248 pacientes (223 mulheres e 25 homens) operados para reconstrução da linha frontal com FUE de fios longos, ilustra como isso é registrado na prática. A densidade de extração planejada foi de 15 a 25 unidades por cm², com taxa média de transecção (fios cortados durante a extração) de 3,9%. Aos 9 meses, a sobrevivência média dos enxertos foi de 93,1%, sem complicações graves na primeira semana."}</P>
      <P>{"Esses números descrevem aquele grupo, com aquela técnica e aquele objetivo. O estudo é retrospectivo, sem grupo de comparação, com pacientes asiáticos e majoritariamente mulheres. Ele não vira regra para outra nuca. O que ele reforça é o princípio: a extração tem uma densidade planejada, definida antes da cirurgia, e não é \"tirar o máximo possível\"."}</P>
      <P>{"No Instituto Frauches, a definição da quantidade de folículos e a preservação da área doadora fazem parte do Protocolo Frauches Precision FUE®. A extração é feita pelos médicos e distribuída por toda a zona segura, para não concentrar retiradas num mesmo ponto."}</P>

      <H2 id="o-que-acontece-quando-se-ignora-a-densidade">{"O que acontece quando a densidade da área doadora é ignorada?"}</H2>
      <P>{"Quando a densidade da área doadora é ignorada, o risco principal é a superextração: retirar mais unidades do que a região suporta e deixar a nuca com aspecto ralo ou falhado, às vezes de forma permanente. Uma revisão de 2026 sobre complicações da FUE lista o esgotamento da área doadora ao lado de alterações de pigmentação, cicatrizes hipertróficas e cistos como complicações da região doadora, e cita a densidade de unidades foliculares entre as variáveis técnicas que influenciam o risco."}</P>
      <P>{"A mesma revisão lembra que essas complicações são raras, mas têm consequência importante, e que seleção cuidadosa do paciente e técnica refinada são as principais formas de prevenção. É uma revisão narrativa da literatura, não um estudo com pacientes próprios, então não traz uma taxa de ocorrência que se possa aplicar a um caso individual."}</P>
      <P>{"Alguns erros de avaliação aparecem com frequência quando o assunto é densidade:"}</P>
      <UL>
        <LI>{"Medir um único ponto da nuca e assumir que toda a faixa é igual."}</LI>
        <LI>{"Avaliar só com o cabelo comprido, sem ampliação."}</LI>
        <LI>{"Contar fios e chamar de unidades, inflando a reserva."}</LI>
        <LI>{"Planejar apenas a primeira cirurgia, sem guardar reserva para a progressão da calvície."}</LI>
        <LI>{"Não procurar miniaturização na própria área doadora."}</LI>
      </UL>

      <H2 id="miniaturizacao-muda-o-calculo">{"Fios finos na área doadora mudam o cálculo?"}</H2>
      <P>{"Sim. Fios finos misturados a fios grossos na área doadora podem ser sinal de miniaturização, e uma região em miniaturização tende a perder densidade com o tempo. Nesse caso, parte das unidades contadas hoje pode não estar lá daqui a alguns anos, e o planejamento precisa ser mais conservador."}</P>
      <P>{"Um estudo prospectivo de 2021 comparou a tricoscopia de 104 pacientes com alopecia androgenética e 80 pessoas saudáveis, com imagens das regiões frontal, occipital e temporais. Nos pacientes com calvície, havia mais unidades com apenas um fio, mais pontos amarelos (óstios foliculares vazios) e uma proporção maior de fios finos, abaixo de 0,03 mm. É um estudo de centro único e de amostra modesta, mas ajuda a entender o que o exame procura: unidades que \"perderam\" fios e fios que afinaram."}</P>
      <P>{"Esse tema tem um artigo próprio, sobre "}<Link href="/blog/miniaturizacao-area-doadora-transplante-capilar" className="underline">{"miniaturização na área doadora"}</Link>{". E quando a densidade medida já é baixa, as opções de planejamento estão em "}<Link href="/blog/area-doadora-fraca-transplante-capilar" className="underline">{"área doadora fraca: ainda dá para fazer transplante capilar?"}</Link>{"."}</P>

      <H2 id="perguntas-frequentes">{"Perguntas frequentes"}</H2>

      <H3>{"Dá para saber a densidade da área doadora por foto?"}</H3>
      <P>{"Uma foto ajuda na triagem inicial, mas não substitui a tricoscopia. Sem ampliação e sem uma área delimitada, não é possível contar unidades, separar fios por unidade nem medir calibre com a precisão que o planejamento pede."}</P>

      <H3>{"A densidade é igual dos dois lados da cabeça?"}</H3>
      <P>{"Nem sempre. A densidade varia entre a nuca central, as laterais e as partes mais altas e mais baixas da faixa doadora. Por isso a medida é feita em vários pontos, e não em um só."}</P>

      <H3>{"Densidade alta garante um bom resultado?"}</H3>
      <P>{"Não garante. Densidade alta aumenta a reserva, mas o resultado depende também do calibre, do desenho da linha frontal, da sobrevivência dos enxertos, da progressão da calvície e da resposta individual de cada paciente."}</P>

      <H3>{"A densidade da área doadora muda com a idade?"}</H3>
      <P>{"Pode mudar, principalmente quando há miniaturização na própria área doadora. Uma revisão alemã de 2026 recomenda que o planejamento seja sustentável justamente porque a alopecia pode progredir e o cabelo doador é limitado, e indica tratamento clínico para preservar os fios nativos."}</P>

      <H3>{"Depois de uma primeira cirurgia, a densidade é medida de novo?"}</H3>
      <P>{"Deve ser. Depois de uma FUE, a densidade da área doadora fica menor do que era, e qualquer nova cirurgia parte do que sobrou, não do valor original."}</P>

      <H2 id="conclusao">{"Conclusão"}</H2>
      <P>{"Saber a densidade da área doadora é saber o tamanho do orçamento antes de planejar o gasto. Unidades por centímetro quadrado, fios por unidade, calibre e sinais de miniaturização, medidos em vários pontos, dizem quanto pode ser retirado agora e quanto precisa ficar para o futuro. É essa conta, feita com exame e não a olho, que separa um planejamento seguro de uma promessa de números."}</P>

      <Callout>{"Este conteúdo é educativo e não substitui consulta médica. A indicação de transplante capilar, a quantidade de enxertos e a técnica de extração dependem de avaliação médica individual e presencial, com exame do couro cabeludo. Os estudos citados descrevem grupos de pacientes e não garantem resultado individual: o resultado varia de paciente para paciente."}</Callout>

      <H2 id="referencias">{"Referências"}</H2>
      <UL>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/39775520/" className="underline" target="_blank" rel="noopener noreferrer">{"Dlova NC et al. Baseline trichoscopic values for afro-textured hair in indigenous South Africans show lower density and unique features. Int J Dermatol, 2025."}</a>{" "}<a href="https://doi.org/10.1111/ijd.17633" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/37879352/" className="underline" target="_blank" rel="noopener noreferrer">{"Keene SA et al. Follicular Unit Excision-Linear Ellipse Donor Harvesting Technique. Facial Plast Surg, 2023."}</a>{" "}<a href="https://doi.org/10.1055/a-2198-2703" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/38197285/" className="underline" target="_blank" rel="noopener noreferrer">{"Jin M et al. Long-hair follicular unit excision enhances the cosmetic results of hairline restoration: A retrospective study in Chinese recipients. J Cosmet Dermatol, 2024."}</a>{" "}<a href="https://doi.org/10.1111/jocd.16136" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/41709896/" className="underline" target="_blank" rel="noopener noreferrer">{"Romera de Blas C et al. Complications in follicular unit excision hair transplantation: current evidence and practical approaches. Front Med, 2026."}</a>{" "}<a href="https://doi.org/10.3389/fmed.2026.1750989" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/34219869/" className="underline" target="_blank" rel="noopener noreferrer">{"Kasumagic-Halilovic E. Trichoscopic Findings in Androgenetic Alopecia. Med Arch, 2021."}</a>{" "}<a href="https://doi.org/10.5455/medarh.2021.75.109-111" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/43012980/" className="underline" target="_blank" rel="noopener noreferrer">{"Finner AM, Ognjenovic M. Microsurgical hair transplantation: safe and sustainable. Dermatologie (Heidelb), 2026."}</a>{" "}<a href="https://doi.org/10.1007/s00105-026-05806-y" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
      </UL>

      <P>{"Quer conhecer a densidade da sua área doadora antes de decidir qualquer coisa? Agende uma avaliação com tricoscopia com o Dr. Vitor Frauches "}<a href={WHATSAPP_URL} className="underline" target="_blank" rel="noopener noreferrer"><Strong>{"pelo WhatsApp"}</Strong></a>{". Para acompanhar outros conteúdos sobre planejamento cirúrgico, siga também o "}<a href={INSTAGRAM_URL} className="underline" target="_blank" rel="noopener noreferrer">{"Instagram"}</a>{"."}</P>
      <P>{"Este artigo faz parte do nosso "}<Link href="/blog/guia-transplante-capilar" className="underline">{"guia completo do transplante capilar"}</Link>{"."}</P>
    </>
  );
}
