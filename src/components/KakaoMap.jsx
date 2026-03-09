import { useEffect, useRef } from "react"

function KakaoMap() {
  const mapRef = useRef(null)

  useEffect(() => {
    const kakaoKey = import.meta.env.VITE_KAKAO_MAP_KEY
    if (!kakaoKey) {
      console.error("카카오 지도 키가 없습니다.")
      return
    }

    const existingScript = document.getElementById("kakao-map-script")

    const loadMap = () => {
      window.kakao.maps.load(() => {
        const container = mapRef.current

        const options = {
          center: new window.kakao.maps.LatLng(37.6416, 126.6292),
          level: 3,
        }

        const map = new window.kakao.maps.Map(container, options)

        const markerPosition = new window.kakao.maps.LatLng(37.6416, 126.6292)
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        })
        marker.setMap(map)

        const infowindow = new window.kakao.maps.InfoWindow({
          content: `
            <div style="
              padding:8px 12px;
              font-size:13px;
              white-space:nowrap;
            ">
              스마트봇<br/>
              경기도 김포시 김포한강5로 321
            </div>
          `,
        })

        infowindow.open(map, marker)
      })
    }

    if (existingScript) {
      loadMap()
      return
    }

    const script = document.createElement("script")
    script.id = "kakao-map-script"
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}&autoload=false`
    script.async = true
    script.onload = loadMap
    document.head.appendChild(script)
  }, [])

  return <div ref={mapRef} className="h-full w-full rounded-[1.5rem]" />
}

export default KakaoMap
