import SmallInnerTitleItem from "./SmallInnerTitleItem";
import Link from 'next/link';
import {campingData} from "@/data/campingData"; 
import {festivalData} from "@/data/festivalData"; 
import {leisureData} from "@/data/leisureData"; 
import {workationData} from "@/data/workationData"; 
import {beachData} from "@/data/beachData";
import { residenceData } from "@/data/residenceData";
import { LikeData } from "@/data/likeData";

interface MapSmallInnerTitleSliderProps {
  id: number;
  location: string;
}

const MapSmallInnerTitleSlider = ({ id, location }: MapSmallInnerTitleSliderProps) => {
  const like_data = LikeData;
  const camping_data = campingData;
  const festival_data = festivalData;
  const leisure_data = leisureData;
  const workation_data = workationData;
  const beach_data = beachData;
  const residence_data = residenceData;

  const locationDescription = (location: string) => {
    switch (location) {
      case "철원":
        return "황금빛";
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

  const nextlink = (id: number) => {
    switch (id) {
      case 0:
        return "/mypage/like";
      case 1:
        return "/workation/more";
      case 2:
        return "/camping/more";
      case 3:
        return "/resort/more";
      case 4:
        return "/leisure/more";
      case 5:
        return "/festival/more";
      default:
        return "/main";
    }
  };

  const slider_data = (id: number) => {
    switch (id) {
      case 0:
        return like_data;
      case 1:
        return workation_data;
      case 2:
        return camping_data;
      case 3:
        return beach_data;
      case 4:
        return leisure_data;
      case 5:
        return festival_data;
      default:
        return workation_data;
    }
  };

  const Description = locationDescription(location);

  const renderDescription = (category: string) => (
    <div className="flex justify-between">
      <div className="flex mb-[8px]">
        <p className="text-subtitle3 text-primary-core">{Description}&nbsp;{location}</p>
        <p className="text-subtitle3 text-gray-900">{category}</p>
      </div>
      <Link href={nextlink(id)}><div className="text-caption2 text-gray-800 mr-[16px]">더보기 {'>'} </div></Link>
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
          <Link href={"/mypage/like"}><div className="text-caption2 text-gray-800 mr-[16px]">더보기 {'>'} </div></Link>
        </div>
      )}
      {id === 1 && renderDescription("에서 워케이션!")}
      {id === 2 && renderDescription("에서 캠핑!")}
      {id === 3 && renderDescription("에서 휴양!")}
      {id === 4 && renderDescription("에서 레저!")}
      {id === 5 && renderDescription("에서 지역축제!")}

      <div className="whitespace-nowrap overflow-x-auto flex gap-x-[8px] scrollbar-hide">
        {(slider_data(id)).map((item, index) => (
          <SmallInnerTitleItem key={index} label={item.name} imgurl={item.image} />
        ))}
      </div>
      <div className="h-[48px]" />
    </div>
  );
};

export default MapSmallInnerTitleSlider;
