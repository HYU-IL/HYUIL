import Image from "next/image";
import tmp from "../../../public/tmp.jpg";

interface MediumInnerTitleItemProps {
  label?: string;
  imgurl?: string;
  children?: React.ReactElement;
}

function MediumInnerTitleItem({
  label,
  imgurl,
  children,
  ...props
}: MediumInnerTitleItemProps) {
  return (
    <div className="border-black rounded-[12px] w-[210px] h-[235px] relative overflow-hidden">
      <Image alt={"backgroundImg"} layout="fill" src={tmp} objectFit="cover"/>
      <div className="flex justify-center items-center w-full h-[30px] bg-black opacity-50 z-10 absolute bottom-0 rounded-b-[12px]">
        <span className="text-white text-[12px] font-Pretendard font-bold">{label && label}</span>
      </div>
    </div>
  );
}

export default MediumInnerTitleItem;
