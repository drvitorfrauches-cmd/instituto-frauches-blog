export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.institutofrauches.blog";

export const SITE_NAME = "Instituto Frauches";

const WHATSAPP_MESSAGE =
  "Olá! Gostaria de agendar uma avaliação para transplante capilar.";

export const WHATSAPP_URL = `https://wa.me/5527992858541?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

const WHATSAPP_MESSAGE_EN =
  "Hello! I would like to schedule a hair transplant evaluation.";

export const WHATSAPP_URL_EN = `https://wa.me/5527992858541?text=${encodeURIComponent(
  WHATSAPP_MESSAGE_EN,
)}`;

export const INSTAGRAM_URL = "https://instagram.com/drvitorfrauches";

export const FACEBOOK_URL = "https://www.facebook.com/sietransplantecapilar/";

export const COMMERCIAL_SITE_URL = "https://drvitorfrauches.com.br/";

export const GOOGLE_BUSINESS_URL = "https://www.google.com/maps?cid=16302926809718731228";

export const LOGO_PATH = "/brand/logo.jpg";

export const PHONE_DISPLAY = "(27) 99285-8541";
export const PHONE_DISPLAY_INTL = "+55 27 99285-8541";
export const PHONE_TEL = "+5527992858541";

export const CNPJ = "38.381.512/0001-18";

export const ADDRESS = {
  street: "Av. Rio Branco, 507, sala 1, Santa Lúcia",
  city: "Vitória",
  region: "ES",
  postalCode: "29056-253",
  country: "BR",
};

export const ADDRESS_DISPLAY = `${ADDRESS.street}, ${ADDRESS.city} - ${ADDRESS.region}, ${ADDRESS.postalCode}`;

export const SAME_AS = [COMMERCIAL_SITE_URL, INSTAGRAM_URL, FACEBOOK_URL, GOOGLE_BUSINESS_URL];

export const ORGANIZATION_JSON_LD = {
  "@type": "MedicalClinic" as const,
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject" as const,
    url: `${SITE_URL}${LOGO_PATH}`,
    width: 600,
    height: 600,
  },
  image: `${SITE_URL}${LOGO_PATH}`,
  telephone: PHONE_TEL,
  taxID: CNPJ,
  address: {
    "@type": "PostalAddress" as const,
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.region,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.country,
  },
  sameAs: SAME_AS,
};

export const AUTHOR = {
  name: "Dr. Vitor Frauches",
  role: "Médico especialista em transplante capilar e tricologia — CRM-ES 10.229 · Professor da Pós-graduação em Transplante Capilar e Tricologia (BWS)",
};

export const AUTHOR_EN = {
  name: "Dr. Vitor Frauches",
  role: "Physician specializing in hair transplantation and trichology, CRM-ES 10.229 · Professor of the Postgraduate Program in Hair Transplantation and Trichology (BWS)",
};

export const AUTHOR_CREDENTIALS_EN = [
  "Physician, CRM-ES 10.229 (Brazil)",
  "Practice in trichology and hair transplantation",
  "Postgraduate professor of trichology and hair transplantation",
  "More than 1,200 surgeries performed",
  "Member of the ISHRS (International Society of Hair Restoration Surgery)",
];

export const AUTHOR_CREDENTIALS = [
  "Médico, CRM-ES 10.229",
  "Atuação em tricologia e transplante capilar",
  "Professor de pós-graduação em tricologia e transplante capilar",
  "Mais de 1.200 cirurgias realizadas",
  "Membro da ISHRS (International Society of Hair Restoration Surgery)",
];

/**
 * Dados estruturados do Dr. Vitor como médico (Person com credenciais), usados
 * em /sobre, /en/about e como autor e revisor de cada artigo. O @id liga todas
 * as menções à mesma entidade.
 */
export const PHYSICIAN_ID = `${SITE_URL}/sobre#dr-vitor-frauches`;

export const PHYSICIAN_JSON_LD = {
  "@type": "Person" as const,
  "@id": PHYSICIAN_ID,
  name: AUTHOR.name,
  url: `${SITE_URL}/sobre`,
  image: `${SITE_URL}/author/dr-vitor-frauches.jpg`,
  jobTitle: "Médico especialista em transplante capilar e tricologia",
  // Perfis pessoais do Dr. Vitor; Facebook e Perfil da Empresa são da clínica.
  sameAs: [COMMERCIAL_SITE_URL, INSTAGRAM_URL],
  worksFor: { "@id": `${SITE_URL}/#organization` },
  knowsAbout: [
    "Transplante capilar",
    "Hair transplantation",
    "FUE (Follicular Unit Extraction)",
    "Tricologia",
    "Trichology",
    "Alopecia androgenética",
    "Androgenetic alopecia",
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity" as const, name: "Universidade Federal do Espírito Santo (UFES)" },
    { "@type": "CollegeOrUniversity" as const, name: "Universidade Federal Fluminense (UFF)" },
    { "@type": "CollegeOrUniversity" as const, name: "EMESCAM" },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential" as const,
      credentialCategory: "Registro médico",
      name: "CRM-ES 10.229",
      recognizedBy: {
        "@type": "Organization" as const,
        name: "Conselho Regional de Medicina do Espírito Santo (CRM-ES)",
      },
    },
  ],
  memberOf: [
    {
      "@type": "Organization" as const,
      name: "International Society of Hair Restoration Surgery (ISHRS)",
      url: "https://www.ishrs.org",
    },
    { "@type": "Organization" as const, name: "World FUE Institute (WFI)" },
    { "@type": "Organization" as const, name: "Sociedade Brasileira de Restauração Capilar e Cirurgia (SBRCC)" },
  ],
};
