"use client";
import Image from "next/image";
import TMP from "../../../../public/tmp.jpg";
import festivalData from "@/data/festivalData";
import LocationBox from "../_component/LocationBox";
import Appbar from "../_component/Appbar";
import TitleBox from "../_component/TitleBox";
import Divider from "../_component/Divider";
import RIGHT from "../../../../public/assets/icons/right.svg";

export default function DetailFestivalPage() {
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
      </div>

      {/* title div */}
      <TitleBox
        arrange="middle"
        name={festivalData.name}
        rdnm_adr={festivalData.rdnm_adr}
        category="축제"
        date={`${festivalData.start_date}~${festivalData.end_date}`}
      />
      <a
        href={festivalData.url || ""}
        className="flex bg-white p-3 rounded-full items-center justify-center gap-2 text-primary-900 text-body1 shadow-md border"
      >
        여행지 검색 <Image src={RIGHT} alt="right" />
      </a>
      {/* 소개 div */}
      <div className="px-[16px] w-full h-[33%] pt-[20px] pb-8 flex flex-col items-start justify-center gap-[6px]">
        <span className="text-subtitle1 font-bold">축제 소개</span>
        <p className="block w-[100%] text-body2 text-wrap whitespace-pre-wrap">
          {festivalData.description}
        </p>
      </div>
      <Divider height="30" />
      <div className="px-[16px] w-full h-[33%] pt-[20px] pb-8 flex flex-col items-start justify-center gap-[6px]">
        <span className="text-subtitle1 font-bold">개최장소</span>
        <p className="block w-[100%] text-body2 text-wrap whitespace-pre-wrap">
          {festivalData.place}
        </p>
        <div className="w-full items-start text-gray-600 text-body2 font-medium pt-2">
          전화번호: {festivalData.telephone}
        </div>
      </div>
      <Divider height="30" />
      <div className="w-full bg-gray-500 h-[60px]" />
    </div>
  );
}
