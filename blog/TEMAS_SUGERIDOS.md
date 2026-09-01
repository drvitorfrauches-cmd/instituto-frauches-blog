# Temas sugeridos pelo Dr. Vitor

Fila de temas para os próximos artigos do blog. Sempre que o Dr. Vitor
sugerir um tema (em conversa com o Claude, ou diretamente aqui), adiciona
uma linha na subseção do pilar correspondente, em "Pendentes".

A skill `blog-post` (`.claude/skills/blog-post/SKILL.md`) lê esta fila antes
de escolher um tema pela distribuição de pilares do `DNA.md`. Se houver algo
pendente aqui, o tema pendente tem prioridade sobre a rotação automática de
pilares. Depois que o artigo é publicado, o item é movido para "Já
publicados" com o slug e a data, como parte do mesmo commit/PR do artigo.

## Pendentes

Cada item abaixo tem um objetivo de SEO (a keyword-alvo, use como base pra
escolher a keyword primária real da lista do DNA, ou adicione ao DNA se não
existir ainda) e um briefing (os pontos que o Dr. Vitor quer que o artigo
cubra — use como roteiro das seções H2, não precisa ser 1 H2 por bullet
exatamente, mas todos os pontos devem aparecer no texto). Itens sem
briefing explícito: escreva com base no conhecimento médico geral do
Dr. Vitor sobre o assunto, seguindo o tom e as regras de compliance do DNA
normalmente — o título já deixa claro o ângulo esperado.

**Como escolher o próximo item (regra a partir de 2026-08-27):** os itens
abaixo estão agrupados por pilar de conteúdo do `DNA.md`, não mais numa
lista única em ordem numérica estrita. A lista antiga (seguir sempre o
número mais baixo) fez o blog publicar 9 artigos seguidos do mesmo pilar
(Calvície e tricologia, entre 2026-08-05 e 2026-08-26), o que foge bastante
da distribuição pretendida no DNA. A partir de agora:

1. Confira os pilares (`meta.category`) dos últimos 4-5 artigos publicados
   (veja "Já publicados" abaixo, ou rode `ls content/` e olhe a `category`
   dos arquivos mais recentes).
2. Identifique qual dos 5 pilares listados abaixo está há mais tempo sem
   aparecer nessas publicações recentes.
3. Dentro da subseção desse pilar, pegue o item mais antigo (primeiro da
   subseção) que ainda não tenha nota de "já coberto" ou "pular". Esse é o
   tema desta execução.
4. Se a subseção desse pilar não tiver nenhum item elegível no momento,
   passe pro próximo pilar mais atrasado na rotação.

Distribuição-alvo (mesma do `DNA.md`): Técnica FUE e tecnologia ~30%,
Dúvidas e medos antes da cirurgia ~25%, Pós-operatório e recuperação ~20%,
Calvície/tricologia geral e tratamentos clínicos ~15%, Casos especiais
~10%. Dentro do Pilar 4, alterne entre os dois grupos (calvície geral /
medicamentos e tratamentos) a cada escolha, em vez de esgotar um grupo
inteiro antes do outro.

### Bloco inicial (itens 2-20)

Primeira leva de sugestões, anterior ao lote grande organizado por pilar
(itens 21-122). Todos os itens deste bloco já estão cobertos por artigos
publicados ou marcados para pular — não há nenhum pendente aqui. Mantido só
como histórico das decisões:

### 6. O que é a técnica FUE?
- **Objetivo SEO**: FUE
- **Briefing**: como funciona; diferenças da FUT; cicatrizes; recuperação;
  principais vantagens.
- Nota (2026-07-27): avaliado antes de escrever. Além do artigo
  `transplante-capilar-fue-o-que-e` (visão geral), o artigo
  `tecnica-fue-transplante-capilar` já cobre exatamente este briefing em
  profundidade (como funciona, diferenças pra FUT, cicatrizes, raspagem,
  transecção, implanter, vantagens e limitações). Considerado já coberto,
  não escrever versão nova a menos que surja um ângulo claramente distinto.

### 13. Finasterida faz mal?
- **Briefing**: mecanismo de ação; principais mitos; evidências científicas;
  quem pode usar.
- Nota: já existe artigo publicado (`finasterida-para-calvicie`, pacote
  editorial externo) cobrindo finasterida de forma ampla. Se escrever este,
  diferencie o ângulo (foco específico em segurança/mitos) ou pule.
- Nota (2026-07-31): reavaliado. O artigo `finasterida-para-calvicie` já tem
  seções dedicadas a efeitos adversos sexuais, humor, fertilidade, PSA,
  contraindicações e mitos comuns, ou seja, cobre exatamente o ângulo de
  segurança/mitos sugerido acima. Considerado já coberto, pular a menos que
  surja um ângulo claramente distinto.

### 14. PRP realmente funciona para queda de cabelo?
- **Briefing**: o que é PRP; evidências atuais; quando indicar; limitações.
- Nota: já existe artigo publicado (`prp-para-queda-de-cabelo`, pacote
  editorial externo) cobrindo esse tema. Avalie antes de produzir.
- Nota (2026-07-31): reavaliado. O artigo já tem seção "O que as evidências
  mostram?" respondendo exatamente a pergunta "realmente funciona?".
  Considerado já coberto, pular a menos que surja um ângulo claramente
  distinto.

### 15. Queda de cabelo por estresse existe?
- **Briefing**: eflúvio telógeno; diferença para calvície; diagnóstico;
  tratamento.
- Nota (2026-07-29): avaliado antes de escrever. O artigo
  `queda-de-cabelo-e-normal` já cobre exatamente este briefing em
  profundidade (eflúvio telógeno, diferença para calvície e quebra,
  diagnóstico e "estresse realmente causa queda?"). Considerado já
  coberto, não escrever versão nova a menos que surja um ângulo
  claramente distinto.

### 16. O que torna um transplante capilar natural?
- **Briefing**: hairline; direção dos fios; densidade; planejamento facial;
  naturalidade.
- Nota: já existe artigo publicado (`como-identificar-transplante-capilar-natural`,
  pacote editorial externo) com ângulo próximo. Avalie antes de produzir.
- Nota (2026-07-29): reavaliado. O artigo cobre linha frontal, direção,
  ângulo, densidade gradual e planejamento no Instituto Frauches, exatamente
  o briefing deste item. Considerado já coberto, pular a menos que surja um
  ângulo claramente distinto.

### 18. Implanter ou pinça: existe diferença?
- **Briefing**: como funciona cada técnica; trauma folicular; tempo fora do
  corpo; indicações.
- Nota (2026-07-31): avaliado antes de escrever. O artigo
  `tecnologias-transplante-capilar` já tem as seções "Implanter pens" e
  "Pinça e canais prévios", incluindo um H3 "Implanter é melhor que pinça?"
  respondendo exatamente esta pergunta. Considerado já coberto, não
  escrever versão nova a menos que surja um ângulo claramente distinto.

---

Os itens 21-122 abaixo vieram de um lote maior enviado pelo Dr. Vitor,
organizado originalmente em 5 pilares próprios (Tudo sobre calvície,
Medicamentos e tratamentos, Transplante capilar, Tecnologia, Casos
especiais). Em 2026-08-27, esse lote foi reagrupado nos 5 pilares de
conteúdo do `DNA.md` (ver regra de escolha acima), porque os pilares
originais do Dr. Vitor misturavam temas de técnica, dúvidas pré-cirúrgicas
e pós-operatório dentro do mesmo bloco "Transplante capilar (61-90)", o que
levava a sequências longas do mesmo pilar do DNA quando lidos em ordem
numérica pura. Os números de cada item (identificadores históricos) foram
mantidos como estavam, só a agrupação/ordem de leitura mudou.

## Pilar 1 — Técnica FUE e tecnologia (~30% da fila)

Como funciona a técnica, etapas da cirurgia do ponto de vista técnico,
diferenças para FUT, tecnologia e instrumental usados.

### 62. O que são unidades foliculares?
### 63. O que é densidade capilar?
### 65. Como desenhamos a linha frontal?
### 88. Como preservar a área doadora
### 89. O que é superextração?
### 91. O que é FUE Premium?
### 92. O que é Implanter Pen?
### 93. Por que usamos microscópios?
- Nota (2026-07-29): coberto pelo item 17 ("Por que o microscópio faz
  diferença na cirurgia?"), publicado como `microscopio-no-transplante-capilar`.
  Pular a menos que surja um ângulo claramente distinto (este item já cobre
  ampliação, triagem, transecção, sobrevivência do enxerto e o papel da
  equipe).
### 94. Como os enxertos são armazenados
### 95. Qual a temperatura ideal dos enxertos?
### 96. Tempo fora do corpo influencia?
### 97. Punch no transplante capilar: por que a qualidade do instrumento faz diferença no resultado?
- **Título sugerido**: "Punch no transplante capilar: por que a qualidade do
  instrumento faz diferença no resultado?"
- **Objetivo SEO (keyword principal)**: punch transplante capilar
- **Palavras-chave secundárias**: punch FUE; instrumento transplante
  capilar; extração folicular; cirurgia FUE; área doadora; cicatrização
  transplante capilar; punch Trivellini; punch Mamba; punch Zeus; punch
  híbrido; punch serrilhado; punch liso.
- **Briefing completo (fornecido pelo Dr. Vitor em 2026-08-27)**: quase
  nenhum paciente sabe que o punch existe, mas ele influencia diretamente
  três coisas que importam pro paciente: cicatrização da área doadora,
  preservação dos folículos e qualidade do resultado final. Artigo começa
  educativo e termina mostrando por que isso é um dos motivos para escolher
  uma clínica de alto padrão — autoridade técnica sem parecer propaganda,
  mostrando que tecnologia só faz diferença quando usada por um cirurgião
  experiente.
  - **Público**: pacientes pesquisando transplante capilar, comparando
    clínicas, ou que acreditam que "toda cirurgia é igual".
  - **Intenção de busca a responder**: o que é punch; qual punch é melhor;
    qual o tamanho do punch; punch maior estraga a área doadora?; existe
    diferença entre clínicas?
  - **Estrutura sugerida** (12 seções, adaptar pra H2/H3 do padrão do
    blog, não precisa ser 1:1):
    1. O que é o punch no transplante capilar? (instrumento que retira cada
       unidade folicular na FUE; primeiro contato do cirurgião com o
       folículo; analogia: retirar uma muda de planta sem machucar as
       raízes).
    2. Como funciona um punch? (incisão circular ao redor do folículo,
       objetivo não é cortar o cabelo, é preservar a unidade folicular
       inteira).
    3. O diâmetro do punch faz diferença? (diâmetros comuns: 0,75 / 0,80 /
       0,85 / 0,90 / 0,95 / 1,00 mm; um aumento pequeno em mm representa
       aumento bem maior de área removida — considerar um gráfico/
       infográfico comparando área removida em 0,80 / 0,90 / 1,00 mm; não
       existe tamanho universal, depende de espessura do fio, número de
       fios, curvatura, etnia, tipo de pele).
    4. Quanto tecido um punch realmente remove? (mostrar de forma visual
       que +0,1 mm aumenta desproporcionalmente a área de tecido retirada).
    5. Punch pequeno sempre é melhor? (não — punch muito pequeno aumenta
       transecção, lesão do folículo e dificuldade técnica; punch maior
       preserva melhor alguns folículos; o segredo é o punch correto para
       aquele paciente, não o menor possível).
    6. Existem punches diferentes? (dezenas de fabricantes; diferenças de
       material, afiamento, acabamento, precisão, tratamento térmico,
       resistência, geometria).
    7. Tipos de ponta (punch liso, serrilhado, híbrido, rombo, afiado —
       quando cada um costuma ser usado).
    8. Rotação ou oscilação? (motores modernos: rotação contínua,
       oscilação, movimentos híbridos, e como isso influencia a
       transecção).
    9. As principais marcas utilizadas no mundo (sem virar propaganda —
       citar como referência técnica: Trivellini, Devroye, Cole
       Instruments, WAW, Mamba, Zeus, UGraft, Safe System; cada uma com
       proposta diferente. Nota de compliance: são fabricantes de
       equipamento, não clínicas/médicos concorrentes — citação factual,
       não comparação vedada pelo CFM).
    10. Tecnologia sozinha não faz milagre (o melhor punch do mundo não
        compensa ângulo errado, profundidade errada, torque inadequado ou
        pouca experiência — o instrumento é só parte do resultado).
    11. O que utilizamos no Instituto Frauches (parte própria: o Protocolo
        Frauches Precision FUE® usa diferentes punches conforme tipo de
        fio, calibre, espessura e curvatura; menciona equipamentos de alto
        padrão como os sistemas Mamba e Zeus associados a planejamento
        individualizado, buscando menor transecção e maior preservação da
        área doadora — sem afirmar que existe "o melhor punch" em
        absoluto, o melhor é o escolhido pra aquele paciente, respeitando a
        regra de não prometer resultado do DNA).
    12. Como perguntar isso ao seu médico? (fechamento com perguntas que o
        paciente pode levar à consulta: qual diâmetro costuma usar; vocês
        adaptam o punch por paciente; qual taxa de transecção vocês
        buscam; o punch muda conforme o tipo de cabelo; quem realiza a
        extração).
  - **Conclusão sugerida**: o punch parece um simples cilindro metálico,
    mas é um dos instrumentos que mais influenciam a qualidade da extração
    folicular; junto com experiência do cirurgião, tecnologia moderna e
    planejamento individualizado, ajuda a preservar a área doadora, reduzir
    o trauma cirúrgico e aumentar as chances de resultado natural e
    duradouro.
  - **Ideias de imagem** (gerar via Higgsfield, conceitos still-life/
    editoriais, nunca foto real de paciente): macro de punches de diâmetros
    diferentes lado a lado; infográfico de área removida por diâmetro;
    esquema de rotação contínua x oscilação x híbrido. Evitar imagem de
    "microscopia de folículo transeccionado" ou fotos do centro cirúrgico
    em uso — foge do padrão de imagem conceitual/abstrata do blog (ver
    regras de imagem do `blog/DNA.md`), usar só se o Dr. Vitor fornecer
    fotos reais próprias e autorizar.
  - Absorve o item 98 (diferença entre punch de 0,8 e 1 mm), coberto na
    seção 3/4 acima em vez de virar um segundo artigo.
- Nota: já existe uma seção breve "Punches" em
  `tecnologias-transplante-capilar` (só 1 parágrafo sobre diâmetro x
  cicatriz/segurança). Este artigo é bem mais aprofundado nesse tema
  específico, então não é duplicidade — é o ângulo completo que aquele
  artigo só tocou de raspão.
### 98. Diferença entre punch de 0,8 e 1 mm
- Nota (2026-08-27): absorvido pelo item 97 (briefing completo acima).
  Não escrever artigo separado — cobrir dentro do 97.
### 99. O que é transecção folicular?
### 100. Como aumentar a sobrevivência dos enxertos
### 101. O papel da equipe cirúrgica
### 102. O que diferencia uma cirurgia premium?
### 103. Como reduzir o trauma dos enxertos
### 104. Bioestimulação durante a cirurgia
### 105. O futuro do transplante capilar

## Pilar 2 — Dúvidas e medos antes da cirurgia (~25% da fila)

Dor, resultado natural, "cara de transplantado", conforto durante a
cirurgia, decisão sobre reoperar.

### 64. O que é uma hairline natural?
- Nota: já existe artigo publicado (`hairline-natural-transplante-capilar`,
  pacote editorial externo). Avalie antes de produzir.
### 67. Posso assistir TV durante a cirurgia?
### 68. Posso dormir durante o transplante?
### 69. Como funciona a sedação venosa?
- Nota: já existe artigo publicado (`sedacao-transplante-capilar`, pacote
  editorial externo). Avalie antes de produzir.
### 85. Segunda cirurgia é comum?
### 86. Quantas cirurgias uma pessoa pode fazer?
### 87. Quando vale a pena reoperar?
### 90. Como evitar transplantes artificiais
- Nota: tema próximo dos artigos publicados `como-identificar-transplante-capilar-natural`
  e `sinais-transplante-capilar-mal-feito` (pacote editorial externo).
  Diferencie o ângulo (ex.: foco em prevenção/planejamento, não em
  identificação pós-cirurgia) antes de produzir.

## Pilar 3 — Pós-operatório e recuperação (~20% da fila)

Cronograma de cicatrização, cuidados práticos, quando o resultado aparece.

### 70. Quando posso voltar ao trabalho?
### 71. Quando posso usar boné?
### 72. Quando posso cortar o cabelo?
### 73. Quando posso fazer academia?
### 74. Quando posso voltar a nadar?
### 75. Posso tomar sol?
### 76. Como lavar o cabelo após a cirurgia?
### 77. Crostas: quanto tempo permanecem?
### 78. É normal perder os fios transplantados?
### 79. O que é Shock Loss?
### 80. Quando o resultado começa?
### 81. Resultado de 3 meses
### 82. Resultado de 6 meses
### 83. Resultado de 12 meses
### 84. Resultado de 18 meses

## Pilar 4 — Calvície, tricologia geral e tratamentos clínicos (~15% da fila)

Causas da queda de cabelo e opções de tratamento não cirúrgico. Duas
frentes que se alternam (ver regra de escolha no topo desta seção).

### Calvície geral

### 125. Canetas emagrecedoras (Ozempic, Mounjaro, Wegovy) e queda de cabelo
- **Objetivo SEO**: caneta emagrecedora causa queda de cabelo / Mounjaro
  queda de cabelo / Ozempic queda de cabelo
- **Prioridade alta** (portado do PR #101, fechado em 2026-08-27):
  renumerado de 123 pra 125 porque o número 123 já pertence ao artigo
  publicado `nutraceuticos-para-queda-de-cabelo` (ver "Já publicados").
  Colocado no topo desta subseção pra ser o próximo item elegível do
  Pilar 4, mantendo a prioridade original do pedido do Dr. Vitor.
- **Briefing**: tema de alta prioridade (aproveitar o hype atual do
  Mounjaro/Ozempic/Wegovy — tirzepatida, semaglutida, liraglutida). Cobrir:
  (1) essas canetas (agonistas de GLP-1) causam queda de cabelo direto, ou é
  efeito colateral da perda de peso rápida (eflúvio telógeno por perda de
  peso/restrição calórica/deficiência nutricional, mecanismo já conhecido
  independente do medicamento em si); (2) o que dizem bula e estudos sobre
  a incidência real; (3) é temporário ou permanente; (4) quem já tem
  predisposição genética à calvície pode ter o processo "acelerado/
  revelado" pelo emagrecimento rápido, mesmo sem o medicamento ser a causa
  direta; (5) o que fazer (avaliação nutricional, reposição de proteína/
  ferro/zinco, quando procurar avaliação capilar); (6) deixar claro que não
  se trata de contraindicar o uso do medicamento (foge do escopo do blog
  e da especialidade), só de explicar e orientar sobre o efeito capilar.
  Nota de compliance: usar os nomes de substância (semaglutida, tirzepatida,
  liraglutida) e marcas amplamente divulgadas (Ozempic, Mounjaro, Wegovy,
  Saxenda) apenas como termos de busca/contexto informativo, nunca fazer
  qualquer recomendação de uso, dose ou indicação desses medicamentos —
  isso é fora da especialidade do Dr. Vitor.

### 22. Primeiros sinais da calvície masculina
- **Briefing**: entradas; afinamento; miniaturização.
- Nota (2026-08-14): avaliado antes de escrever. O briefing (entradas,
  afinamento, miniaturização) já está coberto em profundidade por três
  artigos publicados: `entradas-aumentando`, `meu-cabelo-esta-afinando` e
  `como-saber-se-estou-ficando-careca` (os três mencionam miniaturização
  explicitamente). Considerado já coberto, não escrever versão nova a menos
  que surja um ângulo claramente distinto.
### 23. Como saber se estou ficando careca?
- Nota: já existe artigo publicado (`como-saber-se-estou-ficando-careca`,
  pacote editorial externo) com esse título quase idêntico. Pule ou
  diferencie bastante o ângulo.
### 28. Toda queda de cabelo é calvície?
- Nota (2026-08-17): avaliado antes de escrever. O artigo
  `queda-de-cabelo-e-normal` já tem um H2 dedicado exatamente a esta
  pergunta ("Queda de cabelo e calvície são a mesma coisa?"). Considerado
  já coberto, não escrever versão nova a menos que surja um ângulo
  claramente distinto.
### 29. Diferença entre queda de cabelo e quebra dos fios
- Nota (2026-08-17): avaliado antes de escrever. O artigo
  `queda-de-cabelo-e-normal` já tem um H2 dedicado ("Como diferenciar queda
  de quebra?"). Considerado já coberto, não escrever versão nova a menos
  que surja um ângulo claramente distinto.
### 30. Como identificar afinamento dos fios
- Nota (2026-08-17): avaliado antes de escrever. O artigo
  `meu-cabelo-esta-afinando` já cobre este briefing em profundidade (causas,
  sinais e quando investigar o afinamento). Considerado já coberto, não
  escrever versão nova a menos que surja um ângulo claramente distinto.
### 32. Jovens podem fazer transplante?
- Nota (2026-08-26): reavaliado. O artigo `calvicie-aos-18-anos` (publicado
  em 2026-08-24) passou a ter um H2 dedicado, "Transplante capilar é
  indicado tão jovem?", respondendo exatamente esta pergunta (padrão de
  calvície ainda não estabilizado, tratamento clínico como prioridade,
  cirurgia como etapa posterior). Considerado já coberto, não escrever
  versão nova a menos que surja um ângulo claramente distinto.
### 33. Como o estresse influencia o cabelo
- Nota (2026-08-17): avaliado antes de escrever. O artigo
  `queda-de-cabelo-e-normal` já tem um H2 dedicado ("Estresse realmente
  causa queda?"). Considerado já coberto, não escrever versão nova a menos
  que surja um ângulo claramente distinto.
### 36. Vitaminas ajudam?
- Nota (2026-08-26): avaliado antes de escrever. O artigo
  `alimentacao-interfere-na-calvicie` já responde esta pergunta de forma
  ampla, cobrindo proteína, ferro, zinco, biotina, ômega-3 e vitamina D com
  evidência real. Considerado já coberto, não escrever versão nova a menos
  que surja um ângulo claramente distinto (ex.: uma vitamina específica
  ainda não aprofundada isoladamente).
### 39. Testosterona causa calvície?
### 40. Creatina provoca queda de cabelo?

### 124. Escala PRECISE
- **Objetivo SEO**: escala PRECISE alopecia androgenética (avaliar se vira
  keyword primária nova do DNA na hora de escrever, ou se `calvície tem
  cura`/outra da lista fixa encaixa melhor)
- Sugerido pelo Dr. Vitor (2026-08-15, portado do PR #93 fechado em
  2026-08-27): existe artigo publicado no PubMed sobre o assunto.
- **Briefing** (levantado via PubMed nesta sessão, conferir a fonte antes de
  publicar): a escala PRECISE é uma classificação **quantitativa** da
  alopecia androgenética, publicada em 2023 na revista Aesthetic Plastic
  Surgery (Pittella, Castro et al.), disponível em
  https://pmc.ncbi.nlm.nih.gov/articles/PMC10980655/ e
  https://pubmed.ncbi.nlm.nih.gov/37365308/. Fórmula: PRECISE = RBA/30 + TS
  (RBA = área relativa de calvície, incluindo afinamento corrigido pelo
  Índice de Miniaturização Capilar; TS = escore de recessão temporal, 0 a
  0,3). Pontuação de 0 a 10, cada 30 cm² de calvície equivalendo a 1 ponto.
  Aplicação prática: recomenda cerca de 1.500 unidades foliculares por
  ponto da escala para planejar o transplante. Ângulo natural do artigo:
  contraste com a escala de Norwood (`escala-de-norwood`, qualitativa/
  comparativa por fotos) versus PRECISE (quantitativa/matemática), e como
  uma classificação numérica ajuda a estimar a quantidade de enxertos com
  mais objetividade. Linkar com `escala-de-norwood` e com
  `quem-pode-fazer-transplante-capilar`. **Antes de publicar**: reler as
  fontes originais para confirmar os números acima (foram resumidos por IA
  a partir do texto da PMC, não conferidos folículo por fórmula pelo Dr.
  Vitor) e adaptar a linguagem ao tom do blog, sem citar a fórmula/dosagem
  de UF por ponto como recomendação fechada do Instituto Frauches sem
  reforçar que a contagem real depende de avaliação individual.

### Medicamentos e tratamentos

### 41. Dutasterida funciona melhor que Finasterida?
- Nota: já existe artigo publicado (`dutasterida-para-calvicie`, pacote
  editorial externo) sobre dutasterida em geral. Este item pode focar
  especificamente na comparação com finasterida, ângulo ainda não coberto.
### 42. Finasterida tópica vale a pena?
### 43. Minoxidil oral ou tópico?
- Nota: já existe artigo publicado (`minoxidil-para-queda-de-cabelo` e
  `minoxidil-funciona`) cobrindo isso. Avalie antes de produzir.
### 44. Quando começar o tratamento clínico?
### 45. Posso parar o Minoxidil?
### 46. O que acontece se parar a Finasterida?
### 47. Shampoo antiqueda funciona?
### 48. Laser para queda de cabelo funciona?
### 49. MMP para calvície
- Nota: já existe artigo publicado (`mmp-capilar`, pacote editorial
  externo). Avalie antes de produzir.
### 50. Mesoterapia para queda
- Nota: já existe artigo publicado (`mesoterapia-capilar`, pacote editorial
  externo). Avalie antes de produzir.
### 51. Exossomos para cabelo
- Nota: já existe artigo publicado (`exossomos-para-queda-de-cabelo`,
  pacote editorial externo). Avalie antes de produzir.
### 52. Células-tronco no tratamento da calvície
### 53. PRF x PRP
### 54. Microagulhamento funciona?
### 55. LED capilar
### 56. Capacete de laser realmente funciona?
### 57. Suplementos para cabelo
### 58. Biotina realmente funciona?
### 59. Cafeína contra queda capilar
### 60. O futuro do tratamento da calvície

## Pilar 5 — Casos especiais e público específico (~10% da fila)

Tipos de cabelo, transplante de barba/sobrancelha, público fora de
Vitória/ES, correção de cirurgias anteriores.

### 106. Transplante em mulheres
### 107. Transplante para barba
### 108. Transplante para sobrancelhas
### 109. Transplante após queimaduras
### 110. Correção de transplantes antigos
### 111. Correção de hairline artificial
### 112. Transplante após micropigmentação
### 113. Transplante em cabelos cacheados
### 114. Transplante em cabelos crespos
### 115. Transplante em cabelos grisalhos
### 116. Pacientes internacionais: como funciona
### 117. Como é a consulta para transplante capilar
- Nota: tema próximo do artigo publicado
  `o-que-perguntar-consulta-transplante-capilar` (pacote editorial
  externo, ângulo "20 perguntas para fazer"). Este item pode focar em como
  a consulta funciona do ponto de vista do médico/clínica, ângulo
  complementar.
### 118. O que levar no dia da cirurgia
### 119. Mitos sobre transplante capilar
### 120. As 30 dúvidas mais frequentes dos pacientes
- Coberto em 2026-07-29 pela página `faq-transplante-capilar` (28 perguntas
  e respostas organizadas por tema: técnica, dor, preço, quem pode fazer,
  área doadora, recuperação, resultado, escolha da clínica), publicada como
  hub de respostas curtas com link para o artigo completo quando existe.
  Formato hub em vez de artigo único de 900-1500 palavras, então não
  conflita com a nota original de não fazer um artigo gigante.
### 121. Transplante capilar para pacientes de outros estados
- **Objetivo SEO**: transplante capilar para quem mora fora de Vitória/ES
- **Briefing**: como funciona o atendimento pra paciente que não é de
  Vitória/ES (avaliação à distância antes da cirurgia, o que é feito por
  telemedicina/fotos vs. o que exige presença física, cronograma da viagem
  em torno da cirurgia, acompanhamento pós-operatório à distância).
### 122. Como viajar para Vitória para fazer transplante capilar
- **Objetivo SEO**: viajar para Vitória transplante capilar
- **Briefing**: planejamento prático da viagem (quantos dias ficar antes/
  depois da cirurgia, quando chegar e quando pode voar de volta, hospedagem
  perto da clínica, o que fazer na cidade durante a recuperação, cuidados
  de viagem específicos do pós-operatório FUE). Linkar com o item 121
  (público de fora do estado) e com `recuperacao-transplante-capilar`.

## Já publicados

Os 2 artigos de lançamento (`transplante-capilar-fue-o-que-e`,
`transplante-capilar-doi`) vieram da distribuição de pilares do DNA, não
desta fila. A partir daqui, os itens vieram da fila de sugeridos:

- Item 2, "Quanto custa um transplante capilar em 2026?" — publicado em
  2026-07-25 como `preco-transplante-capilar` (PR #1). **Superado em
  2026-07-26**: duplicava `quanto-custa-transplante-capilar` (pacote
  editorial externo, mesma keyword). O artigo deste item foi removido e
  `/blog/preco-transplante-capilar` agora redireciona (301) pro
  sobrevivente.
- Item 3, "Quem é candidato ao transplante capilar?" — publicado em
  2026-07-25 como `quem-pode-fazer-transplante-capilar` (PR #2).
- Item 4, "Quanto tempo demora para nascer o cabelo transplantado?" —
  publicado em 2026-07-25 como `resultado-transplante-capilar-linha-do-tempo`
  (PR #3).
- Item 5, "Transplante capilar dura para sempre?" — publicado em 2026-07-25
  como `transplante-capilar-e-definitivo` (PR #4).
- Item 7, "FUE ou FUT: qual a melhor técnica?" — publicado em 2026-07-25
  como `fue-ou-fut` (PR #5).
- Item 8, "Como escolher uma clínica de transplante capilar" — publicado em
  2026-07-25 como `como-escolher-clinica-transplante-capilar` (PR #6).
- Item 9, "Área doadora: por que ela é o patrimônio do paciente?" —
  publicado em 2026-07-25 como `area-doadora-transplante-capilar` (PR #7).
- Item 10, "Quais exames são necessários antes do transplante?" — publicado
  em 2026-07-25 como `exames-antes-do-transplante-capilar` (PR #8).
- Item 11, "Calvície tem cura?" — publicado em 2026-07-25 como
  `calvicie-tem-cura` (PR #9).
- Item 12, "Minoxidil realmente funciona?" — publicado em 2026-07-25 como
  `minoxidil-funciona` (PR #10). **Superado em 2026-07-26**: duplicava
  `minoxidil-para-queda-de-cabelo` (pacote editorial externo, mesma
  keyword). O artigo deste item foi removido e `/blog/minoxidil-funciona`
  agora redireciona (301) pro sobrevivente.

Item 6, "O que é a técnica FUE?", permanece em Pendentes (não foi usado
neste lote por risco de duplicidade com o artigo de lançamento).
- Item 123, "Nutracêuticos para crescimento capilar: Actrisave, Bioarct,
  Bloome, Keranat e outros" — publicado em 2026-07-27 como
  `nutraceuticos-para-queda-de-cabelo`. Keyword primária usada:
  "nutracêuticos para queda de cabelo" (não constava na lista fixa do
  DNA; considerar adicioná-la às secundárias, já que é um termo de busca
  real e distinto de "suplementos para cabelo").
- Item 17, "Por que o microscópio faz diferença na cirurgia?" — publicado em
  2026-07-29 como `microscopio-no-transplante-capilar`. Keyword primária
  usada: "microscópio no transplante capilar" (não constava na lista fixa
  do DNA; adicionada às secundárias). Itens 15, 16 e 93 reavaliados e
  marcados como já cobertos por outros artigos (ver notas nos próprios
  itens).
- Item 19, "Boné causa calvície?" — publicado em 2026-07-31 como
  `bone-causa-calvicie-masculina`. Keyword primária usada: "calvície
  masculina" (não havia keyword da lista fixa do DNA que casasse
  diretamente com este tema; "calvície masculina" só era usada até então
  pela página-guia `guia-calvicie-masculina`, não por um artigo comum).
  Itens 13, 14 e 18 reavaliados e marcados como já cobertos por outros
  artigos (ver notas nos próprios itens).
- Item 20, "Shampoo faz nascer cabelo?" — publicado em 2026-08-03 como
  `shampoo-faz-nascer-cabelo`. Keyword primária usada: "shampoo faz nascer
  cabelo" (não constava na lista fixa do DNA; adicionada às secundárias e
  à lista de Intenção GEO, junto com a pergunta correlata "Lavar o cabelo
  todo dia causa queda?", também coberta no mesmo artigo).
- Item 21, "O que é alopecia androgenética?" — publicado em 2026-08-05 como
  `alopecia-androgenetica`. Keyword primária usada: "alopecia
  androgenética" (já constava na lista de secundárias do DNA; escolhida
  como primária deste artigo específico por ser o tema central).
- Item 24, "Quais exames ajudam no diagnóstico da queda capilar?" —
  publicado em 2026-08-07 como `exames-para-queda-de-cabelo`. Keyword
  primária usada: "exames para queda de cabelo" (não constava na lista
  fixa do DNA; adicionada às secundárias). Ângulo diferente de
  `exames-antes-do-transplante-capilar`, que cobre exames pré-cirúrgicos,
  não o diagnóstico geral da queda de cabelo. Itens 22 (primeiros sinais)
  avaliado e considerado majoritariamente coberto por
  `entradas-aumentando` e `meu-cabelo-esta-afinando` (entradas e
  afinamento já detalhados nesses dois artigos); pulado a menos que surja
  ângulo claramente distinto.
- Item 25, "Calvície genética pode ser evitada?" — publicado em 2026-08-10
  como `calvicie-genetica-pode-ser-evitada`. Keyword primária usada:
  "calvície genética" (não constava na lista fixa do DNA; adicionada às
  secundárias). Ângulo de prevenção/controle, distinto de
  `alopecia-androgenetica` (definição do mecanismo) e `calvicie-tem-cura`
  (cura x controle).
- Item 26, "A calvície piora com a idade?" — publicado em 2026-08-12 como
  `calvicie-piora-com-a-idade`. Keyword primária usada: "calvície piora com
  a idade" (não constava na lista fixa do DNA; adicionada às secundárias).
  Ângulo de progressão por década de vida e distinção entre calvície
  genética e envelhecimento capilar comum, distinto de
  `alopecia-androgenetica` (mecanismo e fases gerais) e
  `calvicie-genetica-pode-ser-evitada` (prevenção/controle). Publicado sem
  imagem de capa: as duas ferramentas de geração de imagem do ambiente
  (Higgsfield e Kairogen) estavam sem créditos no momento da execução.
- Item 27, "Escala de Norwood explicada" — publicado em 2026-08-14 como
  `escala-de-norwood`. Keyword primária nova "escala de Norwood" (não
  constava na lista fixa do DNA; adicionada às secundárias e à Intenção
  GEO). Itens 22 e 23 avaliados antes deste e marcados como já cobertos por
  artigos existentes (ver notas em Pendentes), então 27 foi o próximo item
  elegível da fila.
- Item 34, "Dormir mal aumenta a queda?" — publicado em 2026-08-17 como
  `dormir-mal-causa-queda-de-cabelo`. Keyword primária nova "dormir mal
  causa queda de cabelo" (não constava na lista fixa do DNA; adicionada às
  secundárias). Ângulo fisiológico (cortisol, hormônio do crescimento,
  ritmo circadiano) e prático (higiene do sono, apneia), distinto de
  `queda-de-cabelo-e-normal` (eflúvio em geral) e `calvicie-piora-com-a-idade`
  (onde sono ruim só aparece como um fator agravante entre outros, sem
  desenvolvimento próprio). Itens 28, 29, 30 e 33 avaliados antes deste e
  marcados como já cobertos por artigos existentes; itens 31 e 32 avaliados
  e mantidos pendentes por sobreposição parcial que ainda não justifica
  pular de vez (ver notas em Pendentes). 34 foi o próximo item plenamente
  elegível da fila.
- Item 37, "Deficiência de ferro causa queda?" — publicado em 2026-08-20
  como `deficiencia-de-ferro-causa-queda-de-cabelo`. Keyword primária nova
  "deficiência de ferro causa queda de cabelo" (não constava na lista fixa
  do DNA; adicionada às secundárias). Ângulo nutricional/laboratorial
  (ferritina, grupos de risco, diferenciação frente à calvície genética),
  distinto de `queda-de-cabelo-e-normal` (eflúvio em geral) e de
  `exames-para-queda-de-cabelo` (que só cita ferritina brevemente como um
  dos exames do painel, sem desenvolver o tema). Itens 31 e 32 seguem
  pendentes por sobreposição parcial ainda não diferenciada o suficiente;
  35 e 36 (alimentação e vitaminas em geral) seguem pendentes para uma
  próxima rodada. 37 foi escolhido por ser o item plenamente elegível mais
  específico e com maior volume de busca autônomo da fila.
- Item 35, "Alimentação interfere na calvície?" — publicado em 2026-08-22
  como `alimentacao-interfere-na-calvicie`. Keyword primária nova
  "alimentação interfere na calvície" (não constava na lista fixa do DNA;
  adicionada às secundárias). Ângulo de distinguir o que a dieta realmente
  influencia (saúde geral do folículo, eflúvio nutricional) do que ela não
  muda (o mecanismo genético/hormonal da calvície), citando proteína,
  ferro, zinco, biotina, ômega-3 e vitamina D com evidência real; distinto
  de `deficiencia-de-ferro-causa-queda-de-cabelo` (que aprofunda só o
  ferro) e de `nutraceuticos-para-queda-de-cabelo` (que cobre fórmulas de
  suplemento específicas, não alimentação em geral). Itens 31 e 32 seguem
  pendentes por sobreposição parcial ainda não diferenciada o suficiente;
  36 (vitaminas em geral) segue pendente para uma próxima rodada.
- Item 31, "Calvície pode começar aos 18 anos?" — publicado em 2026-08-24
  como `calvicie-aos-18-anos`. Keyword primária nova "calvície aos 18 anos"
  (não constava na lista fixa do DNA; adicionada às secundárias). Ângulo
  definido na nota de 2026-08-17: validar o medo específico de quem nota
  sinais de calvície ainda aos 18 anos e orientar o que fazer a respeito
  (tricoscopia, tratamento clínico precoce, por que a cirurgia geralmente
  não é indicada nessa idade, e o impacto emocional do diagnóstico
  precoce), distinto de `calvicie-piora-com-a-idade` (progressão década a
  década, sem foco em um público jovem específico nem no lado emocional).
  Item 32 segue pendente por ainda não ter um ângulo suficientemente
  diferenciado de `quem-pode-fazer-transplante-capilar`.
- Item 38, "Deficiência de vitamina D causa calvície?" — publicado em
  2026-08-26 como `deficiencia-de-vitamina-d-causa-queda-de-cabelo`.
  Keyword primária nova "deficiência de vitamina D causa queda de cabelo"
  (não constava na lista fixa do DNA; adicionada às secundárias e à
  Intenção GEO). Ângulo de mecanismo específico (receptor de vitamina D
  nas células-tronco do folículo), fatores de risco mesmo em cidade
  ensolarada e diagnóstico/tratamento com exame, distinto de
  `alimentacao-interfere-na-calvicie` (que só cita vitamina D de passagem
  dentro de uma lista geral de nutrientes, sem aprofundar), seguindo o
  mesmo padrão de artigo dedicado já usado para
  `deficiencia-de-ferro-causa-queda-de-cabelo`. Itens 32 e 36 reavaliados
  e marcados como já cobertos por outros artigos (ver notas em
  Pendentes); 39 e 40 seguem pendentes para uma próxima rodada.

**Nota (2026-08-27)**: os 9 artigos publicados entre `alopecia-androgenetica`
(21, 2026-08-05) e `deficiencia-de-vitamina-d-causa-queda-de-cabelo` (38,
2026-08-26) saíram todos do Pilar 4 (Calvície e tricologia geral), porque
essa era a única faixa da fila antiga com itens plenamente elegíveis
naquele momento (itens 22-37 do bloco "Tudo sobre calvície"). A partir
desta reorganização, a fila passa a alternar entre os 5 pilares do DNA a
cada nova publicação (ver regra de escolha em "Pendentes" acima).
- Item 61, "Quantos fios preciso transplantar?" — publicado em 2026-08-28
  como `quantos-fios-transplante-capilar` (Pilar 1, Técnica FUE e
  tecnologia, sem publicação nova desde 2026-07-31 até então). Keyword
  primária nova "quantos fios transplante capilar" (não constava na lista
  fixa do DNA; adicionada às secundárias). Ângulo de planejamento
  quantitativo (unidades foliculares x fios, estágio de Norwood, densidade
  alvo, tipo de fio, teto da área doadora), distinto de
  `area-doadora-transplante-capilar` (que cobre a capacidade da área
  doadora em si, sem detalhar o cálculo de quantas unidades são necessárias
  para cobrir a área receptora). Linkado com `escala-de-norwood` e
  `area-doadora-transplante-capilar`.
- Item 66, "Quanto tempo dura a cirurgia?" — publicado em 2026-08-31 como
  `quanto-tempo-dura-transplante-capilar` (Pilar 2, Dúvidas e medos antes da
  cirurgia, sem publicação nova desde 2026-07-31 até então). Keyword
  primária nova "quanto tempo dura o transplante capilar" (não constava na
  lista fixa do DNA; adicionada às secundárias e à Intenção GEO). Ângulo de
  aprofundamento real (por que a cirurgia demora tantas horas, fatores que
  mudam a duração, etapas do dia da cirurgia, como é passar tantas horas
  sedado), distinto da menção de duas frases em uma FAQ de
  `transplante-capilar-fue-o-que-e`, que não desenvolve o tema. Item 64
  reavaliado antes deste e mantido como "avaliar antes de produzir" por
  sobreposição com `hairline-natural-transplante-capilar`; itens 67, 68 e
  90 seguem pendentes (67 e 68 têm sobreposição parcial com a seção "Como é
  passar tantas horas em uma cirurgia?" deste novo artigo, mas ainda não o
  suficiente para marcar como cobertos). Linkado com
  `sedacao-transplante-capilar`, `tecnica-fue-transplante-capilar` e
  `quantos-fios-transplante-capilar`. Próximo artigo deve vir do Pilar 3
  (Pós-operatório e recuperação), sem publicação nova desde 2026-07-25.
