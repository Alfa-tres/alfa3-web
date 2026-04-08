/**
 * Constantes centralizadas de SEO para ALFA3.
 * TODO: Actualizar los valores marcados con "TODO" antes de ir a producción.
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

  /** Información de contacto / NAP (Name, Address, Phone)
   *  TODO: Completar con datos reales */
  contact: {
    phone: "+52-81-XXXX-XXXX", // TODO: número real de WhatsApp
    email: "hola@alfatres.com", // TODO: verificar email
    whatsappNumber: "521XXXXXXXXXX", // TODO: número real (sin +, con 521 para MX móvil)
    address: {
      streetAddress: "", // TODO: dirección física (dejar vacío si operan remoto)
      city: "Monterrey",
      state: "Nuevo León",
      country: "MX",
      postalCode: "64000", // TODO: código postal real o del área
    },
    /** Coordenadas del centro de Monterrey — ajustar si tienen oficina */
    geo: {
      latitude: 25.6866,
      longitude: -100.3161,
    },
  },

  /** Redes sociales — TODO: reemplazar con URLs reales */
  social: {
    instagram: "https://www.instagram.com/alfatres.mx", // TODO
    linkedin: "https://www.linkedin.com/company/alfa3", // TODO
    facebook: "https://www.facebook.com/alfatres", // TODO
    // tiktok: "https://www.tiktok.com/@alfatres", // Descomenta si aplica
  },

  /** Open Graph / Twitter card */
  og: {
    image: "/og-image.png",
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
