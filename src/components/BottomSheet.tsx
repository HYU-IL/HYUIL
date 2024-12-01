"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SmallBottomSheetItem from "./sliders/SmallBottomSheetItem";
import Image from "next/image";
import HandleBar from "../../public/assets/icons/HandleBar.svg";
import Close from "../../public/assets/icons/Close.svg";

interface BottomSheetProps {
  selectedChips: string[];
  chipData: any[]; // Chip 데이터 타입
}

const BottomSheet = ({ selectedChips, chipData }: BottomSheetProps) => {
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

  const filteredItems = chipData.filter((chip) =>
    selectedChips.includes(chip.type)
  );

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
      <div
        onClick={handleToggle} // 클릭으로 열기/닫기
        className="cursor-pointer text-center font-bold border-b border-gray-300 select-none"
      >
        <div className="flex justify-center py-[10px]">
          <Image src={HandleBar} alt="handlebar" />
        </div>
        <div className="grid grid-cols-3 w-full px-[16px] py-3 items-center">
          {/* 거점 중앙 정렬 */}
          <div></div>
          <div className="flex justify-center text-title2 text-primary-core">
            <span>거점</span>
          </div>
          {/* Close 버튼 우측 끝 정렬 */}
          <div className="flex justify-end">
            {isOpen ? (
              <Link href="">
                <Image src={Close} alt="close" />
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="px-[24px] pt-[24px]">
          {/* bottom sheet 내용 들어갈 부분 */}

          <div className="flex items-center justify-between w-full text-title2 text-primary-core">
            강릉시 속 관광 명소
            <Link href="" className="text-caption2 text-gray-800">
              더보기 &gt;
            </Link>
          </div>
          <div className="w-full whitespace-nowrap overflow-x-auto flex gap-x-[4px] scrollbar-hide pt-[12px] pb-[28px]">
            <SmallBottomSheetItem label="강릉 그랑블루요트" imgurl="/tmp.jpg" />
            <SmallBottomSheetItem label="강릉 그랑블루요트" imgurl="/tmp.jpg" />
            <SmallBottomSheetItem label="강릉 그랑블루요트" imgurl="/tmp.jpg" />
            <SmallBottomSheetItem label="강릉 그랑블루요트" imgurl="/tmp.jpg" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default BottomSheet;
