import { useState } from "react"

function CompanyOverviewPage({ onNavigateHome, onNavigateSection }) {
  const [activeTab, setActiveTab] = useState("overview")

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

  const visionItems = [
    { title: "Smart", desc: "효율적 일처리" },
    { title: "Skill", desc: "전문적인 기술" },
    { title: "Safety", desc: "철저한 안전" },
  ]

  const heroTitle = activeTab === "overview" ? "회사 개요" : "비전"

  return (
    <div className="min-h-screen overflow-y-auto bg-[#0f2f86] text-white">
      <div className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(7,21,67,0.82),rgba(7,21,67,0.5)),url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,21,56,0.28),rgba(8,21,56,0.55))]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-12 pt-10 lg:px-10">
          <div className="flex items-center justify-between gap-8">
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
                  <li
                    key={menu.label}
                    className={menu.label === "회사소개" ? "group relative" : ""}
                  >
                    {menu.label === "회사소개" ? (
                      <>
                        <button
                          type="button"
                          className="transition hover:text-blue-200"
                        >
                          {menu.label}
                        </button>
                        <div className="absolute left-1/2 top-full z-20 hidden min-w-[120px] -translate-x-1/2 pt-4 group-hover:block">
                          <div className="rounded-2xl border border-white/20 bg-[#123f9d]/95 p-2 shadow-2xl backdrop-blur">
                            <button
                              type="button"
                              onClick={() => setActiveTab("overview")}
                              className={`block w-full rounded-xl px-4 py-2 text-left text-sm transition ${
                                activeTab === "overview"
                                  ? "bg-white text-[#123f9d]"
                                  : "text-white hover:bg-white/10"
                              }`}
                            >
                              개요
                            </button>
                            <button
                              type="button"
                              onClick={() => setActiveTab("vision")}
                              className={`mt-1 block w-full rounded-xl px-4 py-2 text-left text-sm transition ${
                                activeTab === "vision"
                                  ? "bg-white text-[#123f9d]"
                                  : "text-white hover:bg-white/10"
                              }`}
                            >
                              비전
                            </button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <button
                        type="button"
                        onClick={menu.action ?? undefined}
                        className="transition hover:text-blue-200"
                      >
                        {menu.label}
                      </button>
                    )}
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

          <div className="flex h-[280px] items-end justify-center pb-6">
            <h1 className="text-center text-5xl font-bold tracking-tight md:text-6xl">
              {heroTitle}
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-white text-[#30343a]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          {activeTab === "overview" ? (
            <div className="mx-auto max-w-5xl">
              <h2 className="text-center text-[2rem] font-extrabold leading-[1.4] tracking-[-0.03em] text-[#333741] md:text-[3rem]">
                신뢰를 바탕으로 성장하는{" "}
                <span className="text-[#4ab5f2]">Sbot, 고객과 함께</span> 더 나은
                미래를 만들어갑니다.
              </h2>

              <p className="mt-10 text-center text-[1.3rem] font-semibold leading-[1.8] text-[#434850] md:text-[2.1rem]">
                <span className="font-extrabold">Sbot</span>은 기술로 연결하고,
                사람으로 완성하는 체계적인 시스템을 가진 회사입니다.
              </p>

              <ul className="mx-auto mt-14 max-w-4xl space-y-5 text-lg leading-8 text-[#3f444d]">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-5">
                    <span className="pt-1 text-xl leading-none text-black">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="text-[2rem] font-extrabold leading-tight text-[#242934] md:text-[3rem]">
                기술과 품질, 책임으로 완성하는 가업 (주)Sbot
              </h2>

              <p className="mx-auto mt-8 max-w-4xl text-xl font-semibold leading-10 text-[#2f343d]">
                (주)Sbot은 오랜 시간 축적해 온 기술력을 바탕으로 책임 있는 제품
                개발과 신뢰받는 품질을 최우선으로 합니다.
              </p>

              <p className="mx-auto mt-4 max-w-4xl text-xl font-semibold leading-10 text-[#2f343d]">
                고객에게 꼭 필요한 가치를 제공하며, 끝까지 책임지는 기업으로
                나아가겠습니다.
              </p>

              <div className="mx-auto mt-14 max-w-2xl space-y-6 text-left">
                {visionItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center justify-center gap-3 text-3xl font-extrabold"
                  >
                    <span className="min-w-[120px] text-right text-[#4a94e8]">
                      {item.title}
                    </span>
                    <span className="text-2xl font-bold text-[#232833]">
                      [{item.desc}]
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CompanyOverviewPage
