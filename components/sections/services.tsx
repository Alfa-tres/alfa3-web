"use client"

import { useRef, useState } from "react"
import {
  Globe, Paintbrush, Search, ShoppingCart, Bot, BarChart3,
  Layers, Smartphone, Gauge, RefreshCw, Shield,
} from "lucide-react"

const services = [
  { icon: Globe, title: "Desarrollo Web", description: "Sitios modernos y rápidos que generan confianza desde el primer clic. Código a la medida, no plantillas genéricas." },
  { icon: Paintbrush, title: "Diseño UI/UX", description: "Interfaces pensadas para convertir. Cada botón, color y espacio tiene una razón estratégica." },
  { icon: Search, title: "SEO & Posicionamiento", description: "Aparece primero en Google cuando tu cliente ideal te busca. SEO técnico y de contenido." },
  { icon: ShoppingCart, title: "Tienda en Línea", description: "Vende las 24 horas. Catálogo, carrito y pagos integrados con experiencia de compra optimizada." },
  { icon: Bot, title: "Automatización con IA", description: "Chatbots y flujos inteligentes que atienden, califican y convierten prospectos sin intervención humana." },
  { icon: BarChart3, title: "Analytics & Reportes", description: "Conoce exactamente de dónde vienen tus clientes y qué los convierte. Decisiones con datos reales." },
  { icon: Layers, title: "Apps a la Medida", description: "Portales de clientes, cotizadores y dashboards que se adaptan a tus procesos únicos de negocio." },
  { icon: Smartphone, title: "Diseño Responsivo", description: "Perfecto en celular, tablet y desktop. Más del 70% de tus clientes entran desde el móvil." },
  { icon: Gauge, title: "Velocidad & Performance", description: "Un sitio lento pierde clientes antes de que lean tu propuesta. Cargamos en menos de 2 segundos." },
  { icon: RefreshCw, title: "Rediseño Web", description: "Modernizamos tu sitio sin perder tu identidad ni el SEO que ya acumulaste." },
  { icon: Shield, title: "Seguridad & Mantenimiento", description: "Backups automáticos, actualizaciones y monitoreo continuo. Tu web siempre arriba y protegida." },
]

const CARD_WIDTH = 360
const GAP = 24

export function Services() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef({ x: 0, scrollLeft: 0 })

  const onMouseDown = (e: React.MouseEvent) => {
    const track = trackRef.current
    if (!track) return
    setIsDragging(true)
    dragStart.current = { x: e.pageX, scrollLeft: track.scrollLeft }
    track.style.cursor = "grabbing"
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const track = trackRef.current
    if (!track) return
    e.preventDefault()
    const delta = (e.pageX - dragStart.current.x) * 1.5
    track.scrollLeft = dragStart.current.scrollLeft - delta
  }

  const onDragEnd = () => {
    setIsDragging(false)
    if (trackRef.current) trackRef.current.style.cursor = "grab"
  }

  return (
    <section id="servicios" className="relative overflow-hidden py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: `radial-gradient(circle, #438bff 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="animate-fade-up mb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
            {"// Nuestros Servicios"}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl text-balance">
            Todo lo que tu negocio{" "}<span className="text-primary">necesita para dominar en Monterrey</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Desde el diseño hasta la automatización con IA — cubrimos cada aspecto de tu presencia digital en Monterrey, Nuevo León y todo México.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div
          ref={trackRef}
          className="flex select-none overflow-x-scroll py-6 scrollbar-hide"
          style={{ gap: GAP, paddingLeft: 48, paddingRight: 48, cursor: "grab", scrollBehavior: "auto" }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
        >
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="group relative flex shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 animate-fade-up transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/8 hover:-translate-y-2"
                style={{ width: CARD_WIDTH, animationDelay: `${i * 60}ms` }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-primary/6 via-transparent to-transparent" />
                <div className="relative z-10 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="mb-3 text-xl font-bold text-card-foreground leading-tight">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-4 text-center">
        <span className="font-mono text-xs text-muted-foreground/40">arrastra para explorar</span>
      </div>
    </section>
  )
}
