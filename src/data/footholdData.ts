export interface footholdDataType {
  name: string;
  address: string;
  phone: string;
  category: string;
  link: string;
  position: {
    lat: number; // 위도
    lng: number; // 경도
  };
}

export const footholdData: footholdDataType[] = [
  {
    name: "강릉 중앙시장",
    address: "강원 강릉시 금성로 21",
    phone: "033-123-4567",
    category: "관광명소",
    link: "https://place.map.kakao.com/12345678",
    position: { lat: 37.751853, lng: 128.876057 },
  },
  {
    name: "오죽헌",
    address: "강원 강릉시 율곡로3139번길 24",
    phone: "033-645-4050",
    category: "관광명소",
    link: "https://place.map.kakao.com/87654321",
    position: { lat: 37.760853, lng: 128.891057 },
  },
  {
    name: "선교장",
    address: "강원 강릉시 운정길 63",
    phone: "033-646-3270",
    category: "관광명소",
    link: "https://place.map.kakao.com/26979861",
    position: { lat: 37.765853, lng: 128.895057 },
  },
  {
    name: "강릉아트센터",
    address: "강원 강릉시 남대천로 7",
    phone: "033-765-4321",
    category: "문화시설",
    link: "https://place.map.kakao.com/12312312",
    position: { lat: 37.752853, lng: 128.878057 },
  },
  {
    name: "정동진 모래시계 공원",
    address: "강원 강릉시 정동역길 17",
    phone: "033-640-4533",
    category: "문화시설",
    link: "https://place.map.kakao.com/65432109",
    position: { lat: 37.785853, lng: 128.912057 },
  },
  {
    name: "강릉 시립 박물관",
    address: "강원 강릉시 박물관길 3",
    phone: "033-660-3301",
    category: "문화시설",
    link: "https://place.map.kakao.com/45678901",
    position: { lat: 37.767853, lng: 128.899057 },
  },
  {
    name: "카페 보헤미안",
    address: "강원 강릉시 경강로 3136",
    phone: "033-987-6543",
    category: "카페",
    link: "https://place.map.kakao.com/23456789",
    position: { lat: 37.750853, lng: 128.874057 },
  },
  {
    name: "테라로사 커피공장",
    address: "강원 강릉시 구정면 현천길 7",
    phone: "033-648-2760",
    category: "카페",
    link: "https://place.map.kakao.com/34567890",
    position: { lat: 37.770853, lng: 128.899057 },
  },
  {
    name: "월화엔 강릉중앙시장점",
    address: "강원 강릉시 토성로184번길 6",
    phone: "0507-1398-5759",
    category: "카페",
    link: "https://place.map.kakao.com/45678923",
    position: { lat: 37.756596, lng: 128.896178 },
  },
  {
    name: "강릉샌드",
    address: "강원 강릉시 금성로12번길 6",
    phone: "0507-1343-8034",
    category: "카페",
    link: "https://place.map.kakao.com/56789012",
    position: { lat: 37.755024, lng: 128.898753 },
  },
  {
    name: "안목해변 카페거리",
    address: "강원 강릉시 창해로14번길 20",
    phone: "033-641-1011",
    category: "카페",
    link: "https://place.map.kakao.com/67890123",
    position: { lat: 37.767853, lng: 128.896057 },
  },
  {
    name: "명성횟집",
    address: "강원 강릉시 옥천로 45",
    phone: "033-654-7890",
    category: "음식점",
    link: "https://place.map.kakao.com/78901234",
    position: { lat: 37.749853, lng: 128.870057 },
  },
  {
    name: "초당 순두부 마을",
    address: "강원 강릉시 초당순두부길 15",
    phone: "033-652-1587",
    category: "음식점",
    link: "https://place.map.kakao.com/89012345",
    position: { lat: 37.767853, lng: 128.896057 },
  },
  {
    name: "소나무집",
    address: "강원 강릉시 금성로43번길 2",
    phone: "033-648-1122",
    category: "음식점",
    link: "https://place.map.kakao.com/90123456",
    position: { lat: 37.762853, lng: 128.894057 },
  },
  {
    name: "강릉월화 주차장",
    address: "강원 강릉시 월화로 50",
    phone: "033-321-0987",
    category: "주차장",
    link: "https://place.map.kakao.com/12340987",
    position: { lat: 37.746853, lng: 128.863057 },
  },
  {
    name: "강릉 시청 공영주차장",
    address: "강원 강릉시 강릉대로 33",
    phone: "033-646-7767",
    category: "주차장",
    link: "https://place.map.kakao.com/23409876",
    position: { lat: 37.762853, lng: 128.899057 },
  },
  {
    name: "경포대 주차장",
    address: "강원 강릉시 경포로 365",
    phone: "033-652-8901",
    category: "주차장",
    link: "https://place.map.kakao.com/34509876",
    position: { lat: 37.769853, lng: 128.891057 },
  },
];

export default footholdData;
