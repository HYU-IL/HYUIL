"use client";
import { useEffect, useState } from "react";

import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function KakaoMap() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // 클라이언트 렌더링 후 상태 업데이트
  }, []);

  if (!isClient) {
    return null; // SSR에서 렌더링 방지
  }
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Map
        level={3}
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "100%", height: "100%" }} // 부모 컨테이너 크기를 상속
        draggable={true}
        zoomable={true}
      ></Map>
    </div>
  );
}
