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
2. `.claude/skills/seo-geo/SKILL.md` — checklist de otimização de estrutura,
   keywords e citação por IA.
3. `.claude/skills/humanizer/SKILL.md` — sinais de texto com "cara de IA" a
   eliminar antes de publicar.

## Passo 2 — Escolher o tema

- Rode `ls content/` (ou leia `lib/blog/registry.ts`) para ver os slugs e
  títulos já publicados. **Nunca repita um tema já coberto.**
- Se o usuário passou um tema ou keyword como argumento, use-o, ajustando ao
  DNA (ver lista de keywords primárias em `blog/DNA.md`).
- Se não passou nada, escolha o próximo tema seguindo a distribuição de
  pilares de conteúdo do DNA (não escolha sempre o mesmo pilar).
- Defina: keyword primária (uma da lista do DNA, ainda não usada em nenhum
  artigo publicado), título (≤65 caracteres), slug (kebab-case, com a
  keyword), meta description (140-160 caracteres) e categoria.

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

## Passo 4 — Humanizar

Releia o corpo do artigo aplicando `.claude/skills/humanizer/SKILL.md`:
elimine travessões, linguagem de IA genérica, paralelismos do tipo "não é só
X, é Y", voz passiva em excesso, aberturas e conclusões clichê. Varie o
tamanho das frases.

## Passo 5 — Registrar

Nada a fazer. O registry (`lib/blog/registry.ts`) descobre o artigo
automaticamente via filesystem a partir do arquivo criado em `content/`.

## Passo 6 — Validar

1. Rode `npm run build` na raiz do projeto. Tem que passar sem erros.
2. Confirme no output do build que a rota `/blog/<slug>` aparece como página
   estática gerada.
3. Releia o artigo conferindo: keyword primária no título, description,
   primeiro parágrafo e em pelo menos um H2; nenhum travessão; nenhum número,
   depoimento ou caso de paciente inventado; nenhuma promessa de resultado
   sem nota de variação individual; links internos válidos (slugs que
   realmente existem em `content/`).
4. Se o build falhar e você não conseguir corrigir, **pare e reporte** — não
   prossiga para o passo 7.

## Passo 7 — Entregar (regra fixa: Pull Request)

Este projeto usa **sempre entrega por Pull Request**, nunca commit direto na
branch principal. Como a automação roda sozinha (via schedule), não pergunte
ao usuário qual abordagem usar — é sempre esta:

1. Criar uma branch nova: `git checkout -b blog/<slug>`.
2. `git add content/<slug>.tsx` (só o arquivo do artigo; não adicione outros
   arquivos alterados por acidente).
3. `git commit -m "blog: <título do artigo>"`.
4. `git push -u origin blog/<slug>`.
5. Abrir o PR: `gh pr create --title "blog: <título>" --body "<resumo do
   artigo: tema, keyword primária, pilar de conteúdo, contagem de
   palavras>"`.

Termine a execução resumindo: tema e por que foi escolhido, keyword primária,
slug/URL (`/blog/<slug>`), contagem de palavras, e o link do PR aberto.
