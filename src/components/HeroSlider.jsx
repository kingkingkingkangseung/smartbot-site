function HeroSlider() {
  const moveToCompany = () => {
    const target = document.getElementById("company")
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  const moveToBusiness = () => {
    const target = document.getElementById("business")
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#001B66] via-[#003399] to-[#0A84FF]">
      <div className="absolute inset-0 bg-black/20"></div>

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
            onClick={moveToCompany}
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
