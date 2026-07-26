/**
 * Mapeia a categoria de um artigo pro guia (pillar page) mais próximo, pra
 * usar como destino do breadcrumb. Um guia pode representar mais de uma
 * categoria (ex.: "Técnica FUE" e "Tecnologia" caem dentro do guia de
 * transplante capilar).
 */
export const CATEGORY_TO_GUIDE: Record<string, string> = {
  "Transplante capilar": "guia-transplante-capilar",
  "Técnica FUE": "guia-transplante-capilar",
  "Tecnologia": "guia-transplante-capilar",
  "Dúvidas frequentes": "guia-transplante-capilar",
  "Calvície e tricologia": "guia-calvicie-masculina",
  "Tratamentos capilares": "guia-tratamentos-capilares",
};
