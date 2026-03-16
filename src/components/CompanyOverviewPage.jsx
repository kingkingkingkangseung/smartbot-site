function CompanyOverviewPage({ onNavigateHome, onNavigateSection }) {
  const menus = [
    { label: "회사소개", action: null },
    { label: "로봇제품", action: () => onNavigateSection("business") },
    { label: "사업소개", action: () => onNavigateSection("business") },
    { label: "홍보센터", action: () => onNavigateSection("overview") },
    { label: "고객지원", action: () => onNavigateSection("contact") },
  ]

  const points = [
    "2018년 창업 이래, 수년간의 축적된 기술로 오직 고객만을 위해 노력하고 있습니다.",
    "다양한 로봇과 전문적인 기술을 통해 최고 품질의 서비스를 제공합니다.",
    "고객의 입장에서 보고, 듣고, 생각하며. 고객 만족을 실현합니다.",
  ]

  return (
    <div className="min-h-screen overflow-y-auto bg-[radial-gradient(circle_at_top_left,_#2e45ff_0%,_#112590_32%,_#07134c_100%)] px-6 py-14 text-white lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[28px] border border-black bg-[#080808] p-4 shadow-[0_28px_80px_rgba(0,0,0,0.55)]">
          <div className="overflow-hidden rounded-[22px] bg-white">
            <div className="relative h-[270px] overflow-hidden bg-[linear-gradient(rgba(18,30,60,0.32),rgba(18,30,60,0.32)),url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center px-10 pb-8 pt-9">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.25))]" />

              <div className="relative z-10 flex items-center justify-between gap-8">
                <button
                  type="button"
                  onClick={onNavigateHome}
                  className="text-3xl font-extrabold text-white"
                >
                  Sbot
                </button>

                <nav className="hidden md:block">
                  <ul className="flex items-center gap-10 text-sm font-semibold text-white">
                    {menus.map((menu) => (
                      <li key={menu.label}>
                        <button
                          type="button"
                          onClick={menu.action ?? undefined}
                          className="transition hover:text-blue-200"
                        >
                          {menu.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="flex items-center gap-3 text-sm font-semibold text-white">
                  <button type="button">EN</button>
                  <button type="button" className="opacity-80">
                    KR
                  </button>
                </div>
              </div>

              <div className="relative z-10 flex h-full items-end justify-center pb-3">
                <h1 className="text-center text-4xl font-bold md:text-[3.2rem]">
                  회사 개요
                </h1>
              </div>
            </div>

            <div className="bg-white px-8 py-10 text-[#30343a] md:px-20 md:py-14">
              <h2 className="text-center text-[2rem] font-extrabold leading-[1.4] tracking-[-0.03em] text-[#333741] md:text-[3rem]">
                신뢰를 바탕으로 성장하는{" "}
                <span className="text-[#4ab5f2]">Sbot, 고객과 함께</span> 더 나은
                미래를 만들어갑니다.
              </h2>

              <p className="mt-10 text-center text-[1.25rem] font-semibold leading-[1.8] text-[#434850] md:text-[2rem]">
                <span className="font-extrabold">Sbot</span>은 기술로 연결하고,
                사람으로 완성하는 체계적인 시스템을 가진 회사입니다.
              </p>

              <ul className="mx-auto mt-14 max-w-4xl space-y-5 text-lg leading-8 text-[#3f444d] md:text-[1.05rem]">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-5">
                    <span className="pt-1 text-xl leading-none text-black">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto h-5 w-[92%] rounded-b-[999px] bg-[linear-gradient(180deg,#eef2f6_0%,#c7cdd5_100%)] shadow-[0_16px_30px_rgba(0,0,0,0.4)]" />
      </div>
    </div>
  )
}

export default CompanyOverviewPage
