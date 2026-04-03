"use client"

import { useRef, useState, useEffect } from "react"
import { Zap, TrendingUp, MousePointer2, Compass, RefreshCw } from "lucide-react"

const items = [
  {
    metric: "< 2s",
    icon: Zap,
    title: "Velocidad que Convierte",
    description:
      "Los primeros 3 segundos deciden si un cliente se queda o se va. Construimos sitios que cargan en menos de 2 segundos y convierten desde el primer clic.",
    colSpan: "lg:col-span-2",
    featured: true,
  },
  {
    metric: "24/7",
    icon: TrendingUp,
    title: "Tu Web Como Activo",
    description:
      "Una página web no es un gasto. Es el vendedor más rentable que tendrás: trabaja sin parar, no pide vacaciones y escala sin contratar más personal.",
    colSpan: "lg:col-span-1",
    featured: false,
  },
  {
    metric: "→",
    icon: MousePointer2,
    title: "Diseño que Vende",
    description:
      "No basta con verse bien. Cada sección, cada botón y cada llamada a acción está diseñada para guiar a tu visitante hacia una conversión. Sin decoración vacía.",
    colSpan: "lg:col-span-1",
    featured: false,
  },
  {
    metric: "01",
    icon: Compass,
    title: "Estrategia antes que Diseño",
    description:
      "Antes de escribir una línea de código, entendemos tu mercado, tu competencia y tus objetivos. Cada decisión tiene una razón estratégica detrás.",
    colSpan: "lg:col-span-2",
    featured: false,
  },
  {
    metric: "∞",
    icon: RefreshCw,
    title: "Soporte que Permanece",
    description:
      "El lanzamiento es solo el inicio. Monitoreamos, ajustamos y mejoramos tu sitio continuamente para que siga generando resultados mes a mes.",
    colSpan: "lg:col-span-3",
    featured: false,
    wide: true,
  },
]

function BentoCard({
  item,
  index,
}: {
  item: (typeof items)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Icon = item.icon

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-700 ${item.colSpan} ${
        item.featured
          ? "border-primary/30 bg-primary/5"
          : "border-border bg-card"
      } ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-primary/8 via-transparent to-transparent" aria-hidden="true" />

      <div className={`relative z-10 flex h-full flex-col justify-between p-8 ${item.wide ? "lg:flex-row lg:items-center lg:gap-16" : ""}`}>
        {/* Top: metric + icon */}
        <div className={`flex items-start justify-between ${item.wide ? "lg:flex-col lg:gap-4" : "mb-8"}`}>
          <span
            className={`font-black leading-none tabular-nums transition-colors duration-300 group-hover:text-primary ${
              item.featured ? "text-primary" : "text-foreground/10"
            }`}
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            aria-hidden="true"
          >
            {item.metric}
          </span>
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 ${
            item.featured
              ? "bg-primary/15 text-primary group-hover:bg-primary/25"
              : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
          }`}>
            <Icon className="h-5 w-5" />
          </div>
        </div>

        {/* Bottom: text */}
        <div className={item.wide ? "lg:max-w-2xl" : ""}>
          <h3 className="mb-2 text-lg font-extrabold leading-tight text-foreground">
            {item.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Features() {
  return (
    <section id="por-que-funciona" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
            {"// Por qué funciona"}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            No hacemos páginas web.{" "}
            <span className="text-primary">Creamos resultados.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <BentoCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
