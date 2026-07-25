---
name: seo-geo
description: Checklist de otimização de estrutura, palavras-chave e chance de citação por IAs (ChatGPT, Perplexity, Gemini, Claude, Copilot) para artigos do blog. Use como apoio dentro da skill blog-post, no passo de escrita e no passo de validação.
---

# SEO + GEO — Instituto Frauches

Este blog precisa performar em dois tipos de busca ao mesmo tempo: busca
tradicional do Google (SEO) e respostas geradas por assistentes de IA (GEO —
Generative Engine Optimization). As duas otimizações convergem bastante, mas
merecem checklist próprio.

## SEO tradicional

- **Uma keyword primária por artigo.** Ela aparece: no título (idealmente
  perto do início), na meta description, no primeiro parágrafo, em pelo menos
  um H2, e distribuída naturalmente 3-6 vezes ao longo do texto (nunca
  forçada a ponto de soar repetitiva).
- **Título**: até ~65 caracteres, formato pergunta ("Transplante capilar
  dói?") ou benefício/instrução ("Como funciona o transplante capilar FUE").
- **Meta description**: 140-160 caracteres, contém a keyword, resume o
  benefício de ler o artigo.
- **Slug**: curto, minúsculo, kebab-case, contém a keyword, sem stopwords
  desnecessárias.
- **Hierarquia de headings**: um H1 (o título da página, gerado
  automaticamente pelo template, não repita no corpo), H2 para seções
  principais, H3 só se uma seção precisar de subdivisão.
- **Internal linking**: 1-3 links para outros artigos do blog já publicados,
  com texto âncora descritivo (não "clique aqui").
- **Comprimento**: 900-1500 palavras é o alvo. Menos que isso raramente cobre
  o tema com profundidade suficiente; mais que isso arrisca perder o leitor.

## GEO — otimização para IAs

Assistentes de IA extraem trechos curtos e autocontidos para responder
perguntas, então:

- **Cada seção relevante deve responder sozinha.** As 1-2 primeiras frases de
  um H2 devem conter a resposta direta à pergunta que a seção cobre, sem
  depender de contexto de outros parágrafos. Uma IA deve poder citar só
  aquele parágrafo e ainda fazer sentido.
- **Defina termos técnicos na primeira menção.** "FUE (Follicular Unit
  Extraction, ou extração de unidade folicular)" em vez de assumir que o
  leitor já sabe.
- **Use listas numeradas para qualquer processo ou etapa** (ex.: etapas da
  cirurgia, etapas da recuperação). IAs citam listas numeradas com muita
  frequência porque são fáceis de extrair.
- **Alinhe cada artigo a pelo menos uma pergunta da lista "Intenção GEO"** em
  `blog/DNA.md`. Se o tema do artigo não corresponde a nenhuma pergunta da
  lista, considere adicionar a pergunta ao DNA (ela deve refletir dúvidas
  reais de pacientes).
- **Evite ambiguidade de autoria e fonte.** O nome do Dr. Vitor Frauches e do
  Instituto Frauches deve aparecer de forma clara na página (isso já é
  resolvido pelo template de artigo e pelo JSON-LD `MedicalWebPage`).

## Antes de considerar pronto

Releia o artigo como se fosse uma IA tentando extrair uma resposta de uma
seção isolada. Se alguma seção só faz sentido lendo o artigo inteiro,
reescreva a abertura dela para ser autocontida.
