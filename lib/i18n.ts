export type Locale = "pt" | "en";

export const HTML_LANG: Record<Locale, string> = { pt: "pt-BR", en: "en" };

export const UI = {
  pt: {
    home: "Início",
    homeHref: "/",
    backToBlog: "← Voltar para o blog",
    blogHref: "/blog",
    readingTime: "min de leitura",
    publishedOn: "Publicado em",
    dateLocale: "pt-BR",
    share: "Compartilhar",
    copyLink: "Copiar link",
    linkCopied: "Link copiado!",
    writtenBy: "Escrito e revisado por",
    lastReview: "Última revisão médica:",
    aboutHref: "/sobre",
    book: "Agendar avaliação",
    otherLanguage: "Read in English",
    disclaimer: "Conteúdo educativo, não substitui consulta médica.",
  },
  en: {
    home: "Home",
    homeHref: "/en",
    backToBlog: "← Back to the guides",
    blogHref: "/en",
    readingTime: "min read",
    publishedOn: "Published on",
    dateLocale: "en-US",
    share: "Share",
    copyLink: "Copy link",
    linkCopied: "Link copied!",
    writtenBy: "Written and reviewed by",
    lastReview: "Last medical review:",
    aboutHref: "/en/about",
    book: "Book an evaluation",
    otherLanguage: "Ler em português",
    disclaimer: "Educational content, not a substitute for medical advice.",
  },
} as const;
