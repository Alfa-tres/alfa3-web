"use client"

import { Globe, Layers, Gauge, Paintbrush, Shield } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description:
      "Sitios web modernos, rápidos y optimizados para SEO. Desde landing pages hasta plataformas complejas con las últimas tecnologías.",
    tags: ["Next.js", "React", "SEO", "Responsive"],
  },
  {
    icon: Layers,
    title: "Aplicaciones Web a la Medida",
    description:
      "Soluciones digitales personalizadas que se adaptan a tus procesos de negocio. Sistemas escalables y mantenibles.",
    tags: ["SaaS", "Dashboards", "APIs", "Fullstack"],
  },
  {
    icon: Gauge,
    title: "Optimización & Performance",
    description:
      "Mejoramos la velocidad y rendimiento de tu sitio web. Core Web Vitals, carga optimizada y experiencia de usuario superior.",
    tags: ["Core Web Vitals", "CDN", "Caching", "Speed"],
  },
  {
    icon: Paintbrush,
    title: "Rediseño Web",
    description:
      "Transformamos tu sitio web actual en una experiencia moderna y funcional. UI/UX actualizado con mejores prácticas.",
    tags: ["UI/UX", "Branding", "Conversión", "Moderno"],
  },
  {
    icon: Shield,
    title: "Seguridad Web",
    description:
      "Protección completa para tu sitio web. Auditorías de seguridad, certificados SSL, protección contra ataques y backups.",
    tags: ["SSL", "Firewall", "Auditorías", "Backups"],
  },
]

function ServiceCard({
  icon: Icon,
  title,
  description,
  tags,
}: (typeof services)[number]) {
  return (
    <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
      {/* Glow effect on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-primary/5 via-transparent to-transparent" aria-hidden="true" />

      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-lg font-bold text-card-foreground">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 font-mono text-[11px] font-medium text-primary transition-colors group-hover:border-primary/30 group-hover:bg-primary/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Services() {
  return (
    <section id="servicios" className="relative py-24 lg:py-32">
      {/* Background Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #438bff 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
            {"// Nuestros Servicios"}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl text-balance">
            Soluciones web de alto impacto
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Desarrollamos proyectos web que combinan diseño, tecnología de punta
            e inteligencia artificial para impulsar tu negocio.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div className="mt-6 hidden lg:grid lg:grid-cols-2 lg:gap-6 lg:max-w-4xl lg:mx-auto">
          {services.slice(3).map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mx-auto w-full max-w-sm sm:max-w-xl md:max-w-3xl"
          >
            <CarouselContent className="-ml-4">
              {services.map((service) => (
                <CarouselItem
                  key={service.title}
                  className="pl-4 basis-[85%] sm:basis-1/2"
                >
                  <ServiceCard {...service} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-3 bg-background text-foreground border-border hover:bg-secondary" />
            <CarouselNext className="-right-3 bg-background text-foreground border-border hover:bg-secondary" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
