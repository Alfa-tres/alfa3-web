import { ImageResponse } from "next/og"

export const runtime = "nodejs"
export const alt = "ALFA3 — Agencia de Diseño y Desarrollo Web en Monterrey, Nuevo León"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Nota: Satori (el engine de next/og) no soporta WOFF2. Usamos las fuentes
// del sistema — Satori mapea "system-ui" a sus fuentes built-in automáticamente.
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid background sutil */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.06,
            backgroundImage:
              "linear-gradient(to right, #438bff 1px, transparent 1px), linear-gradient(to bottom, #438bff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            width: 800,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(67,139,255,0.15) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Contenido principal */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            position: "relative",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(67,139,255,0.1)",
              border: "1px solid rgba(67,139,255,0.25)",
              borderRadius: 9999,
              padding: "6px 18px",
              marginBottom: 8,
            }}
          >
            <span
              style={{
                fontSize: 16,
                color: "#438bff",
                letterSpacing: 2,
              }}
            >
              // Monterrey, Nuevo León • México
            </span>
          </div>

          {/* Logo text */}
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: -2,
              lineHeight: 1,
            }}
          >
            <span>ALFA</span>
            <span style={{ color: "#438bff" }}>3</span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 400,
              color: "#9ca3af",
              marginTop: 8,
              textAlign: "center",
            }}
          >
            Diseño y Desarrollo Web que Domina tu Mercado
          </div>

          {/* Línea de servicios */}
          <div
            style={{
              display: "flex",
              gap: 24,
              marginTop: 24,
            }}
          >
            {["Páginas Web", "E-commerce", "SEO", "Inteligencia Artificial"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    fontSize: 16,
                    color: "#438bff",
                    background: "rgba(67,139,255,0.08)",
                    border: "1px solid rgba(67,139,255,0.2)",
                    borderRadius: 8,
                    padding: "6px 14px",
                  }}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        {/* URL en la parte inferior */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            fontSize: 18,
            color: "#4a5568",
            letterSpacing: 1,
          }}
        >
          www.alfatres.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
