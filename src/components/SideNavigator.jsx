function SideNavigator({ activeSection }) {
  const moveToSection = (id) => {
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  const sections = [
    { id: "overview", label: "OVERVIEW" },
    { id: "business", label: "BUSINESS" },
    { id: "contact", label: "CONTACT" },
  ]

  return (
    <div className="fixed right-8 top-1/2 z-50 hidden -translate-y-1/2 lg:flex">
      <div className="flex flex-col items-center rounded-[40px] bg-[#c9ccd4] px-5 py-6 shadow-xl">
        {sections.map((section, index) => {
          const isActive = activeSection === section.id

          return (
            <button
              key={section.id}
              onClick={() => moveToSection(section.id)}
              className={`writing-mode-vertical mb-6 flex items-center justify-center rounded-full text-sm font-semibold transition ${
                isActive
                  ? "bg-white px-4 py-6 text-[#111827]"
                  : "px-4 py-2 text-white/80 hover:text-white"
              }`}
            >
              {section.label}
            </button>
          )
        })}

        <div className="mt-2 h-16 w-px bg-white/60"></div>
        <span className="mt-4 text-sm font-medium text-white">SCROLL</span>
      </div>
    </div>
  )
}

export default SideNavigator
