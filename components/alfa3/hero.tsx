"use client"

import { MessageCircle, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TerminalSimulator } from "./terminal"
import { FloatingParticles } from "./particles"

const WHATSAPP_URL = "https://wa.me/1234567890?text=Hola%20ALFA3%2C%20me%20interesa%20sus%20servicios"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden py-20 lg:py-32"
    >
      {/* Grid Pattern Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #438bff 1px, transparent 1px),
            linear-gradient(to bottom, #438bff 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background dark:from-primary/5 dark:via-background dark:to-background" aria-hidden="true" />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Content — same grid as navbar */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left Side - Text */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Badge */}
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs font-medium text-primary">
              Agencia de Desarrollo Web
            </span>
          </div>

          <h1
            className="animate-fade-up text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.1s" }}
          >
            Transformamos ideas en{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {"codigo que impacta"}
            </span>
            <span className="animate-blink ml-1 inline-block h-[0.8em] w-[3px] translate-y-[0.05em] bg-primary" />
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: "0.2s" }}
          >
            Creamos experiencias digitales excepcionales con las mejores practicas
            de desarrollo e inteligencia artificial. Tu proyecto, nuestro codigo.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              asChild
              size="lg"
              className="gap-2 bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Hablemos por WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-border text-foreground transition-all hover:bg-secondary hover:border-primary/30"
            >
              <a href="#servicios">
                <ArrowDown className="h-4 w-4" />
                Ver servicios
              </a>
            </Button>
          </div>
        </div>

        {/* Right Side - Terminal */}
        <div
          className="animate-fade-up w-full"
          style={{ animationDelay: "0.4s" }}
        >
          <TerminalSimulator />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <ArrowDown className="h-5 w-5 text-muted-foreground/40" />
      </div>
    </section>
  )
}
