import { SEO } from "@/lib/seo"

type JsonLdData = Record<string, unknown>

/** Renderiza un bloque <script type="application/ld+json"> en el head. */
export function JsonLd({ data }: { data: JsonLdData | JsonLdData[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/* ──────────────────────────────────────────────────────────────────────────
   Schemas globales (van en layout.tsx)
   ────────────────────────────────────────────────────────────────────────── */

export const organizationJsonLd: JsonLdData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SEO.siteUrl}/#organization`,
  name: SEO.siteName,
  url: SEO.siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${SEO.siteUrl}/alfa3-logo-light.png`,
    width: 400,
    height: 120,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SEO.contact.phone,
    contactType: "customer service",
    availableLanguage: "Spanish",
    areaServed: "MX",
  },
  sameAs: [
    SEO.social.instagram,
    SEO.social.linkedin,
    SEO.social.facebook,
  ],
}

export const webSiteJsonLd: JsonLdData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SEO.siteUrl}/#website`,
  url: SEO.siteUrl,
  name: SEO.siteName,
  inLanguage: SEO.language,
  publisher: { "@id": `${SEO.siteUrl}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SEO.siteUrl}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
}

/* ──────────────────────────────────────────────────────────────────────────
   Schemas de la home page (van en page.tsx)
   ────────────────────────────────────────────────────────────────────────── */

export const localBusinessJsonLd: JsonLdData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SEO.siteUrl}/#localbusiness`,
  name: "ALFA3 — Agencia de Diseño y Desarrollo Web",
  alternateName: "ALFA3",
  url: SEO.siteUrl,
  image: `${SEO.siteUrl}/og-image.png`,
  telephone: SEO.contact.phone,
  email: SEO.contact.email,
  priceRange: "$$",
  currenciesAccepted: "MXN",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: SEO.contact.address.streetAddress || undefined,
    addressLocality: SEO.contact.address.city,
    addressRegion: SEO.contact.address.state,
    postalCode: SEO.contact.address.postalCode,
    addressCountry: SEO.contact.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SEO.contact.geo.latitude,
    longitude: SEO.contact.geo.longitude,
  },
  areaServed: SEO.areaServed.map((city) => ({
    "@type": "City",
    name: city,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Diseño y Desarrollo Web en Monterrey",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Landing Page",
        price: "4900",
        priceCurrency: "MXN",
        itemOffered: {
          "@type": "Service",
          name: "Diseño de Landing Page en Monterrey",
          description:
            "Página de aterrizaje profesional para captación de leads y conversiones. Diseño personalizado, responsive y optimizado para SEO.",
        },
      },
      {
        "@type": "Offer",
        name: "One Page",
        price: "7900",
        priceCurrency: "MXN",
        itemOffered: {
          "@type": "Service",
          name: "Sitio Web One Page Monterrey",
          description:
            "Tu empresa completa en una experiencia vertical moderna con animaciones, integración WhatsApp y hasta 5 secciones.",
        },
      },
      {
        "@type": "Offer",
        name: "Sitio Empresarial",
        price: "15900",
        priceCurrency: "MXN",
        itemOffered: {
          "@type": "Service",
          name: "Diseño Web Empresarial Monterrey",
          description:
            "Sitio multi-página completo con hasta 8 páginas, blog, panel administrable y SEO avanzado.",
        },
      },
      {
        "@type": "Offer",
        name: "E-commerce",
        price: "6900",
        priceCurrency: "MXN",
        itemOffered: {
          "@type": "Service",
          name: "Tienda en Línea Monterrey",
          description:
            "Tienda en línea con catálogo, carrito de compras, pasarela de pagos y gestión de inventario.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO y Posicionamiento Web Monterrey",
          description:
            "Optimización para aparecer en los primeros resultados de Google en Monterrey y Nuevo León.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automatización con Inteligencia Artificial",
          description:
            "Chatbots y flujos automatizados que atienden, califican y convierten prospectos sin intervención humana.",
        },
      },
    ],
  },
}
