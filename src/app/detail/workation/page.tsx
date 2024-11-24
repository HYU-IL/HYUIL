"use client";
import Image from "next/image";
import TMP from "../../../../public/tmp.jpg";
import workationData from "@/data/workationData";
import LocationBox from "../_component/LocationBox";
import Appbar from "../_component/Appbar";
import SearchButton from "../_component/SearchButton";
import TitleBox from "../_component/TitleBox";
import Divider from "../_component/Divider";
import GuideBox from "../_component/GuideBox";
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
        <SearchButton url={workationData.url} />
      </div>

      {/* title div */}
      <TitleBox
        arrange="left"
        name={workationData.name}
        rdnm_adr={workationData.rdnm_adr}
        category="펜션"
      />
      <Divider height="30" />
      <LocationBox adr={workationData.rdnm_adr} />
      <Divider height="30" />
      <GuideBox />
      <Divider height="30" />
      <div className="w-full bg-gray-500 h-[60px]" />
    </div>
  );
}
