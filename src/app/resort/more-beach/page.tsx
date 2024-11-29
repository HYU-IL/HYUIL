import ViewMoreBeachItem from "@/components/common/ViewMoreBeachItem";
import { GrPrevious } from "react-icons/gr";


const datas = [
  {imgurl:"/hotelImage.png", address:"강릉", name:"경포그네터", parkinglot: true, liked:false, popular:true, mountain:false, ocean:true},
]

export default function MoreBeach() {
  return (
    <div className="w-full">
        <div className="flex items-center p-[14px] border-b border-[#ededed] sticky top-0 bg-white z-10">
          <GrPrevious className="w-[20px] h-[20px] text-gray-600" />
          <p className="text-title2 mx-[10px]">강원도에서 실천하는 진짜 워라벨!</p>
        </div>
        {datas.map((data) => (
            <ViewMoreBeachItem
              imgurl={data.imgurl}
              address={data.address}
              name={data.name}
              parkinglot={data.parkinglot}
              liked={data.liked}
              popular={data.popular}
              mountain={data.mountain}
              ocean={data.ocean}

            />
        ))}
    </div>
  );
}
