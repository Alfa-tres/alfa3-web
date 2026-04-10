import { SEO } from "@/lib/seo"

type JsonLdData = Record<string, unknown>

/** Genera un schema Service para una página de servicio */
export function buildServiceJsonLd(opts: {
  name: string
  description: string
  url: string
  price?: string
}): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      "@type": "Organization",
      name: SEO.siteName,
      url: SEO.siteUrl,
    },
    areaServed: SEO.areaServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
    ...(opts.price && {
      offers: {
        "@type": "Offer",
        price: opts.price,
        priceCurrency: "MXN",
        availability: "https://schema.org/InStock",
      },
    }),
  }
}

/** Genera un BreadcrumbList schema */
export function buildBreadcrumbJsonLd(
  items: { name: string; href: string }[]
): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SEO.siteUrl}${item.href}`,
    })),
  }
}
