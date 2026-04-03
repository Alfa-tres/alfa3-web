"use client"

import { MessageCircle, Mail, ArrowRight, Clock, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

const WHATSAPP_URL =
  "https://wa.me/1234567890?text=Hola%20ALFA3%2C%20quiero%20cotizar%20mi%20proyecto%20web"

// ⚠️ Actualiza estos números con los reales de ALFA3
const stats = [
  { value: "+50", label: "Proyectos entregados" },
  { value: "100%", label: "Satisfacción de clientes" },
  { value: "< 7 días", label: "Tiempo de entrega" },
]

const guarantees = [
  { icon: Shield, text: "Sin compromiso" },
  { icon: Zap, text: "Cotización gratuita" },
  { icon: Clock, text: "Respuesta en 24H" },
]

export function Cta() {
  const { ref, inView } = useInView(0.1)

  return (
    <section className="relative overflow-hidden py-24 lg:py-32" ref={ref}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #438bff 1px, transparent 1px),
            linear-gradient(to bottom, #438bff 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Glowing orb */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[140px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">

        {/* Urgency badge — 24H */}
        <div
          className={`mb-8 flex justify-center transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
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

        {/* Headline — gancho de urgencia */}
        <h2
          className={`text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Tu próximo cliente{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ya te está buscando.
          </span>
        </h2>

        {/* Sub — cierra el gancho */}
        <p
          className={`mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          No lo dejes encontrar a tu competencia primero.
          Hablemos hoy y definamos cómo vas a dominar tu mercado.
        </p>

        {/* Trust stats */}
        <div
          className={`my-10 flex flex-wrap items-center justify-center gap-8 transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-3xl font-extrabold text-primary">{stat.value}</span>
              <span className="mt-1 text-xs text-muted-foreground">{stat.label}</span>
              {i < stats.length - 1 && (
                <div className="hidden h-8 w-px bg-border lg:absolute lg:block" style={{ left: `${(i + 1) * 33}%` }} />
              )}
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          className={`flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <Button
            asChild
            size="lg"
            className="gap-2 bg-primary text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/40 text-base px-8 py-6 group"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Cotizar ahora por WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-border text-foreground transition-all hover:bg-secondary hover:border-primary/30 text-base px-8 py-6"
          >
            <a href="mailto:hola@alfa3.dev">
              <Mail className="h-5 w-5" />
              hola@alfa3.dev
            </a>
          </Button>
        </div>

        {/* Guarantee pills */}
        <div
          className={`mt-8 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
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
