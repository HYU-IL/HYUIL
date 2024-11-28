"use client";

import { FaMapMarkerAlt } from "react-icons/fa";
import { useParams } from "next/navigation";
interface LocationBoxProps {
  adr?: string;
  telephone?: string;
}

function LocationBox({ adr, telephone }: LocationBoxProps) {
  const params = useParams() as { id: string };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {}
  };

  const handleCopyClick = () => {
    copyToClipboard(adr || "");
  }
  return (
    <div className="w-full h-[48%] flex flex-col items-start justify-center p-[16px] pb-4">
      <span className="text-subtitle1 font-bold">위치 및 교통</span>
      <div className="w-full h-[170px] mt-4 rounded-lg bg-gray-200" />
      <div className="flex gap-2  text-caption2 text-[#8f8f8f] py-2">
        <FaMapMarkerAlt className="text-[#8f8f8f]" />
        {adr && adr}
      </div>
      <div className="flex w-full justify-between">
        <button 
          onClick={handleCopyClick}
          className="bg-white text-caption3 border border-gray-700 text-gray-700 rounded-[4px] w-[155px] py-1">
          주소복사
        </button>
        <button className="bg-white text-caption3 border border-gray-700 text-gray-700 rounded-[4px] w-[155px] py-1">
          길 안내
        </button>
      </div>
      <div className="w-full items-start text-gray-600 text-body2 font-medium pt-2">
        전화번호: {telephone}
      </div>
    </div>
  );
}

export default LocationBox;
