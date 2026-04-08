import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { BeforeAfter } from "@/components/sections/before-after"
import { Features } from "@/components/sections/features"
import { Pillars } from "@/components/sections/pillars"
import { Services } from "@/components/sections/services"
import { Types } from "@/components/sections/types"
import { Pricing } from "@/components/sections/pricing"
import { Strategy } from "@/components/sections/strategy"
import { Portfolio } from "@/components/sections/portfolio"
import { Why } from "@/components/sections/why"
import { Cta } from "@/components/sections/cta"
import { JsonLd, localBusinessJsonLd } from "@/components/seo/json-ld"
import { SEO } from "@/lib/seo"

export const metadata: Metadata = {
  alternates: {
    canonical: SEO.siteUrl,
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={localBusinessJsonLd} />
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
      <Cta />
      <Footer />
    </main>
  )
}
