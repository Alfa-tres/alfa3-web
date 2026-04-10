import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { JsonLd } from "@/components/seo/json-ld"
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/service-schemas"
import { SEO, buildWhatsAppUrl } from "@/lib/seo"
import { Check, MessageCircle, Smartphone, MousePointer2, Palette } from "lucide-react"

export const metadata: Metadata = {
  title: { absolute: "Diseño de Páginas Web en Monterrey | ALFA3" },
  description:
    "Diseño de páginas web profesional en Monterrey, Nuevo León. UI/UX a medida, 100% responsivo, optimizado para conversión. Más de 50 negocios regiomontanos confían en ALFA3.",
  alternates: { canonical: `${SEO.siteUrl}/servicios/diseno-de-paginas-web-monterrey` },
  openGraph: {
    title: "Diseño de Páginas Web en Monterrey | ALFA3",
    description: "Diseño web profesional en Monterrey. UI/UX a medida, responsivo, pensado para convertir visitantes en clientes.",
    url: `${SEO.siteUrl}/servicios/diseno-de-paginas-web-monterrey`,
  },
}

const WHATSAPP_URL = buildWhatsAppUrl("Hola ALFA3, me interesa el diseño de páginas web")

const schemas = [
  buildServiceJsonLd({
    name: "Diseño de Páginas Web en Monterrey",
    description:
      "Diseño de páginas web profesional en Monterrey, Nuevo León. UI/UX personalizado, 100% responsivo y orientado a conversión para empresas y negocios regiomontanos.",
    url: `${SEO.siteUrl}/servicios/diseno-de-paginas-web-monterrey`,
    price: "4900",
  }),
  buildBreadcrumbJsonLd([
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Diseño de Páginas Web Monterrey", href: "/servicios/diseno-de-paginas-web-monterrey" },
  ]),
]

export default function DisenoWebPage() {
  return (
    <>
      <JsonLd data={schemas} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border bg-muted py-20 lg:py-28">
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
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
                <li className="text-primary">Diseño Web</li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
                {"// Diseño UI/UX"}
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
                Diseño de Páginas Web en{" "}
                <span className="text-primary">Monterrey</span>{" "}
                que Convierten
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Un buen diseño web no solo se ve bien — guía al visitante hacia la conversión.
                Creamos interfaces únicas para negocios en Monterrey y Nuevo León donde
                cada elemento tiene una razón estratégica: colores, tipografía, jerarquía visual
                y llamadas a la acción calculadas para vender.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:bg-primary/90"
              >
                <MessageCircle className="h-5 w-5" />
                Ver opciones de diseño
              </a>
            </div>
          </div>
        </section>

        {/* Principios */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Diseño web estratégico, <span className="text-primary">no solo estético</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Un sitio bonito que no convierte es decoración. Nosotros diseñamos para resultados.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  icon: Palette,
                  title: "Identidad Visual",
                  desc: "Colores, tipografía y estilo alineados con tu marca. Tu web debe reconocerse a primera vista, no confundirse con la competencia.",
                },
                {
                  icon: MousePointer2,
                  title: "UX orientado a conversión",
                  desc: "Arquitectura de información, jerarquía visual y CTAs posicionados estratégicamente para guiar al usuario hacia la acción que quieres.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile-First",
                  desc: "Más del 70% de tus clientes en Monterrey llegan desde el celular. Diseñamos primero para móvil, luego escalamos al desktop.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-2xl border border-border bg-card p-7">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-extrabold text-card-foreground">{title}</h3>
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
                <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                  ¿Qué incluye el <span className="text-primary">diseño web</span>?
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Cada proyecto de diseño web en Monterrey incluye desde el wireframe hasta
                  el sitio final lanzado — con todo lo que necesitas para empezar a generar resultados.
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  "Wireframes y prototipos antes de codificar",
                  "Diseño personalizado (no plantillas)",
                  "Sistema de colores y tipografía de tu marca",
                  "Diseño responsivo móvil, tablet y desktop",
                  "Animaciones y micro-interacciones",
                  "Integración con WhatsApp, redes y formularios",
                  "Optimización de imágenes y velocidad de carga",
                  "Revisiones incluidas según el plan elegido",
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

        {/* CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
              Tu sitio web, desde <span className="text-primary">$4,900 MXN</span>
            </h2>
            <p className="mx-auto mt-4 text-muted-foreground leading-relaxed">
              Incluye diseño personalizado, desarrollo, SEO básico y lanzamiento.
              Pago único, sin mensualidades ni sorpresas.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a href="/precios" className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-secondary">
                Ver planes y precios
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
              >
                <MessageCircle className="h-4 w-4" />
                Cotización gratuita
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
