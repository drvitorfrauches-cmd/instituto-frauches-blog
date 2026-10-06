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
   Exceção: itens do lote 2 (ids 201-300) com a linha **Prioridade** (muito
   alta antes de alta) têm preferência sobre os demais da mesma subseção,
   mesmo que estejam mais abaixo.
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

## Lote 2 (2026-10-03): 100 temas para os próximos meses

O Dr. Vitor enviou uma nova lista de 100 temas (três grupos: tratamento clínico
e diagnóstico, transplante e planejamento cirúrgico, pós-operatório). Cada tema
foi encaixado no pilar do `DNA.md` mais próximo e leva o id **200 + número da
lista do Dr. Vitor** (o tema 15 dele é o item 215), para não colidir com os ids
antigos. Dentro de cada subseção, os itens do lote 2 estão ordenados por
prioridade (muito alta, alta, sem marca), e o ângulo é o que ele sugeriu.

Regras para escrever qualquer item do lote 2:
- Conferir a nota de sobreposição do item antes de escrever: boa parte dos temas
  já tem uma seção curta em artigo publicado. Nesses casos o artigo novo
  aprofunda e linka o existente, sem copiar texto.
- Efeitos adversos de medicamentos (finasterida, dutasterida, minoxidil oral),
  hormônios, anabolizantes e anticoagulantes: informar com evidência e sem
  alarmismo, e nunca orientar dose, início, suspensão ou retomada por conta
  própria (a decisão é do médico que acompanha, conforme CFM e o `DNA.md`).
- Evitar colisão de keyword primária com artigo já publicado (ver a nota do item
  272, por exemplo) e não comparar clínicas ou médicos pelo nome.
- Após publicar, mover o item para "Já publicados" como de costume.

## Pilar 1 — Técnica FUE e tecnologia (~30% da fila)

Como funciona a técnica, etapas da cirurgia do ponto de vista técnico,
diferenças para FUT, tecnologia e instrumental usados.

### 62. O que são unidades foliculares?
- Nota (2026-09-16): avaliado antes de escrever o item 97. O artigo
  `tecnica-fue-transplante-capilar` já tem um H2 dedicado ("O que é uma
  unidade folicular?"), cobrindo definição, composição (um a mais fios,
  glândula sebácea, tecido de suporte) e classificação por número de fios.
  Considerado já coberto, não escrever versão nova a menos que surja um
  ângulo claramente distinto.
### 63. O que é densidade capilar?
- Nota (2026-09-16): avaliado antes de escrever o item 97. O artigo
  `quantos-fios-transplante-capilar` já tem um H2 dedicado ("O que é
  densidade capilar e por que ela importa no cálculo?"), cobrindo definição,
  faixa normal (80-100 UF/cm² na área doadora) e por que o planejamento não
  busca replicar a densidade original. Considerado coberto o suficiente por
  ora, não escrever versão nova a menos que surja um ângulo claramente
  distinto (ex.: comparação entre densidade doadora x receptora em mais
  profundidade).
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
### 99. O que é transecção folicular?
### 100. Como aumentar a sobrevivência dos enxertos
### 101. O papel da equipe cirúrgica
### 102. O que diferencia uma cirurgia premium?
### 103. Como reduzir o trauma dos enxertos
### 104. Bioestimulação durante a cirurgia
### 105. O futuro do transplante capilar

#### Lote 2, sugerido em 2026-10-03 (id = número do Dr. Vitor + 200)

### 242. Miniaturização na área doadora: por que ela muda completamente o planejamento
- **Objetivo SEO**: miniaturização área doadora
- **Briefing** (ângulo sugerido pelo Dr. Vitor): tricoscopia pré-operatória.
- **Prioridade**: muito alta

### 245. Transplante da coroa: por que o redemoinho torna essa região mais difícil?
- **Objetivo SEO**: transplante capilar coroa
- **Briefing** (ângulo sugerido pelo Dr. Vitor): whorl, direção e alto consumo de enxertos.
- **Prioridade**: muito alta

### 264. DHI e FUE são técnicas concorrentes? Entenda a confusão
- **Objetivo SEO**: DHI ou FUE
- **Briefing** (ângulo sugerido pelo Dr. Vitor): explicar corretamente que FUE se refere à extração e DHI à implantação.
- **Prioridade**: muito alta
- Nota (2026-10-03): `tecnologias-transplante-capilar` já tem uma seção sobre DHI. Foco aqui: desfazer a confusão (FUE é extração, DHI é implantação). Linkar `tecnologias-transplante-capilar` e `tecnica-fue-transplante-capilar`.

### 237. Como calcular a densidade da área doadora antes do transplante capilar?
- **Objetivo SEO**: densidade área doadora
- **Briefing** (ângulo sugerido pelo Dr. Vitor): unidades foliculares/cm², calibre e planejamento.
- **Prioridade**: alta
- Nota (2026-10-03): `quantos-fios-transplante-capilar` e `area-doadora-transplante-capilar` já tocam em densidade. Foco aqui: como medir a densidade da área doadora (UF/cm², tricoscopia). Ver também o item 63 ("O que é densidade capilar?").

### 238. Fio fino ou grosso: por que o calibre muda tanto o resultado do transplante?
- **Objetivo SEO**: calibre cabelo transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): cobertura visual.

### 239. Cor do cabelo e da pele influencia o resultado do transplante?
- **Objetivo SEO**: cor cabelo transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): contraste e ilusão de densidade.

### 240. Relação entre área doadora e área receptora: por que não dá para cobrir tudo sempre
- **Objetivo SEO**: área doadora área receptora transplante
- **Briefing** (ângulo sugerido pelo Dr. Vitor): matemática do planejamento. Excelente para pacientes grau alto.
- Nota (2026-10-03): `quantos-fios-transplante-capilar` e `area-doadora-transplante-capilar` já cobrem parte da relação entre área doadora e receptora. Aprofundar a matemática para graus avançados e linkar os dois.

### 241. Onde começa e termina a zona segura da área doadora?
- **Objetivo SEO**: zona segura área doadora
- **Briefing** (ângulo sugerido pelo Dr. Vitor): limites anatômicos e progressão futura.
- Nota (2026-10-03): `area-doadora-transplante-capilar` já fala de limites da área doadora. Aprofundar a zona segura e a progressão futura.

### 243. Donor dominance: por que o cabelo transplantado mantém características da área doadora?
- **Objetivo SEO**: donor dominance transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): conceito científico pouco explorado em português.

### 244. Por que a extração deve ser distribuída pela área doadora?
- **Objetivo SEO**: extração área doadora FUE
- **Briefing** (ângulo sugerido pelo Dr. Vitor): homogeneidade x aspecto “comido por traça”.

### 246. Reconstrução dos picos temporais: o detalhe que muda o enquadramento do rosto
- **Objetivo SEO**: transplante picos temporais
- **Briefing** (ângulo sugerido pelo Dr. Vitor): temporal peaks e naturalidade.

### 247. Ângulo frontotemporal: por que ele muda com a idade?
- **Objetivo SEO**: ângulo frontotemporal transplante
- **Briefing** (ângulo sugerido pelo Dr. Vitor): evitar hairlines juvenis artificiais.

### 248. Por que usamos folículos de um fio na primeira linha da hairline?
- **Objetivo SEO**: folículos de um fio hairline
- **Briefing** (ângulo sugerido pelo Dr. Vitor): naturalidade microscópica.

### 249. Onde devem ser colocadas unidades foliculares de dois, três e quatro fios?
- **Objetivo SEO**: unidades foliculares transplante
- **Briefing** (ângulo sugerido pelo Dr. Vitor): distribuição estratégica para densidade.
- Nota (2026-10-03): Ver nota do item 62 da fila antiga (unidades foliculares já têm um H2 em `tecnica-fue-transplante-capilar`). Aqui o foco é onde colocar cada tipo (um, dois, três e quatro fios).

### 250. Densidade real x densidade visual no transplante capilar
- **Objetivo SEO**: densidade transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): por que mais enxertos nem sempre significam melhor cobertura.
- Nota (2026-10-03): Possível sobreposição com `quantos-fios-transplante-capilar` (densidade desejada). Foco aqui: densidade real x densidade visual.

### 251. Dense packing: colocar muitos enxertos muito próximos é sempre melhor?
- **Objetivo SEO**: dense packing transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): densidade versus vascularização e segurança.

### 252. Megassessão e gigassessão no transplante capilar: quando fazem sentido?
- **Objetivo SEO**: megassessão transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): grandes números de unidades foliculares sem transformar quantidade em marketing.

### 253. Transplante capilar em um dia ou em dois dias: existe diferença?
- **Objetivo SEO**: transplante capilar dois dias
- **Briefing** (ângulo sugerido pelo Dr. Vitor): tempo cirúrgico, enxertos e logística.
- Nota (2026-10-03): `quanto-tempo-dura-transplante-capilar` já explica a duração do dia de cirurgia. Foco aqui: transplante em um ou dois dias (logística, número de enxertos, qualidade).

### 259. Capping na FUE: o que acontece quando o punch separa apenas a parte superficial do enxerto?
- **Objetivo SEO**: capping FUE
- **Briefing** (ângulo sugerido pelo Dr. Vitor): conteúdo técnico que reforça autoridade.

### 260. Buried graft: o que é um folículo enterrado durante a extração FUE?
- **Objetivo SEO**: buried graft FUE
- **Briefing** (ângulo sugerido pelo Dr. Vitor): complicação técnica e prevenção.

### 261. Lapidação dos enxertos: por que preparar a unidade folicular antes da implantação?
- **Objetivo SEO**: lapidação enxertos transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): microscopia e controle de qualidade. Excelente para sua expertise docente.

### 262. Isquemia e reperfusão dos enxertos: o que acontece enquanto o folículo está fora do corpo?
- **Objetivo SEO**: isquemia enxerto transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): fisiologia do enxerto e sobrevivência.

### 263. Implanter ou pinça: qual a diferença na implantação dos fios?
- **Objetivo SEO**: implanter ou pinça transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): manipulação, direção e experiência. Forte para o seu posicionamento.
- Nota (2026-10-03): Item 18 da fila antiga já foi marcado como coberto por `tecnologias-transplante-capilar` (H3 "Implanter é melhor que pinça?"). Avaliar junto com o item 92 (Implanter Pen) e o 267 (implanter afiado x rombo) para não gerar três artigos repetidos.

### 265. DNI x DHI: qual a diferença na implantação com implanters?
- **Objetivo SEO**: DNI DHI transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): pré-incisão + implanter rombo versus implantação/incisão simultânea.
- Nota (2026-10-03): Ver itens 264 e 266 (DHI x FUE e pré-incisão): avaliar se DNI x DHI e pré-incisão x implantação direta viram um único artigo.

### 266. Pré-incisão ou implantação direta: o que muda no transplante capilar?
- **Objetivo SEO**: pré incisão transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): planejamento de sítios receptores.

### 267. Implanter afiado x implanter rombo: qual a diferença?
- **Objetivo SEO**: implanter afiado rombo
- **Briefing** (ângulo sugerido pelo Dr. Vitor): excelente conteúdo técnico sem concorrência relevante.

### 268. O tamanho da incisão receptora influencia cicatrização e densidade?
- **Objetivo SEO**: incisão transplante capilar tamanho
- **Briefing** (ângulo sugerido pelo Dr. Vitor): compatibilidade com o enxerto e trauma tecidual.

### 269. Popping no transplante capilar: por que um enxerto pode sair quando outro é implantado?
- **Objetivo SEO**: popping transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): pressão tecidual e densidade.

### 270. Tumescência no transplante capilar: para que serve?
- **Objetivo SEO**: tumescência transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): controle anatômico, anestesia e plano de trabalho.

### 271. Bloqueios anestésicos no transplante capilar: como funcionam?
- **Objetivo SEO**: bloqueio anestésico transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): frontal, occipital e conforto cirúrgico.

## Pilar 2 — Dúvidas e medos antes da cirurgia (~25% da fila)

Dor, resultado natural, "cara de transplantado", conforto durante a
cirurgia, decisão sobre reoperar.

### 64. O que é uma hairline natural?
- Nota: já existe artigo publicado (`hairline-natural-transplante-capilar`,
  pacote editorial externo). Avalie antes de produzir.
### 69. Como funciona a sedação venosa?
- Nota: já existe artigo publicado (`sedacao-transplante-capilar`, pacote
  editorial externo). Avalie antes de produzir.
### 90. Como evitar transplantes artificiais
- Nota: tema próximo dos artigos publicados `como-identificar-transplante-capilar-natural`
  e `sinais-transplante-capilar-mal-feito` (pacote editorial externo).
  Diferencie o ângulo (ex.: foco em prevenção/planejamento, não em
  identificação pós-cirurgia) antes de produzir.

#### Lote 2, sugerido em 2026-10-03 (id = número do Dr. Vitor + 200)

### 256. Área doadora fraca: ainda é possível fazer transplante capilar?
- **Objetivo SEO**: área doadora fraca transplante
- **Briefing** (ângulo sugerido pelo Dr. Vitor): uma das melhores dúvidas comerciais para seu blog.
- Nota (2026-10-03): `area-doadora-transplante-capilar` já aborda reserva limitada. Foco aqui: o que ainda é possível quando a área doadora é fraca (BHT, expectativa, indicação).

### 272. Quem realmente pode realizar cada etapa do transplante capilar?
- **Objetivo SEO**: quem pode fazer transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): responsabilidade médica, equipe e o que perguntar antes da cirurgia. Grande potencial comercial.
- Nota (2026-10-03): ATENÇÃO, colisão de keyword: `quem pode fazer transplante capilar` já é o tema de `quem-pode-fazer-transplante-capilar` (candidatura do paciente). Este item trata de quem executa cada etapa (médico, equipe, responsabilidade). Usar outra keyword primária, por exemplo "quem realiza o transplante capilar", e linkar o artigo existente. Relacionado ao item 101 da fila antiga (papel da equipe cirúrgica). Manter o tom factual, sem comparar clínicas (Resolução CFM 2.336/2023).

### 273. Diabetes e transplante capilar: é possível operar com segurança?
- **Objetivo SEO**: diabetes transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): controle glicêmico, cicatrização e avaliação.
- Nota (2026-10-03): `quem-pode-fazer-transplante-capilar` e `sedacao-transplante-capilar` já têm trechos sobre diabetes. Aprofundar controle glicêmico, cicatrização e avaliação pré-operatória; não orientar mudança de medicação.

### 274. Quem usa anticoagulante pode fazer transplante capilar?
- **Objetivo SEO**: anticoagulante transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): segurança e necessidade de decisão médica, sem orientar suspensão por conta própria.
- Nota (2026-10-03): `exames-antes-do-transplante-capilar` já cita anticoagulantes. Aprofundar; nunca orientar suspensão por conta própria, a decisão é médica (como o Dr. Vitor já indicou).

### 275. Transplante capilar depois dos 60 ou 70 anos: idade é um limite?
- **Objetivo SEO**: transplante capilar idosos
- **Briefing** (ângulo sugerido pelo Dr. Vitor): excelente para combater uma objeção real e gerar histórias de casos.
- Nota (2026-10-03): `quem-pode-fazer-transplante-capilar` tem um FAQ "Existe idade máxima para o transplante capilar?". Aprofundar (avaliação clínica, área doadora, expectativa).

## Pilar 3 — Pós-operatório e recuperação (~20% da fila)

Cronograma de cicatrização, cuidados práticos, quando o resultado aparece.

### 70. Quando posso voltar ao trabalho?
### 71. Quando posso usar boné?
### 72. Quando posso cortar o cabelo?
### 73. Quando posso fazer academia?
### 75. Posso tomar sol?
### 76. Como lavar o cabelo após a cirurgia?
### 77. Crostas: quanto tempo permanecem?
### 78. É normal perder os fios transplantados?
- Nota (2026-09-02): avaliado antes de escrever. O artigo
  `recuperacao-transplante-capilar` já tem um H3 dedicado ("O cabelo
  transplantado cai?"), e o novo artigo `shock-loss-transplante-capilar`
  aprofunda o mecanismo completo. Considerado já coberto, não escrever
  versão nova a menos que surja um ângulo claramente distinto.
### 80. Quando o resultado começa?
### 81. Resultado de 3 meses
### 82. Resultado de 6 meses
### 83. Resultado de 12 meses
### 84. Resultado de 18 meses

#### Lote 2, sugerido em 2026-10-03 (id = número do Dr. Vitor + 200)

### 296. Quando reiniciar minoxidil após o transplante capilar?
- **Objetivo SEO**: minoxidil depois transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): timing, irritação e individualização.
- **Prioridade**: muito alta
- Nota (2026-10-03): Tema sensível: não orientar dose nem retomada por conta própria, a decisão é do médico que acompanha. Linkar `minoxidil-para-queda-de-cabelo` (seção "Minoxidil antes e depois do transplante").

### 297. Preciso continuar finasterida ou dutasterida depois do transplante?
- **Objetivo SEO**: finasterida depois transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): preservar fios nativos versus fios transplantados.
- **Prioridade**: muito alta
- Nota (2026-10-03): Tema sensível: não orientar suspensão nem uso por conta própria. Linkar `finasterida-para-calvicie` e `dutasterida-para-calvicie` (ambos têm seção sobre antes e depois do transplante).

### 290. Cigarro e transplante capilar: fumar pode prejudicar os enxertos?
- **Objetivo SEO**: fumar depois transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): nicotina, microcirculação e cicatrização.
- **Prioridade**: alta
- Nota (2026-10-03): `quem-pode-fazer-transplante-capilar` tem um FAQ "Fumantes podem fazer transplante capilar?". Aprofundar nicotina, microcirculação e cicatrização.

### 277. Como dormir depois do transplante capilar sem encostar nos enxertos?
- **Objetivo SEO**: como dormir depois transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): posição, travesseiro e edema. Excelente busca long-tail.
- Nota (2026-10-03): `recuperacao-transplante-capilar` já tem uma seção "Dormir após o transplante" e `dormir-durante-transplante-capilar` é sobre sedação (outro assunto). Aprofundar posição, travesseiro e edema.

### 278. Inchaço depois do transplante capilar: quando é normal e quando preocupar?
- **Objetivo SEO**: inchaço transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): edema frontal e sinais de alerta.
- Nota (2026-10-03): `recuperacao-transplante-capilar` já tem o H2 "Edema no rosto é normal?". O satélite aprofunda o edema frontal e os sinais de alerta.

### 279. Quanto tempo dura a vermelhidão após o transplante capilar?
- **Objetivo SEO**: vermelhidão transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): fototipo, cicatrização e expectativa social.
- Nota (2026-10-03): `recuperacao-transplante-capilar` já tem um FAQ "Quanto tempo dura a vermelhidão?". Aprofundar fototipo, cicatrização e expectativa social.

### 280. Coceira após transplante capilar: posso coçar?
- **Objetivo SEO**: coceira transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): cicatrização versus trauma aos enxertos.

### 281. Dormência no couro cabeludo depois do transplante: é normal?
- **Objetivo SEO**: dormência transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): alteração sensitiva temporária.

### 282. Foliculite depois do transplante capilar: por que aparecem espinhas?
- **Objetivo SEO**: foliculite transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): crescimento dos fios, higiene e quando avaliar.
- Nota (2026-10-03): `recuperacao-transplante-capilar` já tem a seção "Foliculite e espinhas". Ver também o item 288 (espinhas na área doadora): avaliar unir os dois.

### 283. Infecção no transplante capilar: quais são os sinais de alerta?
- **Objetivo SEO**: infecção transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): febre, dor crescente, secreção e vermelhidão progressiva.
- Nota (2026-10-03): `recuperacao-transplante-capilar` já tem a seção "Sinais de alerta". O satélite detalha febre, dor crescente, secreção e vermelhidão progressiva.

### 284. Sangramento depois do transplante capilar: quando é esperado?
- **Objetivo SEO**: sangramento transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): pequenas crostas versus sangramento persistente.

### 285. Meu enxerto caiu? Como diferenciar um fio, uma crosta e um folículo
- **Objetivo SEO**: enxerto caiu transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): dúvida que gera enorme ansiedade. Potencial AEO muito alto.
- Nota (2026-10-03): Ver `shock-loss-transplante-capilar` e o item 78 da fila antiga ("É normal perder os fios transplantados?"). Foco aqui: diferenciar fio, crosta e folículo.

### 286. Ugly duckling phase: a fase em que o transplante parece ter piorado
- **Objetivo SEO**: ugly duckling transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): queda dos fios, aparência temporária e ansiedade.
- Nota (2026-10-03): Sobreposição com `shock-loss-transplante-capilar`, `resultado-transplante-capilar-linha-do-tempo` e o item 78 da fila antiga. Foco aqui: a fase em que o transplante parece pior (ugly duckling) e a ansiedade do paciente.

### 287. Como cicatriza a área doadora depois da FUE?
- **Objetivo SEO**: cicatrização área doadora FUE
- **Briefing** (ângulo sugerido pelo Dr. Vitor): pontos avermelhados, marcas e evolução.

### 288. Espinhas na área doadora depois do transplante: o que pode ser?
- **Objetivo SEO**: espinhas área doadora transplante
- **Briefing** (ângulo sugerido pelo Dr. Vitor): foliculite, pelos encravados e inflamação.
- Nota (2026-10-03): Ver nota do item 282 (foliculite): avaliar unir os dois.

### 289. Quando posso beber álcool depois do transplante capilar?
- **Objetivo SEO**: álcool depois transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): medicações, sangramento, hidratação e recuperação.

### 291. Quando posso ter relação sexual depois do transplante capilar?
- **Objetivo SEO**: sexo depois transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): esforço físico, pressão e risco de trauma. Excelente long-tail.

### 292. Viajar de avião depois do transplante capilar: quando é seguro?
- **Objetivo SEO**: avião depois transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): pacientes de outros estados e internacionais. Muito alinhado à sua clínica.
- Nota (2026-10-03): Ver o item 122 da fila (viajar para Vitória) e o item 121; `recuperacao-transplante-capilar` já cita viagem. Linkar os três.

### 293. Quando posso usar capacete depois do transplante capilar?
- **Objetivo SEO**: capacete depois transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): moto, profissão e atrito na região receptora.
- Nota (2026-10-03): Sobreposição com o item 71 da fila antiga ("Quando posso usar boné?"), com `bone-causa-calvicie-masculina` e com o FAQ de capacete em `recuperacao-transplante-capilar`. Foco aqui: moto, profissão e atrito.

### 294. Quando posso voltar a usar gel, pomada, spray ou fibras capilares?
- **Objetivo SEO**: pomada depois transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): cosméticos e cicatrização.

### 295. Quando posso pintar ou descolorir o cabelo após o transplante?
- **Objetivo SEO**: pintar cabelo depois transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): tintura, descoloração e irritação química.
- Nota (2026-10-03): `recuperacao-transplante-capilar` já tem a seção "Quando posso cortar ou pintar o cabelo?". Aprofundar tintura, descoloração e irritação química.

### 298. PRP depois do transplante capilar melhora o resultado?
- **Objetivo SEO**: PRP depois transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): evidência, potencial benefício e limites.

### 299. Laser de baixa intensidade no pós-transplante: ajuda na recuperação?
- **Objetivo SEO**: laser depois transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): fotobiomodulação e evidência disponível.
- Nota (2026-10-03): `laser-para-queda-de-cabelo` já foi publicado. Foco aqui: fotobiomodulação especificamente no pós-transplante, com a evidência disponível.

### 300. Por que a coroa pode crescer mais devagar que a região frontal após o transplante?
- **Objetivo SEO**: coroa demora crescer transplante capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): vascularização, ciclo folicular, percepção visual e cronologia do resultado.

## Pilar 4 — Calvície, tricologia geral e tratamentos clínicos (~15% da fila)

Causas da queda de cabelo e opções de tratamento não cirúrgico. Duas
frentes que se alternam (ver regra de escolha no topo desta seção).

### Calvície geral

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

#### Lote 2, sugerido em 2026-10-03 (id = número do Dr. Vitor + 200)

### 226. Reposição de testosterona acelera a calvície?
- **Objetivo SEO**: testosterona causa calvície
- **Briefing** (ângulo sugerido pelo Dr. Vitor): TRT, DHT e predisposição genética.
- **Prioridade**: muito alta
- Nota (2026-10-03): Duplicado do item 39 ("Testosterona causa calvície?", Pilar 4). Escrever um único artigo com o ângulo do Dr. Vitor (TRT, DHT e predisposição) e marcar o item 39 como coberto.

### 221. É possível ter calvície e eflúvio telógeno ao mesmo tempo?
- **Objetivo SEO**: calvície e eflúvio telógeno
- **Briefing** (ângulo sugerido pelo Dr. Vitor): sobreposição de diagnósticos.
- **Prioridade**: alta

### 224. Dermatite seborreica causa queda de cabelo?
- **Objetivo SEO**: dermatite seborreica queda cabelo
- **Briefing** (ângulo sugerido pelo Dr. Vitor): inflamação x alopecia androgenética.
- **Prioridade**: alta

### 219. Tricoscopia no acompanhamento da calvície: o que conseguimos medir?
- **Objetivo SEO**: tricoscopia calvície
- **Briefing** (ângulo sugerido pelo Dr. Vitor): miniaturização, densidade e calibre.

### 220. Miniaturização capilar: o que esse número significa na tricoscopia?
- **Objetivo SEO**: miniaturização capilar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): explicar um conceito técnico de forma simples.

### 222. DUPA: a calvície difusa que pode contraindicar o transplante capilar
- **Objetivo SEO**: DUPA cabelo
- **Briefing** (ângulo sugerido pelo Dr. Vitor): Diffuse Unpatterned Alopecia e área doadora. Excelente conteúdo de autoridade.

### 223. Alopecia retrógrada: quando a área doadora também começa a afinar
- **Objetivo SEO**: alopecia retrógrada
- **Briefing** (ângulo sugerido pelo Dr. Vitor): nuca, laterais e impacto no transplante.

### 225. Psoríase no couro cabeludo e queda de cabelo: existe relação?
- **Objetivo SEO**: psoríase queda cabelo
- **Briefing** (ângulo sugerido pelo Dr. Vitor): doença inflamatória e perda temporária.

### 227. Anabolizantes podem acelerar a queda de cabelo?
- **Objetivo SEO**: anabolizante queda cabelo
- **Briefing** (ângulo sugerido pelo Dr. Vitor): andrógenos, DHT e predisposição. Forte potencial social + Google.
- Nota (2026-10-03): Tema sensível: informar o mecanismo (andrógenos, DHT, predisposição) sem incentivar ou instruir o uso de anabolizantes.

### 228. Menopausa e queda de cabelo: por que os fios afinam?
- **Objetivo SEO**: menopausa queda cabelo
- **Briefing** (ângulo sugerido pelo Dr. Vitor): hormônios e alopecia feminina.
- Nota (2026-10-03): `calvicie-feminina-transplante-capilar` tem um FAQ "A menopausa piora a calvície feminina?" e `calvicie-piora-com-a-idade` cita menopausa. Aprofundar hormônios e opções de manejo.

### 229. Síndrome dos ovários policísticos e queda de cabelo
- **Objetivo SEO**: SOP queda cabelo
- **Briefing** (ângulo sugerido pelo Dr. Vitor): hiperandrogenismo e diagnóstico diferencial.

### 230. Espironolactona para calvície feminina: quando é utilizada?
- **Objetivo SEO**: espironolactona queda cabelo
- **Briefing** (ângulo sugerido pelo Dr. Vitor): antiandrogênio em mulheres e contraindicações.

### 231. Eflúvio telógeno crônico: quando a queda dura meses ou anos
- **Objetivo SEO**: eflúvio telógeno crônico
- **Briefing** (ângulo sugerido pelo Dr. Vitor): diferenciação da alopecia androgenética.

### 232. Queda de cabelo após cirurgia e anestesia: por que acontece?
- **Objetivo SEO**: queda cabelo depois cirurgia
- **Briefing** (ângulo sugerido pelo Dr. Vitor): eflúvio provocado por estresse fisiológico.

### 233. Queda de cabelo depois da Covid: ainda pode acontecer?
- **Objetivo SEO**: queda cabelo pós covid
- **Briefing** (ângulo sugerido pelo Dr. Vitor): eflúvio pós-infeccioso.
- Nota (2026-10-03): `queda-de-cabelo-e-normal` já tem um FAQ "Covid e outras infecções podem causar queda?". Aprofundar o eflúvio pós-infeccioso e a cronologia da recuperação.

### 234. Tireoide ou calvície? Como diferenciar as causas de afinamento
- **Objetivo SEO**: tireoide queda cabelo
- **Briefing** (ângulo sugerido pelo Dr. Vitor): hipotireoidismo, hipertireoidismo e alopecia androgenética.

### 235. Alopecia areata ou calvície? Como diferenciar
- **Objetivo SEO**: alopecia areata ou calvície
- **Briefing** (ângulo sugerido pelo Dr. Vitor): placas x miniaturização androgenética.

### 236. Alopecia por tração: quando penteados começam a destruir os folículos
- **Objetivo SEO**: alopecia por tração
- **Briefing** (ângulo sugerido pelo Dr. Vitor): prevenção, reversibilidade e transplante em casos tardios.
- Nota (2026-10-03): `bone-causa-calvicie-masculina` tem um FAQ sobre elástico apertado e tração, e cita a página da AAD sobre penteados que puxam. Aprofundar a alopecia por tração (estágios, reversibilidade, transplante em casos tardios).

### Medicamentos e tratamentos

### 41. Dutasterida funciona melhor que Finasterida?
- Nota (2026-09-04): reavaliado antes de escrever o item 48. O artigo
  `dutasterida-para-calvicie` já tem um H2 dedicado ("Dutasterida é mais
  eficaz que finasterida?") e um H3 ("Dutasterida faz nascer mais cabelo
  que finasterida?"), cobrindo mecanismo, eficácia comparativa, mitos e
  perguntas para a consulta. Considerado já coberto, não escrever versão
  nova a menos que surja um ângulo claramente distinto.
### 42. Finasterida tópica vale a pena?
- Nota (2026-09-04): reavaliado antes de escrever o item 48. O artigo
  `finasterida-para-calvicie` já tem um H2 dedicado ("Finasterida oral ou
  tópica?") e um H3 ("Finasterida tópica não tem efeitos sistêmicos?"),
  incluindo o alerta da FDA de 2025 sobre formulações manipuladas.
  Considerado já coberto, não escrever versão nova a menos que surja um
  ângulo claramente distinto.
### 43. Minoxidil oral ou tópico?
- Nota: já existe artigo publicado (`minoxidil-para-queda-de-cabelo` e
  `minoxidil-funciona`) cobrindo isso. Avalie antes de produzir.
### 44. Quando começar o tratamento clínico?
- Nota (2026-10-03): avaliado antes de escrever o item 46. Os artigos
  `calvicie-genetica-pode-ser-evitada` (H2 "Quando começar a agir faz
  diferença?", com o conceito de janela de oportunidade) e
  `calvicie-tem-cura` (H2 "Por que começar o tratamento cedo faz
  diferença") já respondem esta pergunta. Considerado já coberto, não
  escrever versão nova a menos que surja um ângulo claramente distinto.
### 45. Posso parar o Minoxidil?
- Nota (2026-09-04): reavaliado antes de escrever o item 48. O artigo
  `minoxidil-para-queda-de-cabelo` já tem um H2 ("O que acontece se
  parar?") e um H3 ("Posso parar gradualmente?"). Considerado já coberto,
  não escrever versão nova a menos que surja um ângulo claramente
  distinto.
### 47. Shampoo antiqueda funciona?
- Nota (2026-09-04): reavaliado antes de escrever o item 48. O artigo
  `shampoo-faz-nascer-cabelo` já cobre exatamente este ângulo (o que
  shampoos antiqueda contêm de ativo, o que a evidência sustenta, quando o
  problema já passou do ponto em que um produto de banho resolve).
  Considerado já coberto, não escrever versão nova a menos que surja um
  ângulo claramente distinto.
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
### 57. Suplementos para cabelo
### 58. Biotina realmente funciona?
### 59. Cafeína contra queda capilar
### 60. O futuro do tratamento da calvície

#### Lote 2, sugerido em 2026-10-03 (id = número do Dr. Vitor + 200)

### 215. Finasterida + minoxidil: por que a combinação é tão utilizada?
- **Objetivo SEO**: finasterida e minoxidil juntos
- **Briefing** (ângulo sugerido pelo Dr. Vitor): mecanismos complementares e expectativas.
- **Prioridade**: muito alta
- Nota (2026-10-03): Já existe H2 "Pode combinar com minoxidil?" em `finasterida-para-calvicie` e "Pode combinar com finasterida ou dutasterida?" em `minoxidil-para-queda-de-cabelo`. O artigo novo vira o hub da combinação (mecanismos complementares, expectativas, acompanhamento), linkando os dois.

### 201. Finasterida e fertilidade masculina: ela altera o espermograma?
- **Objetivo SEO**: finasterida fertilidade masculina
- **Briefing** (ângulo sugerido pelo Dr. Vitor): evidências, reversibilidade e quando investigar.
- **Prioridade**: alta
- Nota (2026-10-03): `finasterida-para-calvicie` já tem um H2 curto "Finasterida prejudica fertilidade?". Este item aprofunda (espermograma, reversibilidade, quando investigar), então não é duplicidade, mas linkar o artigo e não repetir o texto.

### 210. Minoxidil oral faz mal para o coração?
- **Objetivo SEO**: minoxidil oral coração
- **Briefing** (ângulo sugerido pelo Dr. Vitor): pressão arterial, frequência cardíaca e seleção do paciente.
- **Prioridade**: alta
- Nota (2026-10-03): `minoxidil-para-queda-de-cabelo` já tem H2 "Efeitos adversos do minoxidil oral" e FAQ "Minoxidil oral é perigoso?". Aprofundar o lado cardiovascular (pressão, frequência, seleção do paciente) sem orientar dose ou uso.

### 213. Minoxidil espuma ou solução: qual a diferença?
- **Objetivo SEO**: minoxidil espuma ou solução
- **Briefing** (ângulo sugerido pelo Dr. Vitor): tolerabilidade, veículo e adesão.
- **Prioridade**: alta

### 218. Como saber se o tratamento da calvície está funcionando?
- **Objetivo SEO**: como saber tratamento calvície funcionando
- **Briefing** (ângulo sugerido pelo Dr. Vitor): fotografias, densidade, calibre e tricoscopia.
- **Prioridade**: alta

### 202. Homem usando finasterida pode tentar engravidar a parceira?
- **Objetivo SEO**: finasterida gravidez parceira
- **Briefing** (ângulo sugerido pelo Dr. Vitor): exposição pelo sêmen, mitos e recomendações médicas.

### 203. Finasterida altera o PSA? O que homens precisam saber
- **Objetivo SEO**: finasterida PSA
- **Briefing** (ângulo sugerido pelo Dr. Vitor): interpretação do exame e comunicação ao urologista.
- Nota (2026-10-03): `finasterida-para-calvicie` já tem um H2 "Finasterida altera o PSA?". Aprofundar a interpretação do exame e a conversa com o urologista; se ficar redundante, tratar junto com o item 209 (dutasterida e PSA) em um único artigo.

### 204. Finasterida pode causar ginecomastia?
- **Objetivo SEO**: finasterida ginecomastia
- **Briefing** (ângulo sugerido pelo Dr. Vitor): frequência, sinais e conduta.

### 205. Síndrome pós-finasterida existe? O que sabemos até hoje
- **Objetivo SEO**: síndrome pós finasterida
- **Briefing** (ângulo sugerido pelo Dr. Vitor): tema controverso tratado sem alarmismo. Potencial alto de buscas e citações por IA.
- Nota (2026-10-03): `finasterida-para-calvicie` já tem H2 sobre humor e FAQ "Efeitos persistem depois de parar?" (com o alerta da EMA de 2025). Item sensível: manter o tom sem alarmismo e sem minimizar. Relacionado ao item 46 (o que acontece se parar a finasterida).

### 206. Efeito nocebo da finasterida: expectativa pode aumentar efeitos colaterais?
- **Objetivo SEO**: finasterida efeito nocebo
- **Briefing** (ângulo sugerido pelo Dr. Vitor): estudos controlados e comunicação médico-paciente.

### 207. Dutasterida permanece quanto tempo no organismo?
- **Objetivo SEO**: meia vida dutasterida
- **Briefing** (ângulo sugerido pelo Dr. Vitor): meia-vida longa e implicações práticas.
- Nota (2026-10-03): `dutasterida-para-calvicie` já tem um FAQ "Quanto tempo permanece no organismo?". Aprofundar (meia-vida, doação de sangue, planejamento); ver também o item 208 (dutasterida e fertilidade).

### 208. Dutasterida pode afetar a fertilidade masculina?
- **Objetivo SEO**: dutasterida fertilidade
- **Briefing** (ângulo sugerido pelo Dr. Vitor): sêmen, espermograma e planejamento familiar.
- Nota (2026-10-03): `dutasterida-para-calvicie` já tem um H2 "Dutasterida afeta fertilidade?". Aprofundar sêmen, espermograma e planejamento familiar; linkar o artigo.

### 209. Dutasterida interfere no PSA?
- **Objetivo SEO**: dutasterida PSA
- **Briefing** (ângulo sugerido pelo Dr. Vitor): screening prostático e interpretação correta.
- Nota (2026-10-03): `dutasterida-para-calvicie` já tem um H2 "Dutasterida altera PSA?". Ver nota do item 203; avaliar unir finasterida e dutasterida em um único artigo sobre PSA.

### 211. Hipertricose com minoxidil oral: por que acontece e o que fazer?
- **Objetivo SEO**: minoxidil hipertricose
- **Briefing** (ângulo sugerido pelo Dr. Vitor): crescimento de pelos corporais e manejo.
- Nota (2026-10-03): `minoxidil-para-queda-de-cabelo` já tem um FAQ "Minoxidil dá pelos no rosto?". Aprofundar a hipertricose e o manejo.

### 212. Minoxidil oral causa inchaço?
- **Objetivo SEO**: minoxidil oral edema
- **Briefing** (ângulo sugerido pelo Dr. Vitor): retenção hídrica, tornozelos e sinais de alerta.
- Nota (2026-10-03): `minoxidil-para-queda-de-cabelo` já cobre efeitos adversos do oral em geral. Aprofundar o edema e os sinais de alerta (inchaço nos tornozelos, falta de ar).

### 214. Minoxidil causa coceira e descamação no couro cabeludo?
- **Objetivo SEO**: minoxidil coceira couro cabeludo
- **Briefing** (ângulo sugerido pelo Dr. Vitor): propilenoglicol, dermatite e alternativas.

### 216. Dutasterida + minoxidil: quando essa associação é considerada?
- **Objetivo SEO**: dutasterida e minoxidil juntos
- **Briefing** (ângulo sugerido pelo Dr. Vitor): casos selecionados e acompanhamento.
- Nota (2026-10-03): `dutasterida-para-calvicie` já tem um H2 "Dutasterida pode ser combinada com minoxidil?". Aprofundar casos selecionados e acompanhamento.

### 217. Meu tratamento para calvície parou de funcionar. O que pode ter acontecido?
- **Objetivo SEO**: tratamento calvície parou de funcionar
- **Briefing** (ângulo sugerido pelo Dr. Vitor): progressão, adesão, diagnóstico e expectativas. Excelente AEO.
- Nota (2026-10-03): Pode linkar com o item 218 (como saber se o tratamento está funcionando) e com o item 44 da fila antiga. Cuidado para não sugerir troca de medicação por conta própria.

## Pilar 5 — Casos especiais e público específico (~10% da fila)

Tipos de cabelo, transplante de barba/sobrancelha, público fora de
Vitória/ES, correção de cirurgias anteriores.

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

#### Lote 2, sugerido em 2026-10-03 (id = número do Dr. Vitor + 200)

### 255. Body Hair Transplant: é possível usar pelos do corpo no couro cabeludo?
- **Objetivo SEO**: body hair transplant
- **Briefing** (ângulo sugerido pelo Dr. Vitor): barba, tórax, limitações e características distintas.
- **Prioridade**: alta

### 254. Barba como área doadora para transplante capilar: quando pode ser utilizada?
- **Objetivo SEO**: barba como área doadora transplante
- **Briefing** (ângulo sugerido pelo Dr. Vitor): BHT para pacientes com reserva limitada.
- Nota (2026-10-03): Ver também o item 255 (Body Hair Transplant): avaliar se barba como área doadora e BHT viram um único artigo.

### 257. Já fiz FUT. Posso fazer FUE em uma segunda cirurgia?
- **Objetivo SEO**: FUE depois de FUT
- **Briefing** (ângulo sugerido pelo Dr. Vitor): combinação de técnicas e reserva doadora.
- Nota (2026-10-03): `quem-pode-fazer-transplante-capilar` tem um FAQ sobre segunda cirurgia e `segunda-cirurgia-transplante-capilar` já cobre reoperação em geral. Foco aqui: FUE depois de FUT (combinação de técnicas e reserva doadora). Linkar `fue-ou-fut`.

### 258. Como melhorar uma cicatriz linear de FUT?
- **Objetivo SEO**: cicatriz FUT correção
- **Briefing** (ângulo sugerido pelo Dr. Vitor): FUE sobre cicatriz, camuflagem e limitações.
- Nota (2026-10-03): `fue-ou-fut` e `sinais-transplante-capilar-mal-feito` citam a cicatriz da FUT. Foco aqui: opções de correção (FUE sobre cicatriz, camuflagem, limitações).

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
  `quantos-fios-transplante-capilar`.
- Item 79, "O que é Shock Loss?" — publicado em 2026-09-02 como
  `shock-loss-transplante-capilar` (Pilar 3, Pós-operatório e recuperação,
  sem publicação nova desde 2026-07-25 até então). Keyword primária nova
  "shock loss transplante capilar" (não constava na lista fixa do DNA;
  adicionada às secundárias e à Intenção GEO). Itens 70 a 78 avaliados antes
  deste: todos já estão cobertos em profundidade pelos H2/H3 de
  `recuperacao-transplante-capilar` (voltar ao trabalho, boné, cortar o
  cabelo, academia, tomar sol, lavar o cabelo, crostas, queda do fio
  transplantado) ou por `resultado-transplante-capilar-linha-do-tempo`
  (itens 80 a 84, cronograma de resultado mês a mês), com exceção do item 74
  (nadar), que segue pendente por não ter ainda um ângulo distinto o
  suficiente pra artigo próprio (é citado de passagem em
  `recuperacao-transplante-capilar`). Item 79 foi escolhido por ser o único
  totalmente elegível da subseção, com um ângulo raso hoje (só 1-2 frases
  em outros artigos) e volume de busca próprio como termo técnico do
  paciente pesquisando após notar queda pós-cirúrgica. Linkado com
  `recuperacao-transplante-capilar`, `resultado-transplante-capilar-linha-do-tempo`
  e `minoxidil-para-queda-de-cabelo`. Próximo artigo deve vir do Pilar 4
  (Calvície, tricologia geral e tratamentos clínicos), sem publicação nova
  desde 2026-08-26.
- Item 48, "Laser para queda de cabelo funciona?" — publicado em 2026-09-04
  como `laser-para-queda-de-cabelo` (Pilar 4, subgrupo "Medicamentos e
  tratamentos"). Os dois últimos artigos do Pilar 4 (item 31,
  `calvicie-aos-18-anos`, e item 38,
  `deficiencia-de-vitamina-d-causa-queda-de-cabelo`) tinham saído seguidos
  do subgrupo "Calvície geral", então esta escolha alternou pro subgrupo
  "Medicamentos e tratamentos", conforme a regra de alternância do topo
  desta seção. Keyword primária nova "laser para queda de cabelo" (não
  constava na lista fixa do DNA; adicionada às secundárias e à Intenção
  GEO). Absorve o item 56 ("Capacete de laser realmente funciona?"), que
  virou uma seção dedicada dentro do mesmo artigo em vez de artigo
  separado, já que é o mesmo mecanismo (LLLT) em formato de aparelho
  diferente. Itens 41, 42, 45 e 47 reavaliados antes deste e marcados como
  já cobertos por outros artigos (ver notas em Pendentes). Linkado com
  `minoxidil-para-queda-de-cabelo` e `tecnologias-transplante-capilar`
  (que já tinha uma seção breve "Laser de baixa intensidade").
- Item 106, "Transplante em mulheres" — publicado em 2026-09-07 como
  `calvicie-feminina-transplante-capilar` (Pilar 5, Casos especiais e
  público específico). Os últimos 5 artigos publicados antes deste vinham
  dos Pilares 4, 3, 2, 1 e 4 (`laser-para-queda-de-cabelo`,
  `shock-loss-transplante-capilar`, `quanto-tempo-dura-transplante-capilar`,
  `quantos-fios-transplante-capilar`,
  `deficiencia-de-vitamina-d-causa-queda-de-cabelo`), então o Pilar 5 era o
  único sem nenhuma aparição recente, conforme a regra de rotação do topo
  desta seção. Keyword primária nova "calvície feminina" (já constava na
  lista fixa do DNA, mas nunca tinha sido usada como primária em nenhum
  título). Categorizado como "Transplante capilar" no `guia-transplante-capilar`
  (seção "Planejamento e área doadora"), por ser mais sobre candidatura e
  planejamento cirúrgico específico para mulheres do que sobre calvície em
  geral. Linkado com `escala-de-norwood` (escala de Ludwig) e
  `quem-pode-fazer-transplante-capilar`. Próximo artigo deve evitar
  repetir o Pilar 5 ou o Pilar 4 antes de cobrir Pilares 1, 2 ou 3.
- Item 107, "Transplante para barba" — publicado em 2026-09-14 como
  `transplante-de-barba` (Pilar 5, Casos especiais e público específico).
  Keyword primária "transplante de barba" (já constava nas secundárias do
  DNA). Ângulo: mesma técnica FUE aplicada ao rosto, reserva compartilhada
  com a área doadora do couro cabeludo, angulação/direção específica do
  pelo facial e riscos de resultado artificial nessa área. Categorizado no
  `guia-transplante-capilar`, nova seção "Casos especiais" (não havia seção
  adequada nas 5 existentes). Nota: esta escolha foi feita em paralelo à
  publicação do item 106 acima (`calvicie-feminina-transplante-capilar`,
  PR ainda aberto no momento desta escolha) — os dois são artigos
  distintos do mesmo pilar, publicados quase ao mesmo tempo por execuções
  agendadas diferentes, sem conflito de conteúdo entre si.
- Item 97, "Punch no transplante capilar: por que a qualidade do
  instrumento faz diferença no resultado?" — publicado em 2026-09-16 como
  `punch-transplante-capilar` (Pilar 1, Técnica FUE e tecnologia, sem
  publicação nova desde 2026-08-28, item 61). Os últimos 5 artigos
  publicados antes deste vinham dos Pilares 5, 5, 4, 3 e 2
  (`transplante-de-barba`, `calvicie-feminina-transplante-capilar`,
  `laser-para-queda-de-cabelo`, `shock-loss-transplante-capilar`,
  `quanto-tempo-dura-transplante-capilar`), então o Pilar 1 era o único sem
  nenhuma aparição recente. Título encurtado para "Punch no transplante
  capilar: por que ele importa?" pra caber no limite de ~65 caracteres.
  Keyword primária nova "punch transplante capilar" (não constava na lista
  fixa do DNA; adicionada às secundárias e à Intenção GEO, junto com "Punch
  maior estraga a área doadora?"). Usou o briefing completo de 12 seções já
  registrado neste item, condensado em H2/H3 (definição, diâmetro e área
  removida com números concretos, tipos de ponta, rotação x oscilação,
  marcas usadas no mundo, tecnologia x experiência do cirurgião, o que o
  Instituto Frauches usa, FAQ e checklist de perguntas pra consulta).
  Absorve o item 98 (diferença entre punch de 0,8 e 1 mm), coberto dentro
  da seção de diâmetro. Itens 62 e 63 reavaliados antes deste e marcados
  como já cobertos por outros artigos (ver notas em Pendentes). Linkado com
  `tecnica-fue-transplante-capilar`, `tecnologias-transplante-capilar`,
  `quantos-fios-transplante-capilar` e `area-doadora-transplante-capilar`.
  Próximo artigo deve evitar repetir o Pilar 1 antes de cobrir os Pilares
  2, 3, 4 ou 5.
- Itens 67 e 68, "Posso assistir TV durante a cirurgia?" e "Posso dormir
  durante o transplante?" — publicados juntos em 2026-09-18 como
  `dormir-durante-transplante-capilar` (Pilar 2, Dúvidas e medos antes da
  cirurgia, sem publicação nova desde 2026-08-31, item 66). Os últimos 5
  artigos publicados antes deste vinham dos Pilares 3, 4, 5, 5 e 1
  (`shock-loss-transplante-capilar`, `laser-para-queda-de-cabelo`,
  `calvicie-feminina-transplante-capilar`, `transplante-de-barba`,
  `punch-transplante-capilar`), então o Pilar 2 era o mais atrasado na
  rotação. Keyword primária nova "posso dormir durante o transplante
  capilar" (não constava na lista fixa do DNA; adicionada às secundárias e
  à Intenção GEO, junto com "Qual a diferença entre sedação venosa e
  sedação oral no transplante capilar?"). **Correção de rumo em
  2026-09-18**: a primeira versão deste artigo (mesmo PR #118) misturava
  sedação venosa com sedação oral e com pacientes acordados assistindo
  TV/ouvindo música durante a cirurgia, como se fossem opções equivalentes
  oferecidas pela clínica. O Dr. Vitor corrigiu isso depois de ler o PR: no
  Instituto Frauches só se usa sedação venosa, e o paciente dorme a
  cirurgia inteira, sem despertar no meio do procedimento (não existe
  intervalo consciente nem o cenário de "assistir TV durante a extração").
  O PR #118 foi fechado e o artigo reescrito do zero com esse ângulo:
  explica como a sedação venosa funciona, contrasta com a sedação oral
  (mais leve, usada em clínicas com menos estrutura, paciente consciente
  durante boa parte do procedimento) e reforça por que o Instituto Frauches
  optou por usar sempre sedação venosa (conforto do paciente e estabilidade
  para a equipe cirúrgica numa cirurgia longa). **Isso pode indicar uma
  inconsistência a revisar em `sedacao-transplante-capilar`** (pacote
  editorial externo, publicado antes desta correção), que menciona "alguns
  pacientes preferem estar acordados. A decisão é individual" e descreve
  múltiplos níveis de sedação como se fossem opções oferecidas pela
  clínica; vale confirmar com o Dr. Vitor se esse artigo também precisa de
  ajuste antes de usá-lo como referência em textos futuros. Diferenciado de
  `quanto-tempo-dura-transplante-capilar` (que só tem um parágrafo breve
  sobre o tema). Categorizado no `guia-transplante-capilar` (seção
  "Cirurgia, dor e recuperação"). Item 64 segue como "avalie antes de
  produzir"; itens 85, 86, 87 e 90 seguem pendentes. Próximo artigo deve
  evitar repetir o Pilar 2 antes de cobrir os Pilares 1, 3, 4 ou 5.
- Item 74, "Quando posso voltar a nadar?" — publicado em 2026-09-21 como
  `nadar-apos-transplante-capilar` (Pilar 3, Pós-operatório e recuperação,
  sem publicação nova desde 2026-09-02, item 79). Os últimos 5 artigos
  publicados antes deste vinham dos Pilares 2, 1, 5, 5 e 4
  (`dormir-durante-transplante-capilar`, `punch-transplante-capilar`,
  `transplante-de-barba`, `calvicie-feminina-transplante-capilar`,
  `laser-para-queda-de-cabelo`), então o Pilar 3 era o mais atrasado na
  rotação e o item 74 era o único ainda elegível da subseção (os demais
  itens do Pilar 3 já estão cobertos por `recuperacao-transplante-capilar`
  e `resultado-transplante-capilar-linha-do-tempo`). Keyword primária nova
  "nadar após transplante capilar" (não constava na lista fixa do DNA;
  adicionada às secundárias e à Intenção GEO). Ângulo ampliado além da
  natação: piscina (cloro e touca), mar e praia, sauna, banheira de
  hidromassagem e vapor, diferença entre imersão e banho de chuveiro
  orientado, roteiro de retorno gradual e sinais de alerta. O prazo de
  liberação não foi apresentado como número fixo do Instituto (o DNA não
  registra um protocolo específico para água): o artigo diz que costuma ser
  de no mínimo duas semanas e que a equipe define caso a caso. **Vale o Dr.
  Vitor confirmar o prazo real usado pela clínica para piscina e mar e, se
  quiser, ajustar o artigo e registrar no DNA.** Linkado com
  `recuperacao-transplante-capilar` e
  `resultado-transplante-capilar-linha-do-tempo`. Próximo artigo deve
  evitar repetir o Pilar 3 antes de cobrir os Pilares 4, 1, 5 ou 2 (o mais
  atrasado hoje é o Pilar 4, que tem o item 125 sobre canetas emagrecedoras
  como prioridade alta).
- Item 125, "Canetas emagrecedoras (Ozempic, Mounjaro, Wegovy) e queda de
  cabelo" — publicado em 2026-09-24 como `caneta-emagrecedora-queda-de-cabelo`
  (Pilar 4, subgrupo "Calvície geral", sem publicação nova do Pilar 4 desde
  2026-09-04, item 48). Os últimos 5 artigos publicados antes deste vinham
  dos Pilares 3, 2, 1, 5 e 5, então o Pilar 4 era o mais atrasado na
  rotação; o último artigo do Pilar 4 (`laser-para-queda-de-cabelo`) era do
  subgrupo "Medicamentos e tratamentos", então esta escolha alternou para
  "Calvície geral", onde o item 125 estava no topo com prioridade alta.
  Keyword primária nova "caneta emagrecedora causa queda de cabelo" (não
  constava na lista fixa do DNA; adicionada às secundárias e à Intenção
  GEO). Cobre os 6 pontos do briefing: eflúvio telógeno pela perda de peso
  rápida x efeito direto do medicamento, o que bula e estudos relatam (sem
  citar percentuais específicos, só a direção dos achados), temporária x
  permanente, calvície genética "revelada" pelo emagrecimento, o que fazer
  (proteína, exames, reposição orientada, tricoscopia) e seção explícita
  deixando claro que o blog não indica nem contraindica o medicamento.
  Acrescentou uma seção sobre transplante capilar em quem está emagrecendo
  (esperar o peso estabilizar e o eflúvio passar antes de planejar).
  Categorizado no `guia-calvicie-masculina` (seção "Primeiros sinais e
  diagnóstico"). Linkado com `deficiencia-de-ferro-causa-queda-de-cabelo`,
  `alimentacao-interfere-na-calvicie`, `alopecia-androgenetica`,
  `exames-para-queda-de-cabelo` e `minoxidil-para-queda-de-cabelo`.
  Próximo artigo deve evitar repetir o Pilar 4 antes de cobrir os Pilares
  1, 5, 2 ou 3 (o mais atrasado hoje é o Pilar 1, último em 2026-09-16).
- Itens 94, 95 e 96, "Como os enxertos são armazenados", "Qual a
  temperatura ideal dos enxertos?" e "Tempo fora do corpo influencia?" —
  publicados juntos em 2026-09-25 como
  `armazenamento-enxertos-transplante-capilar` (Pilar 1, Técnica FUE e
  tecnologia, sem publicação nova desde 2026-09-16, item 97). Os últimos 5
  artigos publicados antes deste vinham dos Pilares 4, 3, 2, 1 e 5, então o
  Pilar 1 era o mais atrasado. Itens 62, 63 (já marcados), 65 (coberto por
  `hairline-natural-transplante-capilar`, que já explica como a linha
  frontal é desenhada), 88 e 89 (cobertos pelas seções de preservação e
  superextração de `area-doadora-transplante-capilar`), 91 e 92 (termo de
  marketing sem ângulo definido / implanter já coberto em
  `tecnologias-transplante-capilar`, ver item 18) foram avaliados antes e
  pulados nesta rodada; 94-96 eram os primeiros itens do pilar só citados
  de passagem (2-3 frases) em outros artigos. Os três viraram um único
  artigo por serem a mesma etapa da cirurgia. Keyword primária nova
  "armazenamento dos enxertos no transplante capilar" (não constava na
  lista fixa do DNA; sugerida para as secundárias). O artigo não cita
  temperatura, solução ou tempo específicos como protocolo do Instituto
  Frauches (o DNA não registra esses dados); fala em faixa "de poucos graus
  acima de zero" e em tendência dos estudos, sem percentuais. **Vale o Dr.
  Vitor confirmar a solução e a temperatura usadas na clínica e, se quiser,
  acrescentar ao artigo e ao DNA.** Item 100 (sobrevivência dos enxertos) e
  103 (reduzir trauma) ficaram parcialmente cobertos pelas seções
  "Manipulação" e "O que uma equipe faz, na prática" deste artigo; avaliar
  antes de produzir. Categorizado no `guia-transplante-capilar` (seção "A
  técnica"). Linkado com `microscopio-no-transplante-capilar`,
  `graftis-contagem-ao-vivo-transplante-capilar` e
  `resultado-transplante-capilar-linha-do-tempo`. Próximo artigo deve
  evitar repetir o Pilar 1 antes de cobrir os Pilares 5, 2, 3 ou 4.
- Item 108, "Transplante para sobrancelhas" — publicado em 2026-09-28 como
  `transplante-de-sobrancelha` (Pilar 5, Casos especiais e público
  específico, sem publicação nova desde 2026-09-14, item 107). Os últimos 5
  artigos publicados antes deste vinham dos Pilares 1, 4, 3, 2 e 1, então o
  Pilar 5 era o mais atrasado e o item 108 era o primeiro da subseção.
  Keyword primária "transplante de sobrancelha" (já constava nas
  secundárias do DNA, nunca usada como primária). Ângulo: indicações
  (depilação excessiva, cicatriz, micropigmentação sem volume, alopecia
  areata estabilizada), contraindicações por causa ativa (alopecia frontal
  fibrosante, tireoide, tricotilomania), escolha de fios únicos da nuca,
  as três direções de crescimento da sobrancelha, recuperação, o fio que
  cresce como cabelo e comparação com micropigmentação. Não cita número
  fixo de fios nem prazos como protocolo próprio do Instituto Frauches
  (faixas gerais com nota de variação individual). Categorizado no
  `guia-transplante-capilar` (seção "Casos especiais"). Linkado com
  `transplante-de-barba`, `exames-para-queda-de-cabelo`,
  `area-doadora-transplante-capilar` e `shock-loss-transplante-capilar`.
  Próximo artigo deve evitar repetir o Pilar 5 antes de cobrir os Pilares
  2, 3, 4 ou 1 (o mais atrasado hoje é o Pilar 2, último em 2026-09-18).
- Itens 85, 86 e 87, "Segunda cirurgia é comum?", "Quantas cirurgias uma
  pessoa pode fazer?" e "Quando vale a pena reoperar?" — publicados juntos
  em 2026-09-30 como `segunda-cirurgia-transplante-capilar` (Pilar 2,
  Dúvidas e medos antes da cirurgia, sem publicação nova desde 2026-09-18,
  item 67/68). Os últimos 5 artigos (contando `transplante-de-sobrancelha`,
  Pilar 5, já mesclado) vinham dos Pilares 5, 1, 4, 3 e 2, então o Pilar 2
  era o mais atrasado. Itens 64 e 69 pulados por já terem artigo publicado
  (`hairline-natural-transplante-capilar` e `sedacao-transplante-capilar`).
  Os três itens viraram um único artigo por responderem à mesma decisão
  (reoperar ou não), que antes só aparecia em FAQs de 1-2 frases. Keyword
  primária nova "segunda cirurgia de transplante capilar" (não constava na
  lista fixa do DNA; sugerida para as secundárias e para a Intenção GEO).
  Categorizado no `guia-transplante-capilar` (seção "Resultado"). Linkado
  com `area-doadora-transplante-capilar`, `escala-de-norwood`,
  `resultado-transplante-capilar-linha-do-tempo`,
  `transplante-capilar-e-definitivo`, `recuperacao-transplante-capilar` e
  `quanto-tempo-dura-transplante-capilar`. Item 90 segue pendente no
  Pilar 2. Próximo artigo deve evitar repetir o Pilar 2 antes de cobrir os
  Pilares 3, 4, 1 ou 5 (o mais atrasado hoje é o Pilar 3, último em
  2026-09-21).
- Item 46, "O que acontece se parar a Finasterida?" — publicado em
  2026-10-03 como `parar-de-tomar-finasterida` (Pilar 4, subgrupo
  "Medicamentos e tratamentos"). Os últimos 5 artigos publicados antes
  deste vinham dos Pilares 2, 5, 1, 4 e 3, então o Pilar 3 era o mais
  atrasado, mas a subseção dele não tem item elegível (70 a 84 já cobertos
  por `recuperacao-transplante-capilar`,
  `resultado-transplante-capilar-linha-do-tempo`,
  `shock-loss-transplante-capilar` e `nadar-apos-transplante-capilar`),
  então a escolha passou para o Pilar 4, o seguinte na rotação (último em
  2026-09-24, subgrupo "Calvície geral", por isso desta vez o subgrupo
  "Medicamentos e tratamentos"). Item 44 avaliado antes e marcado como já
  coberto (ver nota em Pendentes); 46 era o primeiro item elegível, tratado
  até então só em frases soltas de `finasterida-para-calvicie` e na FAQ de
  `calvicie-tem-cura`. Keyword primária nova "parar de tomar finasterida"
  (não constava na lista fixa do DNA; sugerida para as secundárias, junto
  com a pergunta "O que acontece se parar a finasterida?" na Intenção
  GEO). Dados usados: redução de cerca de 70% da DHT circulante, retorno da
  DHT em cerca de 14 dias e reversão do efeito em até 12 meses (informações
  de bula), intervalo de um mês para doação de sangue. **Vale o Dr. Vitor
  conferir esses números e a seção sobre fertilidade antes de mesclar.**
  Categorizado no `guia-tratamentos-capilares` (seção "Medicamentos com
  mais evidência"). Linkado com `finasterida-para-calvicie`,
  `minoxidil-para-queda-de-cabelo`, `transplante-capilar-e-definitivo` e
  `segunda-cirurgia-transplante-capilar`. **O Pilar 3 está sem itens
  elegíveis na fila**: vale o Dr. Vitor sugerir novos temas de
  pós-operatório. Próximo artigo deve evitar repetir o Pilar 4 antes de
  cobrir os Pilares 1, 5 ou 2 (o mais atrasado com item elegível hoje é o
  Pilar 1, último em 2026-09-25).
- Item 276, "Primeiras 24 horas após o transplante capilar: o que é normal?" — publicado em
  2026-10-05 como `primeiras-24-horas-transplante-capilar`. Keyword primária
  nova "primeiras 24 horas transplante capilar" (objetivo SEO do item; não
  consta na lista fixa do DNA, considerar adicioná-la às secundárias).
  Satélite em formato de checklist de `recuperacao-transplante-capilar`.
