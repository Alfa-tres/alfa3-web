import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { JsonLd } from "@/components/seo/json-ld"
import { buildBreadcrumbJsonLd } from "@/lib/service-schemas"
import { SEO, buildWhatsAppUrl } from "@/lib/seo"
import { MessageCircle, ArrowRight, Code2, Zap, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: { absolute: "Nosotros — Agencia Web en Monterrey | ALFA3" },
  description:
    "ALFA3 es una agencia de diseño y desarrollo web fundada en Monterrey, Nuevo León. Dos co-fundadores apasionados por la tecnología y el impacto real en negocios regiomontanos.",
  alternates: { canonical: `${SEO.siteUrl}/nosotros` },
  openGraph: {
    title: "Nosotros — Agencia Web en Monterrey | ALFA3",
    description: "La historia detrás de ALFA3. Una agencia web nacida en Monterrey para ayudar a negocios regiomontanos a crecer en línea.",
    url: `${SEO.siteUrl}/nosotros`,
  },
}

const breadcrumb = buildBreadcrumbJsonLd([
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
])

const WHATSAPP_URL = buildWhatsAppUrl("Hola ALFA3, quiero platicar sobre mi proyecto")

const values = [
  {
    icon: Code2,
    title: "Calidad técnica sin concesiones",
    desc: "No usamos plantillas ni atajos. Cada línea de código está escrita para durar, escalar y rendir en Google.",
  },
  {
    icon: Zap,
    title: "Velocidad de entrega real",
    desc: "Entregamos landing pages en 5 días y sitios completos en menos de 3 semanas. Sin pretextos, sin retrasos eternos.",
  },
  {
    icon: Heart,
    title: "Compromiso con el resultado",
    desc: "No cobramos por horas de trabajo: cobramos por resultados. Tu éxito es nuestra mejor carta de presentación en Monterrey.",
  },
]

export default function NosotrosPage() {
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
                <li className="text-primary">Nosotros</li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
                {"// Quiénes somos"}
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
                Una agencia web nacida en{" "}
                <span className="text-primary">Monterrey</span>{" "}
                para negocios regiomontanos
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                ALFA3 es una agencia de diseño y desarrollo web fundada en Monterrey, Nuevo León.
                Dos co-fundadores, tecnología de primer nivel y un objetivo claro: ayudar a
                empresas en el área metropolitana a crecer en línea con sitios que realmente funcionan.
              </p>
            </div>
          </div>
        </section>

        {/* Historia */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                  Por qué creamos{" "}
                  <span className="text-primary">ALFA3</span>
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Vimos demasiados negocios en Monterrey con sitios web que no convertían, hechos
                    con plantillas genéricas de WordPress que tardaban 8 segundos en cargar y que
                    nadie encontraba en Google.
                  </p>
                  <p>
                    También vimos las cotizaciones de agencias grandes: $50,000 pesos o más por un
                    sitio que al final se veía igual que el de cualquier otro. Había un hueco entre
                    la calidad que merecía un negocio regiomontano y lo que el mercado ofrecía a
                    precios accesibles.
                  </p>
                  <p>
                    ALFA3 nació para cerrar ese hueco. Tecnología de primer nivel — la misma que
                    usan Netflix, Vercel y las startups más rápidas del mundo — al servicio de
                    negocios en Nuevo León con presupuestos reales.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <span className="block font-mono text-sm text-primary">// El nombre</span>
                  <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
                    <strong className="text-card-foreground">ALFA</strong> es la primera letra del
                    alfabeto griego — el principio, el fundamento. <strong className="text-card-foreground">3</strong>{" "}
                    porque somos tres pilares: diseño, tecnología y resultados. Los nombres de
                    nuestros planes — ALFA, BETA, GAMMA, DELTA — siguen la misma lógica: una
                    progresión natural hacia la dominación total de tu mercado en línea.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <span className="block font-mono text-sm text-primary">// Monterrey first</span>
                  <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
                    Operamos 100% desde Monterrey. Conocemos el mercado regiomontano, sus
                    industrias predominantes (manufactura, retail, servicios profesionales, salud)
                    y lo que busca un cliente de Nuevo León antes de contratar. Ese contexto
                    local se refleja en cada sitio que construimos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="border-t border-border bg-muted py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Cómo trabajamos en{" "}
                <span className="text-primary">ALFA3</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {values.map(({ icon: Icon, title, desc }) => (
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

        {/* Stack tecnológico */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Tecnología que usamos{" "}
                <span className="text-primary">en cada proyecto</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                No improvisamos el stack. Usamos las mismas herramientas para todos nuestros
                clientes en Monterrey porque son las mejores disponibles hoy.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {[
                { name: "Next.js 15", desc: "Framework React" },
                { name: "React 19", desc: "UI Library" },
                { name: "TypeScript", desc: "Tipo seguro" },
                { name: "Tailwind CSS 4", desc: "Estilos modernos" },
                { name: "Vercel / Netlify", desc: "Deploy global" },
                { name: "MercadoPago", desc: "Pagos México" },
                { name: "Stripe", desc: "Pagos internacionales" },
                { name: "Google Analytics 4", desc: "Analytics" },
              ].map(({ name, desc }) => (
                <div key={name} className="rounded-xl border border-border bg-card p-4">
                  <span className="block font-mono text-sm font-bold text-primary">{name}</span>
                  <span className="text-xs text-muted-foreground">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-muted py-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-3xl font-extrabold text-foreground">
              Trabajemos juntos en{" "}
              <span className="text-primary">tu proyecto</span>
            </h2>
            <p className="mx-auto mt-4 text-muted-foreground">
              Cuéntanos sobre tu negocio en Monterrey. Sin tecnicismos, sin formularios largos:
              solo una plática directa para ver cómo podemos ayudarte.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="/portafolio"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-secondary"
              >
                Ver portafolio
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
              >
                <MessageCircle className="h-4 w-4" />
                Platiquemos
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
