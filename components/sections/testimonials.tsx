"use client"

import { Star, Quote } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const testimonials = [
  {
    quote:
      "ALFA3 transformó nuestra presencia digital. Las consultas en línea crecieron un 40% en los primeros tres meses. El proceso fue transparente y el equipo siempre disponible.",
    author: "Carlos Martínez",
    role: "Director General",
    company: "MedCenter Pro",
    initials: "CM",
  },
  {
    quote:
      "Teníamos una página anticuada que espantaba clientes. ALFA3 nos entregó un sitio que carga rapidísimo, se ve increíble en celular y ya nos genera leads solos. Inversión que valió la pena.",
    author: "Ana González",
    role: "Gerente de Marketing",
    company: "Constructora Regio",
    initials: "AG",
  },
  {
    quote:
      "Profesionales de verdad. Entendieron nuestra marca desde el primer día y lo tradujeron en una experiencia digital de primera. Nuestros clientes siempre nos preguntan quién hizo la página.",
    author: "Roberto Sánchez",
    role: "Fundador",
    company: "Despacho Legal NL",
    initials: "RS",
  },
]

const stats = [
  { value: "+50", label: "Proyectos entregados" },
  { value: "< 7 días", label: "Entrega promedio" },
  { value: "100%", label: "Clientes satisfechos" },
  { value: "99.9%", label: "Uptime garantizado" },
]

export function Testimonials() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="testimonios" className="relative overflow-hidden bg-muted py-24 lg:py-32" ref={ref}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, #438bff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
            {"// Clientes"}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            La experiencia hace{" "}
            <span className="text-primary">la diferencia</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Esto dicen los negocios de Monterrey que ya confían en ALFA3
            para su presencia digital.
          </p>
        </div>

        {/* Stats */}
        <div
          className={`mb-16 grid grid-cols-2 gap-6 sm:grid-cols-4 transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="text-3xl font-extrabold text-primary lg:text-4xl">{stat.value}</span>
              <span className="mt-1 text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className={`relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-700 hover:border-primary/30 hover:shadow-lg ${
                inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 150 + 300}ms` }}
            >
              <Quote className="mb-4 h-8 w-8 text-primary/20" />

              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-mono text-sm font-bold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.author}</p>
                  <p className="font-mono text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
