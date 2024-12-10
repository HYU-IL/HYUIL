"use client";
import Image from "next/image";
import TMP from "../../../../public/assets/images/bg_camping.png";
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
  const exData = campingData[0];
  const facilities = {
    grass: exData.grass,
    deck: exData.deck,
    soil: exData.soil,
    crushed_stone: exData.crushed_stone,
    gravel: exData.gravel,
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
        <SearchButton url={exData.url} />
      </div>

      {/* title div */}
      <TitleBox
        arrange="left"
        name={exData.name}
        rdnm_adr={exData.rdnm_adr}
        category="캠핑장"
      />

      <div className="bg-gray-400 w-[90%] h-[1px]" />

      {/* 정보 div */}
      <div className="px-[16px] w-full h-[33%] flex flex-col items-center">
        <div className="py-[20px] w-[100%] flex flex-col items-start justify-center gap-1">
          <span className="text-subtitle1 font-bold">캠핑 소개</span>
          <p className="block w-[100%] text-body2 text-wrap">
            {exData.description}
          </p>
        </div>
        <div className="py-[20px] w-full flex flex-col campingDataitems-start justify-center gap-1">
          <span className="text-subtitle1 font-bold">캠핑 유형</span>
          <p className="block w-full text-body2">{exData.camping_type}</p>
        </div>
        <div className="py-[20px] w-full flex flex-col items-start justify-center gap-1">
          <span className="text-subtitle1 font-bold">운영 기간</span>
          <p className="block w-full text-body2">{exData.oper_date}</p>
        </div>
      </div>

      <Divider height="30" />
      {/* 기타 환경 div */}
      <FacilitiesBox facilities={facilities} />

      <Divider height="30" />
      {/* 위치 및 교통 div */}
      <LocationBox
        adr={exData.rdnm_adr}
        telephone={exData.telephone}
      />
      {/* 시설 유무 div */}
      <div className="w-full px-4 flex gap-4">
        {exData.pet?<FacilityItem label="애완동물 출입" />:<div/>}
        {exData.fire==="개별"?<FacilityItem label="화로대" />:<div/>}
      </div>
      <Divider height="30" />
      {/* 이용안내 */}
      <GuideBox />

      <Divider height="30" />
      <div className="w-full bg-gray-500 h-[60px]" />
    </div>
  );
}
