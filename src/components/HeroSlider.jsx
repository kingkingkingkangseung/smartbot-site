function HeroSlider({ onCompanyClick }) {
  const moveToBusiness = () => {
    const target = document.getElementById("business")
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_#133dba_0%,_#071755_42%,_#040a2f_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,12,40,0.2),rgba(2,6,26,0.72))]" />
      <div className="absolute inset-x-[8%] bottom-[11%] top-[14%] rounded-[2.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,53,88,0.2),rgba(3,8,28,0.42))] shadow-[0_40px_80px_rgba(0,0,0,0.45)]" />
      <div className="absolute inset-x-[10%] bottom-[13%] top-[16%] overflow-hidden rounded-[2.2rem] border border-cyan-200/10 bg-[linear-gradient(180deg,rgba(9,36,67,0.32),rgba(2,7,22,0.58))]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(73,225,255,0.14),transparent_34%),linear-gradient(180deg,rgba(7,16,34,0.15),rgba(5,11,28,0.5))]" />
        <div className="absolute inset-x-0 bottom-0 top-0 opacity-60">
          <div className="absolute left-[4%] bottom-[20%] h-[44%] w-[6%] rounded-t-[2rem] bg-[linear-gradient(180deg,rgba(92,216,255,0.18),rgba(92,216,255,0.03))]" />
          <div className="absolute left-[12%] bottom-[20%] h-[64%] w-[4%] rounded-t-[2rem] bg-[linear-gradient(180deg,rgba(92,216,255,0.16),rgba(92,216,255,0.02))]" />
          <div className="absolute left-[19%] bottom-[20%] h-[52%] w-[5%] rounded-t-[2rem] bg-[linear-gradient(180deg,rgba(92,216,255,0.16),rgba(92,216,255,0.02))]" />
          <div className="absolute left-[27%] bottom-[20%] h-[72%] w-[5%] rounded-t-[2rem] bg-[linear-gradient(180deg,rgba(92,216,255,0.18),rgba(92,216,255,0.02))]" />
          <div className="absolute left-[35%] bottom-[20%] h-[58%] w-[4%] rounded-t-[2rem] bg-[linear-gradient(180deg,rgba(92,216,255,0.12),rgba(92,216,255,0.02))]" />
          <div className="absolute right-[31%] bottom-[20%] h-[76%] w-[5%] rounded-t-[2rem] bg-[linear-gradient(180deg,rgba(92,216,255,0.18),rgba(92,216,255,0.03))]" />
          <div className="absolute right-[22%] bottom-[20%] h-[60%] w-[6%] rounded-t-[2rem] bg-[linear-gradient(180deg,rgba(92,216,255,0.14),rgba(92,216,255,0.02))]" />
          <div className="absolute right-[13%] bottom-[20%] h-[82%] w-[5%] rounded-t-[2rem] bg-[linear-gradient(180deg,rgba(92,216,255,0.18),rgba(92,216,255,0.03))]" />
          <div className="absolute right-[5%] bottom-[20%] h-[48%] w-[4%] rounded-t-[2rem] bg-[linear-gradient(180deg,rgba(92,216,255,0.12),rgba(92,216,255,0.02))]" />
        </div>
        <div className="absolute left-1/2 top-[56%] h-[30%] w-[22%] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute left-1/2 top-[55%] h-[30%] w-[18%] -translate-x-1/2 rounded-[2rem] border border-cyan-300/15 bg-[linear-gradient(180deg,rgba(14,33,59,0.65),rgba(6,13,30,0.9))] shadow-[0_0_50px_rgba(61,209,255,0.12)]" />
        <div className="absolute left-1/2 top-[57%] h-[18%] w-[11%] -translate-x-1/2 rounded-[1.25rem] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(38,84,118,0.28),rgba(8,18,34,0.1))]" />
        <div className="absolute left-[14%] top-[54%] h-[22%] w-[16%] rotate-[-18deg] rounded-[999px] border border-cyan-200/10 bg-[linear-gradient(180deg,rgba(12,17,31,0.9),rgba(5,8,18,0.92))]" />
        <div className="absolute left-[22%] top-[58%] h-[11%] w-[9%] rotate-[28deg] rounded-[999px] border border-cyan-200/10 bg-[linear-gradient(180deg,rgba(12,17,31,0.9),rgba(5,8,18,0.92))]" />
        <div className="absolute left-[12%] top-[66%] h-[10%] w-[10%] rounded-[999px] border border-cyan-200/10 bg-[linear-gradient(180deg,rgba(12,17,31,0.95),rgba(5,8,18,0.92))]" />
        <div className="absolute right-[14%] top-[54%] h-[22%] w-[16%] rotate-[18deg] rounded-[999px] border border-cyan-200/10 bg-[linear-gradient(180deg,rgba(12,17,31,0.9),rgba(5,8,18,0.92))]" />
        <div className="absolute right-[22%] top-[58%] h-[11%] w-[9%] rotate-[-28deg] rounded-[999px] border border-cyan-200/10 bg-[linear-gradient(180deg,rgba(12,17,31,0.9),rgba(5,8,18,0.92))]" />
        <div className="absolute right-[12%] top-[66%] h-[10%] w-[10%] rounded-[999px] border border-cyan-200/10 bg-[linear-gradient(180deg,rgba(12,17,31,0.95),rgba(5,8,18,0.92))]" />
        <div className="absolute inset-x-[18%] top-[27%] h-px bg-white/20" />
        <div className="absolute left-[18%] top-[27%] h-[18%] w-px bg-white/20" />
        <div className="absolute right-[18%] bottom-[20%] h-px w-[28%] bg-white/20" />
        <div className="absolute left-[6%] bottom-[18%] h-px w-[18%] bg-white/15" />
      </div>
      <div className="absolute bottom-[7.5%] left-1/2 h-4 w-[82%] -translate-x-1/2 rounded-b-[999px] bg-[linear-gradient(180deg,#eef2f6_0%,#c1c8d1_100%)] shadow-[0_20px_40px_rgba(0,0,0,0.42)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-200">
          SMART FACTORY SOLUTION
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-7xl">
          자동화 기술의 미래를 만드는
          <br />
          스마트 로봇 솔루션 기업
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-base leading-8 text-white/80 md:text-2xl">
          ㈜스마트봇은 PLC 프로그램, 다관절 로봇, 협동 로봇 등
          FA 자동화 분야 전반에 걸친 기술력을 바탕으로
          산업 현장에 최적화된 솔루션을 제공합니다.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={onCompanyClick}
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-900 transition hover:bg-blue-100"
          >
            회사소개 보기
          </button>
          <button className="rounded-full border border-white/50 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            문의하기
          </button>
        </div>
      </div>

      <button
        onClick={moveToBusiness}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-center text-white/70"
      >
        <p className="mb-2 text-xs tracking-[0.3em]">SCROLL</p>
        <div className="mx-auto h-10 w-px bg-white/40"></div>
      </button>
    </div>
  )
}

export default HeroSlider
