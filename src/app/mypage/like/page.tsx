import CategoryTitle from "@/components/common/CategoryTitle";
import { GrPrevious } from "react-icons/gr";

const LikeList = [
    {name:"강릉 디프라이빗 캠핑 & 글램핑", address:"강릉 수성읍 경반리 583-17", subtitle:"글램핑 · 카라반 · 캠핑", imgurl:""},
    {name:"강릉 디프라이빗 캠핑 & 글램핑", address:"강릉 수성읍 경반리 583-17", subtitle:"글램핑 · 카라반 · 캠핑", imgurl:""},
]

export default function Like() {
  return (
    <div className="w-full h-[100vh]">
       <div className="flex items-center p-[14px] border-b border-[#ededed] sticky top-0 bg-white">
          <GrPrevious className="w-[20px] h-[20px] text-gray-600" />
          <div className="flex-1 text-center">
            <CategoryTitle label="나의 찜" />
          </div>
        </div>
        <div className="w-[90%] m-auto">
            <div className="w-full my-[30px]">
                {LikeList.length === 0 ? (
                    <div className="w-full h-[80vh] bg-[url('/assets/images/tree.svg')] bg-no-repeat bg-[center_top_10vh] flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center items-center my-[20px]">
                            <div className="text-title2">나의 찜이 없어요</div>
                            <div className="text-subtitle2 text-gray-700">아래 워케이션 둘러보기 누르면</div>
                            <div className="text-subtitle2 text-gray-700">여러분이 좋아할만 한 휴일을 볼 수 있어요</div>
                        </div>
                        <button className="bg-primary-300 text-white text-subtitle1 w-[150px] h-[36px] rounded-[4px] ">워케이션 둘러보기</button>
                    </div>
                ) : (
                    <>
                    <div  className="flex my-[15px] items-center">
                        <img src={"/assets/icons/PinkHeart.svg"} className="mr-[3px]"/>
                        <span className="text-gray-900 text-subtitle3 text-center">나의 찜 목록</span>
                    </div>
                     {LikeList.map((like) => (
                        <div className="flex my-[20px]">
                           <div className="w-[80px] h-[80px] bg-[#f2f2f2] rounded-[4px] overflow-hidden">
                                {like.imgurl ? (
                                    <img src={like.imgurl} className="w-full h-full object-cover" />
                                ) : null}
                            </div>
                            <div className="mt-[0px] ml-[16px]">
                                <p className="text-gray-700 text-caption2">{like.subtitle}</p>
                                <p className="text-gray-900 text-subtitle3">{like.name}</p>
                                <p className="text-primary-core text-caption3 my-[4px]">{like.address}</p>
                            </div>
                        </div>
                    ))}
                    </>
                )}
            </div>
        </div>




    </div>
  );
}