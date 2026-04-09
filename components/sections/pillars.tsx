import { Code2, Paintbrush, Brain } from "lucide-react"

const pillars = [
  {
    step: "01",
    icon: Code2,
    label: "PROGRAMACIÓN",
    title: "Código limpio y escalable",
    description: "Desde la compra del dominio y hosting, hasta la programación con las mejores tecnologías: Next.js, React, TypeScript. Nada genérico.",
    bgColor: "bg-primary",
    textColor: "text-primary-foreground",
  },
  {
    step: "02",
    icon: Paintbrush,
    label: "DISEÑO WEB",
    title: "Experiencias que convierten",
    description: "Estructura comercial, desarrollo de contenido y diseño UI/UX acorde a tu mercado. Cada pixel pensado para maximizar conversiones.",
    bgColor: "bg-foreground",
    textColor: "text-background",
  },
  {
    step: "03",
    icon: Brain,
    label: "INTELIGENCIA ARTIFICIAL",
    title: "IA integrada a tu negocio",
    description: "Chatbots inteligentes, automatización de procesos y análisis predictivo. IA desde el inicio, no como accesorio de último momento.",
    bgColor: "bg-gradient-to-br from-[#1a1a2e] to-[#0f3460]",
    textColor: "text-white",
  },
]

export function Pillars() {
  return (
    <section id="como-lo-hacemos" className="relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="animate-fade-up mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
            {"// ¿Cómo lo hacemos?"}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Nos encargamos de <span className="text-primary">todo</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            No solo diseñamos páginas web. Creamos soluciones digitales completas que integran código, diseño e inteligencia artificial.
          </p>
        </div>

        {/* Cards + connector line */}
        <div className="relative">
          {/* Connecting line between cards — desktop only */}
          <div className="pointer-events-none absolute left-0 right-0 top-[52px] hidden h-px md:block" aria-hidden="true">
            <div className="mx-auto grid max-w-7xl grid-cols-3 px-6 lg:px-8">
              {[0, 1, 2].map((i) => (
                <div key={i} className="relative flex items-center justify-center">
                  {i < 2 && (
                    <div className="absolute left-1/2 top-0 h-px w-full border-t border-dashed border-border/60" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.label}
                  className={`group relative overflow-hidden rounded-2xl animate-fade-up ${pillar.bgColor} ${pillar.textColor} p-8 transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  {/* Decorative circles */}
                  <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-150" />
                  <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-white/5" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </div>

                    {/* Label */}
                    <span className="mb-2 block font-mono text-[11px] font-bold tracking-widest opacity-60">
                      {pillar.label}
                    </span>

                    {/* Title */}
                    <h3 className="mb-3 text-xl font-extrabold leading-tight">{pillar.title}</h3>

                    {/* Divider */}
                    <div className="mb-4 h-px w-10 bg-current opacity-20 transition-all duration-500 group-hover:w-20 group-hover:opacity-40" />

                    {/* Description */}
                    <p className="text-sm leading-relaxed opacity-80">{pillar.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
