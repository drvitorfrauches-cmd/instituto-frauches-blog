export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.institutofrauches.blog";

export const SITE_NAME = "Instituto Frauches";

const WHATSAPP_MESSAGE =
  "Olá! Gostaria de agendar uma avaliação para transplante capilar.";

export const WHATSAPP_URL = `https://wa.me/5527992858541?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const INSTAGRAM_URL = "https://instagram.com/drvitorfrauches";

export const LOGO_PATH = "/brand/logo.jpg";

export const PHONE_DISPLAY = "(27) 99285-8541";
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

export const ORGANIZATION_JSON_LD = {
  "@type": "MedicalOrganization" as const,
  name: SITE_NAME,
  url: SITE_URL,
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
};

export const AUTHOR = {
  name: "Dr. Vitor Frauches",
  role: "Médico especialista em transplante capilar e tricologia — CRM-ES 10.229 · Professor da Pós-graduação em Transplante Capilar e Tricologia (BWS)",
};

export const AUTHOR_CREDENTIALS = [
  "Médico, CRM-ES 10.229",
  "Atuação em tricologia e transplante capilar",
  "Professor de pós-graduação em tricologia e transplante capilar",
  "Mais de 1.200 cirurgias realizadas",
];
