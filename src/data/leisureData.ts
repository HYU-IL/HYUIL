export interface leisureDataType {
  id: number;
  name: string;
  image: string;
  description: string;
  parking_lot: boolean;
  url: string;
}

const leisureData: leisureDataType[] = [
  {
    id: 1,
    name: "경포그네터",
    image: "",
    description: `경포그네터는 '하늘그네터-경포'라는 의미로 다양한 하늘그네와 이색그네들을 즐기는 국내 최초의 그네전문 테마 놀이터입니다. 하늘그네, 시소그네, 메이폴그네 체험과 투호, 제기차기 등 전통놀이 등을 체험할 수 있습니다.`,
    parking_lot: true,
    url: "https://wabadada-ranking-web.vercel.app/",
    ocean: false,
    mountain: true,
  },
  {
    id: 2,
    name: "경포다이브리조트",
    image: "",
    description: `경포다이브리조트는 경포 해안로에 위치하고 있으며, 다이빙을 좋아하는 또는 관심이 있는 관광객은 다이빙 도전을 해볼 수 있는 기회를 제공한다. ‘경포다이브리조트’는 다이버 분들이 이용할 수 있는 편의시설을 마련해두고 있으며, 안전을 최고로 생각하기 때문에 다이빙에 필요한 안전장비 또한 철저하게 갖추어두고 있어 관광객은 안전하게 스쿠버다이빙을 즐길 수 있다.`,
    parking_lot: false,
    url: "https://kyungpodive.modoo.at/",
    ocean: false,
    mountain: true,
  },
  {
    id: 3,
    name: "삼척 해양 레일바이크",
    image: "",
    description: `곰솔과 기암괴석으로 어우러진 국내 유일의 삼척 해양레일바이크는 아름다운 동해의 해안선을 따라 5.4km복선으로 운행되고 있으며 루미나리에와 레이저 쇼가 연출되는 환상의 터널은 잠시나마 신비로운 해저터널을 여행한 듯 합니다.

우리나라의 특성상 4계절 모두 바다가 보이는 아름다운 가지각색의 경관을가족, 연인, 친구와 함께 다 같이 즐길 수 있습니다.

삼척시에서 운영하는 레일바이크는 그 다른 어떤 레일바이크보다 안전성과 편안함이 강조되어 있으므로 안전하게 아이들과 함께 동승하실 수 있으며 2개의 정거장(궁촌정거장, 용화정거장)과 전망대가 있는 휴게소, 그리고 해양도시만이 가지고 있는 해양터널을 가지고 있습니다.

해양터널은 각종 레이저쇼 및 바다의 생태를 경험할 수 있으므로 아이들의 학습과 부모님 또는 연인, 친구들에게 많은 해양 볼거리를 제공합니다.`,
    parking_lot: false,
    url: "https://oceanrailbike.com/main/main.do",
    ocean: true,
    mountain: false,
  },
  {
    id: 4,
    name: "하이원 추추파크",
    image: "",
    description: `국내 유일의 산악철도와 영동선을 활용한 기차테마파크로 지그재그 철도를 달리는 스위치백트레인, 국내 최고 속도의 짜릿한 레일바이크, 이색 미니트레인 외 30동의 숙박시설로 이루어진 하이원추추파크는 남녀노소 누구나 체험하고 즐길 수 있는 국내 유일의 철도 체험형 기차 테마 리조트로 고객 여러분께서는 추억과 낭만을 느끼며 즐거운 기차여행을 체험하실 수 있습니다.
`,
    parking_lot: true,
    url: "https://www.choochoopark.com/",
    ocean: false,
    mountain: true,
  },
  {
    id: 5,
    name: "춘천중도물레길",
    image: "",
    description: `춘천 중도 물레길은 중동유원지를 지나 무인도 자연 생태숲길 코스, 자갈 낚시터를 지나 삼천동 하늘 자전거길 코스가 있으며 숙련된 전문가가 이용하실 수 있는 선착장에서 부터 6km코스로 하늘 자전거길, 스카이워크, 삼악산입구, 의암댐을 지나 회항하는 다양한 코스가 있습니다. 카누여행의 즐거움을 춘천 의암호에서 느껴보세요.`,
    parking_lot: true,
    url: "http://www.ccmullegil.co.kr/new/index.html",
    ocean: true,
    mountain: true,
  },
];

export default leisureData;
