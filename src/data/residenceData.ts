export interface residenceDataType {
  id: number;
  name: string;
  rdnm_adr: string;
  capacity: number;
  max_capacity: number;
  parking_lot: boolean;
  wifi: boolean;
  image: string;
  telephone: string;
  ocean: boolean;
  mountain: boolean;
}
export const residenceData: residenceDataType[] = [{
  id: 1,
  name: "강릉 스카이베이 숙소",
  rdnm_adr: "강원 강릉시 강문동 258-4",
  capacity: 4,
  max_capacity: 6,
  parking_lot: true,
  wifi: true,
  image: "",
  telephone: "010-0000-0000",
  ocean: true,
  mountain: true,
},{
  id: 2,
  name: "체스터톤스 르부르 낙산",
  rdnm_adr: "강원특발자치도 양양군 강현면 일출로 47",
  capacity: 3,
  max_capacity: 3,
  parking_lot: true,
  wifi: true,
  image: "",
  telephone: "033-673-7000",
  ocean: true,
  mountain: false,
},{
  id: 3,
  name: "남이섬 호텔 정관루",
  rdnm_adr: "강원특별자치도 춘천시 남산면 남이섬길 1",
  capacity: 2,
  max_capacity: 2,
  parking_lot: true,
  wifi: true,
  image: "",
  telephone: "031-580-8000",
  ocean: true,
  mountain: true,
},{
  id: 4,
  name: "정선 골든메이플관광호텔",
  rdnm_adr: "강원특별자치도 정선군 남면 무릉1로 85",
  capacity: 2,
  max_capacity: 3,
  parking_lot: true,
  wifi: true,
  image: "",
  telephone: "033-592-3100",
  ocean: false,
  mountain: true,
},{
  id: 5,
  name: "원주 오키드호텔",
  rdnm_adr: "강원도 원주시 봉화로 26",
  capacity: 2,
  max_capacity: 3,
  parking_lot: true,
  wifi: true,
  image: "",
  telephone: "033-743-6700",
  ocean: false,
  mountain: true,
},];

export default residenceData;
