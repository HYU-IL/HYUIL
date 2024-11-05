import Image from "next/image";
import CategoryTitle from "@/components/common/CategoryTitle";
import left from "../../../public/assets/icons/left.svg";
import Link from "next/link";
import SubInfoTypo from "@/components/common/SubInfoTypo";
import Mountain from "../../../public/assets/images/Mountain.svg";
import Private from "../../../public/assets/images/Private.svg";
import tmp from "../../../public/tmp.jpg";
import MediumInnerTitleItem from "@/components/sliders/MediumInnerTitleItem";

export default function CampingPage() {
  return (
    <div className="w-[360px] h-[800px] px-[16px]">
      <div className="grid grid-cols-3 w-full h-[6%] items-center">
        <Link className="flex justify-start" href="">
          <Image src={left} alt="left" />
        </Link>
        <div className="flex justify-center">
          <CategoryTitle label="캠핑" />
        </div>
      </div>
      <div className="w-full h-[35%] pt-3">
        <div className="flex flex-col items-start justify-center px-4">
          <SubInfoTypo label="ABOUT CAMPING" />
          <div className="flex items-center place-content-between w-full">
            <div className="text-subtitle3 text-gray-800">
              <span className="text-primary-core">휴일</span>이 추천하는 강릉
              캠핑
            </div>
            <Link href="" className="text-caption2 text-gray-800">
              더보기 &gt;
            </Link>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col w-full h-[46%] px-2">
        <div className="flex flex-row gap-2">
          <Image src={Mountain} alt="mountain" />
          <Image src={Private} alt="private" />
        </div>
        <span className="text-primary-core text-subtitle3">
          푸른 산 속에서 캠핑 하룻밤
        </span>
        <span className="text-gray-800 text-caption2">
          #산 속 캠핑 #낭만적인 캠핑
        </span>
        {/* 아래 div: 카드 컴포넌트 div (grid 2x2) */}
        <div className="grid grid-cols-2 grid-rows-2 w-full items-center"></div>
      </div>
      <div className="flex flex-col w-full h-[46%] px-2">
        <div className="flex items-center place-content-between w-full">
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
        <div className="w-full whitespace-nowrap overflow-x-auto flex gap-x-[8px] scrollbar-hide"></div>
      </div>
    </div>
  );
}
