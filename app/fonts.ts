/**
 * Fuentes locales Grift cargadas vía next/font/local.
 * Genera un CSS variable (--font-grift) y optimiza entrega:
 *  - Preload automático en cada ruta que la usa
 *  - size-adjust para reducir CLS
 *  - Inlineado en el CSS de la página (sin request extra)
 */
import localFont from "next/font/local"

export const grift = localFont({
  src: [
    { path: "./fonts/Grift-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Grift-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Grift-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Grift-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Grift-ExtraBold.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-grift",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  preload: true,
})
