function Header({ onLogoClick, onCompanyClick, onMenuClick }) {
  const handleMenuClick = (menu) => {
    if (menu.id === "company") {
      onCompanyClick("overview")
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
              <li
                key={menu.label}
                className={menu.id === "company" ? "group relative" : ""}
              >
                {menu.id === "company" ? (
                  <>
                    <button
                      type="button"
                      onClick={() => onCompanyClick("overview")}
                      className="cursor-pointer transition hover:text-blue-200"
                    >
                      {menu.label}
                    </button>
                    <div className="absolute left-1/2 top-full z-30 hidden -translate-x-1/2 pt-4 group-hover:block">
                      <div className="min-w-[180px] rounded-2xl border border-white/15 bg-[linear-gradient(180deg,rgba(10,35,95,0.98),rgba(18,58,143,0.92))] p-2 shadow-[0_20px_45px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                        <button
                          type="button"
                          onClick={() => onCompanyClick("overview")}
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-white transition hover:bg-white/10"
                        >
                          <span className="font-semibold">개요</span>
                          <span className="text-xs uppercase tracking-[0.24em] text-white/55">
                            About
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={() => onCompanyClick("vision")}
                          className="mt-1 flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-white transition hover:bg-white/10"
                        >
                          <span className="font-semibold">비전</span>
                          <span className="text-xs uppercase tracking-[0.24em] text-white/55">
                            Vision
                          </span>
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleMenuClick(menu)}
                    className="cursor-pointer transition hover:text-blue-200"
                  >
                    {menu.label}
                  </button>
                )}
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
