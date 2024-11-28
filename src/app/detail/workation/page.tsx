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
        category="공유 오피스"
      />
      <div className="bg-gray-400 w-[90%] h-[1px]" />
      <div className="px-[16px] w-full h-[33%] py-[20px] flex flex-col items-start justify-center gap-[6px]">
        <span className="text-subtitle1 font-bold">운영시간</span>
        <p className="block w-[100%] text-body2 text-wrap whitespace-pre-wrap">
          {workationData.oper_time} <span className="text-gray-600">(자세한 내용은 사이트 참고)</span>
        </p>
      </div>
      <Divider height="30" />
      <LocationBox adr={workationData.rdnm_adr} telephone={workationData.telephone}/>
      <Divider height="30" />
      <GuideBox />
      <Divider height="30" />
      <div className="w-full bg-gray-500 h-[60px]" />
    </div>
  );
}
