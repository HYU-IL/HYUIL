"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HandleBar from "../../public/assets/icons/HandleBar.svg";
import MapSmallInnerTitleSlider from "@/components/sliders/MapSmallInnerTitleSlider";

interface Chip {
    id: number;
    defaultSrc: string;
    selectedSrc: string;
    width: number;
  }
  
const chips: Chip[] = [
    { id: 0, defaultSrc: "/assets/icons/map/SelectMap_LikeChip.svg", selectedSrc: "/assets/icons/map/SelectMap_LikeChip_Selected.svg", width: 97 },
    { id: 1, defaultSrc: "/assets/icons/map/SelectMap_WorkationChip.svg", selectedSrc: "/assets/icons/map/SelectMap_WorkationChip_Selected.svg", width: 102 },
    { id: 2, defaultSrc: "/assets/icons/map/SelectMap_CampingChip.svg", selectedSrc: "/assets/icons/map/SelectMap_CampingChip_Selected.svg", width: 86 },
    { id: 3, defaultSrc: "/assets/icons/map/SelectMap_ResortChip.svg", selectedSrc: "/assets/icons/map/SelectMap_ResortChip_Selected.svg", width: 86 },
    { id: 4, defaultSrc: "/assets/icons/map/SelectMap_LeisureChip.svg", selectedSrc: "/assets/icons/map/SelectMap_LeisureChip_Selected.svg", width: 86 },
    { id: 5, defaultSrc: "/assets/icons/map/SelectMap_FestivalChip.svg", selectedSrc: "/assets/icons/map/SelectMap_FestivalChip_Selected.svg", width: 102 },
];

type SelectMapSheetProps = {
    location:string;
  };

const SelectMapBottomSheet = ({location} : SelectMapSheetProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDragEnd = (
    _: any,
    info: { offset: { y: number }; velocity: { y: number } }
  ) => {
    // 드래그 동작을 분석하여 시트를 열거나 닫음
    if (info.offset.y > 100 || info.velocity.y > 500) {
      setIsOpen(false);
    } else if (info.offset.y < -100 || info.velocity.y < -500) {
      setIsOpen(true);
    }
  };

  // 칩 상태 관리
  const [selectedChipIds, setSelectedChipIds] = useState<number[]>([]);
  
    const handleChipClick = (id: number) => {
      setSelectedChipIds((prev) =>
        prev.includes(id) ? prev.filter((chipId) => chipId !== id) : [...prev, id]
      );
    };


  return (
    <motion.div
      className={`fixed bottom-0 left-0 right-0 ${
        isOpen ? "h-[60%]" : "h-[80px]"
      } bg-white rounded-t-[16px] shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-50 overflow-hidden`}
      drag="y" // Y축으로만 드래그 가능
      dragConstraints={{ top: 0, bottom: 0 }} // 드래그 제한
      onDragEnd={handleDragEnd} // 드래그 종료 시 동작 처리
      initial={{ y: "calc(100% - 80px)" }}
      animate={{ y: isOpen ? 0 : "calc(100% - 80px)" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* 클릭 영역 */}
      <div className="cursor-pointer text-center font-bold border-b border-gray-300 select-none">
        {/* 클릭으로 열기/닫기 */}
        <div className="flex justify-center py-[10px]" onClick={handleToggle}>
          <Image src={HandleBar} alt="handlebar" />
        </div>
        <div className="w-full">
            <div className="whitespace-nowrap overflow-x-auto flex scrollbar-hide ml-[16px] mb-[14px]">
                {chips.map((chip) => (
                    <Image
                    src={selectedChipIds.includes(chip.id) ? chip.selectedSrc : chip.defaultSrc}
                    width={chip.width}
                    height={45}
                    key={chip.id}
                    alt={`chip-${chip.id}`}
                    onClick={() => handleChipClick(chip.id)}
                    />
                ))}
            </div>
        </div>
      </div>
      {isOpen && (
        <div
            className="pt-[16px] overflow-y-auto" // 스크롤 가능
            style={{ maxHeight: "calc(100% - 72px)" }} // 시트 높이 제한
        >
            <div className="w-full">
                <div className="ml-[16px]">
                    {selectedChipIds.includes(0) && <MapSmallInnerTitleSlider id={0} location={location} />}
                    {selectedChipIds.includes(1) && <MapSmallInnerTitleSlider id={1} location={location} />}
                    {selectedChipIds.includes(2) && <MapSmallInnerTitleSlider id={2} location={location} />}
                    {selectedChipIds.includes(3) && <MapSmallInnerTitleSlider id={3} location={location} />}
                    {selectedChipIds.includes(4) && <MapSmallInnerTitleSlider id={4} location={location} />}
                    {selectedChipIds.includes(5) && <MapSmallInnerTitleSlider id={5} location={location} />}
                </div>
            </div>
        </div>
      )}
    </motion.div>
  );
};

export default SelectMapBottomSheet;
