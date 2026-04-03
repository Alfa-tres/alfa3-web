"use client"

import { Target, Smartphone, Building2, ShoppingCart } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const pageTypes = [
  {
    icon: Target,
    title: "Landing Page",
    description:
      "Página de aterrizaje optimizada para una acción concreta: captar leads, promocionar un producto o generar conversiones directas. Rápida, enfocada y efectiva.",
    features: ["Formulario de contacto", "Diseño de conversión", "A/B Testing ready"],
  },
  {
    icon: Smartphone,
    title: "One Page",
    description:
      "Toda la información de tu empresa en una experiencia vertical moderna. Emula el comportamiento de navegación móvil. Ideal por su practicidad y rapidez.",
    features: ["Navegación fluida", "Mobile-first", "Carga ultra rápida"],
  },
  {
    icon: Building2,
    title: "Sitio Empresarial",
    description:
      "Para empresas que necesitan múltiples secciones, catálogos, blog, y más. Diseño responsive y profesional que se adapta a cualquier dispositivo.",
    features: ["Multi-página", "Blog/Noticias", "Panel administrable"],
  },
  {
    icon: ShoppingCart,
    title: "Tienda en Línea",
    description:
      "E-commerce funcional con pasarelas de pago integradas (Stripe, PayPal, Conekta). Catálogos auto-administrables y experiencia de compra optimizada.",
    features: ["Pagos integrados", "Inventario", "Auto-administrable"],
  },
]

export function Types() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="tipos-de-paginas" className="relative py-24 lg:py-32" ref={ref}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #438bff 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
            {"// Tipos de páginas"}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            ¿Qué tipo de página <span className="text-primary">necesitas</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Cada negocio es diferente. Elige el tipo de página que mejor se adapte
            a tus objetivos y nosotros la hacemos realidad.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {pageTypes.map((type, i) => {
            const Icon = type.icon
            return (
              <div
                key={type.title}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-700 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-primary/5 via-transparent to-transparent" aria-hidden="true" />
                <div className="relative z-10">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary/15 group-hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-extrabold text-card-foreground">{type.title}</h3>
                  </div>
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{type.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {type.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-[11px] font-medium text-primary transition-colors group-hover:border-primary/30 group-hover:bg-primary/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
