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
      mapInstance.setLevel(6, { animate: true });
    } else if (type === "decrease") {
      mapInstance.setLevel(4, { animate: true });
    }
  };

  // Ref로 메서드 노출
  useImperativeHandle(ref, () => ({
    handleLevel,
  }));

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Map
        level={4}
        onCreate={(map) => setMapInstance(map)}
        center={{ lat: 37.764246, lng: 128.90026 }}
        className="w-full h-full"
      />
    </div>
  );
});

export default KakaoMap;
