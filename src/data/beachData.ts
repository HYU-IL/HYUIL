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
}
const beachData: beachDataType = {
  id: 1,
  name: "강문 해변",
  sigun: "강릉시 해운대구",
  rdnm_adr: "강릉시 해운대구 센텀3로 20",
  telephone: "010-0000-0000",
  description: `강문해변은 강문동에 자리 잡고 있으며 주변에 작은 포구인 강문항이 있어 근처 횟집에서 새벽에 잡은 싱싱한 생선회를 맛볼 수 있다.\r\n \r\n깨끗이 정비된 숙박시설과 경포지구가 근접해 있다. 강문해변에서는 보트로 5~10분 걸리는 곳에 정박을 하여 수심 5~30m의 바다 속에 방대하게 펼쳐진 자연짬(바위), 말미잘, 대형어류 등 뛰어난 수중경관을 감상할 수 있어 스킨스쿠버 동호인들이 많이 찾고 있으며 특히 추억을 남기고 싶은 신혼부부를 위한 수중 다이빙도 하고 있다.`,
  image: "",
  parking_lot: false,
  url: "https://www.naver.com/",
};

export default beachData;
