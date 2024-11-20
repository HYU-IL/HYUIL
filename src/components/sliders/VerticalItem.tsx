import Image from "next/image";
import tmp from "../../../public/tmp.jpg";

interface VerticalItemProps {
  label?: string;
  imgurl?: string;
  addr?: string;
}

function VerticalItem({ label, imgurl, addr, ...props }: VerticalItemProps) {
  return (
    <div className="w-[120px] h-fit flex-row">
      <div className="rounded-[8px] w-[120px] h-[180px] relative overflow-hidden mb-[8px]">
        <Image
          alt={"backgroundImg"}
          layout="fill"
          src={imgurl ? imgurl : tmp}
          objectFit="cover"
        />
      </div>
      <span className="text-[14px] block leading-[20px] whitespace-pre-wrap">
        {label && label}
      </span>
      <span className="text-[12px] text-[#999999] leading-[16px] block">
        {addr && addr}
      </span>
    </div>
  );
}

export default VerticalItem;
