---
name: blog-post
description: Escreve e publica um novo artigo no blog do Instituto Frauches seguindo o DNA de conteúdo. Use quando o usuário disser "/blog-post", "escreva um artigo", "novo post do blog", ou passar um tema/keyword para o próximo artigo.
---

# Blog Post — Instituto Frauches

Gera um artigo completo de blog otimizado para SEO e GEO (transplante capilar,
tricologia, calvície) e abre um Pull Request para revisão. Este blog é conteúdo
médico assinado pelo Dr. Vitor Frauches, então compliance (CFM) importa tanto
quanto SEO.

## Passo 1 — Ler a estratégia

Leia por inteiro, nesta ordem:

1. `blog/DNA.md` — posicionamento, público, tom de voz, keywords, pilares de
   conteúdo, regras de SEO e de compliance médica. **Não pule nenhuma seção.**
2. `blog/TEMAS_SUGERIDOS.md` — fila de temas sugeridos pelo Dr. Vitor.
3. `.claude/skills/seo-geo/SKILL.md` — checklist de otimização de estrutura,
   keywords e citação por IA. **Obrigatório em toda execução desta skill,
   inclusive nas rodadas automáticas do schedule (segunda/quarta/sexta) —
   não é uma etapa opcional nem algo que só se aplica quando o Dr. Vitor
   pede explicitamente.** Aplique o checklist inteiro na escrita (Passo 3)
   e confira de novo no Passo 7 (Validar) antes de abrir o PR.
4. `.claude/skills/humanizer/SKILL.md` — sinais de texto com "cara de IA" a
   eliminar antes de publicar.

## Passo 2 — Escolher o tema

- Rode `ls content/` (ou leia `lib/blog/registry.ts`) para ver os slugs e
  títulos já publicados. **Nunca repita um tema já coberto.**
- Se o usuário passou um tema ou keyword como argumento nesta execução, use-o
  (mesma prioridade de sempre), ajustando ao DNA.
- Senão, **confira a seção "Pendentes" de `blog/TEMAS_SUGERIDOS.md`**. Ela
  tem prioridade sobre a rotação automática de pilares, porque veio de
  sugestões diretas do Dr. Vitor, mas **desde 2026-08-27 não é mais para
  seguir em ordem numérica estrita** (isso causou 9 publicações seguidas do
  mesmo pilar). Siga a regra descrita no topo da seção "Pendentes" desse
  arquivo: veja os pilares (`meta.category`) dos últimos 4-5 artigos
  publicados, identifique qual dos 5 pilares do DNA está há mais tempo sem
  aparecer, e pegue o item mais antigo ainda não coberto na subseção desse
  pilar. Se a subseção estiver sem item elegível, passe pro próximo pilar
  mais atrasado na rotação.
- Só se a fila de sugeridos estiver totalmente vazia (todas as 5 subseções
  sem item elegível), escolha o próximo tema seguindo a distribuição de
  pilares de conteúdo do DNA diretamente (não escolha sempre o mesmo
  pilar).
- Defina: keyword primária (uma da lista do DNA, ainda não usada em nenhum
  artigo publicado — se o tema veio da fila de sugeridos e não casa
  exatamente com nenhuma keyword listada, escolha a mais próxima e
  considere sugerir a adição dela ao DNA), título (≤65 caracteres), slug
  (kebab-case, com a keyword), meta description (140-160 caracteres) e
  categoria.

## Passo 2b — Pesquisar evidência científica no PubMed (obrigatório)

Todo artigo precisa ser embasado em estudos científicos **em humanos** sobre
tricologia e transplante capilar, encontrados no conector PubMed. Isso vale
para as rodadas automáticas e para as manuais. Faça a pesquisa depois de
escolher o tema e antes de escrever.

1. **Carregue as ferramentas do conector.** Elas são deferidas e o nome leva o
   id do servidor, então rode `ToolSearch` com a query `pubmed` e carregue as
   que terminam em `search_articles`, `get_article_metadata`,
   `lookup_article_by_citation` e, se precisar, `find_related_articles` e
   `get_full_text_article`.
2. **Busque de 2 a 4 vezes, em inglês, sempre com o filtro de humanos e o
   assunto capilar.** Modelos que funcionam:
   - `"Alopecia"[MeSH Terms] AND "Finasteride"[MeSH Terms] AND "Humans"[MeSH Terms]`
   - `"Hair Follicle"[MeSH Terms] AND hair transplantation AND "Humans"[MeSH Terms] AND follicular unit extraction`
   - Para priorizar desenho forte, acrescente
     `AND (Randomized Controlled Trial[Publication Type] OR Meta-Analysis[Publication Type] OR Systematic Review[Publication Type])`.

   Use `date_from` de uns 10 anos atrás (mais antigo só para estudo de
   referência) e `max_results` entre 5 e 10. Se vier 0 resultado, a consulta
   está restritiva demais: tire os filtros de tipo de publicação um por vez
   antes de trocar de assunto (combinar `[Title/Abstract]` com tipo de
   publicação já retornou 0 num teste).
3. **Escopo.** Só entra o que for de tricologia, dermatologia capilar ou
   cirurgia de restauração capilar, em pessoas: alopecia androgenética,
   eflúvios, outras alopecias, folículo piloso, tricoscopia, tratamentos para
   queda de cabelo, FUE/FUT, implantação, área doadora e recuperação do
   transplante. **Descarte** estudo em animais, in vitro, veterinário e
   qualquer artigo fora do tema capilar (nos testes sem filtro já apareceram
   uma revisão sobre cães e uma sobre camundongos).
4. **Leia antes de citar.** Rode `get_article_metadata` nos PMIDs candidatos
   (de 3 a 6). Confira em `mesh_terms` se tem "Humans" e em `article_types`
   qual é o desenho. Nunca cite só pelo título, **nunca use PMID que o
   conector não retornou** (nada de PMID de memória) e nunca escreva número
   (percentual, tamanho de amostra, prazo) que não esteja no resumo.
5. **Hierarquia de evidência:** meta-análise ou revisão sistemática de
   estudos em humanos, depois ensaio clínico randomizado, coorte prospectiva,
   estudo retrospectivo ou série de casos, e por último revisão narrativa ou
   consenso. Se só existir evidência fraca ou amostra pequena, o texto diz
   isso.
6. **Se não houver estudo em humanos relevante para um ponto, não force
   citação.** Escreva que faltam estudos, ou fale em termos gerais sem
   atribuir a um paper.
7. **Se o conector PubMed não estiver disponível** (o `ToolSearch` não
   encontra as ferramentas, ou elas dão erro), não invente referência. Use só
   fontes que já aparecem em artigos publicados sobre o mesmo assunto
   (confira o bloco "Referências" deles), e avise na descrição do PR que a
   pesquisa PubMed não pôde ser feita, para o Dr. Vitor revisar.

## Passo 3 — Escrever o artigo

- Copie `content/transplante-capilar-fue-o-que-e.tsx` como modelo de
  estrutura (imports, formato do `meta`, uso das primitivas).
- Crie o novo arquivo em `content/<slug>.tsx`.
- Componha o corpo **apenas** com as primitivas de `components/article-ui.tsx`
  (`P`, `H2`, `H3`, `UL`, `OL`, `LI`, `Strong`, `Quote`, `Callout`, `Cta`).
  Nunca use HTML cru ou classes Tailwind soltas no artigo.
- `publishedAt`: data de hoje, formato `YYYY-MM-DD`.
- `updatedAt`: mesma data de `publishedAt` na criação (o campo existe pra
  registrar revisões reais depois — o painel de revisão em `/admin` atualiza
  ele sozinho sempre que o artigo é editado ali, então não precisa mexer
  nisso manualmente depois).
- `readingTime`: contagem de palavras do corpo dividida por 200, arredondado.
- **Mínimo de 1400 palavras** (sem teto rígido — profundidade real, não
  enchimento). Siga a estrutura do DNA: introdução, H2 suficientes pra
  cobrir o tema, pelo menos uma lista numerada ou de pontos, conclusão com
  CTA.
- **Headings (H2/H3) em formato de pergunta sempre que fizer sentido** (ex.:
  "Como funciona a técnica FUE?", "O que é a área doadora?"). IAs extraem
  resposta direta desse formato. Cada H2 relevante para GEO deve responder a
  pergunta de forma autocontida nas primeiras frases (ver seção "Intenção
  GEO" do DNA).
- Inclua 1-3 links internos (`<Link href="/blog/<slug-existente>">`) para
  artigos já publicados, quando fizer sentido — sem forçar.
- **Evidência no texto (a partir do Passo 2b).** Apoie as afirmações de
  eficácia, segurança e mecanismo nos estudos que você leu. Cite de forma
  natural, dizendo o desenho e o ano ("uma revisão sistemática de 2023...",
  "um ensaio randomizado com 46 homens, de 2026..."), e **sempre junto com a
  limitação** (amostra pequena, curto prazo, população específica, financiado
  pelo fabricante). Sem marcadores numéricos tipo [1]. A evidência descreve
  grupos de estudo e nunca vira promessa de resultado individual (regras de
  compliance do DNA continuam valendo). Não use estudo para dizer que um
  produto ou técnica é "o melhor" nem para comparar clínicas.
- **Bloco "Referências" (3 a 6 itens)**, como último `H2` do artigo, depois
  do `Callout` de disclaimer (mesma posição de `dutasterida-para-calvicie`).
  Um `UL` com um `LI` por estudo, no formato abaixo. Só entram estudos que
  você leu no Passo 2b e que sustentam algo dito no texto. Inclua o link do
  PubMed e, quando o conector devolveu DOI, o link do DOI logo depois (a
  atribuição ao PubMed e o DOI são exigência de uso do conector). O editor
  do `/admin` preserva esse formato.

  ```tsx
  <LI><a href="https://pubmed.ncbi.nlm.nih.gov/<PMID>/" className="underline" target="_blank" rel="noopener noreferrer">{"Sobrenome AB et al. Título curto. Periódico, ano."}</a> <a href="https://doi.org/<DOI>" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
  ```

  Fontes institucionais (EMA, FDA, Anvisa, CFM, ISHRS, AAD) podem entrar
  como itens extras, sem link de DOI.
- Termine com um `Callout` de disclaimer médico (mesmo texto do artigo de
  exemplo, adaptado) e uma chamada para agendar avaliação linkando para
  `WHATSAPP_URL` (exportado de `lib/blog/site.ts`), como já é feito nos dois
  artigos publicados. Não digite o número de WhatsApp solto no texto, sempre
  importe a constante. Use `INSTAGRAM_URL` só como menção secundária, quando
  fizer sentido (ex.: "acompanhe mais casos no Instagram"), nunca como CTA
  principal de agendamento.
- **CTA no meio do artigo**: logo após a seção de "Resposta direta" (ou os
  1-2 primeiros parágrafos, se o artigo não tiver essa seção), insira
  `<Cta href={WHATSAPP_URL}>texto específico deste artigo</Cta>`. A maioria
  dos leitores não chega ao fim de um artigo de 8-14 min, então esse CTA no
  meio é o ponto de conversão mais realista. **Escreva o texto à mão,
  específico ao tema** — nunca reaproveite o mesmo texto de CTA em mais de
  um artigo. Ver seção "CTA no meio do artigo" do `blog/DNA.md` para
  exemplos reais já em produção.

## Passo 4 — Gerar a imagem de capa

Siga a seção "Imagens" de `blog/DNA.md`. Resumo:

1. Gere a imagem com a ferramenta de geração de imagem (Higgsfield), modelo
   `z_image`, `aspect_ratio: "16:9"`, com um prompt específico ao tema do
   artigo (ambiente clínico, instrumento cirúrgico, still-life editorial,
   ilustração conceitual, nunca rosto de paciente ou "resultado" fingido). Se
   `z_image` estiver indisponível, verifique modelos alternativos com
   `models_explore` antes de tentar `recraft_v4_1` (historicamente exige
   plano pago e retorna 403). **Se nenhuma ferramenta de geração tiver
   crédito disponível**: não publique o artigo sem capa e não pare a
   execução, publique o restante do PR normalmente e passe ao Dr. Vitor, na
   mensagem final da execução, o prompt pronto da seção "Alternativa: gerar
   com Nano Banana Pro" de `blog/DNA.md`, adaptado ao tema deste artigo
   específico. Quando ele colar a imagem gerada na conversa depois, siga o
   procedimento descrito na mesma seção do DNA para localizar, salvar e
   commitar a imagem num commit adicional no mesmo PR.
2. Salve o arquivo em `public/blog/<slug>/cover.jpg`.
3. Preencha `meta.coverImage = { src: "/blog/<slug>/cover.jpg", alt: "..." }`
   no arquivo do artigo, com alt text descritivo (pode incluir a keyword
   primária se ficar natural).
4. Opcional: gere 1 imagem adicional só se alguma seção do artigo ganhar
   clareza real sendo ilustrada (ex.: diagrama de etapa cirúrgica). Use a
   primitiva `Figure` para inserir no corpo, mesmo padrão de salvamento em
   `public/blog/<slug>/`.

## Passo 5 — Humanizar

Releia o corpo do artigo aplicando `.claude/skills/humanizer/SKILL.md`:
elimine travessões, linguagem de IA genérica, paralelismos do tipo "não é só
X, é Y", voz passiva em excesso, aberturas e conclusões clichê. Varie o
tamanho das frases.

## Passo 6 — Registrar e categorizar no guia (cluster)

Registro em si: nada a fazer, o registry (`lib/blog/registry.ts`) descobre o
artigo automaticamente via filesystem a partir do arquivo criado em
`content/`.

Categorização no cluster (obrigatória, ver seção "Arquitetura de clusters"
de `blog/DNA.md` para os 3 guias existentes e o formato exato dos blocos):

1. Decida a qual dos 3 guias este artigo pertence, pelo tema/pilar.
2. No arquivo do novo artigo, adicione o parágrafo de backlink pro guia como
   último `<P>`, depois do `Callout` e do CTA de WhatsApp.
3. Abra o arquivo `content/<slug-do-guia>.tsx` e adicione um novo `<LI>` na
   seção (`<UL>`) mais próxima do tema do artigo nesse guia. Se nenhuma
   seção existente encaixar bem, pode criar um novo `<H2>` + `<UL>` no guia,
   mas prefira encaixar numa seção já existente.
4. Lembre de importar `Link` de `next/link` no arquivo do artigo, se ainda
   não importado.

## Passo 7 — Validar

1. Rode `npm run build` na raiz do projeto. Tem que passar sem erros.
2. Confirme no output do build que a rota `/blog/<slug>` aparece como página
   estática gerada.
3. Releia o artigo conferindo: keyword primária no título, description,
   primeiro parágrafo e em pelo menos um H2; nenhum travessão; nenhum número,
   depoimento ou caso de paciente inventado; nenhuma promessa de resultado
   sem nota de variação individual; links internos válidos (slugs que
   realmente existem em `content/`); imagem de capa presente e carregando.
4. Confirme que o backlink pro guia foi adicionado no artigo e que o novo
   `<LI>` aparece no guia correspondente (passo 6).
5. Conte as palavras do corpo do artigo. Se ficar abaixo de 1400, volte e
   aprofunde alguma seção antes de prosseguir — não abra o PR com um artigo
   curto demais.
6. **Confira as referências (Passo 2b).** O artigo tem o bloco "Referências"
   com 3 a 6 itens; cada PMID citado foi retornado pelo conector nesta
   execução; todos os estudos são em humanos e do tema capilar; cada número,
   amostra ou prazo citado no texto bate com o resumo do estudo; e toda
   afirmação de eficácia ou segurança que cita estudo traz a limitação dele.
   Se faltar algum desses pontos, corrija antes de seguir.
7. Se o build falhar e você não conseguir corrigir, **pare e reporte** — não
   prossiga para o passo 8.

## Passo 8 — Entregar (regra fixa: Pull Request)

Este projeto usa **sempre entrega por Pull Request**, nunca commit direto na
branch principal. Como a automação roda sozinha (via schedule), não pergunte
ao usuário qual abordagem usar — é sempre esta:

1. Criar uma branch nova: `git checkout -b blog/<slug>`.
2. Se o tema veio da fila de `blog/TEMAS_SUGERIDOS.md`, edite esse arquivo
   agora: remova a linha da seção "Pendentes" e adicione em "Já publicados"
   com o slug e a data (ex.: `- Transplante capilar dói? — publicado em
   2026-07-24 como transplante-capilar-doi`). Se o tema veio da rotação de
   pilares do DNA (fila vazia), não mexa neste arquivo.
3. `git add content/<slug>.tsx public/blog/<slug>/ content/<slug-do-guia>.tsx`
   (mais `blog/TEMAS_SUGERIDOS.md` se você editou ele no passo anterior). Não
   adicione outros arquivos alterados por acidente.
4. `git commit -m "blog: <título do artigo>"`.
5. `git push -u origin blog/<slug>`.
6. Abrir o PR: `gh pr create --title "blog: <título>" --body "<resumo do
   artigo: tema, keyword primária, pilar de conteúdo, contagem de
   palavras, e a **lista de estudos usados**: PMID, desenho (ex.: ensaio
   randomizado, revisão sistemática), tamanho da amostra quando houver, e a
   afirmação do texto que cada um sustenta>"`. Essa lista é o que permite ao
   Dr. Vitor conferir as fontes no painel `/admin` antes de aprovar. Se a
   pesquisa PubMed não pôde ser feita, diga isso aqui.

Termine a execução resumindo: tema e por que foi escolhido, keyword primária,
slug/URL (`/blog/<slug>`), contagem de palavras, e o link do PR aberto.

## Passo 9 — Avisar o IndexNow (só depois do PR ser mesclado)

Este passo não faz parte da abertura do PR — só roda depois que o PR for
mesclado em `main` e o deploy da Vercel confirmar a URL no ar (o IndexNow
verifica o arquivo de chave publicamente, então pingar antes do deploy
falha). Quem mesclar o PR (Claude nesta sessão, ou o Dr. Vitor pelo GitHub)
deve rodar:

```
node scripts/indexnow-ping.mjs /blog/<slug> /blog/<slug-do-guia>
```

Isso avisa Bing/Yandex (participantes do protocolo IndexNow) que a URL do
artigo novo e a do guia atualizado mudaram, acelerando a indexação sem
esperar o crawl orgânico. Não afeta o Google (não participa do protocolo) —
a indexação no Google segue via sitemap + Search Console normalmente.
