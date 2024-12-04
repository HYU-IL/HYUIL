import ViewMoreBeachItem from "@/components/common/ViewMoreBeachItem";
import ViewMoreTempleItem from "@/components/common/ViewMoreTempleItem";
import { GrPrevious } from "react-icons/gr";
import {beachData} from "@/data/beachData";
import {templestayData} from "@/data/templestayData"; 
import Link from "next/link";

export default function More() {
  const beach_data = beachData
  const temple_data = templestayData

  return (
    <div className="w-full">
        <div className="flex items-center p-[14px] border-b border-[#ededed] sticky top-0 bg-white z-10">
          <Link href="/resort"><GrPrevious className="w-[20px] h-[20px] text-gray-600" /></Link>
          <p className="text-title2 mx-[10px]">휴일이 추천하는 편안한 휴양지</p>
        </div>
        {temple_data.map((data, index) => (
            <ViewMoreTempleItem
              key={index}
              imgurl={data.image}
              address={data.rdnm_adr}
              name={data.name}
              liked={false}
              popular={index%2===0 ? true : false}
              mountain={data.mountain}
              ocean={data.ocean}

            />
        ))}
        {beach_data.map((data, index) => (
            <ViewMoreBeachItem
              key={index}
              imgurl={data.image}
              address={data.rdnm_adr.split(" ").slice(1, 3).join(" ")}
              name={data.name}
              parkinglot={data.parking_lot}
              liked={false}
              popular={index%2===0 ? true : false}
              mountain={data.mountain}
              ocean={data.ocean}

            />
        ))}
    </div>
  );
}
