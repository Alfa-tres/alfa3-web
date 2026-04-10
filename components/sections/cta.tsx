import { MessageCircle, Mail, ArrowRight, Clock, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SEO, buildWhatsAppUrl } from "@/lib/seo"

const WHATSAPP_URL = buildWhatsAppUrl(
  "Hola ALFA3, quiero cotizar mi proyecto web"
)

const stats = [
  { value: "+50", label: "Proyectos entregados" },
  { value: "100%", label: "Satisfacción de clientes" },
  { value: "< 7 días", label: "Tiempo de entrega" },
]

const guarantees = [
  { icon: Shield, text: "Maquetación sin compromiso" },
  { icon: Zap, text: "Cotización gratuita" },
  { icon: Clock, text: "Respuesta en 24H" },
]

export function Cta() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `linear-gradient(to right, #438bff 1px, transparent 1px), linear-gradient(to bottom, #438bff 1px, transparent 1px)`, backgroundSize: "40px 40px" }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[140px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">

        <div className="animate-fade-up mb-8 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
              <span className="font-mono text-xs font-extrabold leading-none">24H</span>
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-foreground">Respondemos en 24 horas</p>
              <p className="font-mono text-[10px] text-muted-foreground">tiempo máximo de respuesta garantizado</p>
            </div>
          </div>
        </div>

        <h2 className="animate-fade-up-delay-1 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Tu próximo cliente{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ya te está buscando.</span>
        </h2>

        <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          No lo dejes encontrar a tu competencia primero. Hablemos hoy y definamos cómo vas a dominar tu mercado.
        </p>


        <div className="animate-fade-up-delay-4 my-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="gap-2 bg-primary text-primary-foreground shadow-xl shadow-primary/30 hover:bg-primary/90 text-base px-8 py-6 group">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Cotizar ahora por WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-border text-foreground hover:bg-secondary hover:border-primary/30 text-base px-8 py-6">
            <a href={`mailto:${SEO.contact.email}`}>
              <Mail className="h-5 w-5" />
              {SEO.contact.email}
            </a>
          </Button>
        </div>

        <div className="animate-fade-up-delay-4 mt-8 flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: "0.5s" }}>
          {guarantees.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-1.5 text-sm text-muted-foreground/60">
              <Icon className="h-3.5 w-3.5 text-primary/50" />
              {text}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
