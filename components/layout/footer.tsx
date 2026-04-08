"use client"

import Image from "next/image"
import { MapPin, Mail, Clock } from "lucide-react"

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "¿Cómo lo hacemos?", href: "#como-lo-hacemos" },
  { label: "Precios", href: "#precios" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "FAQ", href: "#preguntas-frecuentes" },
]

const WHATSAPP_URL =
  "https://wa.me/1234567890?text=Hola%20ALFA3%2C%20quiero%20dominar%20mi%20mercado%20digital"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-[#000000] text-[#9ca3af]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

          {/* Logo + Descripción + NAP */}
          <div className="flex flex-col gap-5 md:items-start">
            <a href="#inicio">
              <Image
                src="/original texto blanco.png"
                alt="ALFA3 — Agencia de diseño web en Monterrey"
                width={160}
                height={48}
                sizes="160px"
                className="h-10 w-auto"
              />
            </a>
            <p className="max-w-xs text-sm leading-relaxed">
              Agencia de diseño y desarrollo web en Monterrey, Nuevo León.
              Transformamos ideas en soluciones digitales de alto impacto.
            </p>

            {/* NAP — Name / Address / Phone */}
            <address className="not-italic flex flex-col gap-2 text-xs leading-relaxed">
              <span className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                <span>Monterrey, Nuevo León, México</span>
              </span>
              <span className="flex items-center gap-2">
                {/* TODO: reemplazar con número real */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Contactar por WhatsApp"
                >
                  WhatsApp: +52 81 XXXX XXXX
                </a>
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                {/* TODO: reemplazar con email real */}
                <a
                  href="mailto:hola@alfatres.com"
                  className="hover:text-white transition-colors"
                >
                  hola@alfatres.com
                </a>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                <span>Lun – Vie, 9:00 – 18:00 CST</span>
              </span>
            </address>
          </div>

          {/* Navegación */}
          <nav
            className="flex flex-col gap-3 md:items-center"
            aria-label="Footer navigation"
          >
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-white/40">
              Navegación
            </p>
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

          {/* Zonas de servicio */}
          <div className="flex flex-col gap-3 md:items-end">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-white/40">
              Zona de servicio
            </p>
            <ul className="flex flex-col gap-1.5 text-sm md:items-end">
              {[
                "Monterrey",
                "San Pedro Garza García",
                "Guadalupe",
                "Apodaca",
                "San Nicolás de los Garza",
                "Santa Catarina",
                "García",
                "Escobedo",
              ].map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-[#1e293b]" />

        {/* Copyright + Redes */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-xs sm:flex-row">
          <p>&copy; {currentYear} ALFA3. Todos los derechos reservados.</p>
          {/* TODO: reemplazar con URLs reales de redes sociales */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/alfatres.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
              aria-label="ALFA3 en Instagram"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/alfa3"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
              aria-label="ALFA3 en LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/alfatres"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
              aria-label="ALFA3 en Facebook"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
