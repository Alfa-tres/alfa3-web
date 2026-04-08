"use client"

import Image from "next/image"

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "¿Cómo lo hacemos?", href: "#como-lo-hacemos" },
  { label: "Precios", href: "#precios" },
  { label: "Portafolio", href: "#portafolio" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#000000] text-[#9ca3af]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          {/* Logo + Description */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <a href="#inicio">
              <Image
                src="/alfa3-logo-light.png"
                alt="ALFA3 — Agencia de diseño web en Monterrey"
                width={160}
                height={48}
                sizes="160px"
                className="h-10 w-auto"
              />
            </a>
            <p className="max-w-xs text-center text-sm leading-relaxed md:text-left">
              Transformamos ideas en soluciones digitales de alto impacto con
              tecnología de vanguardia.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side — branding */}
          <div className="flex flex-col items-center gap-2 md:items-end">
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-[#1e293b]" />

        {/* Copyright */}
        <div className="text-center text-xs">
          <p>&copy; 2026 ALFA3. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
