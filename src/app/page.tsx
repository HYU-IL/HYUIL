import Image from "next/image";
import Link from "next/link";
import MediumInnerTitleItem from "@/components/sliders/MediumInnerTitleItem";
import CategoryTitle from "@/components/common/CategoryTitle";
import SubInfoTypo from "@/components/common/SubInfoTypo";

export default function Home() {
  return (
    <div>
      <p className="text-secondary-100 text-subtitle1">hello world!!</p>
      <MediumInnerTitleItem label="용산 쌤쌤쌤"/>
      <SubInfoTypo label="ABOUT RESORT"/>
      <CategoryTitle label="휴일"/>
    </div>
  );
}
