"use client";
import ViewMoreCampingItem from "@/components/common/ViewMoreCampingItem";
import { GrPrevious } from "react-icons/gr";
import {campingData} from "@/data/campingData"; 
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function More() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  
  const camping_data = campingData
  return (
    <div className="w-full">
        <div className="flex items-center p-[14px] border-b border-[#ededed] sticky top-0 bg-white z-10">
          <Link href=""><GrPrevious className="w-[20px] h-[20px] text-gray-600" onClick={handleBack}/></Link>
          <p className="text-title2 mx-[10px]">휴일이 추천하는 강원도 캠핑</p>
        </div>
        {camping_data.map((data, index) => (
            <Link href="../detail/camping"><ViewMoreCampingItem
              key={index}
              imgurl={data.image}
              address={data.rdnm_adr}
              name={data.name}
              type={data.camping_type}
              season={data.oper_time}
              liked={false}
              popular={index%3 === 0 ? true : false}
              mountain={data.mountain}
              ocean={data.ocean}
            /></Link>
        ))}
    </div>
  );
}