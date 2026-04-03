import { cn } from "@/lib/utils"

interface SectionProps {
  id?: string
  className?: string
  innerClassName?: string
  children: React.ReactNode
}

/**
 * Wrapper estándar para todas las secciones del sitio.
 * Garantiza padding vertical consistente y el ancho máximo centrado.
 *
 * Uso:
 *   <Section id="servicios" className="bg-muted">
 *     <SectionHeader ... />
 *     ...contenido...
 *   </Section>
 */
export function Section({ id, className, innerClassName, children }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-24 lg:py-32", className)}>
      <div className={cn("mx-auto max-w-7xl px-6 lg:px-8", innerClassName)}>
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  badge?: string
  title: React.ReactNode
  description?: string
  className?: string
}

/**
 * Cabecera de sección estándar: badge monoespaciado + título + descripción.
 */
export function SectionHeader({ badge, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-16 text-center", className)}>
      {badge && (
        <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 font-mono text-xs font-medium text-primary">
          {badge}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
