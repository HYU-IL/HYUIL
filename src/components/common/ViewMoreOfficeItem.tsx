import { VscHeartFilled } from "react-icons/vsc";
import Image from 'next/image';

interface ViewMoreOfficeProps{
    imgurl: string;
    address: string;
    name: string;
    liked: boolean;
    wifi: boolean;
    parkinglot: boolean;
    time: string; 
    popular: boolean;
    mountain: boolean;
    ocean: boolean;

}

export default function ViewMoreOfficeItem({imgurl, address, name, wifi, parkinglot, time, liked, popular, mountain, ocean} : ViewMoreOfficeProps) {

    return (
            <div className="border-b flex py-[16px]">
                <div className="w-[130px] h-[170px] rounded-[8px] bg-gray-400 flex-shrink-0 ml-[24px] mr-[18px] relative overflow-hidden">
                    {imgurl ? 
                    <Image
                    src={imgurl}
                    alt="이미지"
                    layout="fill"
                    objectFit="cover"
                    />
                    :
                    <></>}
                </div>
                <div className="flex flex-col w-full justify-between mr-[24px]">
                    <div className=" w-full">
                        <div className="mb-[8px] flex">
                            {popular && <Image src="/assets/icons/Popular.svg" width={51} height={24} alt="popular" className="mx-[2px]"/>}
                            {mountain && <Image src="/assets/icons/Mountain.svg" width={64} height={24} alt="mountain" className="mx-[2px]"/>}
                            {ocean && <Image src="/assets/icons/Ocean.svg" width={47} height={24} alt="ocean" className="mx-[2px]"/>}
                        </div>
                        <p className="text-caption2 text-primary-900">강릉시 공유 오피스</p>
                        <p className="text-subtitle3 text-primary-900">{name}</p>
                        <p className="text-caption2 text-gray-700">공유 오피스</p>
                    </div>
                    <div className="w-full flex flex-col items-end">
                        <div className="w-[28px] h-[28px] rounded-[8px] my-[5px] bg-gray-400 flex justify-center items-center">
                            <VscHeartFilled className={`text-[25px] ${liked ? "text-system-red" : "text-gray-500"}`}/>
                        </div>
                        <p className="text-caption3 text-primary-core"> 
                        {
                            wifi && parkinglot
                            ? "주차 · 와이파이 가능"
                            : wifi
                            ? "와이파이 가능"
                            : parkinglot
                            ? "주차 가능"
                            : ""
                        }
                        </p>
                        <p className="text-caption1 text-gray-600">운영시간: {time}</p>
                    </div>
                    
                </div>
      </div>
    );
  }