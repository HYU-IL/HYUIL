"use client";
import Image from "next/image";
import TMP from "../../../../public/tmp.jpg";
import beachData from "@/data/beachData";
import LocationBox from "../_component/LocationBox";
import Appbar from "../_component/Appbar";
import SearchButton from "../_component/SearchButton";
import TitleBox from "../_component/TitleBox";
import Divider from "../_component/Divider";

export default function DetailBeachPage() {
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
        <SearchButton url={beachData.url} />
      </div>

      {/* title div */}
      <TitleBox
        arrange="left"
        name={beachData.name}
        rdnm_adr={beachData.rdnm_adr}
        category="해변"
      />

      <div className="bg-gray-400 w-[90%] h-[1px]" />
      {/* 소개 div */}
      <div className="px-[16px] w-full h-[33%] py-[20px] flex flex-col items-start justify-center gap-[6px]">
        <span className="text-subtitle1 font-bold">해변 소개</span>
        <p className="block w-[100%] text-body2 text-wrap whitespace-pre-wrap">
          {beachData.description}
        </p>
      </div>
      <Divider height="30" />
      <LocationBox adr={beachData.rdnm_adr} telephone={beachData.telephone} />
      <Divider height="30" />
      <div className="w-full bg-gray-500 h-[60px]" />
    </div>
  );
}
