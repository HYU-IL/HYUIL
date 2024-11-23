"use client";
import Image from "next/image";
import LEFT from "../../../public/assets/icons/left.svg";
import RIGHT from "../../../public/assets/icons/right.svg";
import HEART from "../../../public/assets/icons/heart.svg";
import TMP from "../../../public/tmp.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";
const CAMPINGDATA = {
  name: "강릉 솔향기 캠핑장",
  rdnm_adr: "강원특별자치도 강릉시 연곡면 해안로 1282",
  telephone: "010-0000-0000",
  image: "",
  description:
    "연곡해변 캠핑장을 찾아주셔서 진심으로 감사드립니다. 아름다운 동해바다와 솔향기 가득한 해안 솔숲에 위치한 연곡해변 캠핑장은 송림과 해양자원을 특화한 사계절 캠핑장입니다.",
  url: "",
  pet: "가능",
  type: "일반 야영장",
  oper_time: "",
  oper_date: "4월 1일 ~ 10월 31일",
  reservation: "",
  facility: "샤워실, 개수대, 포토존",
  grass: 0,
  crushed_stone: 0,
  deck: 0,
  gravel: 0,
  soil: 0,
  glamp_inner: "",
  carav_inner: "",
  fire: "",
  gnrl_cnt: 0,
  car_cnt: 0,
  glamp_cnt: 0,
  carav_cnt: 0,
  indv_carav_cnt: 0,
};
export default function DetailPage() {
  return (
    <div className="flex flex-col w-full whitespace-nowrap h-full items-center">
      {/* 상단바 div */}
      <div className="flex flex-col w-full fixed top-0 left-0 bg-opacity-0 z-50">
        <div className="w-full h-[48px] items-center justify-between flex border-b bg-white px-6">
          <Image src={LEFT} alt="left" />
          <Image src={HEART} alt="heart" />
        </div>
      </div>

      {/* 이미지 div */}
      <div className="flex flex-col w-full h-[240px] overflow-hidden relative">
        <Image
          src={TMP}
          objectFit="cover"
          alt="tmp"
          className="w-full h-auto"
        />
        <button className="flex bg-white p-3 rounded-full items-center justify-center gap-2 absolute z-10 top-[180px] left-[220px] text-primary-900 text-body1">
          여행지 검색 <Image src={RIGHT} alt="right" />
        </button>
      </div>

      {/* title div */}
      <div className="w-full flex flex-col items-center">
        <div className="px-[16px] pt-[20px] pb-[30px] w-full flex flex-col items-start justify-center gap-1">
          <span className="text-caption2 text-primary-900">캠핑</span>
          <span className="text-primary-900 font-semibold text-[24px] leading-5 tracking-tight ">
            {CAMPINGDATA.name}
          </span>
          <span className="text-[#999999] font-normal leading-4">
            #야영장 #카라반 #글램핑
          </span>
        </div>
      </div>

      <div className="bg-gray-400 w-[90%] h-[1px]" />

      {/* 정보 div */}
      <div className="px-[16px] w-full h-[33%] flex flex-col items-center">
        <div className="py-[20px] w-[100%] flex flex-col items-start justify-center gap-1">
          <span className="text-subtitle1 font-bold">캠핑 소개</span>
          <p className="block w-[100%] text-body2 text-wrap">
            {CAMPINGDATA.description}
          </p>
        </div>
        <div className="py-[20px] w-full flex flex-col items-start justify-center gap-1">
          <span className="text-subtitle1 font-bold">캠핑 유형</span>
          <p className="block w-full text-body2">{CAMPINGDATA.type}</p>
        </div>
        <div className="py-[20px] w-full flex flex-col items-start justify-center gap-1">
          <span className="text-subtitle1 font-bold">운영 기간</span>
          <p className="block w-full text-body2">{CAMPINGDATA.oper_date}</p>
        </div>
        <div className="py-[20px] w-full flex flex-col items-start justify-center gap-1">
          <span className="text-subtitle1 font-bold">부대 시설</span>
          <p className="block w-full text-body2">{CAMPINGDATA.facility}</p>
        </div>
      </div>

      <div className="w-full bg-gray-300 h-[30px]" />

      {/* 위치 및 교통 div */}
      <div className="w-full h-[48%] flex flex-col items-start justify-center p-[16px]">
        <span className="text-subtitle1 font-bold">위치 및 교통</span>
        <div className="w-full h-[170px] mt-4 rounded-lg bg-gray-200" />
        <div className="flex gap-2  text-caption2 text-[#8f8f8f] py-2">
          <FaMapMarkerAlt className="text-[#8f8f8f]" />
          {CAMPINGDATA.rdnm_adr}
        </div>
        <div className="flex w-full justify-between">
          <button className="bg-white text-caption3 border border-gray-700 text-gray-700 rounded-[4px] w-[155px] py-1">
            주소복사
          </button>
          <button className="bg-white text-caption3 border border-gray-700 text-gray-700 rounded-[4px] w-[155px] py-1">
            길 안내
          </button>
        </div>
        {/* 기타 정보 안내 div */}
        <div></div>
      </div>
      
      <div className="w-full bg-gray-300 h-[30px]" />
      {/* 이용안내 */}
      <div className="w-full h-[48%] flex flex-col items-start justify-center p-[16px]">
        <span className="text-subtitle1 font-bold">위치 및 교통</span>
        <div className="w-full h-[100px] mt-4 rounded-lg bg-gray-200" />
      </div>

      <div className="w-full bg-gray-300 h-[30px]" />
      <div className="w-full bg-gray-500 h-[60px]" />
    </div>
  );
}
