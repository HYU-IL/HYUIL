import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { ChipHeart, ChipPlace, ChipBalloon, ChipCoffee, ChipFood } from ".";
import MapChip from "../buttons/MapChip";

interface Center {
  lat: number;
  lng: number;
}

const KakaoMap = forwardRef(function KakaoMap(_, ref) {
  const ChipList = [
    {
      icon: ChipHeart,
      type: "나의 찜",
    },
    {
      icon: ChipPlace,
      type: "관광명소",
    },
    {
      icon: ChipBalloon,
      type: "문화시설",
    },
    {
      icon: ChipCoffee,
      type: "카페",
    },
    {
      icon: ChipFood,
      type: "음식점",
    },
  ];

  const [center, setCenter] = useState<Center>({
    lat: 37.764246,
    lng: 128.90026,
  });
  const [mapInstance, setMapInstance] = useState<kakao.maps.Map | null>(null);
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

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

  // 지도 중심 업데이트
  const handleDragEnd = () => {
    if (!mapInstance) return;

    const newCenter = mapInstance.getCenter();
    setCenter({
      lat: newCenter.getLat(),
      lng: newCenter.getLng(),
    });
  };
  const toggleChip = (type: string): void => {
    const newSelectedChips = selectedChips.includes(type)
      ? selectedChips.filter((item) => item !== type)
      : [...selectedChips, type];

    setSelectedChips(newSelectedChips);
  };

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <Map
        center={center}
        level={4}
        onCreate={(map) => setMapInstance(map)}
        onDragEnd={handleDragEnd}
        draggable={true}
        className="w-full h-full"
      >
        <MapMarker // 마커를 생성합니다
          position={{
            // 마커가 표시될 위치입니다
            lat: 37.764246,
            lng: 128.90026,
          }}
          image={{
            src: "/assets/images/foothold/locationMarker.svg", // 마커이미지의 주소입니다
            size: {
              width: 46,
              height: 49,
            }, // 마커이미지의 크기입니다
          }}
        />
      </Map>
      {/* Chip 리스트 */}
      <div className="absolute top-5 z-10 w-full whitespace-nowrap overflow-x-auto flex gap-x-[8px] scrollbar-hide px-[24px]">
        {ChipList.map((chip, index) => (
          <MapChip
            key={index}
            icon={chip.icon}
            label={chip.type}
            isSelected={selectedChips.includes(chip.type)}
            onClick={() => toggleChip(chip.type)}
          />
        ))}
      </div>
    </div>
  );
});

export default KakaoMap;
