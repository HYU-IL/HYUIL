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
}
const workationData: workationDataType = {
  id: 1,
  name: "강릉 프라이빗 휴휴공간",
  rdnm_adr: "강원특별자치도 강릉시 연곡면 해안로 1282",
  capacity: 6,
  parking_lot: false,
  wifi: true,
  oper_time: "08:00~22:00",
  image: "",
  url: "https://www.naver.com/",
  telephone: "010-0000-0000",
};

export default workationData;
