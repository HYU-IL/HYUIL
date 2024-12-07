"use client";
import ViewMoreLeisureItem from "@/components/common/ViewMoreLeisureItem";
import { GrPrevious } from "react-icons/gr";
import {leisureData} from "@/data/leisureData"; 
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function More() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const leisure_data = leisureData
  return (
    <div className="w-full">
        <div className="flex items-center p-[14px] border-b border-[#ededed] sticky top-0 bg-white z-10">
          <Link href=""><GrPrevious className="w-[20px] h-[20px] text-gray-600" onClick={handleBack}/></Link>
          <p className="text-title2 mx-[10px]">지루한 일상에서 활기를 느껴보자</p>
        </div>
        {leisure_data.map((data, index) => (
            <ViewMoreLeisureItem
              key={index}
              imgurl={data.image}
              address={data.location}
              name={data.name}
              parkinglot={data.parking_lot}
              liked={false}
              popular={index%3===0 ? true : false}
              mountain={data.mountain}
              ocean={data.ocean}

            />
        ))}
    </div>
  );
}
