import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { JsonLd } from "@/components/seo/json-ld"
import { buildBreadcrumbJsonLd } from "@/lib/service-schemas"
import { SEO } from "@/lib/seo"
import { MessageCircle, ExternalLink, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Portafolio — Sitios Web que Hemos Desarrollado | ALFA3",
  description:
    "Portafolio de proyectos de diseño y desarrollo web de ALFA3 en Monterrey, Nuevo León. Sitios, tiendas en línea y landing pages para negocios regiomontanos.",
  alternates: { canonical: `${SEO.siteUrl}/portafolio` },
  openGraph: {
    title: "Portafolio de Proyectos Web | ALFA3 Monterrey",
    description: "Proyectos de diseño web desarrollados por ALFA3 en Monterrey, NL. Sitios rápidos, modernos y enfocados en conversión.",
    url: `${SEO.siteUrl}/portafolio`,
  },
}

const breadcrumb = buildBreadcrumbJsonLd([
  { name: "Inicio", href: "/" },
  { name: "Portafolio", href: "/portafolio" },
])

const WHATSAPP_URL =
  "https://wa.me/1234567890?text=Hola%20ALFA3%2C%20vi%20su%20portafolio%20y%20quiero%20cotizar%20mi%20proyecto"

// TODO: Reemplazar con proyectos reales al momento del deploy
const projects = [
  {
    title: "Proyecto ALFA — Landing Page",
    category: "Landing Page",
    plan: "ALFA",
    industry: "Servicios profesionales",
    location: "Monterrey, NL",
    description:
      "Landing page de alta conversión para captación de leads en campaña de Google Ads. Carga < 1.5s y tasa de conversión optimizada.",
    tags: ["Next.js", "Google Ads", "Lead Gen"],
    href: null, // TODO: URL del proyecto real
  },
  {
    title: "Proyecto BETA — Sitio Corporativo",
    category: "One Page",
    plan: "BETA",
    industry: "Consultoría",
    location: "San Pedro Garza García, NL",
    description:
      "Sitio one-page con 5 secciones, animaciones y formulario de contacto integrado con WhatsApp. Score de 98 en Lighthouse.",
    tags: ["Next.js", "React", "Lighthouse 98"],
    href: null,
  },
  {
    title: "Proyecto GAMMA — Sitio Empresarial",
    category: "Sitio Multi-página",
    plan: "GAMMA",
    industry: "Manufactura",
    location: "Apodaca, NL",
    description:
      "Sitio empresarial de 6 páginas con panel CMS, blog corporativo y SEO técnico completo. Indexado en Google en 48 horas.",
    tags: ["Next.js", "CMS", "SEO Técnico"],
    href: null,
  },
  {
    title: "Proyecto DELTA — E-commerce",
    category: "Tienda en Línea",
    plan: "DELTA",
    industry: "Retail",
    location: "Guadalupe, NL",
    description:
      "Tienda en línea con catálogo de +200 productos, MercadoPago, gestión de inventario y panel de administración propio.",
    tags: ["E-commerce", "MercadoPago", "Inventario"],
    href: null,
  },
]

const planColors: Record<string, string> = {
  ALFA: "bg-primary/10 text-primary",
  BETA: "bg-primary/20 text-primary",
  GAMMA: "bg-primary/30 text-primary",
  DELTA: "bg-primary/15 text-primary",
}

export default function PortafolioPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
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
                <li className="text-primary">Portafolio</li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
                {"// Proyectos"}
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
                Sitios web que hemos construido{" "}
                <span className="text-primary">en Monterrey</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Cada proyecto en ALFA3 se desarrolla a medida, sin plantillas. Aquí mostramos
                una muestra del trabajo que hemos realizado para negocios en Monterrey,
                Nuevo León y el área metropolitana.
              </p>
            </div>
          </div>
        </section>

        {/* Grid de proyectos */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg"
                >
                  {/* Placeholder visual */}
                  <div className="relative flex h-52 items-center justify-center bg-gradient-to-br from-primary/5 to-primary/15 border-b border-border">
                    <div className="text-center">
                      <span className={`inline-block rounded-full px-3 py-1 font-mono text-sm font-bold ${planColors[project.plan]}`}>
                        Plan {project.plan}
                      </span>
                      <p className="mt-2 font-mono text-xs text-muted-foreground">{project.category}</p>
                    </div>
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg bg-card/80 text-muted-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:text-primary"
                        aria-label="Ver proyecto"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{project.industry}</span>
                      <span>·</span>
                      <span>{project.location}</span>
                    </div>
                    <h2 className="mb-2 text-lg font-extrabold text-card-foreground">
                      {project.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-lg border border-border bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-muted-foreground/70">
              * Los proyectos mostrados son representativos del trabajo de ALFA3.
              Solicita referencias y demos en vivo por WhatsApp.
            </p>
          </div>
        </section>

        {/* Proceso */}
        <section className="border-t border-border bg-muted py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Tu proyecto, <span className="text-primary">nuestro próximo caso</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Cada sitio que hacemos en Monterrey es único. El tuyo también lo será.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { metric: "< 2s", label: "Tiempo de carga promedio de nuestros sitios" },
                { metric: "100%", label: "Proyectos entregados en el plazo pactado" },
                { metric: "NL", label: "Enfocados en el mercado de Nuevo León" },
                { metric: "24/7", label: "Uptime de los sitios en producción" },
              ].map(({ metric, label }) => (
                <div key={label} className="rounded-2xl border border-border bg-card p-6 text-center">
                  <span className="block text-3xl font-extrabold text-primary">{metric}</span>
                  <p className="mt-2 text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-3xl font-extrabold text-foreground">
              ¿Listo para tener un sitio así{" "}
              <span className="text-primary">en Monterrey</span>?
            </h2>
            <p className="mx-auto mt-4 text-muted-foreground">
              Cuéntanos de tu negocio y recibe una propuesta personalizada en menos de 24 horas.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="/precios"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-secondary"
              >
                Ver planes y precios
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
              >
                <MessageCircle className="h-4 w-4" />
                Quiero mi sitio web
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
