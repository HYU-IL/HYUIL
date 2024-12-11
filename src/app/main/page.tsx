import Banner from "@/components/sliders/Banner";
import LargeListItem from "@/components/sliders/LargeListItem";
import MediumInnerTitleItem from "@/components/sliders/MediumInnerTitleItem";
import MediumListItem from "@/components/sliders/MediumListItem";
import SmallListItem from "@/components/sliders/SmallListItem";
import { GrFormNext } from "react-icons/gr";
import Link from 'next/link';
import {campingData} from "@/data/campingData"; 
import {festivalData} from "@/data/festivalData"; 
import {leisureData} from "@/data/leisureData"; 
import {workationData} from "@/data/workationData"; 
import Image from "next/image";

export default function Main() {

  const MenuOptions = [
    { icon: "/assets/icons/WorkationIcon.svg", title: "워케이션", description: "공유오피스와 숙박", url:"/workation" },
    { icon: "/assets/icons/CampingIcon.svg", title: "캠핑", description: "녹지와 푸른 숲", url:"/camping" },
    { icon: "/assets/icons/RecreationIcon.svg", title: "휴양", description: "해변과 템플스테이", url:"/resort" },
    { icon: "/assets/icons/MapIcon.svg", title: "지도선택", description: "탐색", url:"/select-map" },
    { icon: "/assets/icons/LeisureIcon.svg", title: "레저", description: "스포츠와 놀이", url:"/leisure" },
    { icon: "/assets/icons/FestivalIcon.svg", title: "지역축제", description: "강원 페스티벌", url:"/festival" },
];

  const workation_data = workationData;
  const festival_data = festivalData
  const camping_data = campingData;
  const leisure_data = leisureData;

  function season (){
    const today = new Date();
    const month = Number(today.getMonth()+1);
    
    if(3 <= month && month <= 4) return "봄";
    else if (5 <= month && month <= 8) return "여름";
    else if (9 <= month && month <= 10) return "가을";
    else if (11 <= month && month <= 12 || 1 <= month && month <=2 ) return "겨울";
  }

    return (
      <div className="w-full ">
        <div className="w-full flex justify-between">
          <Image src={"/assets/icons/MainLogo.svg"} width={125} height={22} className="mx-[24px]" alt="mainlogo"/>
          <div className="w-[50%] flex justify-between bg-[#ededed]">
            <div className="bg-white w-[20%] rounded-br-[24px]"></div>
            <div className="bg-white w-[80%]">
              <div className="flex h-[46px] bg-[#ededed] justify-center rounded-tl-[23px]">
                <button className="bg-white w-[44px] h-[44px] m-[3px] rounded-[13px] border-[0.5px] border-[#dbdbdb] flex justify-center items-center">
                  <Link href="/mypage"><Image src={"assets/icons/User.svg"} width={29} height={29} alt="user"/></Link>
                </button>
                <button className="bg-white w-[44px] h-[44px] m-[3px] rounded-[13px] border-[0.5px] border-[#dbdbdb] flex justify-center items-center">
                  <Link href="/foothold"><Image src={"/assets/icons/Location.svg"} width={25} height={25} alt="location"/></Link>
                </button>
              </div>
            </div>
            
          </div>
         
        </div>
        <div className="w-full bg-[#ededed] rounded-tl-[24px] rounded-b-[12px]">
          <div className="text-caption3 mx-[24px] pt-[15px] text-gray-600">ABOUT WORKERS</div>
          <div className="text-subtitle3 text-secondary-core mx-[24px] pb-[10px]">원하는 휴일을 선택하세요</div>
          <div className="flex justify-center my-[5px] flex-wrap">
            {MenuOptions.map((option, index) => (
              <Link href={option.url} key={index}>
              <div className="w-[96px] h-[96px] bg-white rounded-[16px] border-[0.5px] border-[#dbdbdb] flex flex-col justify-center items-center mx-[6px] my-[3px]">
                <Image src={option.icon} width={53} height={53} alt="category"/>
                <p className="text-body2 m-[1px]">{option.title}</p>
                <p className="text-caption3 text-gray-500">{option.description}</p>
              </div>
              </Link>
            ))}
          </div>

          <div className="my-[20px]">
            <Banner />
          </div>
        </div>

        <div className="ml-[16px]">
          <div>
            <div className="flex my-[2px]">
              <Image src={"/assets/icons/HotPlace.svg"} className="mr-[3px]" alt="hotplace" width={62} height={24}/>
            </div>
            <div className="flex justify-between items-center">
              <div className="my-[7px]">
                <span className="text-primary-core text-title2">놀면서 일하자! </span>
                <span className="text-primary-900 text-title2"> 인기 워케이션</span>
              </div>
              <Link href="/workation">
                <button className="text-caption2 text-gray-800 mx-[10px] flex items-center">
                  <span>더보기</span><GrFormNext className="text-[13px]"/>
                </button>
              </Link>
            </div>
          </div>
          <div className="whitespace-nowrap overflow-x-auto flex gap-x-[8px] scrollbar-hide">
          {workation_data.map((place, index) => (
              <Link href="../detail/workation"><LargeListItem key={index} label={place.name} imgurl={place.image}/></Link>
            ))}
          </div>

          <div className="h-[40px]"/>

          <div className="flex justify-between items-center ">
            <div className="text-primary-900 text-title2 my-[7px]">강원도의 {season()} 축제</div>
            <Link href="/festival">
              <button className="text-caption2 text-gray-800 mx-[10px] flex items-center">
                <span>더보기</span><GrFormNext className="text-[13px]"/>
              </button>
            </Link>
          </div>
          <div className="whitespace-nowrap overflow-x-auto flex gap-x-[8px] scrollbar-hide">
          {festival_data.map((item, index) => (
              <Link href="../detail/festival"><SmallListItem key={index} label={item.name} imgurl={item.image} /></Link>
            ))}
          </div>

          <div className="h-[40px]"/>

          <div className="flex justify-between items-center mb-[7px]">
            <div className=" ">
              <span className="text-primary-core text-title2">캠핑하면서 일하자! </span>
              <span className="text-primary-900 text-title2"> 인기 캠핑</span>
            </div>
            <Link href="/camping">
              <button className="text-caption2 text-gray-800 mx-[10px] flex items-center">
                <span>더보기</span><GrFormNext className="text-[13px]"/>
              </button>
            </Link>
          </div>
          <div className="whitespace-nowrap overflow-x-auto flex gap-x-[8px] scrollbar-hide">
          {camping_data.map((item, index) => (
              <Link href="/detail/camping"><MediumInnerTitleItem key={index} label={item.name} imgurl={item.image} /></Link>
            ))}
          </div>

          <div className="h-[40px]"/>

          <div className="flex justify-between items-center mb-[10px]">
          <div className="text-primary-900 text-title2 my-[7px]">이번주 HOT 인기 레저활동</div>
          <Link href="/leisure">
            <button className="text-caption2 text-gray-800 mx-[10px] flex items-center">
              <span>더보기</span><GrFormNext className="text-[13px]"/>
            </button>
            </Link>
          </div>
          <div className="whitespace-nowrap overflow-x-auto flex gap-x-[8px] scrollbar-hide">
          {leisure_data.map((item, index) => (
              <Link href="/detail/leisure"><MediumListItem key={index} label={item.name} imgurl={item.image} addr={""} /></Link>
            ))}
          </div>
        </div>
        <div className="h-[40px]"/>
        <div className="w-full h-[200px] bg-gray-400"/>
      </div>
    );
  }