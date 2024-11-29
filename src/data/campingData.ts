export interface campingDataType {
  id: number;
  name: string;
  rdnm_adr: string;
  telephone: string;
  image: string;
  description: string;
  url: string;
  pet: string;
  camping_type: string;
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
  ocean: boolean;
  mountain: boolean;
}
const campingData: campingDataType[] =
[ 
  {
    id: 1,
    name: "강릉 솔향기 캠핑장",
    rdnm_adr: "강원특별자치도 강릉시 연곡면 해안로 1282",
    telephone: "033-662-2900",
    image: "",
    description:
      "연곡해변 캠핑장을 찾아주셔서 진심으로 감사드립니다. 아름다운 동해바다와 솔향기 가득한 해안 솔숲에 위치한 연곡해변 캠핑장은 송림과 해양자원을 특화한 사계절 캠핑장입니다.",
    url: "http://www.pinecamping.or.kr/",
    pet: "가능",
    camping_type: "일반 야영장",
    oper_time: "",
    oper_date: "봄, 여름, 가을",
    reservation: "",
    facility: "샤워실, 개수대, 포토존",
    grass: 1,
    crushed_stone: 1,
    deck: 20,
    gravel: 20,
    soil: 0,
    glamp_inner: "",
    carav_inner: "",
    fire: "개별",
    gnrl_cnt: 0,
    car_cnt: 60,
    glamp_cnt: 5,
    carav_cnt: 0,
    indv_carav_cnt: 0,
    ocean: false,
    mountain: true
  },
  {
    id: 2,
    name: "양양 트리플펜션 & 글램핑",
    rdnm_adr: "강원특별자치도 양양군 손양면 선사유적로 316-54",
    telephone: "010-4077-3416",
    image: "",
    description:
      "고즈넉한 동호해변 앞 프라이빗한 독채 글램핑에서 글기는 편백나무욕조. 사랑하는 사람들과 함께 소나무 아래에서 즐기는 바베큐. 전 객실에서 오션 뷰를 누리면서 즐기는 소파.",
    url: "http://tripleleisure.kr/intro.html",
    pet: "가능",
    camping_type: "글램핑",
    oper_time: "",
    oper_date: "봄, 여름, 가을, 겨울",
    reservation: "",
    facility: "샤워실, 개수대, 포토존",
    grass: 5,
    crushed_stone: 5,
    deck: 10,
    gravel: 0,
    soil: 0,
    glamp_inner: "",
    carav_inner: "",
    fire: "개별",
    gnrl_cnt: 5,
    car_cnt: 0,
    glamp_cnt: 20,
    carav_cnt: 0,
    indv_carav_cnt: 0,
    ocean: false,
    mountain: true
  },
  {
    id: 3,
    name: "라플란드",
    rdnm_adr: "강원특별자치도 평창군 봉평면 흥정계곡4길 71-70 라플란드",
    telephone: "0507-1490-5982",
    image: "",
    description:
      "노르딕 아웃도어 리조트 라플란드에서 여러분의 힐링 캠핑을 제공합니다.",
    url: "https://litt.ly/lappland",
    pet: "가능",
    camping_type: "글램핑, 야영장",
    oper_time: "",
    oper_date: "봄, 여름, 가을",
    reservation: "",
    facility: "샤워실, 개수대, 포토존",
    grass: 10,
    crushed_stone: 0,
    deck: 10,
    gravel: 20,
    soil: 0,
    glamp_inner: "",
    carav_inner: "",
    fire: "개별",
    gnrl_cnt: 10,
    car_cnt: 0,
    glamp_cnt: 10,
    carav_cnt: 0,
    indv_carav_cnt: 0,
    ocean: false,
    mountain: true
  },
  {
    id: 4,
    name: "캄파슬로우",
    rdnm_adr: "강원특별자치도 원주시 판부면 백운산길 67-105",
    telephone: "0507-1363-0380",
    image: "",
    description:
      "캠파슬로우 캠핑장을 찾아주셔서 감사합니다. 캠파슬로우에서 자연을 만끽해보세요! 네이버 톡톡을 이용해서 문의 부탁드립니다.",
    url: "https://campaslow2014.modoo.at",
    pet: "불가능",
    camping_type: "일반 야영장",
    oper_time: "",
    oper_date: "봄, 여름, 가을, 겨울",
    reservation: "",
    facility: "샤워실, 개수대, 포토존",
    grass: 5,
    crushed_stone: 5,
    deck: 10,
    gravel: 0,
    soil: 10,
    glamp_inner: "",
    carav_inner: "",
    fire: "공용",
    gnrl_cnt: 30,
    car_cnt: 0,
    glamp_cnt: 0,
    carav_cnt: 0,
    indv_carav_cnt: 0,
    ocean: false,
    mountain: true
  },
  {
    id: 5,
    name: "아웃오브파크",
    rdnm_adr: "강원특별자치도 춘천시 남면 가옹개길 52-9",
    telephone: "033-263-2826",
    image: "",
    description:
      "익스클루시브 리조트클럽 휴양문화의 새로운 패러다임 부티크 감성 카라반, 유러피언 스테이, 이곳은 아웃오브파크입니다.",
    url: "http://www.outofpark.com/",
    pet: "가능",
    camping_type: "카라반, 글램핑",
    oper_time: "",
    oper_date: "봄, 여름, 가을, 겨울",
    reservation: "",
    facility: "샤워실, 개수대, 포토존",
    grass: 0,
    crushed_stone: 0,
    deck: 15,
    gravel: 0,
    soil: 0,
    glamp_inner: "",
    carav_inner: "",
    fire: "개별",
    gnrl_cnt: 0,
    car_cnt: 0,
    glamp_cnt: 5,
    carav_cnt: 10,
    indv_carav_cnt: 0,
    ocean: false,
    mountain: true
  }
  
];

export default campingData;