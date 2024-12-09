"use client";

import Image, { StaticImageData } from "next/image";
import SELECTEDICON from "../../../../public/assets/icons/selectedicon.svg";
import ADDICON from "../../../../public/assets/icons/addicon.svg";
import tmp from "../../../../public/tmp.jpg";
interface StepCardProps {
  label?: string;
  imgurl?: StaticImageData;
  width?: number;
  height?: number;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  selected?: boolean;
}

function StepCard({
  label,
  imgurl=tmp,
  width,
  height,
  id,
  onClick,
  selected,
  ...props
}: StepCardProps) {
  return (
    <div
      id={id}
      className={`relative rounded-[12px] overflow-hidden`}
      onClick={onClick}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(${imgurl?.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {selected ? (
        <Image alt="selected" src={SELECTEDICON} className="absolute left-[80%] top-[3%] w-[20px]" />
      ) : (
        <Image alt="added" src={ADDICON} className="absolute left-[80%] top-[3%] w-[20px]" />
      )}
      <span className="text-white text-subtitle3 absolute bottom-2 left-1/2 transform -translate-x-1/2 px-10 py-1">
        {label && label}
      </span>
    </div>
  );
}

export default StepCard;
