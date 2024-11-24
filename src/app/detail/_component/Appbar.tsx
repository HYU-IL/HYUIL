import Image from "next/image";
import LEFT from "../../../../public/assets/icons/left.svg";
import HEART from "../../../../public/assets/icons/heart.svg";

interface AppbarProps {
  adr?: string;
}

function Appbar({ adr }: AppbarProps) {
  return (
    <div className="flex flex-col w-full fixed top-0 left-0 bg-opacity-0 z-50">
    <div className="w-full h-[48px] items-center justify-between flex border-b bg-white px-6">
      <Image src={LEFT} alt="left" />
      <Image src={HEART} alt="heart" />
    </div>
  </div>
  );
}

export default Appbar;
