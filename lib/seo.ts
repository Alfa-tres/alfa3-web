/**
 * Constantes centralizadas de SEO para ALFA3.
 * Cualquier dato sensible al negocio (contacto, redes, precios) vive aquí:
 * cambiar en un solo lugar propaga a todo el sitio.
 */

export const SEO = {
  siteName: "ALFA3",
  siteUrl: "https://www.alfatres.com",
  locale: "es_MX",
  language: "es-MX",
  region: "MX-NL",
  countryName: "México",

  /** Metadata para la home page */
  title:
    "ALFA3 | Diseño y Desarrollo Web en Monterrey, Nuevo León",
  titleTemplate: "%s | ALFA3 — Agencia Web Monterrey",
  description:
    "Agencia de diseño y desarrollo web en Monterrey, Nuevo León. Sitios a medida, e-commerce, SEO e inteligencia artificial. Páginas web que convierten desde $4,900 MXN.",

  /** Información de contacto / NAP (Name, Address, Phone) */
  contact: {
    /** Formato E.164 — usado por tel: y schema.org */
    phone: "+528180777715",
    /** Formato legible para mostrar en UI */
    phoneDisplay: "+52 81 8077 7715",
    email: "info@alfatres.com",
    /** Sin + ni espacios — usado por wa.me */
    whatsappNumber: "528180777715",
    address: {
      streetAddress: "",
      city: "Monterrey",
      state: "Nuevo León",
      country: "MX",
      postalCode: "64000",
    },
    /** Coordenadas del centro de Monterrey */
    geo: {
      latitude: 25.6866,
      longitude: -100.3161,
    },
  },

  /** Redes sociales */
  social: {
    instagram: "https://www.instagram.com/alfatresmx",
    facebook: "https://www.facebook.com/alfatres.mx",
    tiktok: "https://www.tiktok.com/@alfatresmx",
  },

  /** Open Graph / Twitter card
   *  La imagen apunta al endpoint dinámico /opengraph-image (Satori)
   *  en lugar de un archivo estático. */
  og: {
    image: "/opengraph-image",
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: "ALFA3 — Agencia de Diseño y Desarrollo Web en Monterrey, Nuevo León",
    type: "website" as const,
  },

  /** Keywords principales para la home */
  keywords: [
    "diseño web monterrey",
    "desarrollo web monterrey",
    "páginas web monterrey",
    "agencia de diseño web monterrey",
    "diseño de páginas web monterrey",
    "páginas web nuevo león",
    "agencia desarrollo web nuevo león",
    "tiendas en línea monterrey",
    "landing page monterrey",
    "seo monterrey",
    "diseño web con inteligencia artificial",
    "agencia web monterrey",
  ],

  /** Municipios del área metropolitana de Monterrey para areaServed */
  areaServed: [
    "Monterrey",
    "San Pedro Garza García",
    "Guadalupe",
    "Apodaca",
    "San Nicolás de los Garza",
    "Santa Catarina",
    "García",
    "Escobedo",
    "Juárez",
  ],
} as const

/**
 * Construye una URL de WhatsApp con mensaje pre-cargado.
 * Centraliza el número para que cambiarlo en SEO.contact.whatsappNumber
 * se refleje en TODOS los CTAs del sitio.
 *
 * @example
 *   buildWhatsAppUrl("Hola ALFA3, quiero cotizar mi proyecto")
 *   // → https://wa.me/528180777715?text=Hola%20ALFA3%2C%20quiero%20cotizar%20mi%20proyecto
 */
export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${SEO.contact.whatsappNumber}?text=${encoded}`
}
