import Image from "next/image";
import tmp from "../../../public/tmp.jpg";

interface LargeListItemProps {
  label?: string;
  imgurl?: string;
  addr?: string;
  children?: React.ReactElement;
}

function LargeListItem({
  label,
  imgurl,
  addr,
  children,
  ...props
}: LargeListItemProps) {
  return (
    <div className="w-[208px] h-fit flex-row">
      <div className="rounded-[4px] w-[208px] h-[135px] relative overflow-hidden mb-[8px]">
        <Image
          alt={"backgroundImg"}
          layout="fill"
          src={imgurl ? imgurl : tmp}
          objectFit="cover"
        />
      </div>
      <span className="text-[16px] block leading-[20px] whitespace-pre-wrap">
        {label && label}
      </span>
      <span className="h-fit text-[12px] text-[#999999]">{addr && addr}</span>
    </div>
  );
}

export default LargeListItem;
