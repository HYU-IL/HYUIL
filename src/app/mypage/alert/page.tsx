import { GrPrevious } from "react-icons/gr";
import CategoryTitle from "@/components/common/CategoryTitle";


export default function Alert() {
  return (
    <div className="w-full h-[100vh]">
        <div className="flex items-center p-[14px] border-b border-[#ededed] sticky top-0 bg-white">
          <GrPrevious className="w-[20px] h-[20px] text-gray-600" />
          <div className="flex-1 text-center">
            <CategoryTitle label="알림함" />
          </div>
        </div>
        <div className="w-[90%] m-auto">
            <div className="w-full my-[30px]">
                <div className="w-full h-[80vh] bg-[url('/assets/images/balloon.svg')] bg-no-repeat bg-[center_top_15vh] flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center my-[20px]">
                        <div className="text-title2 m-[5px]">새로운 알림이 없어요</div>
                        <div className="text-subtitle2 text-gray-700">알림이 도착하면 바로 알려드릴게요</div>
                    </div>
                </div>
               
            </div>
        </div>




    </div>
  );
}
