import ViewMoreBeachItem from "@/components/common/ViewMoreBeachItem";
import { GrPrevious } from "react-icons/gr";
import {beachData} from "@/data/beachData";
import Link from "next/link";

export default function MoreBeach() {
  const beach_data = beachData

  return (
    <div className="w-full">
        <div className="flex items-center p-[14px] border-b border-[#ededed] sticky top-0 bg-white z-10">
        <Link href="/resort"><GrPrevious className="w-[20px] h-[20px] text-gray-600" /></Link>
          <p className="text-title2 mx-[10px]">강원도에서 실천하는 진짜 워라벨!</p>
        </div>
        {beach_data.map((data, index) => (
            <Link href="../detail/beach" key={index}>
              <ViewMoreBeachItem
                imgurl={data.image}
                address={data.rdnm_adr.split(" ").slice(1, 3).join(" ")}
                name={data.name}
                parkinglot={data.parking_lot}
                liked={false}
                popular={index%2===0 ? true : false}
                mountain={data.mountain}
                ocean={data.ocean}
              />
            </Link>
        ))}
    </div>
  );
}
