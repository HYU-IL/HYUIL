'use client';
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./banner.css";
import Hotel from "../../../public/hotelImage.png";

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
    <div className="slider-container h-[230px] relative ">
      <Slider {...settings}>
      {[...Array(4)].map((_, index) => (
        <div key={index} className="flex flex-col justify-center items-center">
          <div className="h-[100px] px-[3px] flex flex-col items-center justify-center relative">
            <img className="w-full h-[100px] object-cover rounded-[7px]" src={Hotel.src}/>
          </div>
        </div>
          
         ))}
      </Slider>
    </div>
  );
}

export default CenterMode;