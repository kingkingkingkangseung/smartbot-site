function CompanyOverviewSection() {
  const points = [
    "2018년 창업 이래, 수년간의 축적된 기술로 오직 고객만을 위해 노력하고 있습니다.",
    "다양한 로봇과 전문적인 기술을 통해 최고 품질의 서비스를 제공합니다.",
    "고객의 입장에서 보고, 듣고, 생각하며. 고객 만족을 실현합니다.",
  ]

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_#2f4cff_0%,_#102080_38%,_#07104b_100%)] px-6 py-28 text-white lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,_rgba(0,0,0,0.5),_transparent_38%)]" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="rounded-[2rem] border border-black/70 bg-[#101010] p-4 shadow-[0_28px_60px_rgba(0,0,0,0.45)] lg:p-5">
          <div className="overflow-hidden rounded-[1.6rem] bg-white">
            <div className="relative h-[250px] bg-[linear-gradient(135deg,rgba(15,23,42,0.15),rgba(15,23,42,0.5)),linear-gradient(135deg,#5cb9ff_0%,#0f4f7f_35%,#022042_100%)] px-10 pt-10">
              <div className="absolute inset-0 opacity-80">
                <div className="absolute -left-8 bottom-0 h-[80%] w-[24%] origin-bottom skew-x-[-16deg] rounded-t-[2rem] border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))]" />
                <div className="absolute left-[18%] bottom-0 h-[62%] w-[18%] origin-bottom skew-x-[-14deg] rounded-t-[2rem] border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))]" />
                <div className="absolute left-[32%] bottom-0 h-[96%] w-[18%] origin-bottom skew-x-[-12deg] rounded-t-[2rem] border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.05))]" />
                <div className="absolute left-[47%] bottom-0 h-[84%] w-[18%] origin-bottom skew-x-[-10deg] rounded-t-[2rem] border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.05))]" />
                <div className="absolute right-[14%] bottom-0 h-[100%] w-[20%] origin-bottom skew-x-[-14deg] rounded-t-[2rem] border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.06))]" />
                <div className="absolute -right-10 bottom-0 h-[75%] w-[24%] origin-bottom skew-x-[-18deg] rounded-t-[2rem] border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))]" />
              </div>

              <div className="relative z-10 flex items-center justify-between text-white">
                <div className="text-3xl font-extrabold">Sbot</div>

                <nav className="hidden md:block">
                  <ul className="flex items-center gap-10 text-sm font-semibold">
                    <li>회사소개</li>
                    <li>로봇제품</li>
                    <li>사업소개</li>
                    <li>홍보센터</li>
                    <li>고객지원</li>
                  </ul>
                </nav>

                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span>EN</span>
                  <span className="opacity-60">KR</span>
                </div>
              </div>

              <div className="relative z-10 flex h-full items-center justify-center pb-10">
                <h2 className="pt-10 text-center text-4xl font-bold tracking-tight text-white md:text-5xl">
                  회사 개요
                </h2>
              </div>
            </div>

            <div className="bg-white px-8 py-10 text-[#2f3136] md:px-16 md:py-14">
              <h3 className="text-center text-2xl font-bold leading-tight md:text-[2.2rem]">
                신뢰를 바탕으로 성장하는{" "}
                <span className="text-[#4eb6f0]">Sbot, 고객과 함께</span> 더 나은
                미래를 만들어갑니다.
              </h3>

              <p className="mt-10 text-center text-xl font-semibold leading-9 md:text-[2rem]">
                <span className="font-extrabold">Sbot</span>은 기술로 연결하고,
                사람으로 완성하는 체계적인 시스템을 가진 회사입니다.
              </p>

              <ul className="mx-auto mt-12 max-w-4xl space-y-5 text-lg leading-8 text-[#3b3f45]">
                {points.map((point) => (
                  <li key={point} className="flex gap-4">
                    <span className="mt-1 text-black">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto h-4 w-[92%] rounded-b-[999px] bg-[linear-gradient(180deg,rgba(226,231,239,1),rgba(186,191,201,1))] shadow-[0_16px_30px_rgba(0,0,0,0.35)]" />
      </div>
    </div>
  )
}

export default CompanyOverviewSection
