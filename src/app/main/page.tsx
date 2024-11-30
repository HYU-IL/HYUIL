import Banner from "@/components/sliders/Banner";
import LargeListItem from "@/components/sliders/LargeListItem";
import MediumInnerTitleItem from "@/components/sliders/MediumInnerTitleItem";
import MediumListItem from "@/components/sliders/MediumListItem";
import SmallListItem from "@/components/sliders/SmallListItem";
import { GrFormNext } from "react-icons/gr";
import Link from 'next/link';

export default function Main() {

  const MenuOptions = [
    { icon: "/assets/icons/WorkationIcon.svg", title: "워케이션", description: "공유오피스와 숙박", url:"/workation" },
    { icon: "/assets/icons/CampingIcon.svg", title: "캠핑", description: "녹지와 푸른 숲", url:"/camping" },
    { icon: "/assets/icons/RecreationIcon.svg", title: "휴양", description: "해변과 템플스테이", url:"/resort" },
    { icon: "/assets/icons/MapIcon.svg", title: "지도선택", description: "탐색", url:"/select-map" },
    { icon: "/assets/icons/LeisureIcon.svg", title: "레저", description: "스포츠와 놀이", url:"/leisure" },
    { icon: "/assets/icons/FestivalIcon.svg", title: "지역축제", description: "강원 페스티벌", url:"/festival" },
];

  const largeListItem = [
    { label: "쉼으로 가득한 반식욕 공간 강릉 핫플레이스 하우스" },
    { label: "쉼으로 가득한 반식욕 공간 강릉 핫플레이스 하우스" },
    { label: "쉼으로 가득한 반식욕 공간 강릉 핫플레이스 하우스" },
    { label: "쉼으로 가득한 반식욕 공간 강릉 핫플레이스 하우스" },
    { label: "쉼으로 가득한 반식욕 공간 강릉 핫플레이스 하우스" },
    { label: "쉼으로 가득한 반식욕 공간 강릉 핫플레이스 하우스" },
  ];

  const smallListItems = [
    { label: "강릉 모던 프라이빗", imgurl: "/hotelImage.png" },
    { label: "강릉 모던 프라이빗", imgurl: "/hotelImage.png" },
    { label: "강릉 모던 프라이빗", imgurl: "/hotelImage.png" },
    { label: "강릉 모던 프라이빗", imgurl: "/hotelImage.png" },
    { label: "강릉 모던 프라이빗", imgurl: "/hotelImage.png" },
    { label: "강릉 모던 프라이빗", imgurl: "/hotelImage.png" },
  ];

  const mediumInnerTitleItems = [
    { label: "강릉시 황리단 민속마을" },
    { label: "강릉시 황리단 민속마을" },
    { label: "강릉시 황리단 민속마을" },
    { label: "강릉시 황리단 민속마을" },
    { label: "강릉시 황리단 민속마을" },
    { label: "강릉시 황리단 민속마을" },
  ];

  const mediumListItems = [
    { label: "강릉 모던 프라이빗 공간 | 휴휴가", imgurl: "/hotelImage.png", addr: "강릉시 황리단 민속마을" },
    { label: "강릉 모던 프라이빗 공간 | 휴휴가", imgurl: "/hotelImage.png", addr: "강릉시 황리단 민속마을" },
    { label: "강릉 모던 프라이빗 공간 | 휴휴가", imgurl: "/hotelImage.png", addr: "강릉시 황리단 민속마을" },
    { label: "강릉 모던 프라이빗 공간 | 휴휴가", imgurl: "/hotelImage.png", addr: "강릉시 황리단 민속마을" },
    { label: "강릉 모던 프라이빗 공간 | 휴휴가", imgurl: "/hotelImage.png", addr: "강릉시 황리단 민속마을" },
    { label: "강릉 모던 프라이빗 공간 | 휴휴가", imgurl: "/hotelImage.png", addr: "강릉시 황리단 민속마을" },
  ];

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
          <img src={"/assets/icons/MainLogo.svg"} className="mx-[24px]"/>
          <div className="w-[50%] flex justify-between bg-[#ededed]">
            <div className="bg-white w-[20%] rounded-br-[24px]"></div>
            <div className="bg-white w-[80%]">
              <div className="flex h-[46px] bg-[#ededed] justify-center rounded-tl-[23px]">
                <button className="bg-white w-[44px] h-[44px] m-[3px] rounded-[13px] border-[0.5px] border-[#dbdbdb] flex justify-center items-center">
                  <Link href="/mypage"><img src={"assets/icons/User.svg"}/></Link>
                </button>
                <button className="bg-white w-[44px] h-[44px] m-[3px] rounded-[13px] border-[0.5px] border-[#dbdbdb] flex justify-center items-center">
                  <Link href="/mypage/alert"><img src={"/assets/icons/Bell.svg"}/></Link>
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
              <Link href={option.url}>
              <div key={index} className="w-[96px] h-[96px] bg-white rounded-[16px] border-[0.5px] border-[#dbdbdb] flex flex-col justify-center items-center mx-[6px] my-[3px]">
                <img src={option.icon} />
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
              <img src={"/assets/icons/HotPlace.svg"} className="mr-[3px]"/>
              <img src={"/assets/icons/CityView.svg"} className="mx-[3px]"/>
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
          {largeListItem.map((place, index) => (
              <LargeListItem key={index} label={place.label} />
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
          {smallListItems.map((item, index) => (
              <SmallListItem key={index} label={item.label} imgurl={item.imgurl} />
            ))}
          </div>

          <div className="h-[40px]"/>

          <div className="flex justify-between items-center">
            <div className="">
              <span className="text-primary-core text-title2">놀면서 일하자! </span>
              <span className="text-primary-900 text-title2"> 인기 워케이션</span>
            </div>
            <Link href="/workation">
              <button className="text-caption2 text-gray-800 mx-[10px] flex items-center">
                <span>더보기</span><GrFormNext className="text-[13px]"/>
              </button>
            </Link>
          </div>
          <div className="text-gray-700 text-subtitle3 mb-[7px]">#호캉스 #프라이빗 공간</div>
          <div className="whitespace-nowrap overflow-x-auto flex gap-x-[8px] scrollbar-hide">
          {mediumInnerTitleItems.map((item, index) => (
              <MediumInnerTitleItem key={index} label={item.label} />
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
          {mediumListItems.map((item, index) => (
              <MediumListItem key={index} label={item.label} imgurl={item.imgurl} addr={item.addr} />
            ))}
          </div>
        </div>
        <div className="h-[40px]"/>
        <div className="w-full h-[200px] bg-gray-400"/>
      </div>
    );
  }