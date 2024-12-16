"use client";
import Image from "next/image";
import left from "../../../public/assets/icons/left.svg";
import Link from "next/link";
import ChangeLocationButton from "@/components/buttons/ChangeLocButton";
import WalkorCarButton from "@/components/buttons/WalkorCarButton";
import KakaoMap from "@/components/map/KakoMap";
import BottomSheet from "@/components/BottomSheet";
import { useState, useRef } from "react";

export default function FootHoldPage() {
  const mapRef = useRef<{ handleLevel: (type: string) => void } | null>(null);
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      {/* 상단바 */}
      <div className="grid grid-cols-3 w-full px-[16px] py-3 items-center">
        <Link href="/main" className="flex justify-start">
          <Image src={left} alt="left" />
        </Link>
        <div className="flex justify-center">
          <WalkorCarButton
            onModeChange={(mode) => mapRef.current?.handleLevel(mode)}
          />
        </div>
        <div className="flex justify-end">
          <ChangeLocationButton />
        </div>
      </div>
      <div className="w-screen h-screen">
        <KakaoMap ref={mapRef} />
      </div>
      <BottomSheet />
    </div>
  );
}
