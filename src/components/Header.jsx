function Header() {
  const menus = ["회사소개", "로봇제품", "사업소개", "홍보센터", "고객지원"]

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#1e4696]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <div className="text-2xl font-bold text-white">Sbot</div>

        <nav>
          <ul className="flex items-center gap-8 text-sm font-medium text-white">
            {menus.map((menu) => (
              <li key={menu} className="cursor-pointer transition hover:text-blue-200">
                {menu}
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