import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { JsonLd } from "@/components/seo/json-ld"
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/service-schemas"
import { SEO } from "@/lib/seo"
import { Check, MessageCircle, Search, MapPin, BarChart3, Link2 } from "lucide-react"

export const metadata: Metadata = {
  title: "SEO en Monterrey — Posicionamiento Web en Google Nuevo León",
  description:
    "Servicio de SEO en Monterrey, Nuevo León. Posicionamiento en Google para negocios regiomontanos. SEO local, técnico y de contenidos. Más tráfico orgánico sin pagar por clic.",
  alternates: { canonical: `${SEO.siteUrl}/servicios/seo-monterrey` },
  openGraph: {
    title: "SEO en Monterrey — Posicionamiento Web | ALFA3",
    description: "SEO local y técnico en Monterrey. Aparece primero en Google cuando tus clientes en Nuevo León te buscan.",
    url: `${SEO.siteUrl}/servicios/seo-monterrey`,
  },
}

const WHATSAPP_URL =
  "https://wa.me/1234567890?text=Hola%20ALFA3%2C%20quiero%20mejorar%20mi%20SEO%20en%20Monterrey"

const schemas = [
  buildServiceJsonLd({
    name: "SEO en Monterrey",
    description:
      "Servicio de posicionamiento web (SEO) en Monterrey, Nuevo León. SEO técnico, local y de contenidos para negocios regiomontanos que quieren aparecer primero en Google.",
    url: `${SEO.siteUrl}/servicios/seo-monterrey`,
  }),
  buildBreadcrumbJsonLd([
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "SEO Monterrey", href: "/servicios/seo-monterrey" },
  ]),
]

export default function SeoMonterreyPage() {
  return (
    <>
      <JsonLd data={schemas} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border bg-muted py-20 lg:py-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "linear-gradient(to right, #438bff 1px, transparent 1px), linear-gradient(to bottom, #438bff 1px, transparent 1px)", backgroundSize: "80px 80px" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <li><a href="/" className="hover:text-primary transition-colors">Inicio</a></li>
                <li>/</li>
                <li><a href="/servicios" className="hover:text-primary transition-colors">Servicios</a></li>
                <li>/</li>
                <li className="text-primary">SEO Monterrey</li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
                {"// SEO & Posicionamiento"}
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
                SEO en{" "}
                <span className="text-primary">Monterrey</span>{" "}
                — Aparece Primero en Google
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Cuando alguien en Monterrey busca tu servicio en Google, ¿apareces tú o aparece
                tu competencia? Con nuestro servicio de SEO para Nuevo León optimizamos tu sitio
                técnica y estratégicamente para que el tráfico orgánico llegue sin pagar por cada clic.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:bg-primary/90"
              >
                <MessageCircle className="h-5 w-5" />
                Quiero mejorar mi posicionamiento
              </a>
            </div>
          </div>
        </section>

        {/* Pilares del SEO */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                SEO completo para negocios{" "}
                <span className="text-primary">en Nuevo León</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                No solo palabras clave. Un trabajo estructural que dura y crece con el tiempo.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Search,
                  title: "SEO Técnico",
                  desc: "Velocidad de carga, Core Web Vitals, estructura de URLs, sitemap, schema markup y rastreo limpio para que Google entienda tu sitio.",
                },
                {
                  icon: MapPin,
                  title: "SEO Local",
                  desc: "Google Business Profile optimizado, NAP consistente en directorios, citas locales y reseñas para dominar búsquedas en Monterrey y el área metropolitana.",
                },
                {
                  icon: BarChart3,
                  title: "SEO de Contenido",
                  desc: "Investigación de palabras clave con intención de compra para Monterrey. Páginas de servicio y blog optimizados que capturan tráfico calificado.",
                },
                {
                  icon: Link2,
                  title: "Link Building",
                  desc: "Adquisición ética de enlaces desde sitios de autoridad en México. Directorios locales, medios regiomontanos y menciones de marca.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-2xl border border-border bg-card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-base font-extrabold text-card-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qué incluye */}
        <section className="border-t border-border bg-muted py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-extrabold text-foreground">
                  ¿Qué incluye el servicio de{" "}
                  <span className="text-primary">SEO en Monterrey</span>?
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  El SEO es un proceso, no un interruptor. Trabajamos en fases mensuales con
                  reporte de resultados transparente para que siempre sepas en qué se está
                  invirtiendo tu presupuesto.
                </p>
                <div className="mt-6 rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
                  <strong className="text-card-foreground">Primeros resultados:</strong> Entre 2 y 6 meses
                  dependiendo de la competencia de tus palabras clave en Monterrey.
                  Los resultados son acumulativos y permanentes.
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  "Auditoría SEO completa de tu sitio actual",
                  "Investigación de palabras clave para Monterrey y NL",
                  "Optimización de metadatos, títulos y descripciones",
                  "Schema markup (JSON-LD) para negocios locales",
                  "Optimización de velocidad y Core Web Vitals",
                  "Optimización de Google Business Profile",
                  "Registro en directorios locales de México",
                  "Creación de contenido SEO mensual",
                  "Construcción de enlaces (link building)",
                  "Reporte mensual con posiciones y tráfico real",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Por qué ALFA3 */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                  SEO hecho por quienes{" "}
                  <span className="text-primary">lo aplican en sí mismos</span>
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  No contratamos a un equipo en otro país para hacer tu SEO. Somos los mismos
                  desarrolladores que construyeron este sitio con las mismas técnicas que
                  ofrecemos: Next.js, JSON-LD, Core Web Vitals, páginas geo-targetizadas y
                  estructura semántica correcta.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Si este sitio sale en Google para "agencia web Monterrey", las mismas
                  técnicas pueden funcionar para tu negocio en Nuevo León.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { metric: "< 2s", label: "Tiempo de carga — factor directo de ranking" },
                  { metric: "100%", label: "Sitios con schema markup JSON-LD correcto" },
                  { metric: "Local", label: "Enfoque en Monterrey y área metropolitana" },
                  { metric: "Mensual", label: "Reportes de posiciones y tráfico orgánico" },
                ].map(({ metric, label }) => (
                  <div key={label} className="rounded-2xl border border-border bg-card p-6">
                    <span className="block text-3xl font-extrabold text-primary">{metric}</span>
                    <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-muted py-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-3xl font-extrabold text-foreground">
              ¿Tu competencia en Monterrey ya{" "}
              <span className="text-primary">te está ganando en Google</span>?
            </h2>
            <p className="mx-auto mt-4 text-muted-foreground">
              Solicita una auditoría SEO gratuita de tu sitio. Te decimos exactamente
              qué está fallando y cómo corregirlo.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:bg-primary/90"
            >
              <MessageCircle className="h-5 w-5" />
              Auditoría SEO gratuita
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
