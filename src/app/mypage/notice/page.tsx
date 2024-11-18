import { GrPrevious } from "react-icons/gr";
import CategoryTitle from "@/components/common/CategoryTitle";


export default function Notice() {
  return (
    <div className="w-full h-[100vh]">
        <div className="relative flex justify-between items-center p-[14px] border-b border-[#ededed]">
            <GrPrevious className="ml-0 w-[20px] h-[20px] text-gray-600"/>
            <div className="absolute left-1/2 transform -translate-x-1/2 text-primary-core text-title2">공지사항</div>
        </div>
        <div className="w-[90%] m-auto">
            <div className="w-full my-[30px]">
                <div className="w-full h-[80vh] bg-[url('/assets/images/balloon.svg')] bg-no-repeat bg-[center_top_15vh] flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center my-[20px]">
                        <div className="text-title2 m-[5px]">새로운 공지가 없어요</div>
                        <div className="text-subtitle2 text-gray-700">공지가 도착하면 바로 알려드릴게요</div>
                    </div>
                </div>
               
            </div>
        </div>




    </div>
  );
}
