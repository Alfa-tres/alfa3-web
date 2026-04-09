import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "ALFA",
    price: "4,900",
    period: "pago único",
    description: "El fundamento. Perfecto para lanzamientos rápidos y captación de leads.",
    features: ["Diseño personalizado", "Responsive (móvil y desktop)", "Formulario de contacto", "Optimización SEO básica", "Entrega en 5-7 días", "1 revisión incluida"],
    popular: false,
  },
  {
    name: "BETA",
    price: "7,900",
    period: "pago único",
    description: "La evolución. Tu empresa completa en una experiencia vertical moderna.",
    features: ["Todo lo de ALFA", "Hasta 5 secciones", "Animaciones y transiciones", "Integración WhatsApp", "Optimización de velocidad", "2 revisiones incluidas"],
    popular: true,
  },
  {
    name: "GAMMA",
    price: "15,900",
    period: "pago único",
    description: "La dominación. Sitio multi-página con presencia empresarial total.",
    features: ["Todo lo de BETA", "Hasta 8 páginas", "Blog / Noticias", "Panel administrable", "SEO avanzado", "3 revisiones incluidas"],
    popular: false,
  },
  {
    name: "DELTA",
    price: "6,900",
    period: "/ mes",
    description: "El siguiente paso. Tu tienda en línea operativa 24/7.",
    features: ["Catálogo de productos", "Pasarela de pagos", "Carrito de compras", "Gestión de inventario", "Panel de administración", "Soporte mensual incluido"],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="precios" className="relative overflow-hidden bg-muted py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="animate-fade-up mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
            {"// Inversión"}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Precios de páginas web en Monterrey{" "}<span className="text-primary">transparentes</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Sin letras chiquitas. Conoce nuestros planes en pesos mexicanos y elige el que mejor se adapte a las necesidades de tu negocio en Nuevo León.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-card animate-fade-up transition-shadow duration-500 hover:shadow-xl ${
                plan.popular ? "border-primary shadow-lg shadow-primary/10 scale-[1.02]" : "border-border hover:border-primary/30"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {plan.popular && (
                <div className="flex items-center justify-center gap-1.5 bg-primary px-4 py-2 text-primary-foreground">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <span className="font-mono text-xs font-bold tracking-wider">MÁS POPULAR</span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-extrabold text-card-foreground">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
                <div className="mt-6 mb-6">
                  <span className="text-sm text-muted-foreground">desde</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-foreground">${plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                </div>
                <ul className="flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground/60">
          * Los precios son en MXN y pueden variar según los requerimientos específicos de cada proyecto.
        </p>
      </div>
    </section>
  )
}
