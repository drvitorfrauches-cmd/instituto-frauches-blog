export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.institutofrauches.blog";

export const SITE_NAME = "Instituto Frauches";

const WHATSAPP_MESSAGE =
  "Olá! Gostaria de agendar uma avaliação para transplante capilar.";

export const WHATSAPP_URL = `https://wa.me/5527992858541?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const INSTAGRAM_URL = "https://instagram.com/drvitorfrauches";

export const AUTHOR = {
  name: "Dr. Vitor Frauches",
  role: "Médico especialista em transplante capilar e tricologia — CRM-ES 10.229 · Professor da Pós-graduação em Transplante Capilar e Tricologia (BWS)",
};
