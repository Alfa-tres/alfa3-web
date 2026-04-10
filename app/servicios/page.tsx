import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { JsonLd } from "@/components/seo/json-ld"
import { buildBreadcrumbJsonLd } from "@/lib/service-schemas"
import { SEO, buildWhatsAppUrl } from "@/lib/seo"
import {
  Globe, Paintbrush, Search, ShoppingCart, Bot,
  Layers, Smartphone, Gauge, RefreshCw, Shield, BarChart3,
  ArrowRight, MessageCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: { absolute: "Servicios de Diseño Web en Monterrey | ALFA3" },
  description:
    "Servicios completos de diseño web, desarrollo, SEO, e-commerce e inteligencia artificial en Monterrey, Nuevo León. Soluciones a medida para empresas en todo el mercado regiomontano.",
  alternates: {
    canonical: `${SEO.siteUrl}/servicios`,
  },
  openGraph: {
    title: "Servicios de Diseño Web en Monterrey | ALFA3",
    description:
      "Diseño web, e-commerce, SEO e IA para empresas en Monterrey y Nuevo León. Tecnología moderna a medida.",
    url: `${SEO.siteUrl}/servicios`,
  },
}

const WHATSAPP_URL = buildWhatsAppUrl("Hola ALFA3, quiero información sobre sus servicios")

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    href: "/servicios/desarrollo-web-monterrey",
    description:
      "Sitios modernos con Next.js y React — más rápidos, más seguros y mejor posicionados que cualquier plantilla WordPress.",
  },
  {
    icon: Paintbrush,
    title: "Diseño de Páginas Web",
    href: "/servicios/diseno-de-paginas-web-monterrey",
    description:
      "Interfaces a medida diseñadas para convertir. Cada elemento tiene una razón estratégica detrás.",
  },
  {
    icon: ShoppingCart,
    title: "Tienda en Línea",
    href: "/servicios/tiendas-en-linea-monterrey",
    description:
      "Tu tienda en línea operativa 24/7 con catálogo, pasarela de pagos y gestión de inventario.",
  },
  {
    icon: Search,
    title: "SEO & Posicionamiento",
    href: "/servicios/seo-monterrey",
    description:
      "Aparece primero en Google cuando tus clientes en Monterrey y Nuevo León te buscan.",
  },
  {
    icon: Layers,
    title: "Landing Pages",
    href: "/servicios/landing-page-monterrey",
    description:
      "Páginas de aterrizaje enfocadas en captar leads y conversiones para tus campañas.",
  },
  {
    icon: Bot,
    title: "Automatización con IA",
    href: "#",
    description:
      "Chatbots y flujos inteligentes que atienden, califican y convierten prospectos sin intervención humana.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reportes",
    href: "#",
    description:
      "Datos reales sobre tus visitantes, canales y conversiones. Decisiones informadas, no intuiciones.",
  },
  {
    icon: Smartphone,
    title: "Diseño Responsivo",
    href: "#",
    description:
      "Perfecto en celular, tablet y desktop. Más del 70% de tus clientes entran desde el móvil.",
  },
  {
    icon: Gauge,
    title: "Velocidad & Performance",
    href: "#",
    description:
      "Sitios que cargan en menos de 2 segundos. La velocidad es SEO, conversión y reputación.",
  },
  {
    icon: RefreshCw,
    title: "Rediseño Web",
    href: "#",
    description:
      "Modernizamos tu sitio actual sin perder tu identidad ni el SEO que ya acumulaste.",
  },
  {
    icon: Shield,
    title: "Seguridad & Mantenimiento",
    href: "#",
    description:
      "Backups, actualizaciones y monitoreo continuo. Tu web siempre arriba y protegida.",
  },
]

const breadcrumb = buildBreadcrumbJsonLd([
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
])

export default function ServiciosPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border bg-muted py-20 lg:py-28">
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "linear-gradient(to right, #438bff 1px, transparent 1px), linear-gradient(to bottom, #438bff 1px, transparent 1px)", backgroundSize: "80px 80px" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <li><a href="/" className="hover:text-primary transition-colors">Inicio</a></li>
                <li aria-hidden="true">/</li>
                <li className="text-primary">Servicios</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
                {"// Servicios"}
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
                Todo lo que necesitas para{" "}
                <span className="text-primary">dominar en Monterrey</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Ofrecemos servicios completos de diseño web, desarrollo, SEO e inteligencia
                artificial para empresas en Monterrey, Nuevo León y todo México.
                Tecnología moderna, sin plantillas genéricas.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
                >
                  <MessageCircle className="h-4 w-4" />
                  Solicitar cotización
                </a>
                <a
                  href="/precios"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-secondary"
                >
                  Ver precios
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Grid de servicios */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon
                const isLink = service.href !== "#"
                const content = (
                  <div className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/40 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary/20 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="mb-2 flex items-center gap-2 text-lg font-extrabold text-card-foreground">
                        {service.title}
                        {isLink && (
                          <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 text-primary" />
                        )}
                      </h2>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                )

                return isLink ? (
                  <a key={service.title} href={service.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={service.title}>{content}</div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-muted py-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
              ¿No sabes cuál servicio necesitas?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
              Platícanos de tu negocio y en menos de 24 horas te enviamos una
              propuesta a la medida — sin compromiso, sin tecnicismos.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:bg-primary/90"
            >
              <MessageCircle className="h-5 w-5" />
              Hablar con un experto
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
