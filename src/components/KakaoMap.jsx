import { useEffect, useRef, useState } from "react"

function KakaoMap() {
  const mapRef = useRef(null)
  const [status, setStatus] = useState("loading")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    const kakaoKey = import.meta.env.VITE_KAKAO_MAP_KEY
    const address = "경기도 김포시 김포한강5로 321"
    const fallbackPosition = {
      lat: 37.6416,
      lng: 126.6292,
    }

    if (!kakaoKey) {
      setStatus("error")
      setErrorMessage("VITE_KAKAO_MAP_KEY가 없습니다.")
      return
    }

    const existingScript = document.getElementById("kakao-map-script")

    const loadMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        setStatus("error")
        setErrorMessage("카카오 지도 SDK를 불러오지 못했습니다.")
        return
      }

      window.kakao.maps.load(() => {
        const container = mapRef.current
        if (!container) {
          setStatus("error")
          setErrorMessage("지도를 그릴 영역을 찾지 못했습니다.")
          return
        }

        const options = {
          center: new window.kakao.maps.LatLng(
            fallbackPosition.lat,
            fallbackPosition.lng
          ),
          level: 3,
        }

        const map = new window.kakao.maps.Map(container, options)
        const marker = new window.kakao.maps.Marker({
          position: options.center,
        })
        marker.setMap(map)

        if (!window.kakao.maps.services) {
          setStatus("ready")
          return
        }

        const geocoder = new window.kakao.maps.services.Geocoder()
        geocoder.addressSearch(address, (result, geoStatus) => {
          if (
            geoStatus === window.kakao.maps.services.Status.OK &&
            result.length > 0
          ) {
            const position = new window.kakao.maps.LatLng(
              Number(result[0].y),
              Number(result[0].x)
            )

            map.setCenter(position)
            marker.setPosition(position)
          }

          setStatus("ready")
        })
      })
    }

    if (existingScript) {
      loadMap()
      return
    }

    const script = document.createElement("script")
    script.id = "kakao-map-script"
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}&autoload=false&libraries=services`
    script.async = true
    script.onload = loadMap
    script.onerror = () => {
      setStatus("error")
      setErrorMessage("카카오 SDK 스크립트 로드에 실패했습니다.")
    }
    document.head.appendChild(script)
  }, [])

  return (
    <div className="relative h-full w-full rounded-[1.5rem] bg-[#414867]">
      {status !== "ready" && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-[1.5rem] bg-[#414867] px-6 text-center">
          {status === "loading" ? (
            <p className="text-sm font-medium text-white/70">지도를 불러오는 중입니다.</p>
          ) : (
            <div className="space-y-2">
              <p className="text-sm font-semibold text-white">지도를 불러오지 못했습니다.</p>
              <p className="text-xs leading-6 text-white/70">{errorMessage}</p>
              <p className="text-xs leading-6 text-white/60">
                카카오 Developers의 Web 도메인 등록과 Vercel 재배포 여부를 확인해 주세요.
              </p>
            </div>
          )}
        </div>
      )}

      <div ref={mapRef} className="h-full w-full rounded-[1.5rem]" />
    </div>
  )
}

export default KakaoMap
