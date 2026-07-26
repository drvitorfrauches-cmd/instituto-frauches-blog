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
   keywords e citação por IA.
4. `.claude/skills/humanizer/SKILL.md` — sinais de texto com "cara de IA" a
   eliminar antes de publicar.

## Passo 2 — Escolher o tema

- Rode `ls content/` (ou leia `lib/blog/registry.ts`) para ver os slugs e
  títulos já publicados. **Nunca repita um tema já coberto.**
- Se o usuário passou um tema ou keyword como argumento nesta execução, use-o
  (mesma prioridade de sempre), ajustando ao DNA.
- Senão, **confira a seção "Pendentes" de `blog/TEMAS_SUGERIDOS.md`**. Se
  houver algo lá, use o item mais antigo (primeiro da lista) como tema —
  ele tem prioridade sobre a rotação automática de pilares, porque veio de
  uma sugestão direta do Dr. Vitor.
- Só se a fila de sugeridos estiver vazia, escolha o próximo tema seguindo a
  distribuição de pilares de conteúdo do DNA (não escolha sempre o mesmo
  pilar).
- Defina: keyword primária (uma da lista do DNA, ainda não usada em nenhum
  artigo publicado — se o tema veio da fila de sugeridos e não casa
  exatamente com nenhuma keyword listada, escolha a mais próxima e
  considere sugerir a adição dela ao DNA), título (≤65 caracteres), slug
  (kebab-case, com a keyword), meta description (140-160 caracteres) e
  categoria.

## Passo 3 — Escrever o artigo

- Copie `content/transplante-capilar-fue-o-que-e.tsx` como modelo de
  estrutura (imports, formato do `meta`, uso das primitivas).
- Crie o novo arquivo em `content/<slug>.tsx`.
- Componha o corpo **apenas** com as primitivas de `components/article-ui.tsx`
  (`P`, `H2`, `H3`, `UL`, `OL`, `LI`, `Strong`, `Quote`, `Callout`). Nunca use
  HTML cru ou classes Tailwind soltas no artigo.
- `publishedAt`: data de hoje, formato `YYYY-MM-DD`.
- `readingTime`: contagem de palavras do corpo dividida por 200, arredondado.
- 900 a 1500 palavras. Siga a estrutura do DNA: introdução, 3-6 H2, pelo menos
  uma lista numerada ou de pontos, conclusão com CTA.
- Cada H2 relevante para GEO deve responder a pergunta de forma autocontida
  nas primeiras frases (ver seção "Intenção GEO" do DNA).
- Inclua 1-3 links internos (`<Link href="/blog/<slug-existente>">`) para
  artigos já publicados, quando fizer sentido — sem forçar.
- Termine com um `Callout` de disclaimer médico (mesmo texto do artigo de
  exemplo, adaptado) e uma chamada para agendar avaliação linkando para
  `WHATSAPP_URL` (exportado de `lib/blog/site.ts`), como já é feito nos dois
  artigos publicados. Não digite o número de WhatsApp solto no texto, sempre
  importe a constante. Use `INSTAGRAM_URL` só como menção secundária, quando
  fizer sentido (ex.: "acompanhe mais casos no Instagram"), nunca como CTA
  principal de agendamento.

## Passo 4 — Gerar a imagem de capa

Siga a seção "Imagens" de `blog/DNA.md`. Resumo:

1. Gere a imagem com a ferramenta de geração de imagem (Higgsfield), modelo
   `z_image`, `aspect_ratio: "16:9"`, com um prompt específico ao tema do
   artigo (ambiente clínico, instrumento cirúrgico, still-life editorial,
   ilustração conceitual, nunca rosto de paciente ou "resultado" fingido). Se
   `z_image` estiver indisponível, verifique modelos alternativos com
   `models_explore` antes de tentar `recraft_v4_1` (historicamente exige
   plano pago e retorna 403).
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
5. Se o build falhar e você não conseguir corrigir, **pare e reporte** — não
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
   palavras>"`.

Termine a execução resumindo: tema e por que foi escolhido, keyword primária,
slug/URL (`/blog/<slug>`), contagem de palavras, e o link do PR aberto.
