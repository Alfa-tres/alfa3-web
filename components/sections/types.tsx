"use client"

import { useState } from "react"
import { Target, Smartphone, Building2, ShoppingCart, Check, ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const pageTypes = [
  {
    number: "01",
    icon: Target,
    title: "Landing Page",
    tagline: "Una página, un objetivo.",
    description: "Ideal para campañas, lanzamientos y captar leads. Todo el foco en que el visitante haga una sola acción: contactarte, comprar o registrarse. Sin distracciones.",
    bullets: ["Estructura diseñada para convertir", "Un solo llamado a la acción (CTA)", "Carga en menos de 2 segundos", "Sin menús ni páginas que distraigan"],
    ideal: "Negocios que quieren resultados rápidos con inversión controlada.",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "One Page",
    tagline: "Tu empresa entera, en una sola vista.",
    description: "Presentas todo lo que ofreces en una experiencia fluida de scroll. Sin menús complicados ni páginas que se pierden. Moderno, rápido y directo al punto.",
    bullets: ["Navegación por scroll suave", "Secciones: Inicio, Servicios, Nosotros, Contacto", "Diseño mobile-first", "Experiencia visual cinematográfica"],
    ideal: "Profesionales, consultores y PyMEs que quieren una presencia digital completa.",
  },
  {
    number: "03",
    icon: Building2,
    title: "Sitio Empresarial",
    tagline: "Presencia digital completa y profesional.",
    description: "Para empresas que necesitan varias páginas: inicio, servicios, nosotros, contacto y blog. Administrable, robusto, pensado para crecer con tu negocio.",
    bullets: ["Arquitectura multi-página con menú", "Blog para posicionarte como experto", "Cada página optimizada para SEO", "Contenido editable sin tocar código"],
    ideal: "Empresas establecidas que necesitan comunicar todo lo que hacen.",
  },
  {
    number: "04",
    icon: ShoppingCart,
    title: "Tienda en Línea",
    tagline: "Vende las 24 horas, sin que estés presente.",
    description: "Tu catálogo, carrito y pagos funcionando solos. Gestiona productos, inventario y pedidos desde un panel simple. Sin complicaciones técnicas.",
    bullets: ["Checkout fluido y sin fricciones", "Catálogo organizado por categorías", "Pagos seguros en línea", "Notificaciones automáticas de pedidos"],
    ideal: "Negocios que quieren vender en línea con una tienda propia.",
  },
]

export function Types() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const { ref: headerRef, inView: headerVisible } = useInView(0.3)
  const { ref: bodyRef, inView: bodyVisible } = useInView(0.1)

  const handleSelect = (i: number) => {
    if (i === active) return
    setAnimating(true)
    setTimeout(() => {
      setActive(i)
      setAnimating(false)
    }, 200)
  }

  const current = pageTypes[active]
  const Icon = current.icon

  return (
    <section id="tipos-de-paginas" className="relative py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: `radial-gradient(circle, #438bff 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-16 text-center transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
            {"// Tipos de páginas"}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            ¿Qué tipo de página <span className="text-primary">necesitas</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Cada negocio es diferente. Elige el formato que mejor se adapte a tus objetivos.
          </p>
        </div>

        {/* Selector layout */}
        <div
          ref={bodyRef}
          className={`grid grid-cols-1 gap-4 transition-all duration-700 lg:grid-cols-[300px_1fr] lg:gap-8 ${bodyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >

          {/* Left — type selector */}
          <div className="flex flex-row gap-2 overflow-x-auto scrollbar-hide lg:flex-col lg:overflow-visible">
            {pageTypes.map((type, i) => {
              const TabIcon = type.icon
              const isActive = i === active
              return (
                <button
                  key={type.number}
                  onClick={() => handleSelect(i)}
                  className={`group flex shrink-0 items-center gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-300 lg:w-full ${
                    isActive
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-border bg-card hover:border-primary/30 hover:bg-muted/50"
                  }`}
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                    isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground group-hover:text-foreground"
                  }`}>
                    <TabIcon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className={`font-mono text-[10px] font-bold tracking-widest transition-colors duration-300 ${isActive ? "text-primary" : "text-muted-foreground/50"}`}>
                      {type.number}
                    </p>
                    <p className={`truncate text-sm font-bold transition-colors duration-300 ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                      {type.title}
                    </p>
                  </div>
                  {isActive && <ArrowRight className="ml-auto hidden h-4 w-4 shrink-0 text-primary lg:block" />}
                </button>
              )
            })}
          </div>

          {/* Right — detail panel */}
          <div className={`relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 ${animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>

            {/* Top accent */}
            <div className="h-1 w-full bg-gradient-to-r from-primary/60 via-primary to-accent/60" />

            <div className="p-8 lg:p-10">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-foreground lg:text-3xl">{current.title}</h3>
                    <p className="mt-0.5 text-sm font-medium text-muted-foreground">{current.tagline}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 h-px w-full bg-border" />

              <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                {current.description}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Bullets */}
                <div>
                  <p className="mb-3 font-mono text-[11px] font-bold tracking-widest text-primary">CARACTERÍSTICAS</p>
                  <ul className="flex flex-col gap-3">
                    {current.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3 text-sm text-foreground">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal for */}
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="mb-3 font-mono text-[11px] font-bold tracking-widest text-primary">IDEAL PARA</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{current.ideal}</p>
                  </div>

                  {/* Big number */}
                  <div
                    className="mt-6 select-none self-end font-black leading-none text-primary/10"
                    style={{ fontSize: "clamp(4rem, 8vw, 7rem)" }}
                    aria-hidden="true"
                  >
                    {current.number}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
