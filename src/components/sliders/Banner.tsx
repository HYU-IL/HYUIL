'use client';
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./banner.css";

function CenterMode() {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    className: "center",
    dots: true,
    centerMode: true,
    infinite: false,
    centerPadding: "15px",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    beforeChange: (_:number, newIndex:number) => {
      setActiveIndex(newIndex);
    },
  };
  return (
    <div className="slider-container h-[133px] relative ">
      <Slider {...settings}>
        <div className="flex flex-col justify-center items-center">
          <div className="h-[100px] px-[3px] flex flex-col items-center justify-center relative">
            <img className="w-full h-[100px] object-cover rounded-[7px]" src={"/assets/images/BannerImage1.svg"}/>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="h-[100px] px-[3px] flex flex-col items-center justify-center relative">
            <img className="w-full h-[100px] object-cover rounded-[7px]" src={"/assets/images/BannerImage2.svg"}/>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="h-[100px] px-[3px] flex flex-col items-center justify-center relative">
            <img className="w-full h-[100px] object-cover rounded-[7px]" src={"/assets/images/BannerImage1.svg"}/>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="h-[100px] px-[3px] flex flex-col items-center justify-center relative">
            <img className="w-full h-[100px] object-cover rounded-[7px]" src={"/assets/images/BannerImage2.svg"}/>
          </div>
        </div>
          
      </Slider>
    </div>
  );
}

export default CenterMode;