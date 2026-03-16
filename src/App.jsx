import { useEffect, useState } from "react"
import Header from "./components/Header"
import HeroSlider from "./components/HeroSlider"
import CompanyOverviewPage from "./components/CompanyOverviewPage"
import BusinessSection from "./components/BusinessSection"
import ContactSection from "./components/ContactSection"
import SideNavigator from "./components/SideNavigator"

function App() {
  const [activeSection, setActiveSection] = useState("overview")
  const [currentView, setCurrentView] = useState(() =>
    window.location.hash === "#company" ? "company" : "home"
  )

  const moveToSection = (id) => {
    setCurrentView("home")

    requestAnimationFrame(() => {
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    })
  }

  const openCompanyPage = () => {
    setCurrentView("company")
    window.history.pushState(null, "", "#company")
  }

  const openHomePage = () => {
    setCurrentView("home")
    window.history.pushState(null, "", window.location.pathname)
  }

  useEffect(() => {
    if (currentView !== "home") {
      return undefined
    }

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
  }, [currentView])

  useEffect(() => {
    const syncViewWithUrl = () => {
      setCurrentView(window.location.hash === "#company" ? "company" : "home")
    }

    window.addEventListener("popstate", syncViewWithUrl)

    return () => {
      window.removeEventListener("popstate", syncViewWithUrl)
    }
  }, [])

  if (currentView === "company") {
    return (
      <CompanyOverviewPage
        onNavigateHome={openHomePage}
        onNavigateSection={moveToSection}
      />
    )
  }

  return (
    <div className="relative h-screen overflow-hidden bg-white text-gray-900">
      <Header
        onLogoClick={openHomePage}
        onCompanyClick={openCompanyPage}
        onMenuClick={moveToSection}
      />
      <SideNavigator activeSection={activeSection} />

      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section
          id="overview"
          data-section="overview"
          className="h-screen snap-start"
        >
          <HeroSlider onCompanyClick={openCompanyPage} />
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
