"use client"

import { useEffect, useRef, useState } from "react"
import { Search, PenTool, Code2, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Analisis & Diagnostico",
    description:
      "Evaluamos tu presencia digital actual, identificamos oportunidades y definimos objetivos claros para tu proyecto.",
    tags: [],
  },
  {
    number: "02",
    icon: PenTool,
    title: "Diseno Estrategico",
    description:
      "Creamos wireframes, prototipos y disenos UI/UX alineados con tu marca y las mejores practicas de conversion.",
    tags: [],
  },
  {
    number: "03",
    icon: Code2,
    title: "Desarrollo con IA & Mejores Practicas",
    description:
      "Implementamos tu proyecto con tecnologia de punta, inteligencia artificial y metodologias agiles.",
    tags: ["AI Copilots", "CI/CD", "Testing", "Docker", "Vercel"],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lanzamiento & Evolucion",
    description:
      "Desplegamos tu proyecto, monitoreamos su rendimiento y lo evolucionamos continuamente para maximizar resultados.",
    tags: [],
  },
]

const stats = [
  { value: "+50", label: "Proyectos" },
  { value: "99.9%", label: "Tiempo de Actividad" },
  { value: "98%", label: "Satisfaccion" },
]

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

export function Strategy() {
  const { ref: sectionRef, inView } = useInView(0.15)

  return (
    <section
      id="estrategia"
      className="relative overflow-hidden bg-muted py-24 lg:py-32"
      ref={sectionRef}
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
            {"// Nuestra Estrategia"}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl text-balance">
            Un proceso probado para resultados reales
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Cada proyecto sigue una metodologia clara que garantiza calidad,
            transparencia y resultados medibles.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (Desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block" aria-hidden="true" />

          <div className="flex flex-col gap-12 md:gap-16">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isLeft = i % 2 === 0

              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col items-center gap-6 md:flex-row ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } transition-all duration-700 ${
                    inView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
                    <div
                      className={`rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md ${
                        isLeft ? "md:ml-auto md:mr-8" : "md:mr-auto md:ml-8"
                      } max-w-md`}
                    >
                      <div className={`flex items-center gap-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-bold text-card-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                      {step.tags.length > 0 && (
                        <div className={`mt-4 flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                          {step.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 font-mono text-[11px] font-medium text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                    <span className="font-mono text-sm font-bold">{step.number}</span>
                  </div>

                  {/* Spacer (opposite side) */}
                  <div className="hidden flex-1 md:block" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats */}
        <div
          className={`mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3 transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
            >
              <div className="text-4xl font-extrabold text-primary md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
