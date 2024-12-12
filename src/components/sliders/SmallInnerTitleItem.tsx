import Image from "next/image";
import tempImage from "../../../public/tempImage.png";

interface SmallInnerTitleItemProps {
  label?: string;
  imgurl?: string;
}

function SmallInnerTitleItem({
  label,
  imgurl,
  //...props
}: SmallInnerTitleItemProps) {
  return (
    <div className="relative border-black rounded-[4px] min-w-[160px] h-[121px] overflow-hidden">
      <Image
        alt={"backgroundImg"}
        layout="fill"
        src={imgurl ? imgurl : tempImage}
        objectFit="cover"
      />
      <div className="flex absolute justify-center items-center w-full h-[17.6px] bg-black opacity-40 z-10  bottom-0 rounded-b-[4px]">
        <span className="text-white text-[10px]">{label && label}</span>
      </div>
    </div>
  );
}

export default SmallInnerTitleItem;
