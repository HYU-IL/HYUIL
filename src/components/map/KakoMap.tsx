import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import { Map } from "react-kakao-maps-sdk";

const KakaoMap = forwardRef(function KakaoMap(
  { onChipSelection }: { onChipSelection: (chips: string[]) => void },
  ref
) {
  const [mapInstance, setMapInstance] = useState<kakao.maps.Map | null>(null);

  // 확대/축소 메서드
  const handleLevel = (type: string) => {
    if (!mapInstance) {
      console.warn("Map instance is not initialized.");
      return;
    }

    if (type === "increase") {
      mapInstance.setLevel(mapInstance.getLevel() + 1, { animate: true });
    } else if (type === "decrease") {
      mapInstance.setLevel(mapInstance.getLevel() - 1, { animate: true });
    }
  };

  // Ref로 메서드 노출
  useImperativeHandle(ref, () => ({
    handleLevel,
  }));

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Map
        level={3}
        onCreate={(map) => setMapInstance(map)}
        center={{ lat: 33.5563, lng: 126.79581 }}
        className="w-full h-full"
      />
    </div>
  );
});

export default KakaoMap;
