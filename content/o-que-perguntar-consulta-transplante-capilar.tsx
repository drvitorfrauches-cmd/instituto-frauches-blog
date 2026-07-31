import type { PostMeta } from "@/lib/blog/types";
import Link from "next/link";
import { P, H2, H3, UL, LI, Strong, Callout, Cta } from "@/components/article-ui";
import { AUTHOR, WHATSAPP_URL } from "@/lib/blog/site";

export const meta: PostMeta = {
  slug: "o-que-perguntar-consulta-transplante-capilar",
  title: "O que perguntar antes do transplante capilar",
  description: "Leve este checklist para a consulta de transplante capilar: diagnóstico, área doadora, enxertos, hairline, equipe, riscos, preço e pós-operatório.",
  publishedAt: "2026-07-25",
  updatedAt: "2026-07-25",
  readingTime: 8,
  category: "Transplante capilar",
  author: AUTHOR,
  coverImage: {
    src: "/blog/o-que-perguntar-consulta-transplante-capilar/cover.jpg",
    alt: "Imagem editorial ilustrando o tema: O que perguntar na consulta de transplante capilar: 20 perguntas",
  },
};

export default function Article() {
  return (
    <>
      <H2 id="resposta-direta">Resposta direta</H2>
      <P>Na consulta, pergunte qual é o seu diagnóstico, se a queda está ativa, como a área doadora foi avaliada, quantas unidades podem ser retiradas com segurança, qual desenho de hairline é indicado e quem executará cada etapa. Confirme riscos, alternativas, sedação, pós-operatório, tempo de resultado, possibilidade de segunda cirurgia e custo total.</P>
      <P>Uma boa consulta não serve apenas para aprovar a cirurgia. Ela deve ajudar o paciente a decidir se o transplante é adequado agora e se a proposta continuará natural no futuro.</P>
      <Cta href={WHATSAPP_URL}>Quer já chegar numa consulta sabendo o que perguntar sobre o seu caso específico? Agende uma avaliação e leve esse checklist.</Cta>
      <H2 id="1-qual-é-o-meu-diagnóstico">1. Qual é o meu diagnóstico?</H2>
      <P>Peça o nome da condição e os sinais que sustentam. Alopecia androgenética, eflúvio, alopecia cicatricial e tração exigem abordagens diferentes.</P>
      <P>Pergunte se há miniaturização e se a doença está ativa. O diagnóstico precisa anteceder o orçamento.</P>
      <P>Se houver dúvida, saiba quais exames ou acompanhamento serão necessários.</P>
      <H2 id="2-eu-preciso-de-transplante-agora">2. Eu preciso de transplante agora?</H2>
      <P>Pode ser melhor tratar primeiro, esperar progressão ou não operar. Pergunte quais seriam as consequências de adiar.</P>
      <P>Em pacientes jovens, a incerteza é maior. Em perda rápida, estabilização pode proteger o planejamento.</P>
      <P>Uma indicação responsável inclui a opção de não operar.</P>
      <H2 id="3-qual-é-a-qualidade-da-minha-área-doadora">3. Qual é a qualidade da minha área doadora?</H2>
      <P>Peça medidas de densidade, calibre e miniaturização. Pergunte onde começa e termina a zona segura.</P>
      <P>Entenda capacidade para esta sessão e reserva para o futuro. Não aceite apenas “sua doadora é ótima”.</P>
      <P>Veja fotografias e peça explicação visual.</P>
      <H2 id="4-quantas-unidades-foliculares-são-necessárias">4. Quantas unidades foliculares são necessárias?</H2>
      <P>Pergunte se o número se refere a unidades ou fios. Peça distribuição por região: hairline, topete, scalp médio e coroa.</P>
      <P>Questione densidade estimada e prioridades. Em áreas extensas, pode ser necessário escolher.</P>
      <P>O número deve ser faixa, não promessa absoluta antes da cirurgia.</P>
      <H2 id="5-quantas-unidades-podem-ser-retiradas-com-segurança">5. Quantas unidades podem ser retiradas com segurança?</H2>
      <P>Necessidade da receptora não define capacidade da doadora. Pergunte qual porcentagem será removida e como a extração será distribuída.</P>
      <P>Peça casos de doadoras semelhantes após o cabelo crescer.</P>
      <P>Entenda o que acontecerá se for necessária outra cirurgia.</P>
      <H2 id="6-como-será-desenhada-a-hairline">6. Como será desenhada a hairline?</H2>
      <P>Discuta altura, entradas, assimetrias e envelhecimento. Peça para ver o desenho em diferentes posições.</P>
      <P>Pergunte por que aquela linha é adequada e quanto custaria, em enxertos, baixá-la.</P>
      <P>Confirme uso de unidades de um fio na borda.</P>
      <H2 id="7-quem-fará-cada-etapa">7. Quem fará cada etapa?</H2>
      <P>Peça nomes e funções. Quem anestesia? Quem extrai? Quem cria os canais? Quem implanta?</P>
      <P>Confirme presença do médico e quantas salas ele acompanha. Essa pergunta é essencial.</P>
      <P>Não se contente com “a equipe é treinada”.</P>
      <H2 id="8-qual-técnica-será-usada-e-por-quê">8. Qual técnica será usada e por quê?</H2>
      <P>FUE, FUT, raspagem parcial, no-shave, pinça e implanter são ferramentas. Pergunte por que foram escolhidas para você.</P>
      <P>Entenda vantagens e limitações. Uma técnica não precisa ser a mais nova para ser a mais adequada.</P>
      <P>Cuidado com nomes comerciais sem definição.</P>
      <H2 id="9-qual-punch-será-usado">9. Qual punch será usado?</H2>
      <P>Não é necessário escolher a medida, mas pergunte como ela será adaptada ao seu fio. Punch pequeno demais ou grande demais pode prejudicar.</P>
      <P>O médico deve explicar transecção e cicatriz.</P>
      <P>Em cabelo crespo, pergunte sobre experiência específica.</P>
      <H2 id="10-como-os-enxertos-serão-controlados">10. Como os enxertos serão controlados?</H2>
      <P>Pergunte sobre magnificação, classificação, hidratação, solução, temperatura e tempo fora do corpo.</P>
      <P>Confirme como é feita a contagem final e se receberá relatório.</P>
      <P>Controle de qualidade não é luxo, é parte da cirurgia.</P>
      <H2 id="11-como-funciona-a-anestesia-e-a-sedação">11. Como funciona a anestesia e a sedação?</H2>
      <P>Pergunte quais etapas causam desconforto, se haverá anestesiologista, que monitorização será usada e quais cuidados de jejum.</P>
      <P>Informe doenças, apneia e medicamentos. Não esconda ansiedade.</P>
      <P>Confirme necessidade de acompanhante e restrições após alta.</P>
      <H2 id="12-quais-são-os-riscos">12. Quais são os riscos?</H2>
      <P>Peça riscos frequentes e raros: edema, sangramento, infecção, foliculite, shock loss, cicatrizes, crescimento insuficiente, necrose, alteração de sensibilidade e insatisfação.</P>
      <P>Pergunte como a clínica previne e trata.</P>
      <P>Resposta “não tem risco” é sinal de alerta.</P>
      <H2 id="13-qual-resultado-é-realista">13. Qual resultado é realista?</H2>
      <P>Pergunte quanto de couro cabeludo ainda poderá aparecer. Entenda diferença entre densidade real e percebida.</P>
      <P>Veja casos semelhantes em luz forte. Discuta coroa e área extensa.</P>
      <P>Peça para o médico dizer o que não será possível.</P>
      <H2 id="14-quando-o-resultado-aparece">14. Quando o resultado aparece?</H2>
      <P>Confirme cronograma de queda inicial, nascimento e maturação. Pergunte quando serão os retornos.</P>
      <P>A coroa pode levar mais tempo. Não planeje evento importante sem margem.</P>
      <P>Entenda que seis meses não é resultado final.</P>
      <H2 id="15-preciso-continuar-tratamento">15. Preciso continuar tratamento?</H2>
      <P>Transplante não interrompe calvície. Pergunte quais fios nativos estão em risco e quais opções existem.</P>
      <P>Discuta efeitos e contraindicações de minoxidil, finasterida, dutasterida ou adjuvantes.</P>
      <P>Não aceite prescrição automática sem histórico.</P>
      <H2 id="16-posso-precisar-de-segunda-cirurgia">16. Posso precisar de segunda cirurgia?</H2>
      <P>Em calvície extensa, aumento de densidade ou progressão, sim. Pergunte se o plano já prevê etapas.</P>
      <P>Saiba quantos enxertos ficarão reservados. Não trate segunda sessão como surpresa.</P>
      <P>Pergunte intervalo mínimo.</P>
      <H2 id="17-como-será-o-pós-operatório">17. Como será o pós-operatório?</H2>
      <P>Peça instruções de lavagem, sono, boné, trabalho, academia, sol, corte e viagem.</P>
      <P>Confirme quem atenderá dúvidas e sinais de alerta. Receba orientações por escrito.</P>
      <P>Se mora longe, defina logística.</P>
      <H2 id="18-o-que-está-incluído-no-valor">18. O que está incluído no valor?</H2>
      <P>Liste consulta, cirurgia, sedação, medicamentos, lavagens, retornos, exames e possíveis taxas.</P>
      <P>Leia cancelamento e remarcação. Pergunte custo de retoque ou correção, sem presumir garantia.</P>
      <P>Compare custo total.</P>
      <H2 id="19-posso-falar-com-pacientes-anteriores">19. Posso falar com pacientes anteriores?</H2>
      <P>Algumas clínicas podem conectar pacientes com autorização, respeitando privacidade. Depoimentos ajudam a entender experiência, não resultado garantido.</P>
      <P>Faça perguntas sobre pós-operatório e suporte, não apenas satisfação.</P>
      <P>Nunca aceite divulgação de dados sem consentimento.</P>
      <H2 id="20-quantas-cirurgias-serão-realizadas-no-meu-dia">20. Quantas cirurgias serão realizadas no meu dia?</H2>
      <P>Pergunte diretamente. A resposta mostra disponibilidade médica e logística.</P>
      <P>Entenda se a equipe se divide e quem permanece com você.</P>
      <P>Essa informação deve ser conhecida antes do pagamento.</P>
      <H2 id="documentos-para-levar">Documentos para levar</H2>
      <P>Leve lista de medicamentos, exames, alergias, diagnósticos, cirurgias e fotos antigas. Informe tratamentos capilares e efeitos.</P>
      <P>Anote objetivos: linha frontal, penteado, evento futuro, uso de cabelo curto. Leve acompanhante se ele ajuda na decisão.</P>
      <P>Não esconda tabagismo ou uso de substâncias.</P>
      <H2 id="como-registrar-respostas">Como registrar respostas</H2>
      <P>Use notas no celular ou peça autorização para gravar. Solicite plano e orçamento por escrito.</P>
      <P>Compare depois, sem decidir sob pressão. Uma consulta com muita informação precisa de tempo.</P>
      <P>Envie perguntas adicionais antes de assinar consentimento.</P>
      <H2 id="o-que-observar-além-das-respostas">O que observar além das respostas?</H2>
      <P>Observe se o médico escuta, examina, mede e adapta. Respostas prontas e pressa indicam padronização.</P>
      <P>Veja se a equipe explica riscos com naturalidade. Transparência não deveria soar defensiva.</P>
      <P>A qualidade da consulta antecipa a qualidade do acompanhamento.</P>
      <H2 id="perguntas-frequentes">Perguntas frequentes</H2>
      <H3>Preciso ir com cabelo limpo?</H3>
      <P>Sim, normalmente limpo e sem fibras ou produtos, para facilitar avaliação.</P>
      <H3>Consulta online é suficiente?</H3>
      <P>Pode iniciar o planejamento, mas exame presencial da doadora é frequentemente necessário antes da decisão final.</P>
      <H3>Posso pedir desenho da hairline?</H3>
      <P>Sim. O desenho definitivo costuma ser confirmado no dia, mas deve ser discutido.</P>
      <H3>Preciso decidir na hora?</H3>
      <P>Não. Você deve ter tempo para analisar.</P>
      <H3>Vale consultar mais de uma clínica?</H3>
      <P>Sim, especialmente se propostas forem muito diferentes.</P>
      <H3>Posso perguntar taxa de crescimento?</H3>
      <P>Sim, mas entenda como é medida. Percentuais sem método podem ser marketing.</P>
      <H3>Exames são obrigatórios?</H3>
      <P>A equipe define conforme saúde e sedação. Não existe painel idêntico para todos.</P>
      <H3>A consulta deve incluir tricoscopia?</H3>
      <P>É uma ferramenta útil, mas o diagnóstico integra história e exame.</P>
      <H3>Posso levar referência de famoso?</H3>
      <P>Pode, mas o desenho deve ser adaptado ao seu rosto e doadora.</P>
      <H3>O orçamento deve ter validade curta?</H3>
      <P>Pode ter validade, mas pressão artificial para fechar imediatamente merece cautela.</P>
      <H2 id="conclusão">Conclusão</H2>
      <P>A consulta é o momento de testar o plano, não apenas de conhecer o preço. Perguntas objetivas revelam quem fará a cirurgia, como a doadora será protegida e qual resultado é possível.</P>
      <P>Leve este checklist. Um médico seguro não se incomoda com perguntas. Ele entende que decisão informada faz parte do tratamento.</P>
      <H2 id="como-usar-o-checklist-sem-transformar-a-consulta-em-interrog">Como usar o checklist sem transformar a consulta em interrogatório</H2>
      <H3>Consulta curta com muitas perguntas</H3>
      <P>Priorize diagnóstico, doadora, responsáveis e resultado realista. Perguntas secundárias podem ser enviadas depois.</P>
      <H3>Propostas muito diferentes</H3>
      <P>Peça que cada médico explique premissas. Diferença de enxertos pode vir de área, densidade ou risco.</P>
      <H3>Paciente inseguro para questionar</H3>
      <P>Levar acompanhante ou notas ajuda. Um profissional adequado não interpreta pergunta como afronta.</P>
      <H3>Consulta por vídeo</H3>
      <P>Pode resolver história e expectativa, mas medidas definitivas da doadora podem depender de exame presencial.</P>
      <H2 id="como-acompanhar-de-forma-objetiva">Como acompanhar de forma objetiva</H2>
      <P>Após cada consulta, escreva em uma frase o diagnóstico, a prioridade, o limite e o responsável. Se não conseguir, a proposta talvez não tenha sido clara.</P>
      <H2 id="perguntas-para-levar-à-avaliação">Perguntas para levar à avaliação</H2>
      <P>* Qual problema estamos resolvendo? * Qual é o limite? * Quem assume cada etapa? * Que risco é mais relevante no meu caso? * Qual alternativa existe? * Como mediremos sucesso? * Quem atende depois? * O que precisa ser decidido hoje?</P>
      <H2 id="sinais-de-que-a-informação-pode-estar-simplificada-demais">Sinais de que a informação pode estar simplificada demais</H2>
      <P>* respostas decoradas; * interrupção constante do paciente; * orçamento antes do exame; * recusa em fornecer plano por escrito; * contrato incompatível com o que foi dito;</P>
      <Callout>Este conteúdo é educativo e não substitui consulta, diagnóstico ou prescrição individual. Queda de cabelo pode ter causas diferentes e algumas exigem investigação específica. Medicamentos e procedimentos devem ser indicados após avaliação médica, considerando histórico, exame do couro cabeludo, riscos, contraindicações e objetivos do paciente.</Callout>
      <H2 id="referencias">Referências</H2>
      <UL>
        <LI><a href="https://ishrs.org/questions-ask-your-hair-doctor/" target="_blank" rel="noopener noreferrer" className="underline">International Society of Hair Restoration Surgery. Questions to Ask Your Hair Restoration Surgeon.</a></LI>
        <LI><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8611706/" target="_blank" rel="noopener noreferrer" className="underline">Hair Transplant Practice Guidelines.</a></LI>
        <LI><a href="https://ishrs.org/patients/consumer-alert/" target="_blank" rel="noopener noreferrer" className="underline">ISHRS Consumer Alert.</a></LI>
        <LI><a href="https://portal.cfm.org.br/busca-medicos/" target="_blank" rel="noopener noreferrer" className="underline">Conselho Federal de Medicina. Busca por médicos.</a></LI>
      </UL>
      <P>
        Se você quer se aprofundar, veja também nossos artigos sobre{" "}
        <Link href="/blog/como-escolher-clinica-transplante-capilar" className="underline">
          como escolher uma clínica de transplante capilar
        </Link>{" "}
        e sobre{" "}
        <Link href="/blog/exames-antes-do-transplante-capilar" className="underline">
          quais exames pedir antes da cirurgia
        </Link>
        . Para entender como isso se aplica ao seu caso, o próximo passo é
        uma avaliação com o Dr. Vitor Frauches.{" "}
        <a href={WHATSAPP_URL} className="underline" target="_blank" rel="noopener noreferrer">
          <Strong>Agende pelo WhatsApp</Strong>
        </a>
        .
      </P>
      <P>
        Este artigo faz parte do nosso{" "}
        <Link href="/blog/guia-transplante-capilar" className="underline">
          guia sobre transplante capilar
        </Link>
        .
      </P>
    </>
  );
}
