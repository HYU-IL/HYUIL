import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import Image from "next/image";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import { ChipHeart, ChipPlace, ChipBalloon, ChipCoffee, ChipFood } from ".";
import CloseButton from "../../../public/assets/icons/Close.svg";
import MapChip from "../buttons/MapChip";

interface Center {
  lat: number;
  lng: number;
}

const KakaoMap = forwardRef(function KakaoMap(_, ref) {
  const ChipList = [
    {
      icon: ChipHeart,
      label: "나의 찜",
      type: "AT4",
      marker: "/assets/images/foothold/heartMarker.svg",
    },
    {
      icon: ChipPlace,
      label: "관광명소",
      type: "AT4",
      marker: "/assets/images/foothold/placeMarker.svg",
    },
    {
      icon: ChipBalloon,
      label: "문화시설",
      type: "CT1",
      marker: "/assets/images/foothold/balloonMarker.svg",
    },
    {
      icon: ChipCoffee,
      label: "카페",
      type: "CE7",
      marker: "/assets/images/foothold/coffeeMarker.svg",
    },
    {
      icon: ChipFood,
      label: "음식점",
      type: "FD6",
      marker: "/assets/images/foothold/foodMarker.svg",
    },
    {
      icon: ChipHeart, // 나의 찜 아이콘 재사용
      label: "주차장",
      type: "PK6",
      marker: "/assets/images/foothold/parkingMarker.svg",
    },
  ];

  const [center, setCenter] = useState<Center>({
    lat: 37.764519,
    lng: 128.899617,
  });
  const [mapInstance, setMapInstance] = useState<kakao.maps.Map | null>(null);
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null);

  // 더미 데이터
  const dummyData = [
    {
      name: "강릉 중앙시장",
      address: "강원 강릉시 금성로 21",
      phone: "033-123-4567",
      category: "관광명소",
      position: { lat: 37.751853, lng: 128.876057 },
    },
    {
      name: "오죽헌",
      address: "강원 강릉시 율곡로3139번길 24",
      phone: "033-645-4050",
      category: "관광명소",
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
      position: { lat: 37.752853, lng: 128.878057 },
    },
    {
      name: "정동진 모래시계 공원",
      address: "강원 강릉시 정동역길 17",
      phone: "033-640-4533",
      category: "문화시설",
      position: { lat: 37.785853, lng: 128.912057 },
    },
    {
      name: "강릉 시립 박물관",
      address: "강원 강릉시 박물관길 3",
      phone: "033-660-3301",
      category: "문화시설",
      position: { lat: 37.767853, lng: 128.899057 },
    },
    {
      name: "카페 보헤미안",
      address: "강원 강릉시 경강로 3136",
      phone: "033-987-6543",
      category: "카페",
      position: { lat: 37.750853, lng: 128.874057 },
    },
    {
      name: "테라로사 커피공장",
      address: "강원 강릉시 구정면 현천길 7",
      phone: "033-648-2760",
      category: "카페",
      position: { lat: 37.770853, lng: 128.899057 },
    },
    {
      name: "월화엔 강릉중앙시장점",
      address: "강원 강릉시 토성로184번길 6",
      phone: "0507-1398-5759",
      category: "카페",
      position: { lat: 37.756596, lng: 128.896178 },
    },
    {
      name: "강릉샌드",
      address: "강원 강릉시 금성로12번길 6",
      phone: "0507-1343-8034",
      category: "카페",
      position: { lat: 37.755024, lng: 128.898753 },
    },
    {
      name: "안목해변 카페거리",
      address: "강원 강릉시 창해로14번길 20",
      phone: "033-641-1011",
      category: "카페",
      position: { lat: 37.767853, lng: 128.896057 },
    },
    {
      name: "명성횟집",
      address: "강원 강릉시 옥천로 45",
      phone: "033-654-7890",
      category: "음식점",
      position: { lat: 37.749853, lng: 128.870057 },
    },
    {
      name: "초당 순두부 마을",
      address: "강원 강릉시 초당순두부길 15",
      phone: "033-652-1587",
      category: "음식점",
      position: { lat: 37.767853, lng: 128.896057 },
    },
    {
      name: "소나무집",
      address: "강원 강릉시 금성로43번길 2",
      phone: "033-648-1122",
      category: "음식점",
      position: { lat: 37.762853, lng: 128.894057 },
    },
    {
      name: "강릉월화 주차장",
      address: "강원 강릉시 월화로 50",
      phone: "033-321-0987",
      category: "주차장",
      position: { lat: 37.746853, lng: 128.863057 },
    },
    {
      name: "강릉 시청 공영주차장",
      address: "강원 강릉시 강릉대로 33",
      phone: "033-646-7767",
      category: "주차장",
      position: { lat: 37.762853, lng: 128.899057 },
    },
    {
      name: "경포대 주차장",
      address: "강원 강릉시 경포로 365",
      phone: "033-652-8901",
      category: "주차장",
      position: { lat: 37.769853, lng: 128.891057 },
    },
  ];

  const toggleChip = (label: string): void => {
    const newSelectedChips = selectedChips.includes(label)
      ? selectedChips.filter((item) => item !== label)
      : [...selectedChips, label];
    setSelectedChips(newSelectedChips);
  };

  useImperativeHandle(ref, () => ({
    handleLevel: (type: string) => {
      if (!mapInstance) return;
      if (type === "increase") {
        mapInstance.setLevel(6, { animate: true });
      } else if (type === "decrease") {
        mapInstance.setLevel(4, { animate: true });
      }
    },
  }));

  const handleDragEnd = () => {
    if (!mapInstance) return;
    const newCenter = mapInstance.getCenter();
    setCenter({
      lat: newCenter.getLat(),
      lng: newCenter.getLng(),
    });
  };

  useEffect(() => {
    if (mapInstance) {
      mapInstance.setLevel(5, { animate: true });
    }
  }, [mapInstance]);

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <Map
        center={center}
        level={4}
        onCreate={(map) => setMapInstance(map)}
        onClick={() => setActiveOverlay(null)}
        onDragEnd={handleDragEnd}
        draggable={true}
        className="w-full h-full"
      >
        {selectedChips.flatMap((chip) =>
          dummyData
            .filter((place) => place.category === chip)
            .map((place, index) => (
              <React.Fragment key={index}>
                <MapMarker
                  position={place.position}
                  image={{
                    src: ChipList.find((c) => c.label === chip)?.marker || "",
                    size: { width: 46, height: 49 },
                  }}
                  onClick={() => setActiveOverlay(place.name)}
                />
                {activeOverlay === place.name && (
                  <CustomOverlayMap position={place.position} yAnchor={1.2}>
                    <div
                      className="w-[312px] h-[212px] border rounded-[15px] bg-white px-[24px] py-[16px]"
                      style={{ transform: "translateY(-8px)" }}
                    >
                      <header className="flex justify-between items-center pb-[12px] border-b border-gray-400">
                        <h3 className="text-subtitle1">{place.name}</h3>
                        <Image src={CloseButton} alt="close" />
                      </header>
                      <section className="flex flex-col pt-[8px] pb-[16px] gap-y-[4px]">
                        <p className="text-subtitle2 text-gray-600">
                          {place.address}
                        </p>
                        <p className="text-body1 text-primary-core">
                          {place.phone}
                        </p>
                      </section>
                      <footer className="flex items-center justify-center">
                        <button
                          onClick={() =>
                            window.open(
                              `https://map.kakao.com/link/map/${place.name}`,
                              "_blank"
                            )
                          }
                          className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary-core text-white hover:bg-green-600 transition"
                        >
                          카카오맵에서 보기
                        </button>
                      </footer>
                    </div>
                  </CustomOverlayMap>
                )}
              </React.Fragment>
            ))
        )}
      </Map>

      <div className="absolute top-5 z-10 w-full whitespace-nowrap overflow-x-auto flex gap-x-[8px] scrollbar-hide px-[24px]">
        {ChipList.map((chip, index) => (
          <MapChip
            key={index}
            icon={chip.icon}
            label={chip.label}
            isSelected={selectedChips.includes(chip.label)}
            onClick={() => toggleChip(chip.label)}
          />
        ))}
      </div>
    </div>
  );
});

export default KakaoMap;
