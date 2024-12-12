'use client'
import { GrPrevious } from "react-icons/gr";
import Map from "@/components/Map";
import SelectMapBottomSheet from "@/components/SelectMapBottomSheet";
import { useState } from 'react';
import "@/components/sliders/SmallInnerTitleItem";
import Link from "next/link";

export default function SelectMap() {
  const [selectedLoc, setSelectedLoc] = useState("평창");
  return (
    <div className="w-full">
        <div className="relative flex justify-between items-center p-[14px] border-b border-[#ededed] shadow-lg shadow-gray-100">
            <Link href="/main"><GrPrevious className="ml-0 w-[20px] h-[20px] text-gray-600"/></Link>
            <div className="absolute left-1/2 transform -translate-x-1/2 text-primary-core text-title2">지도선택</div>
        </div>
        <Map changeLoc={setSelectedLoc}/>
        <SelectMapBottomSheet location={selectedLoc}/>
    </div>
  );
}
