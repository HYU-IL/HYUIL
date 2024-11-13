import { GrPrevious } from "react-icons/gr";
import CategoryTitle from "@/components/common/CategoryTitle";
import Image from 'next/image';
import { VscHeartFilled } from "react-icons/vsc";


interface ViewMoreContent{
    imgurl:string; 
    title:string; 
    subtitle:string; 
    info1: string; 
    info2: string; 
    like:boolean;
    private: boolean;
    mountain: boolean;
    ocean: boolean;
}

interface ViewMoreProps{
    title:string;
    contents: ViewMoreContent[];

}

// 컴포넌트 사용 법
// <ViewMore title={"휴일이 추천하는 강원 캠핑"} contents={contents}/>

// contents 형식
// const contents = [
//   {imgurl:"/hotelImage.png", title:"강릉 디프라이빗 캠핑", subtitle:"글램핑 · 카라반 · 캠핑", info1:"주차, 와이파이 가능", info2:"숙소 최대 인원 3명", like:false, private:true, mountain:true, ocean:false},
//   {imgurl:"/hotelImage.png", title:"강릉 두부 축제", subtitle:"11월 강릉 축제", info1:"오후 1-6시", info2:"11월 25일 토요일", like:true, private:false, mountain:false, ocean:true},
// ]



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
                        <div className="mb-[8px] flex">
                            {content.private && <Image src="/assets/icons/Private.svg" width={51} height={24} alt="프라이빗"/>}
                            {content.mountain && <Image src="/assets/icons/Mountain.svg" width={64} height={24} alt="마운틴"/>}
                        </div>
                        <p className="text-caption2 text-gray-700">{content.subtitle}</p>
                        <p className="text-subtitle3">{content.title}</p>
                    </div>
                    <div className="w-full flex flex-col items-end">
                        <div className="w-[28px] h-[28px] rounded-[8px] my-[5px] bg-gray-400 flex justify-center items-center">
                            <VscHeartFilled className={`text-[25px] ${content.like ? "text-system-red" : "text-gray-500"}`}/>
                        </div>
                        <p className="text-caption3 text-primary-core"> {content.info1 && content.info1}</p>
                        <p className="text-caption1 text-gray-600">{content.info2 && content.info2}</p>
                    </div>
                    
                </div>


            </div>
        ))}




    </div>
  );
}