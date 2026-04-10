import type { MetadataRoute } from "next"
import { SEO } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SEO.siteUrl
  const now = new Date()

  return [
    // Home
    {
      url: base,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },

    // Hub de Servicios
    {
      url: `${base}/servicios`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // Páginas individuales de servicio
    {
      url: `${base}/servicios/desarrollo-web-monterrey`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/servicios/diseno-de-paginas-web-monterrey`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/servicios/tiendas-en-linea-monterrey`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/servicios/landing-page-monterrey`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/servicios/seo-monterrey`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Páginas institucionales
    {
      url: `${base}/precios`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/portafolio`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/nosotros`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/contacto`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },

    // TODO Fase 7 — Blog
    // { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ]
}
