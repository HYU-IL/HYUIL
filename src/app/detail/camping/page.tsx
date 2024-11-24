"use client";
import Image from "next/image";
import RIGHT from "../../../../public/assets/icons/right.svg";
import TMP from "../../../../public/tmp.jpg";
import campingData from "@/data/campingData";
import LocationBox from "../_component/LocationBox";
import Appbar from "../_component/Appbar";
import SearchButton from "../_component/SearchButton";
import TitleContainer from "../_component/TitleContainer";
import GuideBox from "../_component/GuideBox";

export default function DetailCampingPage() {
  return (
    <div className="flex flex-col w-full whitespace-nowrap h-full items-center">
      {/* 상단바 div */}
      <Appbar />

      {/* 이미지 div */}
      <div className="flex flex-col w-full h-[240px] overflow-hidden relative">
        <Image
          src={TMP}
          objectFit="cover"
          alt="tmp"
          className="w-full h-auto"
        />
        <SearchButton url={campingData.url} />
      </div>

      {/* title div */}
      <TitleContainer
        arrange="middle"
        name={campingData.name}
        rdnm_adr={campingData.rdnm_adr}
        category="캠핑장"
      />

      <div className="bg-gray-400 w-[90%] h-[1px]" />

      {/* 정보 div */}
      <div className="px-[16px] w-full h-[33%] flex flex-col items-center">
        <div className="py-[20px] w-[100%] flex flex-col items-start justify-center gap-1">
          <span className="text-subtitle1 font-bold">캠핑 소개</span>
          <p className="block w-[100%] text-body2 text-wrap">
            {campingData.description}
          </p>
        </div>
        <div className="py-[20px] w-full flex flex-col items-start justify-center gap-1">
          <span className="text-subtitle1 font-bold">캠핑 유형</span>
          <p className="block w-full text-body2">{campingData.camping_type}</p>
        </div>
        <div className="py-[20px] w-full flex flex-col items-start justify-center gap-1">
          <span className="text-subtitle1 font-bold">운영 기간</span>
          <p className="block w-full text-body2">{campingData.oper_date}</p>
        </div>
        <div className="py-[20px] w-full flex flex-col items-start justify-center gap-1">
          <span className="text-subtitle1 font-bold">부대 시설</span>
          <p className="block w-full text-body2">{campingData.facility}</p>
        </div>
      </div>

      <div className="w-full bg-gray-300 h-[30px]" />

      {/* 위치 및 교통 div */}
      <LocationBox adr={campingData.rdnm_adr} />

      <div className="w-full bg-gray-300 h-[30px]" />
      {/* 이용안내 */}
      <GuideBox />

      <div className="w-full bg-gray-300 h-[30px]" />
      <div className="w-full bg-gray-500 h-[60px]" />
    </div>
  );
}
