"use client"

import { MessageCircle, ArrowDown, MapPin, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FloatingParticles } from "@/components/sections/particles"

const WHATSAPP_URL =
  "https://wa.me/1234567890?text=Hola%20ALFA3%2C%20quiero%20dominar%20mi%20mercado%20digital"

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #438bff 1px, transparent 1px),
            linear-gradient(to bottom, #438bff 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-secondary/40 via-background to-background dark:from-primary/5 dark:via-background dark:to-background" aria-hidden="true" />

      {/* Radial glow behind headline */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" aria-hidden="true" />

      <FloatingParticles />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-[0px] pb-32 lg:px-8 lg:py-40">
        <div className="flex flex-col items-center text-center">

          {/* H1 SEO — visible y con keyword geo */}
          <h1
            className="animate-fade-up mb-4 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2"
            style={{ animationDelay: "0s" }}
          >
            <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
            <span className="font-mono text-xs font-medium text-primary">
              Agencia de Diseño Web en Monterrey, Nuevo León
            </span>
          </h1>

          {/* Gancho creativo — H2 visual */}
          <h2
            className="animate-fade-up font-extrabold leading-[1.1] tracking-tight text-[clamp(2rem,6vw,5rem)]"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-foreground">Tu marca no necesita una web.</span>
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Necesita DOMINAR.
              <span className="animate-blink ml-2 inline-block h-[0.8em] w-[4px] translate-y-[0.05em] bg-primary" />
            </span>
          </h2>

          {/* Subtext */}
          <p
            className="animate-fade-up mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            No sitios genéricos — experiencias que convierten en Monterrey y todo Nuevo León.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              asChild
              size="lg"
              className="h-14 gap-2 bg-primary px-8 text-base text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/40"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Quiero dominar mi mercado
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="h-14 gap-2 border-border px-8 text-base text-foreground transition-all hover:border-primary/30 hover:bg-secondary"
            >
              <a href="#la-diferencia">
                <ArrowDown className="h-4 w-4" />
                Ver la transformación
              </a>
            </Button>
          </div>

          {/* Social proof */}
          <div
            className="animate-fade-up mt-10 flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-5 py-2.5"
            style={{ animationDelay: "0.45s" }}
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="font-mono text-xs text-primary">
              +50 negocios ya lo lograron
            </span>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <ArrowDown className="h-5 w-5 text-muted-foreground/40" />
      </div>
    </section>
  )
}
