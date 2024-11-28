"use client";
import Image from "next/image";
import TMP from "../../../../public/tmp.jpg";
import leisureData from "@/data/leisureData";
import Appbar from "../_component/Appbar";
import SearchButton from "../_component/SearchButton";
import TitleBox from "../_component/TitleBox";
import Divider from "../_component/Divider";
import FacilityItem from "../_component/FacilityItem";

export default function DetailLeisurePage() {
  return (
    <div className="flex flex-col w-full whitespace-nowrap h-full items-center">
      {/* 상단바 div */}
      <Appbar />

      {/* 이미지 div */}
      <div className="flex flex-col w-full h-[288px] overflow-hidden relative">
        <Image
          src={TMP}
          objectFit="cover"
          alt="tmp"
          className="w-full h-auto"
        />
        <SearchButton url={leisureData.url} />
      </div>

      {/* title div */}
      <TitleBox arrange="left" name={leisureData.name} category="레저" />

      <div className="bg-gray-400 w-[90%] h-[1px]" />
      {/* 소개 div */}
      <div className="px-[16px] w-full h-[33%] py-[20px] flex flex-col items-start justify-center gap-[6px]">
        <span className="text-subtitle1 font-bold">레저 소개</span>
        <p className="block w-[100%] text-body2 text-wrap whitespace-pre-wrap">
          {leisureData.description}
        </p>
      </div>
      {/* 시설 유무 div */}
      <div className="w-full px-4 flex gap-4">
        {leisureData.parking_lot ? <FacilityItem label="주차가능" /> : <div />}
      </div>
      <Divider height="180" />
      <div className="w-full bg-gray-500 h-[60px]" />
    </div>
  );
}
