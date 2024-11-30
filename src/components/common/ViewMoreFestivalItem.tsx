import { VscHeartFilled } from "react-icons/vsc";
import Image from 'next/image';

interface ViewMoreFestivalProps{
    imgurl: string;
    address: string;
    name: string;
    startdate: string; // 2024-11-11
    enddate: string;
    liked: boolean;
    popular: boolean;
    mountain: boolean;
    ocean: boolean;

}

export default function ViewMoreFestivalItem({imgurl, address, name, startdate, enddate, liked, popular, mountain, ocean} : ViewMoreFestivalProps) {

    // 년, 월, 일 추출
    function extractDateComponents(dateString: string): { year: string; month: string; day: string } {
        const [year, month, day] = dateString.split("-"); 
        return { year, month, day }; 
      }

    const { year: syear, month: smonth, day: sday } = extractDateComponents(startdate);
    const { year: eyear, month: emonth, day: eday } = extractDateComponents(enddate); 

    return (
            <div className="border-b flex py-[16px]">
                <div className="w-[130px] h-[170px] rounded-[8px] bg-gray-400 flex-shrink-0 ml-[24px] mr-[18px] relative overflow-hidden">
                    {imgurl ? 
                    <Image 
                    src={imgurl} 
                    alt="이미지" 
                    fill 
                    className="object-cover"
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
                        <p className="text-caption2 text-primary-900">{smonth}월 강원도 축제</p>
                        <p className="text-subtitle3 text-primary-900">{name}</p>
                    </div>
                    <div className="w-full flex flex-col items-end">
                        <div className="w-[28px] h-[28px] rounded-[8px] my-[5px] bg-gray-400 flex justify-center items-center">
                            <VscHeartFilled className={`text-[25px] ${liked ? "text-system-red" : "text-gray-500"}`}/>
                        </div>
                        <p className="text-caption3 text-primary-core"> 개최장소 : {address}</p>
                        <p className="text-caption1 text-gray-600">{syear}.{smonth}.{sday}~{eyear}.{emonth}.{eday}</p>
                    </div>
                    
                </div>
      </div>
    );
  }