import type { PostMeta } from "@/lib/blog/types";
import Link from "next/link";
import { P, H2, H3, UL, OL, LI, Strong, Callout, Cta } from "@/components/article-ui";
import { AUTHOR, WHATSAPP_URL } from "@/lib/blog/site";

export const meta: PostMeta = {
  slug: "calvicie-e-efluvio-telogeno",
  title: "Calvície e eflúvio telógeno ao mesmo tempo: é possível?",
  description:
    "Calvície e eflúvio telógeno podem acontecer juntos. Entenda como reconhecer a sobreposição, como a tricoscopia ajuda no diagnóstico e o que muda no tratamento.",
  publishedAt: "2026-11-02",
  updatedAt: "2026-11-06",
  readingTime: 11,
  category: "Calvície e tricologia",
  author: AUTHOR,
  coverImage: {
    src: "/blog/calvicie-e-efluvio-telogeno/cover.jpg",
    alt: "Dermatoscópio ao lado de recipientes de vidro com fios finos e grossos, representando o diagnóstico de calvície e eflúvio telógeno",
  },
};

export default function Article() {
  return (
    <>
      <P>{"O cabelo começou a cair muito depois de uma doença, de uma cirurgia ou de um período difícil. Meses depois, a queda diminuiu, mas as entradas ou o topo da cabeça continuam mais ralos do que antes. Esse é um cenário típico de quem tem "}<Strong>{"calvície e eflúvio telógeno"}</Strong>{" ao mesmo tempo: duas condições diferentes, com causas e prognósticos diferentes, atuando no mesmo couro cabeludo."}</P>
      <Cta href={WHATSAPP_URL}>{"A queda diminuiu, mas o cabelo não voltou a ser o que era? Uma avaliação com tricoscopia ajuda a entender se existe calvície por trás do eflúvio."}</Cta>

      <H2 id="resposta-direta">{"Calvície e eflúvio telógeno podem acontecer ao mesmo tempo?"}</H2>
      <P>{"Sim. A calvície (alopecia androgenética) e o eflúvio telógeno são processos independentes, e ter um não protege do outro. Na calvície, os folículos sensíveis aos hormônios androgênicos vão ficando menores, em padrão previsível. No eflúvio, um gatilho faz muitos fios entrarem na fase de repouso ao mesmo tempo e caírem de forma difusa alguns meses depois."}</P>
      <P>{"A literatura médica usa a expressão alopecia com características sobrepostas para esses casos. Um estudo de biópsias publicado em 2023 encontrou esse quadro em 4 de 32 mulheres com queda difusa crônica. A amostra é pequena e reúne apenas mulheres sem causa identificada, então o número não serve para estimar a frequência na população geral. Nas buscas feitas para este texto, não encontrei estudo que meça essa frequência em homens."}</P>

      <H2 id="qual-a-diferenca">{"Qual a diferença entre calvície e eflúvio telógeno?"}</H2>
      <P>{"A principal diferença é o que acontece com o folículo: na calvície ele encolhe aos poucos, e no eflúvio ele continua do mesmo tamanho, apenas com o ciclo do fio alterado. Isso muda o comportamento da queda e a expectativa de recuperação."}</P>
      <H3>{"Como costuma se comportar a calvície?"}</H3>
      <UL>
        <LI>{"Progride devagar, ao longo de anos, e muitas vezes sem queda abundante."}</LI>
        <LI>{"Em homens, afeta principalmente entradas, linha frontal, topo e coroa. Em mulheres, costuma afinar a parte superior da cabeça."}</LI>
        <LI>{"Os fios ficam com calibres diferentes entre si, porque parte deles está miniaturizada."}</LI>
        <LI>{"Tende a avançar sem tratamento, embora o ritmo varie muito de pessoa para pessoa."}</LI>
      </UL>
      <H3>{"Como costuma se comportar o eflúvio telógeno?"}</H3>
      <UL>
        <LI>{"Começa de forma mais perceptível, com muitos fios no banho, no travesseiro e na escova."}</LI>
        <LI>{"Afeta a cabeça de maneira difusa, sem um desenho específico."}</LI>
        <LI>{"Costuma aparecer dois a três meses depois do gatilho, como febre alta, cirurgia, parto, emagrecimento rápido, deficiência nutricional ou estresse intenso."}</LI>
        <LI>{"Em geral é autolimitado: uma revisão de 2023 descreve o quadro dessa forma, com a ressalva de que as muitas causas possíveis tornam o diagnóstico complexo."}</LI>
      </UL>
      <P>{"Para entender melhor o ciclo do fio e o que é uma queda esperada, veja o artigo sobre "}<Link href="/blog/queda-de-cabelo-e-normal" className="underline">{"quando a queda de cabelo é normal"}</Link>{"."}</P>

      <H2 id="por-que-acontece">{"Por que a sobreposição entre calvície e eflúvio acontece?"}</H2>
      <P>{"A sobreposição acontece porque a calvície é comum e os gatilhos de eflúvio também. Uma pessoa pode ter predisposição genética para a calvície, ainda sem nenhum sinal evidente, e passar por uma infecção ou uma cirurgia que desencadeia o eflúvio. As duas histórias se cruzam sem que uma tenha causado a outra."}</P>
      <P>{"Há também um efeito visual importante. Quem tem bastante cabelo consegue esconder uma miniaturização inicial, porque os fios mais grossos cobrem as áreas mais fracas. Quando o eflúvio reduz o volume total, o couro cabeludo aparece e o padrão da calvície fica visível de repente. Alguns autores chamam isso de calvície desmascarada pelo eflúvio, expressão usada em um estudo comparativo de 2024."}</P>
      <P>{"Para o paciente, a impressão é a de que o estresse ou a doença causou a calvície. O mais provável é que a miniaturização já estivesse em andamento e tenha sido revelada naquele momento."}</P>

      <H2 id="como-suspeitar">{"Como suspeitar que tenho os dois problemas?"}</H2>
      <P>{"A suspeita aumenta quando a queda difusa vem acompanhada de afinamento concentrado em áreas típicas da calvície. Nenhum desses sinais fecha o diagnóstico sozinho, mas eles justificam uma avaliação:"}</P>
      <UL>
        <LI><Strong>{"A queda melhorou, a aparência não:"}</Strong>{" passaram-se meses, sai menos cabelo, mas a densidade não voltou nas entradas, no topo ou na coroa."}</LI>
        <LI><Strong>{"Fios finos entre os grossos:"}</Strong>{" os novos fios parecem mais finos e mais curtos justamente nas áreas de padrão androgenético."}</LI>
        <LI><Strong>{"Laterais e nuca bem preservadas:"}</Strong>{" quando só a parte de cima ficou rala, o eflúvio isolado explica menos o quadro."}</LI>
        <LI><Strong>{"Histórico familiar:"}</Strong>{" parentes com calvície aumentam a suspeita, mas a ausência desse histórico não exclui o diagnóstico."}</LI>
        <LI><Strong>{"Queda que retorna:"}</Strong>{" episódios repetidos de queda intensa, cada um deixando o cabelo um pouco menos denso."}</LI>
      </UL>

      <H2 id="por-que-e-dificil">{"Por que é tão difícil separar as duas condições?"}</H2>
      <P>{"É difícil porque, em queda difusa de longa duração, o exame visual sozinho pode enganar. No estudo de biópsias citado acima, feito com 32 mulheres sem causa identificada após a investigação inicial, os diagnósticos foram bastante variados:"}</P>
      <UL>
        <LI>{"13 pacientes tinham alopecia androgenética."}</LI>
        <LI>{"3 tinham eflúvio telógeno crônico."}</LI>
        <LI>{"4 tinham características sobrepostas."}</LI>
        <LI>{"12 tinham achados compatíveis com provável variante difusa de líquen plano pilar, uma doença inflamatória do folículo."}</LI>
      </UL>
      <P>{"Os próprios autores apontam o caráter retrospectivo e a amostra pequena como limitações, e todas as participantes eram mulheres. Ainda assim, ele deixa um recado útil: uma queda difusa que não se explica pode esconder mais de um diagnóstico, inclusive um que não é calvície nem eflúvio."}</P>

      <H2 id="como-e-feito-o-diagnostico">{"Como o médico diferencia calvície e eflúvio telógeno?"}</H2>
      <P>{"O diagnóstico combina história clínica, exame do couro cabeludo, tricoscopia e, quando necessário, exames de sangue e biópsia. Na prática, a investigação costuma seguir esta ordem:"}</P>
      <OL>
        <LI><Strong>{"Linha do tempo:"}</Strong>{" quando a queda começou, o que aconteceu nos meses anteriores e quais medicamentos, dietas ou doenças fazem parte do histórico."}</LI>
        <LI><Strong>{"Exame do padrão:"}</Strong>{" comparação entre topo, entradas, coroa, laterais e nuca."}</LI>
        <LI><Strong>{"Tricoscopia:"}</Strong>{" exame com aumento que mostra a diferença de calibre entre os fios, um sinal de miniaturização."}</LI>
        <LI><Strong>{"Exames laboratoriais:"}</Strong>{" uma revisão de 2026 voltada à atenção primária recomenda TSH, hemograma e avaliação do ferro. A lista final depende do caso, como explico no artigo sobre "}<Link href="/blog/exames-para-queda-de-cabelo" className="underline">{"exames para queda de cabelo"}</Link>{"."}</LI>
        <LI><Strong>{"Biópsia, em casos selecionados:"}</Strong>{" indicada quando o quadro não fica claro ou há suspeita de doença inflamatória."}</LI>
      </OL>
      <P>{"A tricoscopia ganhou apoio de um estudo transversal de 2026 com 143 mulheres, 74 com eflúvio crônico e 69 com alopecia androgenética. Os parâmetros do eflúvio ficaram preservados nas diferentes regiões da cabeça, enquanto a alopecia androgenética mostrou alterações de miniaturização que variavam por região. A região frontal foi a que melhor separou os grupos. O trabalho vem de um único centro, incluiu apenas mulheres e comparou os dois diagnósticos separadamente, sem avaliar pacientes com as duas condições juntas."}</P>

      <H2 id="efluvio-cronico">{"Eflúvio telógeno crônico pode ser calvície inicial?"}</H2>
      <P>{"Pode, e esse é um dos pontos mais discutidos do tema. Uma revisão sistemática de 2023 analisou 18 estudos e 1.628 casos descritos como eflúvio telógeno crônico, com 97,5% de mulheres. Os autores concluíram que muitos desses casos provavelmente representam calvície feminina inicial ou um eflúvio secundário cuja causa não foi identificada."}</P>
      <P>{"A mesma revisão mostra as limitações do que se sabe. Não existe uma definição consensual da doença, nenhum estudo documentou a exclusão de todas as causas possíveis, e apenas três estudos, somando oito casos, acompanharam os pacientes de forma prospectiva. Em outras palavras, esse rótulo pede cautela, e quem recebeu esse diagnóstico há muito tempo pode se beneficiar de uma reavaliação."}</P>

      <H2 id="tratamento">{"O que muda no tratamento quando as duas condições estão presentes?"}</H2>
      <P>{"Muda o plano, porque cada condição pede uma abordagem própria. No eflúvio, o centro do cuidado é identificar e corrigir o gatilho. Na calvície, o objetivo é controlar a miniaturização, geralmente com tratamento contínuo. Tratar só uma das frentes costuma deixar parte do problema sem resposta."}</P>
      <OL>
        <LI><Strong>{"Investigar o gatilho:"}</Strong>{" corrigir uma deficiência, ajustar um fator clínico ou aguardar a recuperação de um evento já resolvido."}</LI>
        <LI><Strong>{"Confirmar a calvície antes de tratar:"}</Strong>{" o tratamento de longo prazo só faz sentido quando a miniaturização foi de fato identificada."}</LI>
        <LI><Strong>{"Definir o tratamento com o médico:"}</Strong>{" a escolha do medicamento considera idade, sexo, planos de gravidez, histórico clínico e tolerância."}</LI>
        <LI><Strong>{"Documentar a evolução:"}</Strong>{" fotografias padronizadas e tricoscopia ajudam a acompanhar cada componente ao longo do tempo."}</LI>
      </OL>
      <P>{"Sobre a resposta ao tratamento, um estudo comparativo publicado como carta em 2024 avaliou o minoxidil oral em baixa dose em pacientes com alopecia androgenética isolada e em pacientes com calvície mascarada pelo eflúvio. A eficácia e a segurança foram comparáveis entre os grupos. Como o resumo não informa o tamanho da amostra e o formato é limitado, o achado não permite generalizações. Ele também não indica esse medicamento para todos: dose, início e suspensão são decisões do médico que acompanha o caso."}</P>

      <H2 id="quanto-tempo">{"Quanto tempo leva para perceber a melhora?"}</H2>
      <P>{"O prazo costuma ser de alguns meses, e a evolução raramente é linear. A queda do eflúvio tende a diminuir depois que o gatilho é resolvido, mas o fio novo precisa de tempo para ganhar comprimento e fazer diferença visual. Na calvície, a resposta ao tratamento também é lenta, e a recuperação do eflúvio pode ser confundida com efeito do medicamento."}</P>
      <P>{"Essa mistura de prazos atrapalha a percepção de quem acompanha o próprio cabelo no espelho. Por isso, medidas objetivas valem mais do que a impressão do dia a dia. O artigo sobre "}<Link href="/blog/como-saber-tratamento-calvicie-funcionando" className="underline">{"como saber se o tratamento da calvície está funcionando"}</Link>{" detalha os parâmetros usados nesse acompanhamento. O ritmo varia de paciente para paciente, conforme a causa, a intensidade e a resposta individual."}</P>

      <H2 id="transplante">{"Quem tem calvície e eflúvio telógeno pode fazer transplante capilar?"}</H2>
      <P>{"Pode ser candidato, mas não durante um eflúvio ativo sem causa esclarecida. O transplante redistribui fios da área doadora e não trata o eflúvio. Operar nesse momento dificulta a avaliação de quanto cabelo nativo vai se recuperar e, com isso, o cálculo de quantas unidades foliculares são realmente necessárias. No meu planejamento, prefiro que o diagnóstico esteja definido e a queda estável antes de desenhar a cirurgia."}</P>
      <P>{"A avaliação da área doadora também merece atenção redobrada nesses pacientes, porque a queda difusa pode reduzir temporariamente a densidade dessa região. A indicação depende sempre de avaliação médica individual presencial."}</P>

      <H2 id="perguntas-frequentes">{"Perguntas frequentes"}</H2>
      <H3>{"O eflúvio telógeno pode virar calvície?"}</H3>
      <P>{"São doenças diferentes, então a forma mais precisa de explicar é outra: um eflúvio pode revelar uma calvície que já estava começando. A revisão sistemática de 2023 também sugere que parte dos casos rotulados como eflúvio crônico seja, na verdade, calvície feminina inicial."}</P>
      <H3>{"Homens também podem ter calvície e eflúvio ao mesmo tempo?"}</H3>
      <P>{"Sim. Os mecanismos também existem em homens, mas a maior parte dos estudos sobre o tema incluiu mulheres, então os dados masculinos são mais escassos. O raciocínio clínico segue parecido: história do gatilho, padrão da perda e tricoscopia."}</P>
      <H3>{"O cabelo que caiu pelo eflúvio volta?"}</H3>
      <P>{"Como o eflúvio não miniaturiza o folículo, a tendência é haver recuperação depois que o gatilho é resolvido, embora o ritmo varie. Nas áreas afetadas pela calvície, o fio pode voltar mais fino, porque o folículo já estava em processo de miniaturização."}</P>
      <H3>{"Exame de sangue normal descarta eflúvio?"}</H3>
      <P>{"Não. Muitos gatilhos de eflúvio, como uma cirurgia ou uma febre alta meses antes, não deixam alteração nos exames atuais. O sangue ajuda a procurar causas tratáveis, mas o diagnóstico também depende da história e do exame do couro cabeludo."}</P>
      <H3>{"Posso começar um medicamento por conta própria enquanto investigo?"}</H3>
      <P>{"Não é o caminho recomendado. Sem diagnóstico, fica difícil saber o que está sendo tratado e interpretar a resposta. Além disso, medicamentos para calvície têm contraindicações e efeitos adversos que precisam de acompanhamento médico."}</P>

      <H2 id="conclusao">{"Como dar o próximo passo?"}</H2>
      <P>{"Se a queda intensa passou e o cabelo não recuperou a densidade, vale marcar uma avaliação em vez de esperar mais um ciclo. Leve as datas dos eventos de saúde dos últimos meses, a lista de medicamentos e fotos antigas com boa iluminação. Com essa linha do tempo e o exame do couro cabeludo, fica mais fácil separar o que tende a se recuperar do que precisa de tratamento contínuo."}</P>

      <Callout>{"Este conteúdo tem caráter educativo e não substitui uma consulta médica. Diagnóstico, exames e medicamentos para queda de cabelo devem ser definidos, ajustados ou suspensos apenas por médico, após avaliação individual. O resultado dos tratamentos varia de paciente para paciente."}</Callout>

      <H2 id="referencias">{"Referências"}</H2>
      <UL>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/37052778/" className="underline" target="_blank" rel="noopener noreferrer">{"Daunton A et al. Chronic Telogen Effluvium: Is it a Distinct Condition? A Systematic Review. American Journal of Clinical Dermatology, 2023."}</a>{" "}<a href="https://doi.org/10.1007/s40257-023-00760-0" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/37997208/" className="underline" target="_blank" rel="noopener noreferrer">{"Özcan D et al. Chronic diffuse alopecia in women: a retrospective review of histopathologic diagnoses. International Journal of Dermatology, 2023."}</a>{" "}<a href="https://doi.org/10.1111/ijd.16921" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/42809761/" className="underline" target="_blank" rel="noopener noreferrer">{"Pajaziti A et al. Regional quantitative digital trichoscopy in female hair loss: a comparative study. Acta Dermatovenerologica Alpina, Pannonica et Adriatica, 2026."}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/39133308/" className="underline" target="_blank" rel="noopener noreferrer">{"Desai DD et al. Assessing low-dose oral minoxidil efficacy in androgenetic alopecia: a comparative study of AGA and AGA unmasked by telogen effluvium. Archives of Dermatological Research, 2024."}</a>{" "}<a href="https://doi.org/10.1007/s00403-024-03257-w" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/38015483/" className="underline" target="_blank" rel="noopener noreferrer">{"Jimeno Ortega I et al. Telogen effluvium: a 360 degree review. Italian Journal of Dermatology and Venereology, 2023."}</a>{" "}<a href="https://doi.org/10.23736/S2784-8671.23.07579-5" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/42647672/" className="underline" target="_blank" rel="noopener noreferrer">{"Walker CW et al. Hair loss: A systematic approach to evaluation, diagnosis, and management. JAAPA, 2026."}</a>{" "}<a href="https://doi.org/10.1097/01.JAA.0000000000000405" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
      </UL>

      <P>{"Se você quer entender o que está acontecendo com o seu cabelo, o primeiro passo é uma avaliação com o Dr. Vitor Frauches. "}<a href={WHATSAPP_URL} className="underline" target="_blank" rel="noopener noreferrer"><Strong>{"Agende pelo WhatsApp"}</Strong></a>{"."}</P>
      <P>{"Este artigo faz parte do nosso "}<Link href="/blog/guia-calvicie-masculina" className="underline">{"guia completo sobre calvície masculina"}</Link>{"."}</P>
    </>
  );
}
