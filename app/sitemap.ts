import type { MetadataRoute } from "next"
import { SEO } from "@/lib/seo"

/**
 * Genera /sitemap.xml automáticamente.
 * Fase 3: cuando se agreguen páginas hijas (/servicios/*, /precios, /portafolio)
 * añadirlas aquí con su changeFrequency y priority correspondiente.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = SEO.siteUrl
  const now = new Date()

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    // TODO Fase 3 — Descomentar cuando existan las páginas:
    // { url: `${base}/servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // { url: `${base}/servicios/desarrollo-web-monterrey`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // { url: `${base}/servicios/diseno-de-paginas-web-monterrey`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // { url: `${base}/servicios/tiendas-en-linea-monterrey`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // { url: `${base}/servicios/landing-page-monterrey`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // { url: `${base}/servicios/seo-monterrey`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // { url: `${base}/precios`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // { url: `${base}/portafolio`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // { url: `${base}/nosotros`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    // { url: `${base}/contacto`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    // { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ]
}
