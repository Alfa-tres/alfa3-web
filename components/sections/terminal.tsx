"use client"

import { useState, useCallback, useRef, useEffect } from "react"

const WHATSAPP_URL = "https://wa.me/1234567890?text=Hola%20ALFA3%2C%20me%20interesa%20sus%20servicios"

interface TerminalLine {
  type: "command" | "output" | "info" | "success" | "link"
  text: string
  href?: string
}

const commandResponses: Record<string, TerminalLine[]> = {
  "./servicios": [
    { type: "info", text: ">> Cargando servicios de ALFA3..." },
    { type: "output", text: "" },
    { type: "success", text: "[01] Desarrollo Web" },
    { type: "success", text: "[02] Aplicaciones Web a la Medida" },
    { type: "success", text: "[03] Optimización & Performance" },
    { type: "success", text: "[04] Rediseño Web" },
    { type: "success", text: "[05] Seguridad Web" },
    { type: "output", text: "" },
    { type: "info", text: '>> Escribe "./estrategia" para ver nuestro proceso' },
  ],
  "./estrategia": [
    { type: "info", text: ">> Cargando estrategia ALFA3..." },
    { type: "output", text: "" },
    { type: "success", text: "PASO 1: Análisis & Diagnóstico" },
    { type: "success", text: "PASO 2: Diseño Estratégico" },
    { type: "success", text: "PASO 3: Desarrollo con IA & Mejores Prácticas" },
    { type: "success", text: "PASO 4: Lanzamiento & Evolución" },
    { type: "output", text: "" },
    { type: "info", text: "+50 Proyectos | 99.9% Uptime | 98% Satisfacción" },
  ],
  "./contacto": [
    { type: "info", text: ">> Abriendo canal de comunicación..." },
    { type: "success", text: "Redirigiendo a WhatsApp..." },
    { type: "link", text: ">> Click aquí si no se redirige automáticamente", href: WHATSAPP_URL },
  ],
}

export function TerminalSimulator() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "info", text: "ALFA3 Development Console v3.0.0" },
    { type: "output", text: "Escribe un comando o haz click en los botones:" },
    { type: "output", text: "" },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const outputRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [lines, scrollToBottom])

  const executeCommand = useCallback(
    async (cmd: string) => {
      if (isTyping) return
      setIsTyping(true)

      setLines((prev) => [...prev, { type: "command", text: `alfa3@dev:~$ ${cmd}` }])

      const response = commandResponses[cmd]
      if (!response) {
        setLines((prev) => [
          ...prev,
          { type: "output", text: `Comando no reconocido: ${cmd}` },
        ])
        setIsTyping(false)
        return
      }

      if (cmd === "./contacto") {
        for (let i = 0; i < response.length; i++) {
          await new Promise((r) => setTimeout(r, 300))
          setLines((prev) => [...prev, response[i]])
        }
        setTimeout(() => {
          window.open(WHATSAPP_URL, "_blank")
        }, 800)
        setIsTyping(false)
        return
      }

      for (let i = 0; i < response.length; i++) {
        await new Promise((r) => setTimeout(r, 120))
        setLines((prev) => [...prev, response[i]])
      }

      setIsTyping(false)
    },
    [isTyping]
  )

  const commands = ["./servicios", "./estrategia", "./contacto"]

  return (
    <div className="w-full overflow-hidden rounded-xl border border-[#1e293b] bg-terminal shadow-2xl shadow-primary/10">
      {/* Title Bar */}
      <div className="flex items-center gap-2 border-b border-[#1e293b] bg-[#0a0f1e] px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-2 font-mono text-xs text-terminal-foreground/50">
          alfa3@dev:~/projects
        </span>
      </div>

      {/* Terminal Body */}
      <div ref={outputRef} className="h-[280px] overflow-y-auto px-4 py-3 md:h-[320px]">
        {lines.map((line, i) => (
          <div key={i} className="font-mono text-xs leading-relaxed md:text-sm">
            {line.type === "command" && (
              <span className="text-terminal-accent">
                <span className="text-[#28c840]">{">"}</span> {line.text}
              </span>
            )}
            {line.type === "output" && (
              <span className="text-terminal-foreground/70">{line.text || "\u00A0"}</span>
            )}
            {line.type === "info" && (
              <span className="text-terminal-accent">{line.text}</span>
            )}
            {line.type === "success" && (
              <span className="text-[#28c840]">{line.text}</span>
            )}
            {line.type === "link" && (
              <a
                href={line.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-accent underline hover:text-[#93c5fd]"
              >
                {line.text}
              </a>
            )}
          </div>
        ))}

        {/* Cursor */}
        <div className="flex items-center gap-1 font-mono text-xs md:text-sm">
          <span className="text-[#28c840]">{">"}</span>
          <span className="text-terminal-accent">{"alfa3@dev:~$"}</span>
          <span className="animate-blink ml-0.5 inline-block h-4 w-2 bg-terminal-accent" />
        </div>
      </div>

      {/* Command Buttons */}
      <div className="flex flex-wrap gap-2 border-t border-[#1e293b] bg-[#0a0f1e] px-4 py-3">
        {commands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            disabled={isTyping}
            className="rounded-md border border-terminal-accent/30 bg-terminal-accent/10 px-3 py-1.5 font-mono text-xs text-terminal-accent transition-all duration-200 hover:border-terminal-accent/60 hover:bg-terminal-accent/20 hover:shadow-[0_0_12px_rgba(59,130,246,0.2)] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  )
}
