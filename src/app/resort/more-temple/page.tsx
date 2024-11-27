import ViewMoreTempleItem from "@/components/common/ViewMoreTempleItem";
import { GrPrevious } from "react-icons/gr";


const datas = [
  {imgurl:"/hotelImage.png", address:"강릉", name:"경포그네터", liked:false, popular:true, mountain:true, ocean:false},
]

export default function MoreTemple() {
  return (
    <div className="w-full">
        <div className="flex items-center p-[14px] border-b border-[#ededed] sticky top-0 bg-white z-10">
          <GrPrevious className="w-[20px] h-[20px] text-gray-600" />
          <p className="text-title2 mx-[10px]">휴일이 추천하는 템플스테이</p>
        </div>
        {datas.map((data, index) => (
            <ViewMoreTempleItem
              imgurl={data.imgurl}
              address={data.address}
              name={data.name}
              liked={data.liked}
              popular={data.popular}
              mountain={data.mountain}
              ocean={data.ocean}

            />
        ))}
    </div>
  );
}
