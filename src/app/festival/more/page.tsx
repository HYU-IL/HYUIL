import ViewMoreFestivalItem from "@/components/common/ViewMoreFestivalItem";
import { GrPrevious } from "react-icons/gr";


const datas = [
  // 지역, 축제장소 분리 필요해보이나 일단은 address 하나로 통합해놓음
  // 페이지 넘어가면서 지역 전달받는 방식 정해진 뒤에 수정 예정
  {imgurl:"/hotelImage.png", address:"춘천", name:"춘천남이섬축제", startdate:"2024-11-11", enddate:"2024-11-28", liked:false, popular:true, mountain:true, ocean:false},
]

export default function More() {
  return (
    <div className="w-full">
        <div className="flex items-center p-[14px] border-b border-[#ededed] sticky top-0 bg-white z-10">
          <GrPrevious className="w-[20px] h-[20px] text-gray-600" />
          <p className="text-title2 mx-[10px]">휴일이 추천하는 강원도 축제</p>
        </div>
        {datas.map((data, index) => (
            <ViewMoreFestivalItem
              imgurl={data.imgurl}
              address={data.address}
              name={data.name}
              startdate={data.startdate}
              enddate={data.enddate}
              liked={data.liked}
              popular={data.popular}
              mountain={data.mountain}
              ocean={data.ocean}

            />
        ))}
    </div>
  );
}
