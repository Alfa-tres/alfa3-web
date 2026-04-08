import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { JsonLd } from "@/components/seo/json-ld"
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/service-schemas"
import { SEO } from "@/lib/seo"
import { Check, MessageCircle, ShoppingCart, CreditCard, Package, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "Tiendas en Línea en Monterrey — Vende 24/7 en Nuevo León",
  description:
    "Desarrollo de tiendas en línea profesionales en Monterrey, Nuevo León. E-commerce con catálogo, carrito, pagos y gestión de inventario. Desde $6,900 MXN/mes con soporte incluido.",
  alternates: { canonical: `${SEO.siteUrl}/servicios/tiendas-en-linea-monterrey` },
  openGraph: {
    title: "Tiendas en Línea en Monterrey | ALFA3",
    description: "E-commerce profesional en Monterrey. Catálogo, pagos, inventario. Vende 24/7 desde $6,900 MXN/mes.",
    url: `${SEO.siteUrl}/servicios/tiendas-en-linea-monterrey`,
  },
}

const WHATSAPP_URL =
  "https://wa.me/1234567890?text=Hola%20ALFA3%2C%20quiero%20una%20tienda%20en%20línea"

const schemas = [
  buildServiceJsonLd({
    name: "Tiendas en Línea en Monterrey",
    description:
      "Desarrollo de tiendas en línea profesionales en Monterrey, Nuevo León. E-commerce completo con catálogo, carrito, pasarela de pagos, gestión de inventario y soporte mensual.",
    url: `${SEO.siteUrl}/servicios/tiendas-en-linea-monterrey`,
    price: "6900",
  }),
  buildBreadcrumbJsonLd([
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Tiendas en Línea Monterrey", href: "/servicios/tiendas-en-linea-monterrey" },
  ]),
]

export default function TiendasEnLineaPage() {
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
                <li className="text-primary">Tiendas en Línea</li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
                {"// E-commerce"}
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
                Tiendas en Línea en{" "}
                <span className="text-primary">Monterrey</span>{" "}
                — Vende las 24 Horas
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Tu tienda en línea para Monterrey, Nuevo León y todo México — operativa 24/7.
                Catálogo de productos, carrito de compras, pasarelas de pago (MercadoPago, Stripe, PayPal)
                y gestión de inventario en un solo panel. Todo incluido desde{" "}
                <strong className="text-foreground">$6,900 MXN/mes</strong> con soporte continuo.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:bg-primary/90"
              >
                <MessageCircle className="h-5 w-5" />
                Quiero mi tienda en línea
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Todo lo que necesita <span className="text-primary">tu tienda en línea</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: ShoppingCart, title: "Catálogo completo", desc: "Productos con fotos, variantes, precios y descripciones optimizadas para SEO." },
                { icon: CreditCard, title: "Pasarela de pagos", desc: "MercadoPago, Stripe y PayPal. Tus clientes pagan con tarjeta, transferencia o OXXO." },
                { icon: Package, title: "Gestión de inventario", desc: "Control de stock automático. Alertas de agotamiento y registro de ventas en tiempo real." },
                { icon: BarChart3, title: "Panel de admin", desc: "Gestiona pedidos, clientes y productos desde un solo lugar, sin necesitar a un técnico." },
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

        {/* Incluye */}
        <section className="border-t border-border bg-muted py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-extrabold text-foreground">
                  Plan <span className="text-primary">DELTA</span> — E-commerce completo
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  El plan DELTA es mensual e incluye todo lo necesario para que tu tienda en línea
                  opere, venda y crezca sin interrupciones. Sin inversión inicial elevada.
                </p>
                <div className="mt-6">
                  <span className="text-4xl font-extrabold text-foreground">$6,900</span>
                  <span className="ml-2 text-muted-foreground">MXN / mes</span>
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  "Catálogo ilimitado de productos",
                  "Pasarela de pagos configurada (MercadoPago + Stripe)",
                  "Carrito de compras y checkout optimizado",
                  "Gestión de inventario y alertas de stock",
                  "Panel de administración para ti",
                  "Diseño responsivo mobile-first",
                  "SEO básico para tus productos",
                  "Soporte técnico mensual incluido",
                  "Actualizaciones de seguridad",
                  "Hosting incluido en la mensualidad",
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
            <h2 className="text-3xl font-extrabold text-foreground">
              Empieza a vender en Monterrey <span className="text-primary">este mes</span>
            </h2>
            <p className="mx-auto mt-4 text-muted-foreground">
              El proceso de desarrollo dura entre 2 y 4 semanas. Al lanzar, tu tienda
              ya está lista para recibir pedidos de Monterrey, Nuevo León y todo México.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:bg-primary/90"
            >
              <MessageCircle className="h-5 w-5" />
              Quiero mi tienda en línea
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
