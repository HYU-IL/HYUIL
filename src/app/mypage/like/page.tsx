"use client";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { GrPrevious } from "react-icons/gr";
import {LikeData} from "@/data/likeData";

const LikeList = LikeData;

export default function Like() {
    const router = useRouter();

    const handleBack = () => {
      router.back();
    };

  return (
    <div className="w-full h-[100vh]">
      <div className="relative flex justify-between items-center p-[14px] border-b border-[#ededed]">
            <GrPrevious className="ml-0 w-[20px] h-[20px] text-gray-600" onClick={handleBack}/>
            <div className="absolute left-1/2 transform -translate-x-1/2 text-primary-core text-title2">나의 찜</div>
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
              <button className="bg-primary-300 text-white text-subtitle1 w-[150px] h-[36px] rounded-[4px]">워케이션 둘러보기</button>
            </div>
          ) : (
            <>
              <div className="flex my-[15px] items-center">
                <Image src="/assets/icons/PinkHeart.svg" width={16} height={16} alt="찜 목록 아이콘" className="mr-[3px]" />
                <span className="text-gray-900 text-subtitle3 text-center">나의 찜 목록</span>
              </div>
              {LikeList.map((like, index) => (
                <div key={index} className="flex my-[20px]">
                  <div className="w-[80px] h-[80px] min-w-[80px] bg-[#f2f2f2] rounded-[4px] overflow-hidden relative">
                    {like.image ? (
                      <Image src={like.image} alt={`${like.name} 이미지`} fill className="object-cover" />
                    ) : null}
                  </div>
                  <div className="mt-[0px] ml-[16px]">
                    <p className="text-gray-700 text-caption2">{like.category}</p>
                    <p className="text-gray-900 text-subtitle3">{like.name}</p>
                    <p className="text-primary-core text-caption3 my-[4px]">{like.rdmn_adr}</p>
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
