import Image from "next/image";

// Selo "Member" da ISHRS. A política da sociedade exige que cada uso fique
// junto ao nome do Dr. Vitor (nunca representando a clínica) e aponte para
// www.ishrs.org.
export function IshrsBadge({ locale = "pt", width = 120 }: { locale?: "pt" | "en"; width?: number }) {
  const label =
    locale === "en"
      ? "Dr. Vitor Frauches is a member of the International Society of Hair Restoration Surgery (ISHRS)"
      : "Dr. Vitor Frauches é membro da International Society of Hair Restoration Surgery (ISHRS)";
  return (
    <a
      href="https://www.ishrs.org"
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      className="inline-block flex-none"
    >
      <Image
        src="/brand/ishrs-member.png"
        alt={label}
        width={width}
        height={Math.round((width * 244) / 400)}
        // O miolo do selo é transparente; o fundo branco em elipse o mantém legível no tema escuro.
        className="rounded-[50%] bg-white"
      />
    </a>
  );
}
