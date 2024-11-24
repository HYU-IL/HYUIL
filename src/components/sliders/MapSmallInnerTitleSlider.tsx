import SmallInnerTitleItem from "./SmallInnerTitleItem";

interface MapSmallInnerTitleSliderProps {
  id: number;
  location: string;
}

const MapSmallInnerTitleSlider = ({ id, location }: MapSmallInnerTitleSliderProps) => {
  const locationDescription = (location: string) => {
    switch (location) {
      case "철원":
        return "철원";
      case "화천":
        return "평화로운";
      case "양구":
        return "시원한";
      case "인제":
        return "아름다운";
      case "고성":
        return "조화로운";
      case "속초":
        return "근사한";
      case "양양":
        return "평온한";
      case "홍천":
        return "따스한";
      case "춘천":
        return "고요한";
      case "횡성":
        return "매혹적인";
      case "원주":
        return "활기찬";
      case "평창":
        return "푸른";
      case "강릉":
        return "그림같은";
      case "정선":
        return "상쾌한";
      case "영월":
        return "신나는";
      case "태백":
        return "고요한";
      case "삼척":
        return "청정한";
      case "동해":
        return "자연 그대로의";
      default:
        return "";
    }
  };

  const Description = locationDescription(location);

  const renderDescription = (category: string) => (
    <div className="flex justify-between">
      <div className="flex mb-[8px]">
        <p className="text-subtitle3 text-primary-core">{Description}&nbsp;{location}</p>
        <p className="text-subtitle3 text-gray-900">{category}</p>
      </div>
      <div className="text-caption2 text-gray-800 mr-[16px]">더보기 {'>'} </div>
    </div>
  );

  return (
    <div>
      {id === 0 && (
        <div className="flex justify-between">
          <div className="flex mb-[8px] gap-x-1">
            <p className="text-subtitle3 text-gray-900">내가 선택한</p>
            <p className="text-subtitle3 text-primary-core">찜</p>
          </div>
          <div className="text-caption2 text-gray-800 mr-[16px]">더보기 {'>'} </div>
        </div>
      )}
      {id === 1 && renderDescription("에서 워케이션!")}
      {id === 2 && renderDescription("에서 캠핑!")}
      {id === 3 && renderDescription("에서 휴양!")}
      {id === 4 && renderDescription("에서 레저!")}
      {id === 5 && renderDescription("에서 지역축제!")}

      <div className="whitespace-nowrap overflow-x-auto flex gap-x-[8px] scrollbar-hide">
        <SmallInnerTitleItem />
        <SmallInnerTitleItem />
        <SmallInnerTitleItem />
        <SmallInnerTitleItem />
        <SmallInnerTitleItem />
        <SmallInnerTitleItem />
      </div>
      <div className="h-[48px]" />
    </div>
  );
};

export default MapSmallInnerTitleSlider;
