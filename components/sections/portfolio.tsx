"use client"

import { ExternalLink, Globe } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const projects = [
  { title: "MedCenter Pro", category: "Sitio Empresarial", description: "Clínica médica con sistema de citas y blog de salud", gradient: "from-[#438bff] to-[#2b6fdb]", tags: ["Next.js", "SEO", "Blog"] },
  { title: "AutoParts MTY", category: "E-commerce", description: "Tienda de autopartes con catálogo de +2,000 productos", gradient: "from-[#2b6fdb] to-[#1a4fa0]", tags: ["E-commerce", "Pagos", "Inventario"] },
  { title: "Constructora Regio", category: "Landing Page", description: "Landing de captación de leads para desarrollos inmobiliarios", gradient: "from-[#0f3460] to-[#1a1a2e]", tags: ["Landing", "CRM", "Conversión"] },
  { title: "Fitness Hub", category: "One Page", description: "Gimnasio con sistema de membresías y horarios en línea", gradient: "from-[#438bff] to-[#6aa8ff]", tags: ["One Page", "Responsive", "Booking"] },
  { title: "Despacho Legal NL", category: "Sitio Empresarial", description: "Despacho de abogados con portal de clientes y blog legal", gradient: "from-[#1a1a2e] to-[#438bff]", tags: ["Multi-página", "Portal", "CMS"] },
  { title: "Sabor Norteño", category: "Landing Page", description: "Restaurante con menú digital y reservaciones en línea", gradient: "from-[#2b6fdb] to-[#438bff]", tags: ["Landing", "Menú digital", "WhatsApp"] },
]

export function Portfolio() {
  const { ref, inView } = useInView(0.05)

  return (
    <section id="portafolio" className="relative py-24 lg:py-32" ref={ref}>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`mb-16 text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
            {"// Portafolio"}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Proyectos que <span className="text-primary">hablan por sí solos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Cada proyecto es una historia de colaboración. Aquí algunos de los sitios web que hemos creado para negocios en Monterrey y la región.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-700 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 bg-black/20 px-3 py-2 backdrop-blur-sm">
                  <div className="h-2 w-2 rounded-full bg-white/40" />
                  <div className="h-2 w-2 rounded-full bg-white/40" />
                  <div className="h-2 w-2 rounded-full bg-white/40" />
                  <div className="ml-2 flex-1 rounded-sm bg-white/10 px-2 py-0.5">
                    <span className="font-mono text-[9px] text-white/40">
                      https://{project.title.toLowerCase().replace(/\s/g, "")}.com
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pt-8 px-6">
                  <div className="h-3 w-20 rounded-sm bg-white/20" />
                  <div className="h-2 w-32 rounded-sm bg-white/15" />
                  <div className="mt-2 grid grid-cols-3 gap-2 w-full max-w-[160px]">
                    <div className="h-8 rounded-sm bg-white/10" />
                    <div className="h-8 rounded-sm bg-white/10" />
                    <div className="h-8 rounded-sm bg-white/10" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                    <ExternalLink className="h-4 w-4 text-white" />
                    <span className="text-sm font-medium text-white">Ver proyecto</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="mb-1 flex items-center gap-2">
                  <Globe className="h-3.5 w-3.5 text-primary" />
                  <span className="font-mono text-[11px] font-medium text-primary">{project.category}</span>
                </div>
                <h3 className="mb-1 text-lg font-bold text-card-foreground">{project.title}</h3>
                <p className="mb-3 text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-primary/15 bg-primary/5 px-2 py-0.5 font-mono text-[10px] font-medium text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
