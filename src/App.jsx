import { useEffect, useState } from "react"
import Header from "./components/Header"
import HeroSlider from "./components/HeroSlider"
import CompanyOverviewSection from "./components/CompanyOverviewSection"
import BusinessSection from "./components/BusinessSection"
import ContactSection from "./components/ContactSection"
import SideNavigator from "./components/SideNavigator"

function App() {
  const [activeSection, setActiveSection] = useState("overview")

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-section]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.dataset.section)
          }
        })
      },
      {
        threshold: 0.6,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <div className="relative h-screen overflow-hidden bg-white text-gray-900">
      <Header />
      <SideNavigator activeSection={activeSection} />

      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section
          id="overview"
          data-section="overview"
          className="h-screen snap-start"
        >
          <HeroSlider />
        </section>

        <section
          id="company"
          data-section="company"
          className="min-h-screen snap-start"
        >
          <CompanyOverviewSection />
        </section>

        <section
          id="business"
          data-section="business"
          className="h-screen snap-start"
        >
          <BusinessSection />
        </section>

        <section
          id="contact"
          data-section="contact"
          className="h-screen snap-start"
        >
          <ContactSection />
        </section>
      </main>
    </div>
  )
}

export default App
