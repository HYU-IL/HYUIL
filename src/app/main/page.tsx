import Banner from "../../components/sliders/Banner";
import LargeListItem from "@/components/sliders/LargeListItem";
import MediumInnerTitleItem from "@/components/sliders/MediumInnerTitleItem";
import MediumListItem from "@/components/sliders/MediumListItem";
import SmallListItem from "@/components/sliders/SmallListItem";
import { GrFormNext } from "react-icons/gr";

export default function Main() {
    return (
      <div className="w-full ">
        <div className="w-full flex justify-between">
          <img src={"/assets/icons/MainLogo.svg"} className="mx-[24px]"/>
          <div className="w-[50%] flex justify-between bg-[#ededed]">
            <div className="bg-white w-[20%] rounded-br-[24px]"></div>
            <div className="bg-white w-[80%]">
              <div className="flex h-[46px] bg-[#ededed] justify-center rounded-tl-[23px]">
                <button className="bg-white w-[44px] h-[44px] m-[3px] rounded-[13px] border-[0.5px] border-[#dbdbdb] flex justify-center items-center">
                  <img src={"assets/icons/User.svg"}/>
                </button>
                <button className="bg-white w-[44px] h-[44px] m-[3px] rounded-[13px] border-[0.5px] border-[#dbdbdb] flex justify-center items-center">
                  <img src={"/assets/icons/Bell.svg"}/>
                </button>
              </div>
            </div>
            
          </div>
         
        </div>
        <div className="w-full bg-[#ededed] rounded-tl-[24px] rounded-b-[12px]">
          <div className="text-caption3 mx-[24px] pt-[15px] text-gray-600">ABOUT WORKERS</div>
          <div className="text-subtitle3 text-secondary-core mx-[24px] pb-[10px]">원하는 휴일을 선택하세요</div>
          <div className="flex justify-center my-[5px]">
            <div className="w-[96px] h-[96px] bg-white rounded-[16px] border-[0.5px] border-[#dbdbdb] flex flex-col justify-center items-center mx-[6px]  my-[3px]">
              <img src={"/assets/icons/WorkationIcon.svg"}/>
              <p className="text-body2 m-[1px]">워케이션</p>
              <p className="text-caption3 text-gray-500">공유오피스와 숙박</p>
            </div>
            <div className="w-[96px] h-[96px] bg-white rounded-[16px] border-[0.5px] border-[#dbdbdb] flex flex-col justify-center items-center mx-[6px]  my-[3px]">
              <img src={"/assets/icons/CampingIcon.svg"}/>
              <p className="text-body2 m-[1px]">캠핑</p>
              <p className="text-caption3 text-gray-500">녹지와 푸른 숲</p>
            </div>
            <div className="w-[96px] h-[96px] bg-white rounded-[16px] border-[0.5px] border-[#dbdbdb] flex flex-col justify-center items-center mx-[6px]  my-[3px]">
              <img src={"/assets/icons/RecreationIcon.svg"}/>
              <p className="text-body2 m-[1px]">휴양</p>
              <p className="text-caption3 text-gray-500">해변과 템플스테이</p>
            </div>
          </div>
          <div className="flex justify-center my-[5px]">
            <div className="w-[96px] h-[96px] bg-white rounded-[16px] border-[0.5px] border-[#dbdbdb] flex flex-col justify-center items-center mx-[6px]  my-[3px]">
              <img src={"/assets/icons//MapIcon.svg"}/>
              <p className="text-body2 m-[1px]">지도선택</p>
              <p className="text-caption3 text-gray-500">탐색</p>
            </div>
            <div className="w-[96px] h-[96px] bg-white rounded-[16px] border-[0.5px] border-[#dbdbdb] flex flex-col justify-center items-center mx-[6px]  my-[3px]">
              <img src={"/assets/icons/LeisureIcon.svg"}/>
              <p className="text-body2 m-[1px]">레저</p>
              <p className="text-caption3 text-gray-500">스포츠와 놀이</p>
            </div>
            <div className="w-[96px] h-[96px] bg-white rounded-[16px] border-[0.5px] border-[#dbdbdb] flex flex-col justify-center items-center mx-[6px] my-[3px]">
              <img src={"/assets/icons/FestivalIcon.svg"}/>
              <p className="text-body2 m-[1px]">지역축제</p>
              <p className="text-caption3 text-gray-500">강원 페스티벌</p>
            </div>
          </div>
          <div className="my-[20px]">
            <Banner/>
          </div>
        </div>

        <div>
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
                <button className="text-caption2 text-gray-800 mx-[10px] flex items-center">
                  <span>더보기</span><GrFormNext className="text-[13px]"/>
                </button>
            </div>
          </div>
          <div className="whitespace-nowrap overflow-x-auto flex gap-x-[8px] scrollbar-hide">
            <LargeListItem label={"쉼으로 가득한 반식욕 공간 강릉 핫플레이스 하우스"}/>
            <LargeListItem label={"쉼으로 가득한 반식욕 공간 강릉 핫플레이스 하우스"}/>
            <LargeListItem label={"쉼으로 가득한 반식욕 공간 강릉 핫플레이스 하우스"}/>
            <LargeListItem label={"쉼으로 가득한 반식욕 공간 강릉 핫플레이스 하우스"}/>
            <LargeListItem label={"쉼으로 가득한 반식욕 공간 강릉 핫플레이스 하우스"}/>
            <LargeListItem label={"쉼으로 가득한 반식욕 공간 강릉 핫플레이스 하우스"}/>
          </div>

          <div className="h-[40px]"/>

          <div className="flex justify-between items-center ">
            <div className="text-primary-900 text-title2 my-[7px]">강원도의 가을 축제</div>
            <button className="text-caption2 text-gray-800 mx-[10px] flex items-center">
              <span>더보기</span><GrFormNext className="text-[13px]"/>
            </button>
          </div>
          <div className="whitespace-nowrap overflow-x-auto flex gap-x-[8px] scrollbar-hide">
            <SmallListItem label={"강릉 모던 프라이빗"} imgurl={"/hotelImage.png"}/>
            <SmallListItem label={"강릉 모던 프라이빗"} imgurl={"/hotelImage.png"}/>
            <SmallListItem label={"강릉 모던 프라이빗"} imgurl={"/hotelImage.png"}/>
            <SmallListItem label={"강릉 모던 프라이빗"} imgurl={"/hotelImage.png"}/>
            <SmallListItem label={"강릉 모던 프라이빗"} imgurl={"/hotelImage.png"}/>
            <SmallListItem label={"강릉 모던 프라이빗"} imgurl={"/hotelImage.png"}/>
          </div>

          <div className="h-[40px]"/>

          <div className="flex justify-between items-center">
            <div className="">
              <span className="text-primary-core text-title2">놀면서 일하자! </span>
              <span className="text-primary-900 text-title2"> 인기 워케이션</span>
            </div>
              <button className="text-caption2 text-gray-800 mx-[10px] flex items-center">
                <span>더보기</span><GrFormNext className="text-[13px]"/>
              </button>
          </div>
          <div className="text-gray-700 text-subtitle3 mb-[7px]">#호캉스 #프라이빗 공간</div>
          <div className="whitespace-nowrap overflow-x-auto flex gap-x-[8px] scrollbar-hide">
            <MediumInnerTitleItem/>
            <MediumInnerTitleItem/>
            <MediumInnerTitleItem/>
            <MediumInnerTitleItem/>
            <MediumInnerTitleItem/>
            <MediumInnerTitleItem/>
          </div>

          <div className="h-[40px]"/>

          <div className="flex justify-between items-center mb-[10px]">
          <div className="text-primary-900 text-title2 my-[7px]">이번주 HOT 인기 레저활동</div>
            <button className="text-caption2 text-gray-800 mx-[10px] flex items-center">
              <span>더보기</span><GrFormNext className="text-[13px]"/>
            </button>
          </div>
          <div className="whitespace-nowrap overflow-x-auto flex gap-x-[8px] scrollbar-hide">
            <MediumListItem label={"강릉 모던 프라이빗 공간 | 휴휴가"} imgurl={"/hotelImage.png"} addr={"강릉시 황리단 민속마을"}/>
            <MediumListItem label={"강릉 모던 프라이빗 공간 | 휴휴가"} imgurl={"/hotelImage.png"} addr={"강릉시 황리단 민속마을"}/>
            <MediumListItem label={"강릉 모던 프라이빗 공간 | 휴휴가"} imgurl={"/hotelImage.png"} addr={"강릉시 황리단 민속마을"}/>
            <MediumListItem label={"강릉 모던 프라이빗 공간 | 휴휴가"} imgurl={"/hotelImage.png"} addr={"강릉시 황리단 민속마을"}/>
            <MediumListItem label={"강릉 모던 프라이빗 공간 | 휴휴가"} imgurl={"/hotelImage.png"} addr={"강릉시 황리단 민속마을"}/>
            <MediumListItem label={"강릉 모던 프라이빗 공간 | 휴휴가"} imgurl={"/hotelImage.png"} addr={"강릉시 황리단 민속마을"}/>
          </div>
        </div>
      </div>
    );
  }