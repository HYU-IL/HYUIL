import Image from "next/image";
import CategoryTitle from "@/components/common/CategoryTitle";
import left from "../../../public/assets/icons/left.svg";
import Link from "next/link";
import SubInfoTypo from "@/components/common/SubInfoTypo";
import Mountain from "../../../public/assets/images/Mountain.svg";
import Private from "../../../public/assets/images/Private.svg";
import MediumCardItem from "@/components/common/MediumCardItem";
import MediumInnerTitleItem from "@/components/sliders/MediumInnerTitleItem";
import Carousel from "@/components/sliders/Carousel";
import SmallListItem from "@/components/sliders/SmallListItem";

export default function ResortPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      {/* 상단바 */}
      <div className="grid grid-cols-3 w-full px-[16px] py-3 items-center">
        <Link href="" className="flex justify-start">
          <Image src={left} alt="left" />
        </Link>
        <div className="flex justify-center">
          <CategoryTitle label="캠핑" />
        </div>
      </div>

      {/* 캐러셀 */}
      <div className="w-full h-[298px] px-[16px] pt-3 border-gray-500 border-t">
        <div className="flex flex-col items-start">
          <SubInfoTypo label="ABOUT RESORT" />
          <div className="flex items-center justify-between w-full pt-1">
            <div className="text-subtitle3 text-gray-800">
              <span className="text-primary-core">휴일</span>이 추천하는 편안한
              휴양지
            </div>
            <Link href="" className="text-caption2 text-gray-800">
              더보기 &gt;
            </Link>
          </div>
          <div className="flex items-center justify-center w-full h-[248px]">
            {/* <Carousel /> */}
          </div>
        </div>
      </div>

      {/* 첫번째 추천 상단바*/}
      <div className="flex flex-col w-full px-[16px]">
        <div className="flex flex-row gap-1">
          <Image src={Mountain} alt="mountain" />
          <Image src={Private} alt="private" />
        </div>
        <div className="flex items-center justify-between w-full pt-2">
          <span className="text-primary-core text-subtitle3">
            강릉에서 실천하는 진짜 워라벨
          </span>
          <Link href="" className="text-caption2 text-gray-800">
            더보기 &gt;
          </Link>
        </div>
      </div>

      {/* 가로리스트 */}
      <div className="w-full whitespace-nowrap overflow-x-auto flex gap-x-[3px] scrollbar-hide pt-2 px-[16px] pb-8 bg-gray-50">
        <SmallListItem label="강릉 생태관광" imgurl="/tmp.jpg" />
        <SmallListItem label="강릉 그랑블루요트" imgurl="/tmp.jpg" />
        <SmallListItem label="강릉 그랑블루요트" imgurl="/tmp.jpg" />
        <SmallListItem label="강릉 그랑블루요트" imgurl="/tmp.jpg" />
      </div>

      {/* 캠핑 리스트 div */}
      <div className="flex flex-col w-full h-[46%] px-[16px]">
        <div className="flex flex-row gap-1">
          <Image src={Mountain} alt="mountain" />
          <Image src={Private} alt="private" />
        </div>
        <div className="flex items-center justify-between w-full pt-2">
          <span className="text-primary-core text-subtitle3">
            푸른 산 속에서 느끼는 휴양
          </span>
          <Link href="" className="text-caption2 text-gray-800">
            더보기 &gt;
          </Link>
        </div>
        <span className="text-gray-800 text-caption2">
          #숲 속 휴양 #낭만적인 휴양
        </span>

        {/* 캠핑 리스트(4개 고정) */}
        <div className="grid grid-cols-1 w-full gap-y-6 mt-3 place-content-center">
          <div className="w-full flex justify-between items-center">
            <MediumCardItem label="강릉 디프라이빗 캠핑" />
            <MediumCardItem label="강릉 디프라이빗 캠핑" />
          </div>
          <div className="flex justify-between items-center w-full">
            <MediumCardItem label="강릉 디프라이빗 캠핑" />
            <MediumCardItem label="강릉 디프라이빗 캠핑" />
          </div>
        </div>
      </div>

      {/* 인기 캠핑 div */}
      <div className="flex flex-col w-full h-[400px] px-[16px] pt-8">
        <div className="flex items-center justify-between w-full">
          <div className="text-subtitle3 text-gray-800">
            <span className="text-primary-core">휴일이 추천하는 인기 휴양</span>
          </div>
          <Link href="" className="text-caption2 text-gray-800">
            더보기 &gt;
          </Link>
        </div>
        <span className="text-gray-800 text-caption2">#인기 휴양 #워라벨</span>
        <div className="w-full whitespace-nowrap overflow-x-auto flex gap-x-[8px] scrollbar-hide pt-3">
          <MediumInnerTitleItem label="강릉시-황리단 민속마을" />
          <MediumInnerTitleItem label="강릉시-황리단 민속마을" />
          <MediumInnerTitleItem label="강릉시-황리단 민속마을" />
          <MediumInnerTitleItem label="강릉시-황리단 민속마을" />
        </div>
      </div>

      {/* bottom div */}
      <div className="w-full h-[270px]">
        <div className="bg-[#d9d9d9] w-full h-[70px]" />
        <div className="bg-gray-400 w-full h-[200px] text-title2 text-gray-600 px-[16px] pt-[32px]">
          Hue il
        </div>
      </div>
    </div>
  );
}
