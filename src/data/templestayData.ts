export interface templestayDataType {
  id: number;
  name: string;
  rdnm_adr: string;
  telephone: string;
  image: string;
  url: string;
  ocean: boolean;
  mountain: boolean;
}
const templestayData: templestayDataType[] = [
  {
    id: 1,
    name: "보현사",
    rdnm_adr: "강원특별자치도 강릉시 성산면 보현길 396",
    telephone: "033-647-9455",
    image: "",
    url: "https://kb1.templestay.com/index.asp?t_id=naksansa",
    ocean: false,
    mountain: true,
  },
  {
    id: 2,
    name: "낙산사",
    rdnm_adr: "강원특별자치도 양양군 강현면 낙산사로 100",
    telephone: "033-672-2417",
    image: "",
    url: "https://kb1.templestay.com/index.asp?t_id=naksansa",
    ocean: false,
    mountain: true,
  },
  {
    id: 3,
    name: "망경산사",
    rdnm_adr: "강원특별자치도 영월군 망경대산길 135-6",
    telephone: "033-374-8007",
    image: "",
    url: "https://kb1.templestay.com/index.asp?t_id=mangkyung",
    ocean: false,
    mountain: true,
  },
  {
    id: 4,
    name: "월정사",
    rdnm_adr: "강원특별자치도 평창군 진부면 오대산로 374-8",
    telephone: "0507-1484-6606",
    image: "",
    url: "http://woljeongsa.org/intro.php",
    ocean: false,
    mountain: true,
  },
  {
    id: 5,
    name: "건봉사",
    rdnm_adr: "강원특별자치도 고성군 거진읍 건봉사로 723",
    telephone: "033-682-8103",
    image: "",
    url: "https://www.templestay.com/temple_info.asp?t_id=gunbongsa",
    ocean: false,
    mountain: true,
  },
];

export default templestayData;
