export interface campingDataType {
  id: number;
  name: string;
  rdnm_adr: string;
  telephone: string;
  image: string;
  description: string;
  url: string;
  pet: string;
  type: string;
  oper_time: string;
  oper_date: string;
  reservation: string;
  facility: string;
  grass: number;
  crushed_stone: number;
  deck: number;
  gravel: number;
  soil: number;
  glamp_inner: string;
  carav_inner: string;
  fire: string;
  gnrl_cnt: number;
  car_cnt: number;
  glamp_cnt: number;
  carav_cnt: number;
  indv_carav_cnt: number;
}
const campingData: campingDataType = 
  {
    id: 1,
    name: "강릉 솔향기 캠핑장",
    rdnm_adr: "강원특별자치도 강릉시 연곡면 해안로 1282",
    telephone: "010-0000-0000",
    image: "",
    description:
      "연곡해변 캠핑장을 찾아주셔서 진심으로 감사드립니다. 아름다운 동해바다와 솔향기 가득한 해안 솔숲에 위치한 연곡해변 캠핑장은 송림과 해양자원을 특화한 사계절 캠핑장입니다.",
    url: "",
    pet: "가능",
    type: "일반 야영장",
    oper_time: "",
    oper_date: "4월 1일 ~ 10월 31일",
    reservation: "",
    facility: "샤워실, 개수대, 포토존",
    grass: 0,
    crushed_stone: 0,
    deck: 0,
    gravel: 0,
    soil: 0,
    glamp_inner: "",
    carav_inner: "",
    fire: "",
    gnrl_cnt: 0,
    car_cnt: 0,
    glamp_cnt: 0,
    carav_cnt: 0,
    indv_carav_cnt: 0,
  };

export default campingData;