export interface festivalDataType {
  id: number,
  name: string,
  image: string,
  start_date: string,
  end_date: string,
  place: string,
  rdnm_adr: string,
  telephone: string,
  description: string,
  parking_lot: boolean,
  url: string,
}
const festivalData: festivalDataType = {
  id: 1,
  name: "춘천에서 통하나봄",
  image: "",
  start_date: "2024.10.15",
  end_date: "2024.10.18",
  place: "강릉대도호부관아",
  rdnm_adr: "강원특별자치도 춘천시 삼천동 200-9",
  telephone: "010-0000-0000",
  description: `[춘천에서 통하나봄]은 통일에 대한 국민들의 관심을 높이고 모두가 함께 즐기고 체험할 수 있도록 통일부가 준비한 문화행사이다. 이번 [춘천에서 통하나봄]은 강원권 통일플러스센터 개관을 기념해 개관식과 함께 진행되며, 행사장 내 다채로운 체험 및 이벤트 프로그램과 개관 기념 이벤트 등 다양한 문화 콘텐츠가 제공된다.`,
  parking_lot: false,
  url: "https://www.naver.com/",
};

export default festivalData;
