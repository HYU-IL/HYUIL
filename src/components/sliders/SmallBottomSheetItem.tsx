import Image from "next/image";
import tmp from "../../../public/tmp.jpg";

interface SmallBottomSheetItemProps {
  label?: string;
  imgurl?: string;
}

function SmallBottomSheetItem({
  label,
  imgurl,
  ...props
}: SmallBottomSheetItemProps) {
  return (
    <div className="w-[140px] h-fit flex-row">
      <div className="rounded-[4px] w-[140px] h-[105px] relative overflow-hidden mb-[8px]">
        <Image
          alt={"backgroundImg"}
          layout="fill"
          src={imgurl ? imgurl : tmp}
          objectFit="cover"
        />
      </div>
      <span className="text-body1 block">{label && label}</span>
    </div>
  );
}

export default SmallBottomSheetItem;
