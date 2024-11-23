import { FaMapMarkerAlt } from "react-icons/fa";
import React from 'react';

interface locationBoxProps {
  rdnm_adr?: string;
}

// 프롭스 만들고(도로명주소만 받아)
const locationBox: React.FC<locationBoxProps> = ({rdnm_adr})=> {
  return (
    <div className="w-full h-[48%] flex flex-col items-start justify-center p-[16px]">
      <span className="text-subtitle1 font-bold">위치 및 교통</span>
      <div className="w-full h-[170px] mt-4 rounded-lg bg-gray-200" />
      <div className="flex gap-2  text-caption2 text-[#8f8f8f] py-2">
        <FaMapMarkerAlt className="text-[#8f8f8f]" />
        {rdnm_adr}
      </div>
      <div className="flex w-full justify-between">
        <button className="bg-white text-caption3 border border-gray-700 text-gray-700 rounded-[4px] w-[155px] py-1">
          주소복사
        </button>
        <button className="bg-white text-caption3 border border-gray-700 text-gray-700 rounded-[4px] w-[155px] py-1">
          길 안내
        </button>
      </div>
      {/* 기타 정보 안내 div */}
      <div></div>
    </div>)
}

export default locationBox;