import { Search, PenTool, Code2, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    label: "FASE 1",
    title: "Análisis & Diagnóstico",
    description: "Evaluamos tu presencia digital, identificamos a tu competencia y definimos objetivos claros. Sin suposiciones — todo con datos.",
  },
  {
    number: "02",
    icon: PenTool,
    label: "FASE 2",
    title: "Diseño Estratégico",
    description: "Wireframes, prototipos y diseño UI/UX alineados con tu marca. Cada decisión visual tiene un propósito de conversión.",
  },
  {
    number: "03",
    icon: Code2,
    label: "FASE 3",
    title: "Desarrollo con IA",
    description: "Código a la medida con las mejores tecnologías del mercado. Inteligencia artificial integrada desde el inicio, no como parche.",
  },
  {
    number: "04",
    icon: Rocket,
    label: "FASE 4",
    title: "Lanzamiento & Evolución",
    description: "Publicamos, monitoreamos y mejoramos continuamente. Tu web no es un proyecto terminado — es un activo que crece contigo.",
  },
]

export function Strategy() {
  return (
    <section id="estrategia" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="animate-fade-up mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
            {"// Nuestra Estrategia"}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Un proceso probado para{" "}<span className="text-primary">resultados reales</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Cuatro fases que convierten tu idea en una máquina de captar clientes. Sin improvisación, sin sorpresas.
          </p>
        </div>

        <div className="divide-y divide-border">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="group grid grid-cols-1 gap-6 py-10 animate-fade-up lg:grid-cols-[140px_1fr_1fr] lg:gap-12 lg:py-14"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="flex items-start lg:justify-end">
                  <span
                    className="font-black leading-none text-foreground/[0.07] transition-colors duration-500 group-hover:text-primary/20 select-none"
                    style={{ fontSize: "clamp(4rem, 7vw, 6.5rem)" }}
                    aria-hidden="true"
                  >{step.number}</span>
                </div>

                <div className="flex flex-col justify-center gap-4 lg:border-l lg:border-border lg:pl-10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="mb-1 block font-mono text-[11px] font-bold tracking-widest text-primary">{step.label}</span>
                    <h3 className="text-2xl font-extrabold leading-tight text-foreground lg:text-3xl">{step.title}</h3>
                  </div>
                  <div className="h-0.5 w-10 bg-primary/30 transition-all duration-500 group-hover:w-20 group-hover:bg-primary" />
                </div>

                <div className="flex items-center lg:pl-4">
                  <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
