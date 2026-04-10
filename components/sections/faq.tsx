"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqItems } from "@/lib/faq-data"
import { buildWhatsAppUrl } from "@/lib/seo"

const WHATSAPP_URL = buildWhatsAppUrl("Hola ALFA3, tengo una pregunta")

export function FAQ() {
  return (
    <section id="preguntas-frecuentes" className="relative py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, #438bff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <div className="animate-fade-up mb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
            {"// Preguntas Frecuentes"}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl text-balance">
            Todo lo que necesitas{" "}
            <span className="text-primary">saber antes de empezar</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Respondemos las dudas más comunes sobre diseño web en Monterrey y Nuevo León.
            Si no encuentras tu pregunta,{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              escríbenos por WhatsApp
            </a>
            .
          </p>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "150ms" }}>
          <Accordion type="single" collapsible className="flex flex-col gap-2">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-border bg-card px-6 transition-colors hover:border-primary/30"
              >
                <AccordionTrigger className="py-5 text-left text-sm font-semibold text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
