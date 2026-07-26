import Link from "next/link";
import { CATEGORY_TO_GUIDE } from "@/lib/blog/categories";
import { SITE_URL } from "@/lib/blog/site";

interface Crumb {
  name: string;
  href?: string;
}

export function Breadcrumbs({
  category,
  title,
  slug,
}: {
  category: string;
  title: string;
  slug: string;
}) {
  const guideSlug = CATEGORY_TO_GUIDE[category];
  const crumbs: Crumb[] = [{ name: "Início", href: "/" }];

  if (guideSlug && guideSlug !== slug) {
    crumbs.push({ name: category, href: `/blog/${guideSlug}` });
  }
  crumbs.push({ name: title });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      ...(crumb.href ? { item: `${SITE_URL}${crumb.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="breadcrumb" className="mb-4 text-sm text-neutral-500">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1">
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden="true">›</span>}
            {crumb.href ? (
              <Link href={crumb.href} className="hover:underline">
                {crumb.name}
              </Link>
            ) : (
              <span className="text-neutral-400">{crumb.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
