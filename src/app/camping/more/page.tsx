import ViewMoreCampingItem from "@/components/common/ViewMoreCampingItem";
import { GrPrevious } from "react-icons/gr";


const datas = [
  {imgurl:"/hotelImage.png", address:"연곡면", name:"강릉 솔향기 캠핑장", type:"글램핑", season:"봄-여름", liked:false, popular:true, mountain:true, ocean:false},
]

export default function More() {
  return (
    <div className="w-full">
        <div className="flex items-center p-[14px] border-b border-[#ededed] sticky top-0 bg-white z-10">
          <GrPrevious className="w-[20px] h-[20px] text-gray-600" />
          <p className="text-title2 mx-[10px]">휴일이 추천하는 강원도 캠핑</p>
        </div>
        {datas.map((data) => (
            <ViewMoreCampingItem
              imgurl={data.imgurl}
              address={data.address}
              name={data.name}
              type={data.type}
              season={data.season}
              liked={data.liked}
              popular={data.popular}
              mountain={data.mountain}
              ocean={data.ocean}

            />
        ))}
    </div>
  );
}