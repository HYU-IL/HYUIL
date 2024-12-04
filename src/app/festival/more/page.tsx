import ViewMoreFestivalItem from "@/components/common/ViewMoreFestivalItem";
import { GrPrevious } from "react-icons/gr";
import {festivalData} from "@/data/festivalData"; 
import Link from "next/link";

export default function More() {
  const festival_data = festivalData
  return (
    <div className="w-full">
        <div className="flex items-center p-[14px] border-b border-[#ededed] sticky top-0 bg-white z-10">
          <Link href="/festival"><GrPrevious className="w-[20px] h-[20px] text-gray-600" /></Link>
          <p className="text-title2 mx-[10px]">휴일이 추천하는 강원도 축제</p>
        </div>
        {festival_data.map((data, index) => (
            <ViewMoreFestivalItem
            key={index}
              imgurl={data.image}
              address={data.place}
              name={data.name}
              startdate={data.start_date}
              enddate={data.end_date}
              liked={false}
              popular={index%4===0 ? true : false}
              mountain={data.mountain}
              ocean={data.ocean}

            />
        ))}
    </div>
  );
}
