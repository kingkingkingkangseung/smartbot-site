function Header({ onLogoClick, onCompanyClick, onMenuClick }) {
  const handleMenuClick = (menu) => {
    if (menu.id === "company") {
      onCompanyClick()
      return
    }

    onMenuClick(menu.id)
  }

  const menus = [
    { label: "회사소개", id: "company" },
    { label: "로봇제품", id: "business" },
    { label: "사업소개", id: "business" },
    { label: "홍보센터", id: "overview" },
    { label: "고객지원", id: "contact" },
  ]

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#1e4696]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <button
          type="button"
          onClick={onLogoClick}
          className="text-2xl font-bold text-white"
        >
          Sbot
        </button>

        <nav>
          <ul className="flex items-center gap-8 text-sm font-medium text-white">
            {menus.map((menu) => (
              <li key={menu.label}>
                <button
                  type="button"
                  onClick={() => handleMenuClick(menu)}
                  className="cursor-pointer transition hover:text-blue-200"
                >
                  {menu.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 text-sm font-semibold text-white">
          <button>KR</button>
          <span className="opacity-50">|</span>
          <button className="opacity-70 hover:opacity-100">EN</button>
        </div>
      </div>
    </header>
  )
}

export default Header
