"use client"

import { useInView } from "@/hooks/use-in-view"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const faqItems = [
  {
    question: "¿Cuánto cuesta una página web en Monterrey?",
    answer:
      "En ALFA3 manejamos distintos planes según las necesidades de tu negocio: Landing Page desde $4,900 MXN, One Page desde $7,900 MXN, Sitio Empresarial desde $15,900 MXN y E-commerce desde $6,900 MXN/mes. Todos son precios únicos (excepto e-commerce) sin costos ocultos. El precio final depende de funcionalidades específicas — te damos una cotización exacta en menos de 24 horas.",
  },
  {
    question: "¿En cuánto tiempo desarrollan un sitio web?",
    answer:
      "Una Landing Page se entrega en 5 a 7 días hábiles. Un sitio One Page entre 7 y 14 días. Un sitio Empresarial entre 2 y 4 semanas dependiendo del contenido y las revisiones. Trabajamos con entregas por etapas para que puedas ver el avance desde el principio.",
  },
  {
    question: "¿Atienden a empresas en toda Nuevo León?",
    answer:
      "Sí. Aunque tenemos presencia en Monterrey, atendemos a empresas de todo el área metropolitana: San Pedro Garza García, Guadalupe, Apodaca, San Nicolás de los Garza, Santa Catarina, García, Escobedo, Juárez y municipios aledaños. También trabajamos con clientes fuera de Nuevo León en todo México.",
  },
  {
    question: "¿Usan WordPress o hacen desarrollo a medida?",
    answer:
      "Hacemos desarrollo a medida con tecnologías modernas como Next.js y React — no usamos plantillas ni WordPress genérico. Esto nos permite entregas más rápidas (LCP < 2 segundos), mejor SEO técnico y sitios que escalan con tu negocio. El resultado es una web que convierte, no solo una que se ve bien.",
  },
  {
    question: "¿Mi sitio va a aparecer en Google?",
    answer:
      "Cada sitio que desarrollamos incluye optimización SEO técnica básica: estructura de URLs, metadatos, Open Graph, velocidad de carga y etiquetas de encabezado. Para negocios en Monterrey y Nuevo León, también configuramos el perfil de Google Business, el sitemap y las señales de SEO local. Los paquetes con SEO avanzado incluyen estrategia de keywords, linkbuilding y reportes mensuales.",
  },
  {
    question: "¿Qué incluye el mantenimiento mensual?",
    answer:
      "El mantenimiento incluye actualizaciones de seguridad, backups automáticos, monitoreo de disponibilidad (uptime), correcciones de errores y hasta 2 horas de cambios de contenido al mes. También incluye reportes mensuales de rendimiento y Core Web Vitals. El costo varía según el plan — te lo cotizamos junto con el proyecto.",
  },
  {
    question: "¿Tienen experiencia con tiendas en línea (e-commerce)?",
    answer:
      "Sí. Desarrollamos e-commerce completo con catálogo de productos, carrito de compras, pasarela de pagos (MercadoPago, Stripe, PayPal), gestión de inventario y panel de administración. El plan de e-commerce es mensual e incluye soporte continuo para que siempre puedas vender sin interrupciones.",
  },
  {
    question: "¿Cómo es el proceso de trabajo y pago?",
    answer:
      "El proceso tiene 4 etapas: (1) Llamada de diagnóstico gratuita para entender tu negocio; (2) Propuesta con alcance, entregables y cronograma; (3) Desarrollo con entregas por etapas y tus revisiones; (4) Lanzamiento y capacitación. El pago se divide en 50% al inicio y 50% al lanzar. Para e-commerce es mensual.",
  },
  {
    question: "¿Pueden rediseñar mi sitio web actual?",
    answer:
      "Sí, hacemos rediseños modernizando tu sitio sin perder la identidad de marca ni el SEO acumulado. Auditamos tu web actual, identificamos oportunidades de mejora en velocidad, diseño y conversión, y construimos la nueva versión en paralelo para que no pierdas tráfico durante el proceso.",
  },
  {
    question: "¿Incluye dominio y hosting?",
    answer:
      "El dominio (.com, .com.mx, .mx) y el hosting van por separado del costo de desarrollo. Te asesoramos para elegir el proveedor más adecuado según tu proyecto y presupuesto, y lo configuramos todo nosotros. En el plan de e-commerce, el hosting ya está incluido en la mensualidad.",
  },
]

export function FAQ() {
  const { ref, inView } = useInView(0.05)

  return (
    <section id="preguntas-frecuentes" className="relative py-24 lg:py-32" ref={ref}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, #438bff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <div
          className={`mb-14 text-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
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
              href="https://wa.me/1234567890?text=Hola%20ALFA3%2C%20tengo%20una%20pregunta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              escríbenos por WhatsApp
            </a>
            .
          </p>
        </div>

        <div
          className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
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
