'use client';
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import Hotel from "../../../public/hotelImage.png";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    beforeChange: (_:number, newIndex:number) => {
      setActiveIndex(newIndex);
    },
  };
  return (
    <div className="slider-container h-[230px] relative ">
      <Slider {...settings}>
      {[...Array(6)].map((_, index) => (
        <div key={index} className="mt-[55px] flex flex-col justify-center items-center">
          <div className="item h-[100px] mx-[15px] p-[2%] flex flex-col items-center justify-center relative">
            <img className="w-full h-[100px] object-cover rounded-[7px]" src={Hotel.src}/>
          </div>
          <div className="text w-full text-[#8EDB9B] text-center text-[9px] px-[10px] font-Pretendard">강릉 피크닉 앤 글램핑</div>
        </div>
          
         ))}
      </Slider>
      <div className="absolute bottom-2 right-2 mx-[10px] "> 
        <div className="bg-black w-[30px] h-[24px] opacity-[40%] rounded-[55px] text-white text-[10px] text-center flex items-center justify-center">{activeIndex+1}/6</div>
      </div>
    </div>
  );
}

export default Carousel;