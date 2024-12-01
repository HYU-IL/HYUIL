"use client";
import Image from "next/image";
import left from "../../../public/assets/icons/left.svg";
import Link from "next/link";
import ChangeLocationButton from "@/components/buttons/ChangeLocButton";
import WalkorCarButton from "@/components/buttons/WalkorCarButton";
import KakaoMap from "@/components/map/KakoMap";
import BottomSheet from "@/components/BottomSheet";
import { useState } from "react";

export default function FootHoldPage() {
  const ChipData = [
    {
      type: "나의 찜",
      items: [
        { label: "나의 찜 아이템 1", imgurl: "/tmp1.jpg" },
        { label: "나의 찜 아이템 2", imgurl: "/tmp2.jpg" },
      ],
    },
    {
      type: "관광명소",
      items: [
        { label: "강릉 그랑블루요트", imgurl: "/tmp3.jpg" },
        { label: "경포대", imgurl: "/tmp4.jpg" },
      ],
    },
    {
      type: "문화시설",
      items: [
        { label: "강릉 문화예술회관", imgurl: "/tmp5.jpg" },
        { label: "강릉 미술관", imgurl: "/tmp6.jpg" },
      ],
    },
    {
      type: "카페",
      items: [
        { label: "강릉 카페 1", imgurl: "/tmp7.jpg" },
        { label: "강릉 카페 2", imgurl: "/tmp8.jpg" },
      ],
    },
    {
      type: "음식점",
      items: [
        { label: "강릉 음식점 1", imgurl: "/tmp9.jpg" },
        { label: "강릉 음식점 2", imgurl: "/tmp10.jpg" },
      ],
    },
  ];
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  const onChipSelection = (chips: string[]) => {
    setSelectedChips(chips);
    console.log("chips:", selectedChips);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      {/* 상단바 */}
      <div className="grid grid-cols-3 w-full px-[16px] py-3 items-center">
        <Link href="" className="flex justify-start">
          <Image src={left} alt="left" />
        </Link>
        <div className="flex justify-center">
          <WalkorCarButton />
        </div>
        <div className="flex justify-end">
          <ChangeLocationButton />
        </div>
      </div>
      <div style={{ width: "100vw", height: "100vh" }}>
        <KakaoMap onChipSelection={onChipSelection} />
      </div>
      <BottomSheet selectedChips={selectedChips} chipData={ChipData} />
    </div>
  );
}
