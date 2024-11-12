import { GrPrevious } from "react-icons/gr";
import CategoryTitle from "@/components/common/CategoryTitle";
import Image from 'next/image';
import { VscHeartFilled } from "react-icons/vsc";


interface ViewMoreContent{
    imgurl:string;
    name:string;
    type:string;
    capacity: number;
    parking:boolean;
    wifi:boolean;
    like:boolean;
}

interface ViewMoreProps{
    title:string;
    contents: ViewMoreContent[];

}


export default function ViewMore({title, contents} : ViewMoreProps) {
  return (
    <div className="w-full">
        <div className="flex items-center p-[14px] border-b border-[#ededed] sticky top-0 bg-white z-10">
          <GrPrevious className="w-[20px] h-[20px] text-gray-600" />
          <p className="text-title2 mx-[10px]">{title}</p>
        </div>
        {contents.map((content, index) => (
            <div className="border-b flex py-[16px]">
                <div className="w-[130px] h-[170px] rounded-[8px] bg-gray-400 flex-shrink-0 ml-[24px] mr-[18px] relative overflow-hidden">
                    {content.imgurl ? 
                    <Image
                    src={content.imgurl}
                    alt="이미지"
                    layout="fill"
                    objectFit="cover"
                    />
                    :
                    <></>}
                </div>
                <div className="flex flex-col w-full justify-between mr-[24px]">
                    <div className=" w-full">
                        <div className="mb-[8px]">
                            <Image src="/assets/icons/Private.svg" width={51} height={24} alt="프라이빗"/>
                        </div>
                        <p className="text-caption2 text-gray-700">{content.type}</p>
                        <p className="text-subtitle3">{content.name}</p>
                    </div>
                    <div className="w-full flex flex-col items-end">
                        <div className="w-[28px] h-[28px] rounded-[8px] my-[5px] bg-gray-400 flex justify-center items-center">
                            <VscHeartFilled className={`text-[25px] ${content.like ? "text-system-red" : "text-gray-500"}`}/>
                        </div>
                        <p className="text-caption3 text-primary-core"> {content.parking && content.wifi
                        ? "주차, 와이파이 가능"
                        : content.parking
                        ? "주차 가능"
                        : content.wifi
                        ? "와이파이 가능"
                        : ""}</p>
                        <p className="text-caption1 text-gray-600">숙소 최대 인원 {content.capacity}명</p>
                    </div>
                    
                </div>


            </div>
        ))}




    </div>
  );
}