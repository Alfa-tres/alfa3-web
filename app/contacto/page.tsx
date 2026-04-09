import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { JsonLd } from "@/components/seo/json-ld"
import { buildBreadcrumbJsonLd } from "@/lib/service-schemas"
import { SEO } from "@/lib/seo"
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: { absolute: "Contacto — Cotiza tu Web en Monterrey | ALFA3" },
  description:
    "Contacta a ALFA3, agencia de diseño web en Monterrey, Nuevo León. WhatsApp, correo o formulario. Respondemos en menos de 24 horas. Cotización gratuita.",
  alternates: { canonical: `${SEO.siteUrl}/contacto` },
  openGraph: {
    title: "Contacto — Cotiza tu Web en Monterrey | ALFA3",
    description: "Contáctanos para cotizar tu sitio web en Monterrey. Respondemos en menos de 24 horas.",
    url: `${SEO.siteUrl}/contacto`,
  },
}

const breadcrumb = buildBreadcrumbJsonLd([
  { name: "Inicio", href: "/" },
  { name: "Contacto", href: "/contacto" },
])

const WHATSAPP_URL =
  "https://wa.me/1234567890?text=Hola%20ALFA3%2C%20quiero%20una%20cotización"

const services = [
  "Diseño web en Monterrey",
  "Desarrollo web con Next.js",
  "Tienda en línea (e-commerce)",
  "Landing page para campañas",
  "SEO y posicionamiento",
  "Rediseño de sitio actual",
]

export default function ContactoPage() {
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
                <li className="text-primary">Contacto</li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
                {"// Hablemos"}
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
                Cotiza tu sitio web en{" "}
                <span className="text-primary">Monterrey</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Platícanos de tu proyecto. Sin formularios eternos ni tecnicismos.
                Te enviamos una propuesta personalizada en menos de 24 horas — sin costo y sin compromiso.
              </p>
            </div>
          </div>
        </section>

        {/* Contenido principal */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              {/* Canales de contacto */}
              <div>
                <h2 className="text-2xl font-extrabold text-foreground">
                  Contáctanos directamente
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  La manera más rápida de iniciar es por WhatsApp. Respondemos normalmente
                  en menos de 2 horas durante horario de oficina.
                </p>

                <div className="mt-8 flex flex-col gap-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block font-extrabold text-card-foreground">WhatsApp</span>
                      <span className="text-sm text-muted-foreground">
                        La forma más rápida — respuesta en &lt; 2 horas
                      </span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${SEO.contact.email}`}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block font-extrabold text-card-foreground">Correo electrónico</span>
                      <span className="text-sm text-primary">{SEO.contact.email}</span>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block font-extrabold text-card-foreground">Ubicación</span>
                      <span className="text-sm text-muted-foreground">
                        Monterrey, Nuevo León, México — operamos de forma remota y presencial
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block font-extrabold text-card-foreground">Horario de atención</span>
                      <span className="text-sm text-muted-foreground">
                        Lunes a viernes, 9:00 a 18:00 (hora Monterrey, CST)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Servicios disponibles */}
                <div className="mt-10">
                  <h3 className="mb-4 font-extrabold text-foreground">¿En qué podemos ayudarte?</h3>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {services.map((s) => (
                      <div key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Proceso de cotización */}
              <div>
                <h2 className="text-2xl font-extrabold text-foreground">
                  ¿Cómo funciona el proceso?
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Desde que nos contactas hasta que recibes tu propuesta, así se ve el camino:
                </p>

                <div className="mt-8 flex flex-col gap-4">
                  {[
                    {
                      step: "01",
                      title: "Nos contactas",
                      desc: "Por WhatsApp, correo o el formulario. Cuéntanos brevemente de tu negocio en Monterrey y qué necesitas.",
                    },
                    {
                      step: "02",
                      title: "Llamada de diagnóstico",
                      desc: "30 minutos donde entendemos tus objetivos, tu competencia y el alcance del proyecto. Sin costo.",
                    },
                    {
                      step: "03",
                      title: "Propuesta personalizada",
                      desc: "En menos de 24 horas te enviamos alcance detallado, cronograma y precio fijo — sin sorpresas.",
                    },
                    {
                      step: "04",
                      title: "Inicio del proyecto",
                      desc: "Al aprobar la propuesta, firmamos contrato digital y comenzamos. 50% de anticipo, 50% al lanzar.",
                    },
                  ].map(({ step, title, desc }) => (
                    <div key={step} className="flex gap-4">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-xs font-bold text-primary">
                        {step}
                      </span>
                      <div>
                        <h3 className="font-extrabold text-foreground">{title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:bg-primary/90"
                >
                  <MessageCircle className="h-5 w-5" />
                  Iniciar cotización
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
