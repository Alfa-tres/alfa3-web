import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { BeforeAfter } from "@/components/sections/before-after"
import { Features } from "@/components/sections/features"
import { Pillars } from "@/components/sections/pillars"
import { Pricing } from "@/components/sections/pricing"
import { Strategy } from "@/components/sections/strategy"
import { Portfolio } from "@/components/sections/portfolio"
import { Why } from "@/components/sections/why"
import { Cta } from "@/components/sections/cta"
import { JsonLd, localBusinessJsonLd, faqPageJsonLd } from "@/components/seo/json-ld"
import { SEO } from "@/lib/seo"

// Client components below-the-fold — code-split en chunks separados.
// SSR sigue activo (importante para SEO), pero el JS de hidratación
// se descarga de forma asíncrona, sin bloquear el LCP del Hero.
const Services = dynamic(() => import("@/components/sections/services").then(m => ({ default: m.Services })))
const Types = dynamic(() => import("@/components/sections/types").then(m => ({ default: m.Types })))
const FAQ = dynamic(() => import("@/components/sections/faq").then(m => ({ default: m.FAQ })))

export const metadata: Metadata = {
  alternates: {
    canonical: SEO.siteUrl,
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={localBusinessJsonLd} />
      <JsonLd data={faqPageJsonLd} />
      <Navbar />
      <Hero />
      <BeforeAfter />
      <Features />
      <Pillars />
      <Services />
      <Types />
      <Pricing />
      <Strategy />
      <Portfolio />
      <Why />
      <FAQ />
      <Cta />
      <Footer />
    </main>
  )
}
