"use client";
import { useEffect, useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import { ChipHeart, ChipPlace, ChipBalloon, ChipCoffee, ChipFood } from ".";
import MapChip from "../buttons/MapChip";

interface Chip {
  image: string; // 이미지 경로
  type: string; // Chip의 라벨
}

export default function KakaoMap({
  onChipSelection,
}: {
  onChipSelection: (chips: string[]) => void;
}) {
  const ChipList = [
    {
      icon: ChipHeart,
      type: "나의 찜",
      items: [
        { label: "나의 찜 아이템 1", imgurl: "/tmp1.jpg" },
        { label: "나의 찜 아이템 2", imgurl: "/tmp2.jpg" },
      ],
    },
    {
      icon: ChipPlace,
      type: "관광명소",
      items: [
        { label: "강릉 그랑블루요트", imgurl: "/tmp3.jpg" },
        { label: "경포대", imgurl: "/tmp4.jpg" },
      ],
    },
    {
      icon: ChipBalloon,
      type: "문화시설",
      items: [
        { label: "강릉 문화예술회관", imgurl: "/tmp5.jpg" },
        { label: "강릉 미술관", imgurl: "/tmp6.jpg" },
      ],
    },
    {
      icon: ChipCoffee,
      type: "카페",
      items: [
        { label: "강릉 카페 1", imgurl: "/tmp7.jpg" },
        { label: "강릉 카페 2", imgurl: "/tmp8.jpg" },
      ],
    },
    {
      icon: ChipFood,
      type: "음식점",
      items: [
        { label: "강릉 음식점 1", imgurl: "/tmp9.jpg" },
        { label: "강릉 음식점 2", imgurl: "/tmp10.jpg" },
      ],
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
    const newSelectedChips = selectedChips.includes(type)
      ? selectedChips.filter((item) => item !== type)
      : [...selectedChips, type];

    setSelectedChips(newSelectedChips);
    onChipSelection(newSelectedChips); // 부모에게 선택된 chips를 전달
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
