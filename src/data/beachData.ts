export interface beachDataType {
  id: number;
  name: string;
  sigun: string;
  rdnm_adr: string;
  telephone: string;
  description: string;
  image: string;
  url: string;
  parking_lot: boolean;
  mountain: boolean;
  ocean: boolean;
}
 export const beachData: beachDataType[] = [
  {
  id: 1,
  name: "강문 해변",
  sigun: "강릉시 강문동",
  rdnm_adr: "강원 강릉시 강문동",
  telephone: "033-640-4920",
  description: `강문해변은 강문동에 자리 잡고 있으며 주변에 작은 포구인 강문항이 있어 근처 횟집에서 새벽에 잡은 싱싱한 생선회를 맛볼 수 있다.\r\n \r\n깨끗이 정비된 숙박시설과 경포지구가 근접해 있다. 강문해변에서는 보트로 5~10분 걸리는 곳에 정박을 하여 수심 5~30m의 바다 속에 방대하게 펼쳐진 자연짬(바위), 말미잘, 대형어류 등 뛰어난 수중경관을 감상할 수 있어 스킨스쿠버 동호인들이 많이 찾고 있으며 특히 추억을 남기고 싶은 신혼부부를 위한 수중 다이빙도 하고 있다.`,
  image: "",
  parking_lot: true,
  url: "http://gangmunbeach.co.kr/",
  mountain: false,
  ocean: true,
 },
 {
  id: 2,
  name: "주문진 해수욕장",
  sigun: "강릉시 주문진읍",
  rdnm_adr: "강원특별자치도 강릉시 주문진읍 주문북로 210",
  telephone: "033-640-4535",
  description: `주문진 해변은 길이 700m, 면적 9,608㎡의 넓은 백사장과 수심이 얕고 바닷물이 맑아 가족 단위 피서지에 적합한 곳이다. \r\n \r\n봄철에는 꽁치, 여름에는 오징어가, 가을, 겨울에는 복어와 양미리 등이 많이 잡혀 제철에 가면 저렴한 가격으로 구입할 수 있다. 또 바다를 끼고 횟집과 회센터들이 밀집해 있어 즉석에서 횟감을 맛볼 수 있다.`,
  image: "",
  parking_lot: true,
  url: "http://jumunjin-beach.co.kr/",
  mountain: false,
  ocean: true,
 },
 {
  id: 3,
  name: "속초 해수욕장",
  sigun: "속초시 조양동",
  rdnm_adr: "강원특별자치도 속초시 청호해안길 2",
  telephone: "033-639-2027",
  description: `수심이 얕고 경사가 완만하여 설악산을 경유하는 관광객들이 많이 찾는다. 해변의 총 길이는 2km이며, 이중 1km만 일반인에게 개장되었다. 백사장에는 목책 산책로가 조성되어 있고, 뒤편에는 소나무숲이 잘 가꾸어져 있으며, 화장실, 샤워장 등의 부대시설을 갖추었다. 속초 고속버스터미널에 인접해 있고, 해수욕장 주변에는 설악산, 척산온천, 청초호, 영랑호, 대포항 등 속초시의 주요 관광지들이 있다.`,
  image: "",
  parking_lot: true,
  url: "http://www.sokchotour.com",
  mountain: false,
  ocean: true,
 },
 {
  id: 4,
  name: "망상 해변",
  sigun: "동해시 동해대로",
  rdnm_adr: "강원특별자치도 동해시 동해대로 6270-10",
  telephone: "033-657-8847",
  description: `망상해변은 묵호항에서 북쪽으로 3km쯤 떨어져 있는 국민관광지로서 부근의 옥계, 경포 등과 함께 동해안의 유명 관광지이다. 넓은 백사장과 울창한 송림(수령 20~30년), 청정한 해수, 얕은 수심(경사도 2~4도, 평균 물 깊이 0.5~1.5m) 등 동해안 해수욕장 중 가장 넓고 쾌적한 환경을 갖추었으며, 주차장, 야영장, 샤워장, 공중화장실 등과 각종 편의시설이 잘 갖춰져 있어 관광객들이 이용하기에 편리하다. 해수욕장 바로 위에는 오토캠핑장이 있어 가족단위 관광객들에게 인기가 있다. 인근 천곡 자연동굴, 무릉계곡과 추암 촛대바위를 비롯하여 남쪽으로 간이 해수욕장(노봉, 대진, 어달, 한섬, 감추, 추암 해수욕장)이 즐비하다. 인근의 묵호항과 더불어 강릉~삼척을 잇는 해안 관광지 중 하나이며 오징어, 소라, 해삼, 멍게, 광어 등의 풍부한 해산물로 풍요로움과 넉넉함이 묻어난다.`,
  image: "",
  parking_lot: true,
  url: "https://me2.do/FoRi1ca0",
  mountain: false,
  ocean: true,
 },
 {
  id: 5,
  name: "증산 해수욕장",
  sigun: "삼척시 증산동",
  rdnm_adr: "강원특별자치도 삼척시 증산동",
  telephone: "033-638-2017",
  description: `삼척 시내에서 약 4km 떨어진 곳에 위치한 조용하고 아담한 해변이다. 평균 수심 1m 정도로 안전하게 물놀이를 즐길 수 있다. 일출로 유명한 동해시 추암 촛대바위와 접경지로 촛대바위를 한눈에 감상할 수도 있으며, 바로 옆 수로부인공원(해가사터)에는 삼국유사의 '해가'라는 설화를 토대로 복원된 드래곤볼이 설치되어 있어 볼을 돌리며 소망과 사랑을 기원하기도 하며 신개념의 관광명소로 부상하고 있다. 또한 겨울철이면 갈매기 떼와 어우러진 겨울 바다의 낭만과 운치를 맘껏 즐길 수 있는 곳이기도 하다. 다른 해변에 비해 피서객들이 적지만, 차박 명소로 알려져 푸른 에메랄드빛 바다를 보러 오는 가족들이 많다. 증산해변을 한번 다녀간 사람은 꼭 다시 찾는다고 하는 말이 있을 정도로 사랑받는 해변이다.`,
  image: "",
  parking_lot: true,
  url: "https://terms.naver.com/entry.naver?cid=42856&docId=1999335&categoryId=42856",
  mountain: false,
  ocean: true,
 },


];

export default beachData;
