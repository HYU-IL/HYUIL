import ViewMore from "@/components/common/ViewMore";


const contents = [
  {imgurl:"/hotelImage.png", title:"강릉 디프라이빗 캠핑", subtitle:"글램핑 · 카라반 · 캠핑", info1:"주차, 와이파이 가능", info2:"숙소 최대 인원 3명", like:false, popular:true, mountain:true, ocean:false},
]


export default function More() {
  return (
    <>
        <ViewMore title={"휴일이 추천하는 편안한 휴양지"} contents={contents} />
    </>
  );
}