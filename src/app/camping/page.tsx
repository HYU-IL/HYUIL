import Image from "next/image";
import CategoryTitle from "@/components/common/CategoryTitle";
import left from "../../../public/assets/icons/left.svg";
import Link from "next/link";
import SubInfoTypo from "@/components/common/SubInfoTypo";
import Mountain from "../../../public/assets/images/Mountain.svg";
import Private from "../../../public/assets/images/Private.svg";
import MediumCardItem from "@/components/common/MediumCardItem";

export default function CampingPage() {
  return (
    <div className="w-full h-[800px] flex flex-col items-center justify-center">
      {/* Top Navigation */}
      <div className="grid grid-cols-3 w-full px-[16px] py-3 items-center">
        <Link href="" className="flex justify-start">
          <Image src={left} alt="left" />
        </Link>
        <div className="flex justify-center">
          <CategoryTitle label="캠핑" />
        </div>
      </div>

      {/* About Camping Section */}
      <div className="w-full h-[298px] px-[16px] pt-3 border-gray-500 border-t">
        <div className="flex flex-col items-start">
          <SubInfoTypo label="ABOUT CAMPING" />
          <div className="flex items-center justify-between w-full pt-1">
            <div className="text-subtitle3 text-gray-800">
              <span className="text-primary-core">휴일</span>이 추천하는 강릉
              캠핑
            </div>
            <Link href="" className="text-caption2 text-gray-800">
              더보기 &gt;
            </Link>
          </div>
          <div className="flex items-center justify-center w-full h-[248px]">캐러셀이 들어갑니다</div>
        </div>
      </div>

      {/* Gradient Divider */}
      <div className="w-full h-[40px] bg-gradient-to-b from-gray-100" />

      {/* Camping List Section */}
      <div className="flex flex-col w-full h-[46%] px-[16px]">
        <div className="flex flex-row gap-1">
          <Image src={Mountain} alt="mountain" />
          <Image src={Private} alt="private" />
        </div>
        <div className="flex items-center justify-between w-full pt-2">
          <span className="text-primary-core text-subtitle3">
            푸른 산 속에서 캠핑 하룻밤
          </span>
          <Link href="" className="text-caption2 text-gray-800">
            더보기 &gt;
          </Link>
        </div>
        <span className="text-gray-800 text-caption2">
          #산 속 캠핑 #낭만적인 캠핑
        </span>

        {/* Card Items Grid */}
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

      {/* Popular Camping Section */}
      <div className="flex flex-col w-full h-[50%] px-[16px]">
        <div className="flex items-center justify-between w-full">
          <div className="text-subtitle3 text-gray-800">
            <span className="text-primary-core">고민 끝! </span>인기 캠핑 모음
          </div>
          <Link href="" className="text-caption2 text-gray-800">
            더보기 &gt;
          </Link>
        </div>
        <span className="text-gray-800 text-caption2">
          #인기 캠핑 #낭만적인 워케이션
        </span>
        <div className="w-full whitespace-nowrap overflow-x-auto flex gap-x-[8px] scrollbar-hide">
          {/* 추가할 카드 아이템을 여기에 배치 */}
        </div>
      </div>
    </div>
  );
}
