import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { JsonLd } from "@/components/seo/json-ld"
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/service-schemas"
import { SEO } from "@/lib/seo"
import { Check, MessageCircle, Target, Zap, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Landing Pages en Monterrey — Más Leads, Más Ventas",
  description:
    "Diseño de landing pages en Monterrey, Nuevo León. Páginas de aterrizaje de alta conversión para campañas de Google Ads, Meta Ads y redes sociales. Resultados desde el primer día.",
  alternates: { canonical: `${SEO.siteUrl}/servicios/landing-page-monterrey` },
  openGraph: {
    title: "Landing Pages en Monterrey | ALFA3",
    description: "Landing pages de alta conversión en Monterrey. Diseñadas para campañas pagadas y captación de leads.",
    url: `${SEO.siteUrl}/servicios/landing-page-monterrey`,
  },
}

const WHATSAPP_URL =
  "https://wa.me/1234567890?text=Hola%20ALFA3%2C%20quiero%20una%20landing%20page"

const schemas = [
  buildServiceJsonLd({
    name: "Landing Pages en Monterrey",
    description:
      "Diseño y desarrollo de landing pages de alta conversión en Monterrey, Nuevo León. Optimizadas para campañas de pago por clic, captación de leads y ventas directas.",
    url: `${SEO.siteUrl}/servicios/landing-page-monterrey`,
    price: "4900",
  }),
  buildBreadcrumbJsonLd([
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Landing Pages Monterrey", href: "/servicios/landing-page-monterrey" },
  ]),
]

export default function LandingPagePage() {
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
                <li className="text-primary">Landing Pages</li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
                {"// Conversión"}
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
                Landing Pages en{" "}
                <span className="text-primary">Monterrey</span>{" "}
                que Convierten
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Una landing page mal diseñada desperdicia todo el dinero que gastas en publicidad.
                Creamos páginas de aterrizaje para negocios en Monterrey y Nuevo León con un único
                objetivo: convertir al visitante en lead o cliente desde el primer clic.
                Plan <strong className="text-foreground">ALFA desde $4,900 MXN</strong> — pago único.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:bg-primary/90"
              >
                <MessageCircle className="h-5 w-5" />
                Quiero mi landing page
              </a>
            </div>
          </div>
        </section>

        {/* Por qué una landing page */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Por qué necesitas una landing page{" "}
                <span className="text-primary">dedicada</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Mandar tráfico pagado a tu home page es tirar dinero. Una landing page específica
                duplica o triplica tu tasa de conversión.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  icon: Target,
                  title: "Un objetivo, un mensaje",
                  desc: "Sin distracciones de menú, blog ni redes sociales. El visitante solo tiene una opción: convertir. Eso multiplica las probabilidades de que lo haga.",
                },
                {
                  icon: Zap,
                  title: "Velocidad de carga extrema",
                  desc: "El 53% abandona si la página tarda más de 3 segundos. Nuestras landing pages cargan en menos de 1.5s — directamente en tu tasa de conversión y Quality Score de Google Ads.",
                },
                {
                  icon: TrendingUp,
                  title: "Diseñada para tu campaña",
                  desc: "El mensaje de tu anuncio debe coincidir exactamente con el de tu landing page. Diseñamos páginas alineadas a tus ads de Google, Meta o cualquier canal.",
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
                <h2 className="text-3xl font-extrabold text-foreground">
                  Plan <span className="text-primary">ALFA</span> — Landing Page
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  La solución de entrada para negocios en Monterrey que quieren resultados
                  rápidos con inversión controlada. Ideal para campañas de Google Ads,
                  Facebook Ads o lanzamientos de producto.
                </p>
                <div className="mt-6">
                  <span className="text-4xl font-extrabold text-foreground">$4,900</span>
                  <span className="ml-2 text-muted-foreground">MXN — pago único</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Entrega en 5–7 días hábiles. Sin mensualidades obligatorias.
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  "Diseño personalizado a medida (no plantillas)",
                  "Estructura de conversión: hero, beneficios, prueba social, CTA",
                  "Formulario de captura de leads configurado",
                  "Botón de WhatsApp integrado",
                  "Velocidad < 1.5s — optimizada para Quality Score",
                  "Diseño responsivo móvil y desktop",
                  "Píxel de Meta y Google Tag Manager listos",
                  "1 revisión incluida",
                  "Entrega en 5–7 días hábiles",
                  "Soporte post-lanzamiento de 15 días",
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

        {/* Casos de uso */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                ¿Para qué industrias funciona{" "}
                <span className="text-primary">en Monterrey</span>?
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {[
                "Inmobiliarias",
                "Restaurantes",
                "Clínicas y médicos",
                "Consultorios",
                "Gimnasios",
                "Escuelas",
                "Abogados",
                "Constructoras",
                "Agencias de autos",
                "Talleres",
                "Coaches y consultores",
                "E-commerce",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-border bg-card px-4 py-3 text-center text-sm font-medium text-card-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-muted py-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-3xl font-extrabold text-foreground">
              Tu landing page lista en{" "}
              <span className="text-primary">menos de una semana</span>
            </h2>
            <p className="mx-auto mt-4 text-muted-foreground">
              Platícanos de tu campaña y te enviamos una propuesta hoy mismo.
              Sin compromiso, sin tecnicismos.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:bg-primary/90"
            >
              <MessageCircle className="h-5 w-5" />
              Quiero mi landing page
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
