import Image from "next/image";
import CategoryTitle from "@/components/common/CategoryTitle";
import left from "../../../public/assets/icons/left.svg";
import Link from "next/link";
import SubInfoTypo from "@/components/common/SubInfoTypo";
import MediumCardItem from "@/components/common/MediumCardItem";
import Carousel from "@/components/sliders/Carousel";
import BannerImage1 from "../../../public/assets/images/BannerImage1.svg";
import SmallListItem from "@/components/sliders/SmallListItem";

export default function FestivalPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      {/* 상단바 */}
      <div className="grid grid-cols-3 w-full px-[16px] py-3 items-center">
        <Link href="" className="flex justify-start">
          <Image src={left} alt="left" />
        </Link>
        <div className="flex justify-center">
          <CategoryTitle label="지역축제" />
        </div>
      </div>

      {/* 캐러셀 */}
      <div className="w-full h-[298px] px-[16px] pt-3 border-gray-500 border-t">
        <div className="flex flex-col items-center">
          <SubInfoTypo label="ABOUT FESTIVAL" />
          <div className="flex items-center">
            <div className="text-subtitle3 text-gray-800">
              <span className="text-primary-core">휴일</span>이 추천하는{" "}
              <span className="text-primary-core">11월 강릉축제</span>
            </div>
          </div>
          <div className="w-full flex justify-end px-2">
            <Link href="" className="text-caption2 text-gray-800">
              더보기 &gt;
            </Link>
          </div>
          <div className="flex items-center justify-center w-full h-[248px]">
            {/* <Carousel /> */}
          </div>
        </div>
      </div>

      {/* 광고 div */}
      <div className="w-full whitespace-nowrap overflow-x-auto flex gap-x-[3px] scrollbar-hide pt-4 px-[16px] bg-gray-50">
        <Image src={BannerImage1} alt={""} />
        <Image src={BannerImage1} alt={""} />
        <Image src={BannerImage1} alt={""} />
        <Image src={BannerImage1} alt={""} />
      </div>

      {/* 캠핑 리스트 div */}
      <div className="flex flex-col w-full h-[46%] px-[16px] bg-gray-50 pt-4">
        <div className="flex items-center justify-between w-full pt-2 text-subtitle3">
          <div className="text-subtitle3 text-gray-800">
            <span className="text-primary-core">얼마남지 않은</span> 축제
          </div>
          <Link href="" className="text-caption2 text-gray-800">
            더보기 &gt;
          </Link>
        </div>
        <span className="text-gray-800 text-caption3">
          #허리업 #최고의 축제
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

      {/* 인기 축제 div */}
      <div className="flex flex-col w-full px-[16px] pt-8">
        <SubInfoTypo label="모든 직장인들이 선택한" />
        <div className="flex items-center justify-between w-full text-subtitle3 text-primary-core">
          BEST 인기 축제
          <Link href="" className="text-caption2 text-gray-800">
            더보기 &gt;
          </Link>
        </div>
      </div>
      <div className="w-full whitespace-nowrap overflow-x-auto flex gap-x-[8px] scrollbar-hide pt-3 px-[16px] pb-[50px]">
        <SmallListItem label="강릉 그랑블루요트" imgurl="/tmp.jpg" />
        <SmallListItem label="강릉 그랑블루요트" imgurl="/tmp.jpg" />
        <SmallListItem label="강릉 그랑블루요트" imgurl="/tmp.jpg" />
        <SmallListItem label="강릉 그랑블루요트" imgurl="/tmp.jpg" />
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
