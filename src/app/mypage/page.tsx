import { GrPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

export default function MyPage() {
  return (
    <div className="w-full">
        <div className="relative flex justify-between items-center p-[14px] border-b border-[#ededed]">
            <GrPrevious className="ml-0 w-[20px] h-[20px] text-gray-600"/>
            <div className="absolute left-1/2 transform -translate-x-1/2 text-primary-core text-title2">마이페이지</div>
        </div>

        <div className="border-[1px] border-[#dbdbdb]  w-[90%] rounded-[8px] flex flex-col m-auto my-[10px]">
            <div className="flex m-[10px]">
                <img src={"/assets/icons/CampingIcon.svg"}/>
                <div className="mx-[10px]">
                    <div className="text-caption3 text-gray-600">ABOUT WROKERS</div>
                    <div>
                        <span className="text-subtitle1 text-secondary-700 ">AAA</span> 
                        <span className=" text-secondary-700 font-medium text-[18px]"> 님</span><br/> 
                        <span className=" text-secondary-700 font-medium text-[18px]">안녕하세요</span></div>
                </div>
            </div>
            <div className="flex my-[10px] items-center justify-between">
                <div className="flex flex-col jsutify-center items-center w-[30%]">
                    <img src={"/assets/icons/heart.svg"}/>
                    <div className="text-caption2 text-gray-900 my-[5px]">나의 찜</div>
                </div>
                <span className="text-[18px] text-center m-[10px] text-[#ededed]">|</span>
                <div className="flex flex-col jsutify-center items-center w-[35%]">
                    <img src={"/assets/icons/clock.svg"}/>
                    <div className="text-caption2 text-gray-900 my-[5px]">최근 본 상품</div>
                </div>
                <span className="text-[18px] text-center m-[10px] text-[#ededed]">|</span>
                <div className="flex flex-col jsutify-center items-center w-[30%]">
                    <img src={"/assets/icons/bell.svg"}/>
                    <div className="text-caption2 text-gray-900 my-[5px]">알림함</div>
                </div>
            </div>
        </div>
        <div className="bg-primary-100 w-[90%] h-[50px] bg-[#d3f9da] rounded-[4px] m-auto"></div>
        <div className="w-[90%] m-auto my-[25px]">
            <div className="text-gray-900 text-subtitle3 my-[20px]">내 정보</div>
            <div className="flex justify-between items-center my-[15px]">
                <div className="text-body1 text-gray-900">내 정보 관리</div>
                <GrFormNext className="text-[20px] text-[#767676]"/>
            </div>
            <div className="flex justify-between items-center my-[15px]">
                <div className="text-body1 text-gray-900">나의 워케이션 취향</div>
                <GrFormNext className="text-[20px] text-[#767676]"/>
            </div>
        </div>
        <hr className="w-[90%] m-auto"/>
        <div className="w-[90%] m-auto my-[25px]">
            <div className="text-gray-900 text-subtitle3 my-[20px]">서비스 이용</div>
            <div className="flex justify-between items-center my-[15px]">
            <div className="text-body1 text-gray-900 ">공지사항</div>
                <GrFormNext className="text-[20px] text-[#767676]"/>
            </div>
            <div className="flex justify-between items-center my-[15px]">
                <div className="text-body1 text-gray-900 ">설정</div>
                <GrFormNext className="text-[20px] text-[#767676]"/>
            </div>
        </div>
        <hr className="w-[90%] m-auto"/>
        <div className="w-[90%] m-auto my-[25px]">
            <div className="text-gray-900 text-subtitle3 my-[20px]">고객센터</div>
            <div className="flex justify-between items-center my-[15px]">
                <div className="text-body1 text-gray-900 ">1:1 문의</div>
                <GrFormNext className="text-[20px] text-[#767676]"/>
            </div>
        </div>
    </div>
  );
}
