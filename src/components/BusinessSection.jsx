function BusinessSection() {
  const items = [
    {
      title: "FA 자동화",
      desc: "공장 자동화 환경에 최적화된 설비 및 제어 시스템을 제공합니다.",
    },
    {
      title: "PLC 프로그램",
      desc: "정밀하고 안정적인 제어를 위한 PLC 프로그램 솔루션을 구현합니다.",
    },
    {
      title: "다관절 로봇",
      desc: "생산성과 정밀도를 높이는 산업용 다관절 로봇 시스템을 제공합니다.",
    },
    {
      title: "협업 로봇",
      desc: "사람과 함께 작업할 수 있는 유연한 협동 로봇 환경을 구축합니다.",
    },
  ]

  return (
    <div className="flex h-screen items-center bg-[#f8f9fb] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            OUR BUSINESS
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            스마트봇의 핵심 사업 영역
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600">
            ㈜스마트봇은 FA 자동화 분야 전문업체로서 PLC 프로그램, 다관절 로봇,
            협업 로봇까지 아우르는 기술력을 가진 전문 회사입니다.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-6 h-40 rounded-2xl bg-blue-100"></div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">{item.title}</h3>
              <p className="mb-6 text-base leading-8 text-gray-600">{item.desc}</p>
              <button className="rounded-full border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600">
                VIEW MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BusinessSection