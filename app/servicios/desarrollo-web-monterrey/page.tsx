import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { JsonLd } from "@/components/seo/json-ld"
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/service-schemas"
import { SEO, buildWhatsAppUrl } from "@/lib/seo"
import { Check, MessageCircle, Zap, Shield, TrendingUp, Code2 } from "lucide-react"

export const metadata: Metadata = {
  title: { absolute: "Desarrollo Web en Monterrey a Medida | ALFA3" },
  description:
    "Desarrollo web profesional en Monterrey con Next.js y React. Sitios rápidos, seguros y posicionados en Google. Sin plantillas — código a la medida de tu negocio en Nuevo León.",
  alternates: { canonical: `${SEO.siteUrl}/servicios/desarrollo-web-monterrey` },
  openGraph: {
    title: "Desarrollo Web en Monterrey a Medida | ALFA3",
    description:
      "Desarrollo web profesional en Monterrey. Next.js, React, sin plantillas. LCP < 2s, SEO técnico incluido.",
    url: `${SEO.siteUrl}/servicios/desarrollo-web-monterrey`,
  },
}

const WHATSAPP_URL = buildWhatsAppUrl("Hola ALFA3, me interesa el servicio de desarrollo web")

const schemas = [
  buildServiceJsonLd({
    name: "Desarrollo Web en Monterrey",
    description:
      "Servicio de desarrollo web profesional en Monterrey, Nuevo León. Sitios a medida con Next.js y React — rápidos, seguros, optimizados para SEO y conversión.",
    url: `${SEO.siteUrl}/servicios/desarrollo-web-monterrey`,
    price: "4900",
  }),
  buildBreadcrumbJsonLd([
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Desarrollo Web Monterrey", href: "/servicios/desarrollo-web-monterrey" },
  ]),
]

export default function DesarrolloWebPage() {
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
                <li className="text-primary">Desarrollo Web</li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
                {"// Desarrollo Web"}
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
                Desarrollo Web en{" "}
                <span className="text-primary">Monterrey</span>{" "}
                que Realmente Funciona
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                No usamos plantillas. Desarrollamos con <strong>Next.js y React</strong> —
                la misma tecnología que usan Netflix, Vercel y las startups más rápidas del mundo.
                El resultado: sitios que cargan en menos de 2 segundos, se posicionan en Google
                y convierten visitas en clientes para tu negocio en Monterrey y Nuevo León.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:bg-primary/90"
              >
                <MessageCircle className="h-5 w-5" />
                Quiero mi sitio web
              </a>
            </div>
          </div>
        </section>

        {/* Por qué Next.js */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div>
                <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
                  {"// Tecnología"}
                </span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                  ¿Por qué <span className="text-primary">no WordPress</span>?
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  La mayoría de las agencias en Monterrey usan WordPress con plantillas de $60 USD que
                  se ven iguales para todos. Nosotros desarrollamos con{" "}
                  <strong className="text-foreground">Next.js y React</strong>, tecnologías que
                  ofrecen:
                </p>
                <ul className="mt-6 flex flex-col gap-4">
                  {[
                    { icon: Zap, text: "LCP < 2 segundos — carga inmediata en móviles y desktop" },
                    { icon: Shield, text: "Seguridad superior — sin plugins vulnerables, sin parches eternos" },
                    { icon: TrendingUp, text: "SEO técnico superior — renderizado del servidor que Google indexa mejor" },
                    { icon: Code2, text: "Diseño 100% personalizado — tu sitio no se parece al de nadie más" },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-sm leading-relaxed text-muted-foreground">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="mb-4 text-xl font-extrabold text-card-foreground">
                    ¿Qué incluye el desarrollo web?
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {[
                      "Diseño UI/UX personalizado desde cero",
                      "Desarrollo con Next.js 16 + React 19",
                      "Diseño responsivo (móvil, tablet, desktop)",
                      "Optimización de velocidad (Core Web Vitals)",
                      "SEO técnico: metadatos, sitemap, schema",
                      "Integración con WhatsApp y redes sociales",
                      "Formulario de contacto y captación de leads",
                      "Panel de administración de contenido (en plan GAMMA)",
                      "Capacitación para actualizar tu sitio",
                      "Soporte post-lanzamiento",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="border-t border-border bg-muted py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Nuestro proceso de <span className="text-primary">desarrollo web</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Entregamos tu sitio en tiempo y forma — sin sorpresas, sin excusas.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { step: "01", title: "Diagnóstico", desc: "Llamada gratuita para entender tu negocio, competencia y objetivos en Monterrey." },
                { step: "02", title: "Propuesta", desc: "Alcance detallado, cronograma y precio fijo. Sin costos ocultos." },
                { step: "03", title: "Desarrollo", desc: "Entregas por etapas con tus revisiones. Ves el avance desde el día 1." },
                { step: "04", title: "Lanzamiento", desc: "Deploy, capacitación y soporte post-lanzamiento incluido." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="rounded-2xl border border-border bg-card p-6">
                  <span className="mb-3 block font-mono text-4xl font-black text-primary/20">{step}</span>
                  <h3 className="mb-2 text-lg font-extrabold text-card-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Precios referencia */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
              Precios de desarrollo web en Monterrey
            </h2>
            <p className="mx-auto mt-4 text-muted-foreground leading-relaxed">
              Desde <strong className="text-foreground">$4,900 MXN</strong> (plan ALFA — landing page)
              hasta <strong className="text-foreground">$15,900 MXN</strong> (plan GAMMA — sitio empresarial completo).
              Todos son pago único, sin mensualidades obligatorias.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="/precios"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-secondary"
              >
                Ver todos los precios
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
              >
                <MessageCircle className="h-4 w-4" />
                Cotización sin costo
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
