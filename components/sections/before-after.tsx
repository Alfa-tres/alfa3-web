import { X, Check } from "lucide-react"

const painPoints = [
  { title: "Bonita pero invisible", desc: "Google no sabe que existes. Sin tráfico, sin clientes." },
  { title: "Gastaste y no recuperaste nada", desc: "Invertiste miles. El sitio no generó ni un lead." },
  { title: "Tu competencia te rebasa", desc: "Mientras tú dudas, ellos ya cerraron el trato." },
  { title: "Diseño genérico de fábrica", desc: "Igual a mil WordPress sin alma ni estrategia." },
  { title: "Sin ventas en línea", desc: "Tu web solo existe. No trabaja. No vende. No crece." },
]

const benefits = [
  { title: "Primero en Google", desc: "SEO + performance técnico desde el día 1." },
  { title: "ROI desde el mes 1", desc: "Código que convierte visitantes en clientes reales." },
  { title: "Superas a tu competencia", desc: "Tecnología de punta que los deja atrás." },
  { title: "Identidad única + IA", desc: "Diseño a la medida de tu marca y tu mercado." },
  { title: "Ventas en piloto automático", desc: "Tu web trabaja 24/7 aunque tú no estés." },
]

export function BeforeAfter() {
  return (
    <section id="la-diferencia" className="relative overflow-hidden py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: `radial-gradient(circle, #438bff 1px, transparent 1px)`, backgroundSize: "40px 40px" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="animate-fade-up mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
            {"// La diferencia ALFA3"}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            ¿En cuál de los <span className="text-primary">dos lados</span> estás?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            La línea entre un negocio invisible y uno que domina su mercado es una sola decisión.
          </p>
        </div>

        {/* Split card */}
        <div className="overflow-hidden rounded-2xl border border-border shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT — Sin ALFA3 */}
            <div className="animate-fade-up relative overflow-hidden bg-foreground p-8 lg:p-12">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,80,80,0.08),transparent_60%)]" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1">
                  <X className="h-3 w-3 text-red-400" />
                  <span className="font-mono text-xs font-bold text-red-400 tracking-widest">SIN ALFA3</span>
                </div>
                <h3 className="mb-8 text-2xl font-extrabold text-background/90 lg:text-3xl">
                  El problema<br /><span className="text-red-400">de hoy</span>
                </h3>
                <ul className="flex flex-col gap-5">
                  {painPoints.map((point, i) => (
                    <li
                      key={point.title}
                      className="animate-fade-up flex items-start gap-4"
                      style={{ animationDelay: `${100 + i * 80}ms` }}
                    >
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/15">
                        <X className="h-3.5 w-3.5 text-red-400" />
                      </div>
                      <div>
                        <p className="font-bold text-background/80 line-through decoration-red-400/60">{point.title}</p>
                        <p className="mt-0.5 text-sm text-background/40">{point.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT — Con ALFA3 */}
            <div className="animate-fade-up-delay-1 relative overflow-hidden bg-primary p-8 lg:p-12">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_60%)]" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/5" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/5" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1">
                  <Check className="h-3 w-3 text-white" />
                  <span className="font-mono text-xs font-bold text-white tracking-widest">CON ALFA3</span>
                </div>
                <h3 className="mb-8 text-2xl font-extrabold text-primary-foreground lg:text-3xl">
                  Tu negocio<br /><span className="opacity-80">transformado</span>
                </h3>
                <ul className="flex flex-col gap-5">
                  {benefits.map((benefit, i) => (
                    <li
                      key={benefit.title}
                      className="animate-fade-up flex items-start gap-4"
                      style={{ animationDelay: `${250 + i * 80}ms` }}
                    >
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15">
                        <Check className="h-3.5 w-3.5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-primary-foreground">{benefit.title}</p>
                        <p className="mt-0.5 text-sm text-primary-foreground/70">{benefit.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-border bg-card px-8 py-6 sm:flex-row">
            <p className="text-center text-sm text-muted-foreground sm:text-left">
              <span className="font-bold text-foreground">¿Estás en el lado izquierdo?</span>{" "}Nosotros te pasamos al derecho.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
