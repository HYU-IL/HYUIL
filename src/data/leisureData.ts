export interface leisureDataType {
  id: number;
  name: string;
  image: string;
  description: string;
  parking_lot: boolean;
  url: string;
}

const leisureData: leisureDataType = {
  id: 1,
  name: "경포그네터",
  image: "",
  description: `경포그네터는 '하늘그네터-경포'라는 의미로 다양한 하늘그네와 이색그네들을 즐기는 국내 최초의 그네전문 테마 놀이터입니다. 하늘그네, 시소그네, 메이폴그네 체험과 투호, 제기차기 등 전통놀이 등을 체험할 수 있습니다.`,
  parking_lot: true,
  url: "https://www.naver.com/",
};

export default leisureData;
