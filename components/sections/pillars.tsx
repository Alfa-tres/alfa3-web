"use client"

import { Code2, Paintbrush, Brain } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const pillars = [
  {
    icon: Code2,
    label: "PROGRAMACIÓN",
    title: "Código limpio y escalable",
    description:
      "Desde la compra e instalación del dominio, configuración del hosting, hasta la programación web con las mejores tecnologías: Next.js, React, TypeScript.",
    bgColor: "bg-primary",
    textColor: "text-primary-foreground",
  },
  {
    icon: Paintbrush,
    label: "DISEÑO WEB",
    title: "Experiencias que convierten",
    description:
      "Estructura comercial, desarrollo de contenido y diseño web acorde a tu mercado meta. UI/UX pensado para maximizar conversiones.",
    bgColor: "bg-foreground",
    textColor: "text-background",
  },
  {
    icon: Brain,
    label: "INTELIGENCIA ARTIFICIAL",
    title: "IA integrada a tu negocio",
    description:
      "Automatización de procesos, chatbots inteligentes, análisis predictivo y optimización continua con las herramientas de IA más avanzadas.",
    bgColor: "bg-gradient-to-br from-[#1a1a2e] to-[#0f3460]",
    textColor: "text-white",
  },
]

export function Pillars() {
  const { ref, inView } = useInView(0.15)

  return (
    <section id="como-lo-hacemos" className="relative py-24 lg:py-32" ref={ref}>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
            {"// ¿Cómo lo hacemos?"}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Nos encargamos de <span className="text-primary">todo</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            No solo diseñamos páginas web. Creamos soluciones digitales completas
            que integran código, diseño e inteligencia artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.label}
                className={`group relative overflow-hidden rounded-2xl ${pillar.bgColor} ${pillar.textColor} p-8 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-150" />
                <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-white/5" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="mb-2 block font-mono text-[11px] font-bold tracking-widest opacity-70">
                    {pillar.label}
                  </span>
                  <h3 className="mb-3 text-xl font-extrabold leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-85">
                    {pillar.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
