import Image from "next/image";
import Link from "next/link";
import MediumInnerTitleItem from "@/components/sliders/MediumInnerTitleItem";
import CategoryTitle from "@/components/common/CategoryTitle";
import SubInfoTypo from "@/components/common/SubInfoTypo";
import ViewMore from "@/components/common/ViewMore";


const contents = [
  {imgurl:"/hotelImage.png", name:"강릉 디프라이빗 캠핑", type:"글램핑 · 카라반 · 캠핑", capacity:3, parking:true, wifi:true, like:false},
  {imgurl:"", name:"강릉 디프라이빗 캠핑", type:"글램핑 · 카라반 · 캠핑", capacity:3, parking:true, wifi:true, like: true},
  {imgurl:"", name:"강릉 디프라이빗 캠핑", type:"글램핑 · 카라반 · 캠핑", capacity:3, parking:true, wifi:true, like: true},
  {imgurl:"", name:"강릉 디프라이빗 캠핑", type:"글램핑 · 카라반 · 캠핑", capacity:3, parking:true, wifi:true, like: true},
  {imgurl:"", name:"강릉 디프라이빗 캠핑", type:"글램핑 · 카라반 · 캠핑", capacity:3, parking:true, wifi:true, like: true},
  {imgurl:"", name:"강릉 디프라이빗 캠핑", type:"글램핑 · 카라반 · 캠핑", capacity:3, parking:true, wifi:true, like: true},

]

export default function Home() {
  return (
    <ViewMore title={"휴일이 추천하는 강원 캠핑"} contents={contents}/>
  );
}
