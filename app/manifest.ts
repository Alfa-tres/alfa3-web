import type { MetadataRoute } from "next"
import { SEO } from "@/lib/seo"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ALFA3 — Agencia de Diseño Web Monterrey",
    short_name: "ALFA3",
    description: SEO.description,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#438bff",
    lang: "es-MX",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-dark-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    categories: ["business", "productivity"],
  }
}
