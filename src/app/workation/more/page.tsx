"use client";
import ViewMoreOfficeItem from "@/components/common/ViewMoreOfficeItem";
import ViewMoreResidenceItem from "@/components/common/ViewMoreResidenceItem";
import { GrPrevious } from "react-icons/gr";
import {workationData} from "@/data/workationData";
import {residenceData} from "@/data/residenceData";
import Link from 'next/link';
import { useRouter } from "next/navigation";


export default function More() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const workation_data = workationData;
  const residence_data = residenceData;

  return (
    <div className="w-full">
        <div className="flex items-center p-[14px] border-b border-[#ededed] sticky top-0 bg-white z-10">
          <Link href=""><GrPrevious className="w-[20px] h-[20px] text-gray-600" onClick={handleBack}/></Link>
          <p className="text-title2 mx-[10px]">직장인이 꿈꾸는 워케이션</p>
        </div>
        {workation_data.map((data, index) => (
            <Link href="../detail/workation"><ViewMoreOfficeItem
              key={index}
              imgurl={data.image}
              address={data.rdnm_adr}
              name={data.name}
              parkinglot={data.parking_lot}
              wifi={data.wifi}
              time={data.oper_time}
              liked={false}
              popular={index%3==0 ? true : false}
              mountain={data.mountain}
              ocean={data.ocean}

            /></Link>
        ))}
        {residence_data.map((data, index) => (
            <Link href="../detail/residence"><ViewMoreResidenceItem
              key={index}
              imgurl={data.image}
              address={data.rdnm_adr}
              name={data.name}
              parkinglot={data.parking_lot}
              wifi={data.wifi}
              capacity={data.capacity}
              liked={false}
              popular={index%5==0 ? true : false}
              mountain={data.mountain}
              ocean={data.ocean}

            /></Link>
        ))}
    </div>
  );
}
