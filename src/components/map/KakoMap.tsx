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

type CategoryGroupCode =
  | "MT1"
  | "CS2"
  | "PS3"
  | "SC4"
  | "AC5"
  | "PK6"
  | "OL7"
  | "SW8"
  | "BK9"
  | "CT1"
  | "AG2"
  | "PO3"
  | "AT4"
  | "AD5"
  | "FD6"
  | "CE7"
  | "HP8"
  | "PM9";

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
  ];

  const [center, setCenter] = useState<Center>({
    lat: 37.566826,
    lng: 126.9786567,
  });
  const [mapInstance, setMapInstance] = useState<kakao.maps.Map | null>(null);
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [placesByChip, setPlacesByChip] = useState<Record<string, any[]>>({});
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null);

  // 확대/축소 메서드
  const handleLevel = (type: string) => {
    if (!mapInstance) return;
    if (type === "increase") {
      mapInstance.setLevel(6, { animate: true });
    } else if (type === "decrease") {
      mapInstance.setLevel(4, { animate: true });
    }
  };

  useImperativeHandle(ref, () => ({
    handleLevel,
  }));

  const handleDragEnd = () => {
    if (!mapInstance) return;
    const newCenter = mapInstance.getCenter();
    setCenter({
      lat: newCenter.getLat(),
      lng: newCenter.getLng(),
    });
  };

  const toggleChip = (label: string): void => {
    const newSelectedChips = selectedChips.includes(label)
      ? selectedChips.filter((item) => item !== label)
      : [...selectedChips, label];
    setSelectedChips(newSelectedChips);

    if (label !== "나의 찜" && mapInstance) {
      const chipsToSearch = newSelectedChips.filter(
        (chip) => chip !== "나의 찜"
      );
      searchPlacesForChips(chipsToSearch);
    }
  };

  const searchPlacesForChips = (chips: string[]) => {
    if (!mapInstance) return;

    const newPlacesByChip: Record<string, any[]> = {};
    chips.forEach((chipLabel) => {
      const chip = ChipList.find((c) => c.label === chipLabel);
      if (!chip) return;

      if (chip.label === "나의 찜") {
        console.warn("Skipping custom functionality for '나의 찜'");
        return;
      }

      const placesService = new kakao.maps.services.Places(mapInstance);
      placesService.categorySearch(
        chip.type as CategoryGroupCode,
        (data, status) => {
          if (status === kakao.maps.services.Status.OK) {
            newPlacesByChip[chip.label] = data;
            setPlacesByChip((prev) => ({
              ...prev,
              ...newPlacesByChip,
            }));
          } else {
            console.warn(`No results found for category ${chip.type}`);
          }
        }
      );
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
        <MapMarker
          position={{ lat: 37.764246, lng: 128.90026 }}
          image={{
            src: "/assets/images/foothold/locationMarker.svg",
            size: { width: 46, height: 49 },
          }}
        />

        {selectedChips
          .filter((chip) => chip !== "나의 찜")
          .map((chip) =>
            placesByChip[chip]?.map((place) => (
              <React.Fragment key={place.id}>
                <MapMarker
                  position={{
                    lat: parseFloat(place.y),
                    lng: parseFloat(place.x),
                  }}
                  image={{
                    src: ChipList.find((c) => c.label === chip)?.marker || "",
                    size: { width: 46, height: 49 },
                  }}
                  onClick={() => {
                    setActiveOverlay(place.id);
                    if (mapInstance) {
                      mapInstance.setCenter(
                        new kakao.maps.LatLng(place.y, place.x)
                      );
                    }
                  }}
                />
                {activeOverlay === place.id && (
                  <CustomOverlayMap
                    position={{
                      lat: parseFloat(place.y),
                      lng: parseFloat(place.x),
                    }}
                    yAnchor={1.2}
                  >
                    <div
                      className="w-[312px] h-[212px] border rounded-[15px] bg-white px-[24px] py-[16px]"
                      style={{ transform: "translateY(-8px)" }}
                    >
                      <header className="flex  pb-[12px] border-b border-gray-400">
                        <h3 className="text-subtitle1">{place.place_name}</h3>
                        <Image src={CloseButton} alt="close" />
                      </header>
                      <section className="flex flex-col pt-[8px] pb-[16px] gap-y-[4px]">
                        <p className="text-subtitle2 text-gray-600">
                          {place.address_name}
                        </p>
                        <p className="text-body1 text-primary-core">
                          {place.phone}
                        </p>
                      </section>
                      <footer className="flex items-center justify-center">
                        <button
                          onClick={() =>
                            window.open(
                              `https://map.kakao.com/link/map/${place.id}`,
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
