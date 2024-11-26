"use client";
import { useEffect, useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import { ChipHeart, ChipPlace, ChipBalloon, ChipCoffee, ChipFood } from ".";
import MapChip from "../buttons/MapChip";

interface Chip {
  image: string; // 이미지 경로
  type: string; // Chip의 라벨
}

export default function KakaoMap() {
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

  const [isClient, setIsClient] = useState(false);
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  useEffect(() => {
    setIsClient(true); // 클라이언트 렌더링 후 상태 업데이트
  }, []);

  if (!isClient) {
    return null; // SSR에서 렌더링 방지
  }

  const toggleChip = (type: string): void => {
    setSelectedChips((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type]
    );
  };

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {/* 지도 컴포넌트 */}
      <Map
        level={3}
        center={{ lat: 33.5563, lng: 126.79581 }}
        className="w-full h-full"
        draggable={true}
        zoomable={true}
      ></Map>

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
}
