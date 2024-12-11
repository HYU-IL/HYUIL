"use client";
import Image from "next/image";
import TMP from "../../../../public/assets/images/mockimg/residence1.png";
import residenceData from "@/data/residenceData";
import LocationBox from "../_component/LocationBox";
import Appbar from "../_component/Appbar";
import TitleBox from "../_component/TitleBox";
import GuideBox from "../_component/GuideBox";
import Divider from "../_component/Divider";
import FacilityItem from "../_component/FacilityItem";

export default function DetailResidencePage() {
  const exData = residenceData[0];
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
        {/* <SearchButton url={residenceData.url} /> */}
      </div>

      {/* title div */}
      <TitleBox
        arrange="left"
        name={exData.name}
        rdnm_adr={exData.rdnm_adr}
        category="숙소"
      />

      <div className="bg-gray-400 w-[90%] h-[1px]" />

      {/* 정보 div */}
      <div className="px-[16px] w-full h-[33%] flex flex-col items-center">
        <div className="py-[20px] w-full flex flex-col items-start justify-center gap-1">
          <span className="text-subtitle1 font-bold">수용 인원</span>
          <p className="block w-full text-body2">
            {`${exData.capacity}명부터 최대 ${exData.max_capacity}명 인원`}{" "}
            <span className="text-gray-600">(자세한 내용은 사이트 참고)</span>
          </p>
        </div>
      </div>

      <Divider height="30" />
      {/* 위치 및 교통 div */}
      <LocationBox
        adr={exData.rdnm_adr}
        telephone={exData.telephone}
      />
      {/* 시설 유무 div */}
      <div className="w-full px-4 flex gap-4">
        {exData.parking_lot ? (
          <FacilityItem label="주차가능" />
        ) : (
          <div />
        )}
        {exData.wifi ? <FacilityItem label="와이파이" /> : <div />}{" "}
      </div>
      <Divider height="30" />
      {/* 이용안내 */}
      <GuideBox />

      <Divider height="30" />
      <div className="w-full bg-gray-500 h-[60px]" />
    </div>
  );
}
