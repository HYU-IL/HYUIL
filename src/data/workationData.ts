export interface workationDataType {
  id: number;
  name: string;
  rdnm_adr: string;
  capacity: number;
  parking_lot: boolean;
  wifi: boolean;
  oper_time: string;
  image: string;
  url: string;
  telephone: string;
  ocean: boolean;
  mountain: boolean;
}

const workationData: workationDataType[] = [{
  id: 1,
  name: "파도살롱",
  rdnm_adr: "강원특별자치도 강릉시 강릉대로 198, 2층",
  capacity: 25,
  parking_lot: true,
  wifi: true,
  oper_time: "00:00~24:00",
  image: "",
  url: "https://thewavecompany.co.kr/padosalon",
  telephone: "070-4140-8867",
  ocean: true,
  mountain: false,
},{
  id: 2,
  name: "웨이브웍스 양양",
  rdnm_adr: "강원특별자치도 양양군 현남면 인구중앙길 110",
  capacity: 16,
  parking_lot: true,
  wifi: true,
  oper_time: "10:00~18:00",
  image: "",
  url: "https://waveworksyy.com/yyVisit",
  telephone: "033-673-3383",
  ocean: true,
  mountain: false,
},{
  id: 3,
  name: "하모니소호사무실",
  rdnm_adr: "강원특별자치도 춘천시 충혼길52번길 10 드림타워 3층",
  capacity: 45,
  parking_lot: true,
  wifi: true,
  oper_time: "00:00~24:00",
  image: "",
  url: "https://blog.naver.com/hamoni1212",
  telephone: "0507-1349-5998",
  ocean: false,
  mountain: true,
},{
  id: 4,
  name: "공유오피스 서린퍼스텝 원주점",
  rdnm_adr: "강원특별자치도 원주시 서원대로 500 원주 프리미엄아울렛 4층 402호",
  capacity:25,
  parking_lot: true,
  wifi: true,
  oper_time: "09:00~17:00",
  image: "",
  url: "https://blog.naver.com/seorin-firstep/223248181816",
  telephone: "033-901-4589",
  ocean: false,
  mountain: true,
},{
  id: 5,
  name: "힐러스",
  rdnm_adr: "강원특별자치도 양양군 현남면 북죽로 112-2",
  capacity: 8,
  parking_lot: true,
  wifi: true,
  oper_time: "12:00~18:00",
  image: "",
  url: "http://hillers.kr/main.html",
  telephone: "033-672-6777",
  ocean: false,
  mountain: true,
}];

export default workationData;
