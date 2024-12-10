"use client";
import Image from "next/image";
import TMP from "../../../../public/tmp.jpg";
import templestayData from "@/data/templestayData";
import LocationBox from "../_component/LocationBox";
import Appbar from "../_component/Appbar";
import SearchButton from "../_component/SearchButton";
import TitleBox from "../_component/TitleBox";
import GuideBox from "../_component/GuideBox";
import Divider from "../_component/Divider";

export default function DetailTemplePage() {
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
        <SearchButton url={templestayData.url} />
      </div>

      {/* title div */}
      <TitleBox
        arrange="left"
        name={templestayData.name}
        rdnm_adr={templestayData.rdnm_adr}
        category="템플스테이"
      />
      <Divider height="30" />
      <LocationBox adr={templestayData.rdnm_adr} telephone={templestayData.telephone} />
      <Divider height="30" />
      <GuideBox />
      <Divider height="30" />
      <div className="w-full bg-gray-500 h-[60px]" />
    </div>
  );
}
