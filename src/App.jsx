import { useEffect, useRef, useState } from "react"
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
  const mainRef = useRef(null)

  const scrollToSection = (id, behavior = "smooth") => {
    const main = mainRef.current
    const target = document.getElementById(id)

    if (main && id === "overview") {
      main.scrollTo({ top: 0, behavior })
      return
    }

    if (target) {
      target.scrollIntoView({ behavior, block: "start" })
    }
  }

  const moveToSection = (id) => {
    setCurrentView("home")
    setActiveSection(id)
    sessionStorage.removeItem("pendingHomeSection")

    requestAnimationFrame(() => {
      scrollToSection(id)
    })
  }

  const openCompanyPage = () => {
    sessionStorage.removeItem("pendingHomeSection")
    setCurrentView("company")
    window.location.hash = "company"
  }

  const openHomePage = () => {
    sessionStorage.setItem("pendingHomeSection", "overview")
    window.location.assign(window.location.pathname)
  }

  const navigateFromCompanyToSection = (id) => {
    sessionStorage.setItem("pendingHomeSection", id)
    window.location.assign(window.location.pathname)
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
      const isCompany = window.location.hash === "#company"
      setCurrentView(isCompany ? "company" : "home")

      if (!isCompany) {
        const pendingSection =
          sessionStorage.getItem("pendingHomeSection") || "overview"

        setActiveSection(pendingSection)

        requestAnimationFrame(() => {
          scrollToSection(pendingSection, "auto")
          sessionStorage.removeItem("pendingHomeSection")
        })
      }
    }

    window.addEventListener("hashchange", syncViewWithUrl)
    syncViewWithUrl()

    return () => {
      window.removeEventListener("hashchange", syncViewWithUrl)
    }
  }, [])

  if (currentView === "company") {
    return (
      <CompanyOverviewPage
        onNavigateHome={openHomePage}
        onNavigateSection={navigateFromCompanyToSection}
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

      <main
        ref={mainRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      >
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
