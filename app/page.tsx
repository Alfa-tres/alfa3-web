import { Navbar } from "@/components/alfa3/navbar"
import { Hero } from "@/components/alfa3/hero"
import { Services } from "@/components/alfa3/services"
import { Strategy } from "@/components/alfa3/strategy"
import { Footer } from "@/components/alfa3/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Strategy />
      <Footer />
    </main>
  )
}
