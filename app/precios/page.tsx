import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { JsonLd } from "@/components/seo/json-ld"
import { buildBreadcrumbJsonLd } from "@/lib/service-schemas"
import { SEO, buildWhatsAppUrl } from "@/lib/seo"
import { Check, Star, MessageCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: { absolute: "Precios de Páginas Web en Monterrey | ALFA3" },
  description:
    "Cuánto cuesta una página web en Monterrey: planes desde $4,900 MXN (ALFA) hasta $15,900 MXN (GAMMA). Precios transparentes en pesos mexicanos, sin mensualidades ocultas.",
  alternates: { canonical: `${SEO.siteUrl}/precios` },
  openGraph: {
    title: "Precios de Páginas Web en Monterrey | ALFA3",
    description: "Planes y precios claros para diseño web en Monterrey. Desde $4,900 MXN sin mensualidades ocultas.",
    url: `${SEO.siteUrl}/precios`,
  },
}

const WHATSAPP_URL = buildWhatsAppUrl("Hola ALFA3, quiero información sobre precios")

const breadcrumb = buildBreadcrumbJsonLd([
  { name: "Inicio", href: "/" },
  { name: "Precios", href: "/precios" },
])

const plans = [
  {
    name: "ALFA",
    price: "4,900",
    period: "pago único",
    tag: "Landing Page",
    description: "El fundamento. Perfecto para lanzamientos rápidos y captación de leads.",
    popular: false,
    features: [
      "Diseño personalizado (no plantillas)",
      "1 página de aterrizaje optimizada",
      "Diseño responsivo móvil y desktop",
      "Formulario de contacto y botón WhatsApp",
      "Optimización SEO básica (metadatos, schema)",
      "Velocidad < 1.5s",
      "Píxel de Meta y GTM listos",
      "1 revisión incluida",
      "Entrega en 5–7 días hábiles",
      "Soporte post-lanzamiento 15 días",
    ],
  },
  {
    name: "BETA",
    price: "7,900",
    period: "pago único",
    tag: "One Page",
    description: "La evolución. Tu empresa completa en una experiencia vertical moderna.",
    popular: true,
    features: [
      "Todo lo de ALFA",
      "Hasta 5 secciones (hero, servicios, quiénes somos, testimonios, contacto)",
      "Animaciones y micro-interacciones",
      "Integración con WhatsApp y redes sociales",
      "Optimización de velocidad (Core Web Vitals)",
      "SEO on-page completo",
      "2 revisiones incluidas",
      "Entrega en 7–10 días hábiles",
      "Soporte post-lanzamiento 30 días",
    ],
  },
  {
    name: "GAMMA",
    price: "15,900",
    period: "pago único",
    tag: "Sitio Empresarial",
    description: "La dominación. Sitio multi-página con presencia empresarial total.",
    popular: false,
    features: [
      "Todo lo de BETA",
      "Hasta 8 páginas individuales",
      "Blog o sección de noticias",
      "Panel de administración de contenido",
      "SEO avanzado: schema, sitemap, hreflang",
      "Integración CRM o correo marketing",
      "3 revisiones incluidas",
      "Entrega en 15–20 días hábiles",
      "Soporte post-lanzamiento 60 días",
    ],
  },
  {
    name: "DELTA",
    price: "6,900",
    period: "/ mes",
    tag: "E-commerce",
    description: "El siguiente paso. Tu tienda en línea operativa 24/7 con soporte continuo.",
    popular: false,
    features: [
      "Catálogo ilimitado de productos",
      "Pasarela de pagos (MercadoPago + Stripe)",
      "Carrito de compras y checkout optimizado",
      "Gestión de inventario y alertas de stock",
      "Panel de administración para ti",
      "Diseño responsivo mobile-first",
      "SEO básico para productos",
      "Soporte técnico mensual incluido",
      "Actualizaciones de seguridad",
      "Hosting incluido en la mensualidad",
    ],
  },
]

const faqs = [
  {
    q: "¿Los precios incluyen dominio y hosting?",
    a: "Los planes ALFA, BETA y GAMMA son pago único de desarrollo. El dominio y hosting se cotizan por separado (aprox. $500–800 MXN/año) o puedes usar el que ya tienes. El plan DELTA incluye hosting mensual.",
  },
  {
    q: "¿Puedo agregar páginas extra al plan BETA?",
    a: "Sí. Puedes añadir páginas adicionales por $1,500 MXN cada una. Si desde el inicio necesitas más de 5 secciones, el plan GAMMA puede ser más conveniente.",
  },
  {
    q: "¿Cuánto tiempo tarda la entrega?",
    a: "ALFA: 5–7 días. BETA: 7–10 días. GAMMA: 15–20 días. DELTA: 2–4 semanas (setup inicial). Los tiempos inician desde que recibes el brief completo y el pago del anticipo.",
  },
  {
    q: "¿Cuál es la forma de pago?",
    a: "50% de anticipo al inicio del proyecto y 50% al aprobar la versión final antes del lanzamiento. Aceptamos transferencia SPEI, tarjeta de crédito/débito y PayPal.",
  },
]

export default function PreciosPage() {
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
                <li className="text-primary">Precios</li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
                {"// Inversión"}
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
                Precios de páginas web en{" "}
                <span className="text-primary">Monterrey</span>{" "}
                — Transparentes
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Sin letras chiquitas, sin costos ocultos. Todos los precios son en pesos mexicanos (MXN).
                Elige el plan que mejor se adapte al tamaño y objetivos de tu negocio en Nuevo León.
              </p>
            </div>
          </div>
        </section>

        {/* Planes */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col overflow-hidden rounded-2xl border bg-card ${
                    plan.popular
                      ? "border-primary shadow-lg shadow-primary/10 scale-[1.02]"
                      : "border-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="flex items-center justify-center gap-1.5 bg-primary px-4 py-2 text-primary-foreground">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <span className="font-mono text-xs font-bold tracking-wider">MÁS POPULAR</span>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-1 flex items-center gap-2">
                      <h2 className="text-xl font-extrabold text-card-foreground">{plan.name}</h2>
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary">{plan.tag}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                    <div className="mt-6 mb-6">
                      <span className="text-sm text-muted-foreground">desde</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-foreground">${plan.price}</span>
                        <span className="text-sm text-muted-foreground">MXN {plan.period}</span>
                      </div>
                    </div>
                    <ul className="flex flex-1 flex-col gap-2.5 mb-6">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-auto inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                        plan.popular
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90"
                          : "border border-border text-foreground hover:border-primary/40 hover:bg-secondary"
                      }`}
                    >
                      <MessageCircle className="h-4 w-4" />
                      Quiero el plan {plan.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-xs text-muted-foreground/60">
              * Los precios son en MXN y pueden variar según los requerimientos específicos de cada proyecto. Solicita una cotización personalizada.
            </p>
          </div>
        </section>

        {/* Comparativa rápida */}
        <section className="border-t border-border bg-muted py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                ¿Cuánto cuesta una página web{" "}
                <span className="text-primary">en Monterrey</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                El costo depende de la complejidad. Esta es la guía rápida para elegir:
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-6 py-4 text-left font-extrabold text-foreground">Necesitas...</th>
                    <th className="px-6 py-4 text-center font-extrabold text-primary">Plan recomendado</th>
                    <th className="px-6 py-4 text-right font-extrabold text-foreground">Precio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { need: "Una página para tus campañas o para probar un producto", plan: "ALFA", price: "$4,900 MXN" },
                    { need: "Un sitio completo para tu empresa o negocio en Monterrey", plan: "BETA", price: "$7,900 MXN" },
                    { need: "Presencia empresarial con blog, CMS y múltiples páginas", plan: "GAMMA", price: "$15,900 MXN" },
                    { need: "Vender productos en línea en todo México 24/7", plan: "DELTA", price: "$6,900 MXN/mes" },
                  ].map(({ need, plan, price }) => (
                    <tr key={plan} className="hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 text-muted-foreground">{need}</td>
                      <td className="px-6 py-4 text-center font-bold text-primary">{plan}</td>
                      <td className="px-6 py-4 text-right font-semibold text-foreground">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="mb-10 text-center text-3xl font-extrabold text-foreground sm:text-4xl">
              Preguntas frecuentes sobre{" "}
              <span className="text-primary">precios</span>
            </h2>
            <div className="flex flex-col gap-6">
              {faqs.map(({ q, a }) => (
                <div key={q} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="mb-2 font-extrabold text-card-foreground">{q}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-muted py-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-3xl font-extrabold text-foreground">
              ¿No sabes cuál plan es{" "}
              <span className="text-primary">el indicado para ti</span>?
            </h2>
            <p className="mx-auto mt-4 text-muted-foreground">
              Platícanos de tu negocio y en menos de 24 horas te enviamos una propuesta
              personalizada — sin compromiso.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-secondary"
              >
                Ver todos los servicios
                <ArrowRight className="h-4 w-4" />
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
