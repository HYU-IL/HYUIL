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
}
const residenceData: residenceDataType = {
  id: 1,
  name: "강릉 스카이베이 숙소",
  rdnm_adr: "강원 강릉시 강문동 258-4",
  capacity: 4,
  max_capacity: 6,
  parking_lot: true,
  wifi: true,
  image: "",
  telephone: "010-0000-0000",
};

export default residenceData;
