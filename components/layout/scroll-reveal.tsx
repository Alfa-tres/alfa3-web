"use client"

import { useEffect } from "react"

export function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const delay = parseInt(el.dataset.delay ?? "0", 10)
          setTimeout(() => {
            el.classList.add("is-visible")
          }, delay)
          observer.unobserve(el)
        })
      },
      { threshold: 0.1 }
    )

    document
      .querySelectorAll<HTMLElement>("[data-reveal]")
      .forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
