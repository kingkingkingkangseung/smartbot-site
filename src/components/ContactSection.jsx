import KakaoMap from "./KakaoMap"

function ContactSection() {
  return (
    <div className="flex h-screen items-center bg-[#020b27] text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            CONTACT US
          </p>
          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            스마트봇 연락처 및
            <br />
            찾아오시는 길 안내
          </h2>
          <p className="mb-4 text-2xl text-white/80">
            경기도 김포시 김포한강5로 321, 6층
          </p>
          <p className="mb-8 text-2xl text-white/80">010-8217-7748</p>

          <button className="rounded-full bg-blue-500 px-8 py-4 text-sm font-semibold transition hover:bg-blue-400">
            문의 및 상담
          </button>
        </div>

        <div className="rounded-[2rem] bg-white/10 p-5">
          <div className="h-[360px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10">
            <KakaoMap />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
