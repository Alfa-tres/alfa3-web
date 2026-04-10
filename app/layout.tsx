import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { JsonLd, organizationJsonLd, webSiteJsonLd } from "@/components/seo/json-ld"
import { SEO } from "@/lib/seo"
import { grift } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(SEO.siteUrl),

  title: {
    default: SEO.title,
    template: SEO.titleTemplate,
  },

  description: SEO.description,

  keywords: SEO.keywords as unknown as string[],

  authors: [{ name: "ALFA3", url: SEO.siteUrl }],
  creator: "ALFA3",
  publisher: "ALFA3",
  category: "Web Design & Development",

  alternates: {
    canonical: "/",
    languages: {
      "es-MX": "/",
    },
  },

  openGraph: {
    type: SEO.og.type,
    locale: SEO.locale,
    url: SEO.siteUrl,
    siteName: SEO.siteName,
    title: SEO.title,
    description: SEO.description,
    images: [
      {
        url: SEO.og.image,
        width: SEO.og.imageWidth,
        height: SEO.og.imageHeight,
        alt: SEO.og.imageAlt,
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SEO.og.image],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },

  manifest: "/manifest.webmanifest",

  verification: {
    // TODO: Pegar el código de verificación de Google Search Console
    google: "TODO_GOOGLE_SEARCH_CONSOLE_CODE",
    // yandex: "TODO",
    // bing: "TODO",
  },

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  other: {
    "geo.region": SEO.region,
    "geo.placename": `${SEO.contact.address.city}, ${SEO.contact.address.state}`,
    "geo.position": `${SEO.contact.geo.latitude};${SEO.contact.geo.longitude}`,
    ICBM: `${SEO.contact.geo.latitude}, ${SEO.contact.geo.longitude}`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-MX" className={grift.variable} suppressHydrationWarning>
      <head>
        <JsonLd data={[organizationJsonLd, webSiteJsonLd]} />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
