import { Heart, MessageSquare, Layers } from "lucide-react"

const reasons = [
  {
    icon: Heart,
    title: "Nacimos para ti",
    description: "ALFA3 nació de una necesidad real: emprendedores y pequeñas empresas que merecían presencia digital profesional, sin tecnicismos ni presupuestos de corporativo.",
  },
  {
    icon: MessageSquare,
    title: "Hablamos tu idioma",
    description: "Primero entendemos tu negocio, luego aplicamos la tecnología que necesita. Sin términos raros, sin reuniones interminables. Solo soluciones claras.",
  },
  {
    icon: Layers,
    title: "A tu escala",
    description: "Cada proyecto se diseña según las necesidades reales de tu empresa. Sin paquetes genéricos, sin costos ocultos, sin promesas vacías.",
  },
]

export function Why() {
  return (
    <section id="por-que-alfa3" className="relative py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: `radial-gradient(circle, #438bff 1px, transparent 1px)`, backgroundSize: "40px 40px" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">

          <div className="animate-fade-up">
            <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
              {"// ¿Por qué ALFA3?"}
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance leading-[1.1]">
              Tecnología al servicio{" "}<span className="text-primary">de tu negocio en Monterrey,</span>{" "}no al revés.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              ALFA3 es una agencia de desarrollo web local en Monterrey, Nuevo León. Nacimos porque los emprendedores y las pequeñas empresas merecen soluciones digitales reales — sin tecnicismos que confunden, sin agencias que no entienden el negocio y sin presupuestos pensados para corporativos.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
              Somos el equipo que habla tu idioma, entiende tus objetivos y los convierte en resultados medibles.
            </p>
            <div className="mt-8 h-1 w-16 rounded-full bg-primary" />
          </div>

          <div className="flex flex-col gap-8">
            {reasons.map((reason, i) => {
              const Icon = reason.icon
              return (
                <div
                  key={reason.title}
                  className="group flex gap-5 animate-fade-up"
                  style={{ animationDelay: `${150 + i * 150}ms` }}
                >
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1.5 text-lg font-extrabold text-foreground">{reason.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
