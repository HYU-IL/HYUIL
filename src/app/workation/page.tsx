import Image from "next/image";
import CategoryTitle from "@/components/common/CategoryTitle";
import left from "../../../public/assets/icons/left.svg";
import Link from "next/link";
import MediumCardItem from "@/components/common/MediumCardItem";
import SmallListItem from "@/components/sliders/SmallListItem";
import VerticalItem from "@/components/sliders/VerticalItem";
import Mountain from "../../../public/assets/images/Mountain.svg";
import Private from "../../../public/assets/images/Private.svg";

export default function WorkationPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      {/* 상단바 */}
      <div className="grid grid-cols-3 w-full px-[16px] py-3 items-center border-b">
        <Link href="" className="flex justify-start">
          <Image src={left} alt="left" />
        </Link>
        <div className="flex justify-center">
          <h2 className="text-primary-400 text-subtitle2 text-primary-core font-semibold">
            워케이션
          </h2>
        </div>
      </div>

      {/* 세로형 아이템 가로 스크롤 */}
      <div className="flex flex-col w-full px-[16px] pt-8 text-secondary-core">
        <span className="text-[10px] text-secondary-400 font-semibold">
          ABOUT WORKATION
        </span>
        <div className="flex items-center justify-between w-full text-subtitle3 text-primary-core">
          직장인이 꿈꾸는 워케이션, 일과 쉼 사이
          <Link href="" className="text-caption2 text-gray-800">
            더보기 &gt;
          </Link>
        </div>
      </div>
      <div className="w-full whitespace-nowrap overflow-x-auto flex gap-x-[4px] scrollbar-hide pt-3 px-[16px] pb-[20px]">
        <VerticalItem
          label="조용한 스카이라운지 프라이빗 워케이션"
          imgurl="/tmp.jpg"
          addr="강릉"
        />
        <VerticalItem
          label="조용한 스카이라운지 프라이빗 워케이션"
          imgurl="/tmp.jpg"
          addr="강릉"
        />
        <VerticalItem
          label="조용한 스카이라운지 프라이빗 워케이션"
          imgurl="/tmp.jpg"
          addr="강릉"
        />
        <VerticalItem
          label="조용한 스카이라운지 프라이빗 워케이션"
          imgurl="/tmp.jpg"
          addr="강릉"
        />
      </div>

      {/* 워케이션 리스트 div */}
      <div className="flex flex-col w-full h-[46%] px-[24px] bg-gray-50 pt-4">
        <div className="flex flex-row gap-1">
          <Image src={Mountain} alt="mountain" />
          <Image src={Private} alt="private" />
        </div>
        <div className="flex items-center justify-between w-full pt-2 text-subtitle3">
          <div className="text-subtitle1 text-gray-800">
            <span className="text-primary-core">푸른 산 속에서 일과 쉼</span>
          </div>
          <Link href="" className="text-caption2 text-gray-800">
            더보기 &gt;
          </Link>
        </div>
        <span className="text-gray-800 text-caption3">
          #산 뷰 공간 #낭만적인 워케이션
        </span>

        {/* 워케이션 리스트(4개 고정) */}
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

      {/* 인기 워케이션 div */}
      <div className="flex flex-col w-full px-[24px] pt-8 text-secondary-core">
        <span className="text-[10px] text-secondary-400 font-semibold">
          모든 직장인들이 선택한
        </span>
        <div className="flex items-center justify-between w-full text-subtitle1 text-primary-core">
          BEST 인기 워케이션
          <Link href="" className="text-caption2 text-gray-800">
            더보기 &gt;
          </Link>
        </div>
      </div>
      <div className="w-full whitespace-nowrap overflow-x-auto flex gap-x-[8px] scrollbar-hide pt-3 px-[24px] pb-[50px]">
        <SmallListItem label="강릉 디프라이빗 캠핑" imgurl="/tmp.jpg" />
        <SmallListItem label="강릉 디프라이빗 캠핑" imgurl="/tmp.jpg" />
        <SmallListItem label="강릉 디프라이빗 캠핑" imgurl="/tmp.jpg" />
        <SmallListItem label="강릉 디프라이빗 캠핑" imgurl="/tmp.jpg" />
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