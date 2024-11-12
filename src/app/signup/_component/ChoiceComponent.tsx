import Image, { StaticImageData } from "next/image";
import SELECTEDICON from "../../../../public/assets/icons/selectedicon.svg";
import ADDICON from "../../../../public/assets/icons/addicon.svg";

interface ChoiceComponentProps {
  label?: string;
  imgurl?: string | StaticImageData;
  width?: number;
  height?: number;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  selected?: boolean;
}

function ChoiceComponent({
  label,
  imgurl,
  width,
  height,
  id,
  onClick,
  selected,
  ...props
}: ChoiceComponentProps) {
  return (
    <div
      id={id}
      className={`relative w-[${width}px] h-[${height}px] rounded-[12px] overflow-hidden`}
      onClick={onClick}
    >
      <Image
        alt="backgroundImg"
        layout="fill"
        src={imgurl || ""}
        objectFit="cover"
        className="rounded-[12px]"
      />
      <Image src={selected?SELECTEDICON:ADDICON} alt="btn" className="absolute left-[80%] top-[3%]"/>
      <span className="text-white text-subtitle3 absolute bottom-2 left-1/2 transform -translate-x-1/2 px-10 py-1 ">
        {label && label}
      </span>
    </div>
  );
}

export default ChoiceComponent;
