import Image from "next/image";
import CategoryTitle from "@/components/common/CategoryTitle";
import left from "../../../public/assets/icons/left.svg";
import Link from "next/link";
import ChangeLocationButton from "@/components/buttons/ChangeLocButton";
import WalkorCarButton from "@/components/buttons/WalkorCarButton";

export default function FootHoldPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      {/* 상단바 */}
      <div className="grid grid-cols-3 w-full px-[16px] py-3 items-center">
        <Link href="" className="flex justify-start">
          <Image src={left} alt="left" />
        </Link>
        <div className="flex justify-center">
          <WalkorCarButton />
        </div>
        <div className="flex justify-end">
          <ChangeLocationButton />
        </div>
      </div>
    </div>
  );
}
