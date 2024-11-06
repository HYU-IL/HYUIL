import Image from "next/image";
import tmp from "../../../public/tmp.jpg";

interface MediumCardItemProps {
  label?: string;
  imgurl?: string;
  children?: React.ReactElement;
}

function MediumCardItem({
  label,
  imgurl,
  children,
  ...props
}: MediumCardItemProps) {
  return (
    <div className="flex flex-col justify-evenly w-[150px] h-[129px]">
      <div className="relative w-[150px] h-[105px]">
        <Image
          alt={"backgroundImg"}
          layout="fill"
          src={imgurl || tmp}
          objectFit="cover"
          className="rounded-[4px] w-[150px] h-[105px]"
        />
      </div>
      <span className="text-[12px] font-Pretendard text-gray-900 font-medium tracking-tight leading-5">
        {label && label}
      </span>
    </div>
  );
}

export default MediumCardItem;
