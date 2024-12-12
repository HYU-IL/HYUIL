import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import Image from "next/image";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import {
  ChipHeart,
  ChipPlace,
  ChipBalloon,
  ChipCoffee,
  ChipFood,
} from "./index";
import CloseButton from "../../../public/assets/icons/Close.svg";
import MapChip from "../buttons/MapChip";
import footholdData, { footholdDataType } from "../../data/footholdData";

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
        onDragEnd={handleDragEnd}
        draggable={true}
        className="w-full h-full"
      >
        {selectedChips.flatMap((chip) =>
          footholdData
            .filter((place) => place.category === chip)
            .map((place, index) => (
              <React.Fragment key={`${chip}-${index}`}>
                <MapMarker
                  position={place.position}
                  image={{
                    src: ChipList.find((c) => c.label === chip)?.marker || "",
                    size: { width: 46, height: 49 },
                  }}
                  onClick={() => {
                    setActiveOverlay(place.name);
                    mapInstance?.panTo(
                      new kakao.maps.LatLng(
                        place.position.lat,
                        place.position.lng
                      )
                    ); // panTo 메서드 사용
                  }}
                />
                {activeOverlay === place.name && (
                  <CustomOverlayMap position={place.position} yAnchor={1.2}>
                    <div
                      className="w-[312px] h-[212px] border rounded-[15px] bg-white px-[24px] py-[16px]"
                      style={{ transform: "translateY(-8px)" }}
                    >
                      <header className="flex justify-between items-center pb-[12px] border-b border-gray-400">
                        <h3 className="text-subtitle1">{place.name}</h3>
                        <Image
                          src={CloseButton}
                          alt="close"
                          onClick={() => setActiveOverlay(null)}
                        />
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
                          onClick={(event) => {
                            event.preventDefault(); // 기본 동작 방지
                            window.open(place.link, "_blank"); // 새 탭에서 링크 열기
                          }}
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
