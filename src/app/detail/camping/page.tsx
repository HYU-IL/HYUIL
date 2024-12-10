"use client";
import Image from "next/image";
import TMP from "../../../../public/tmp.jpg";
import campingData from "@/data/campingData";
import LocationBox from "../_component/LocationBox";
import Appbar from "../_component/Appbar";
import SearchButton from "../_component/SearchButton";
import TitleBox from "../_component/TitleBox";
import GuideBox from "../_component/GuideBox";
import Divider from "../_component/Divider";
import FacilitiesBox from "../_component/FacilitiesBox";
import FacilityItem from "../_component/FacilityItem";

export default function DetailCampingPage() {
  const facilities = {
    grass: campingData.grass,
    deck: campingData.deck,
    soil: campingData.soil,
    crushed_stone: campingData.crushed_stone,
    gravel: campingData.gravel,
  };
  return (
    <div className="flex flex-col w-full whitespace-nowrap h-full items-center">
      {/* 상단바 div */}
      <Appbar />

      {/* 이미지 div */}
      <div className="flex flex-col w-full h-[288px]  overflow-hidden relative">
        <Image
          src={TMP}
          objectFit="cover"
          alt="tmp"
          className="w-full h-auto"
        />
        <SearchButton url={campingData.url} />
      </div>

      {/* title div */}
      <TitleBox
        arrange="left"
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
      </div>

      <Divider height="30" />
      {/* 기타 환경 div */}
      <FacilitiesBox facilities={facilities} />

      <Divider height="30" />
      {/* 위치 및 교통 div */}
      <LocationBox
        adr={campingData.rdnm_adr}
        telephone={campingData.telephone}
      />
      {/* 시설 유무 div */}
      <div className="w-full px-4 flex gap-4">
        {campingData.pet?<FacilityItem label="애완동물 출입" />:<div/>}
        {campingData.fire==="개별"?<FacilityItem label="화로대" />:<div/>}
      </div>
      <Divider height="30" />
      {/* 이용안내 */}
      <GuideBox />

      <Divider height="30" />
      <div className="w-full bg-gray-500 h-[60px]" />
    </div>
  );
}
