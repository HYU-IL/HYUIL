"use client";
import Image from "next/image";
import TMP from "../../../../public/tmp.jpg";
import templestayData from "@/data/templestayData";
import LocationBox from "../_component/LocationBox";
import Appbar from "../_component/Appbar";
import SearchButton from "../_component/SearchButton";
import TitleBox from "../_component/TitleBox";
import GuideBox from "../_component/GuideBox";

export default function DetailTemplePage() {
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
        <SearchButton url={templestayData.url} />
      </div>

      {/* title div */}
      <TitleBox
        arrange="middle"
        name={templestayData.name}
        rdnm_adr={templestayData.rdnm_adr}
        category="캠핑장"
      />

      <div className="bg-gray-400 w-[90%] h-[1px]" />


      <div className="w-full bg-gray-300 h-[30px]" />

      {/* 위치 및 교통 div */}
      <LocationBox adr={templestayData.rdnm_adr} />

      <div className="w-full bg-gray-300 h-[30px]" />
      {/* 이용안내 */}
      <GuideBox />

      <div className="w-full bg-gray-300 h-[30px]" />
      <div className="w-full bg-gray-500 h-[60px]" />
    </div>
  );
}
