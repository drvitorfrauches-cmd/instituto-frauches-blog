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
];

export const AUTHOR_CREDENTIALS = [
  "Médico, CRM-ES 10.229",
  "Atuação em tricologia e transplante capilar",
  "Professor de pós-graduação em tricologia e transplante capilar",
  "Mais de 1.200 cirurgias realizadas",
];
