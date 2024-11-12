import Image, { StaticImageData } from "next/image";
import SELECTEDICON from "../../../../public/assets/icons/selectedicon.svg";
import ADDICON from "../../../../public/assets/icons/addicon.svg";
import tmp from "../../../../public/tmp.jpg";
interface LongStepCardProps {
  label?: string;
  imgurl?: StaticImageData;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  selected?: boolean;
}

function LongStepCard({
  label,
  imgurl = tmp,
  id,
  onClick,
  selected,
  ...props
}: LongStepCardProps) {
  return (
    <div
      id={id}
      className={`relative rounded-[12px] overflow-hidden`}
      onClick={onClick}
      style={{
        width: "306px",
        height: "86px",
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(${imgurl?.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span className="text-subtitle3 absolute bottom-2 right-3 px-10 py-1">
        {label && label}
      </span>
    </div>
  );
}

export default LongStepCard;
