'use client';
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./banner.css";
import Image from 'next/image';

function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    className: "center",
    dots: true,
    centerMode: true,
    infinite: false,
    centerPadding: "16px",
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
        <div className="flex justify-center px-[2px]">
          <div className="w-full h-[100px] relative">
            <Image
              src="/assets/images/BannerImage1.svg"
              alt="배너"
              layout="fill"
              className="object-cover rounded-[7px]"
            />
          </div>
        </div>
        <div className="flex justify-center px-[2px]">
          <div className="w-full h-[100px] relative">
            <Image
              src="/assets/images/BannerImage2.svg"
              alt="배너"
              layout="fill"
              className="object-cover rounded-[7px]"
            />
          </div>
        </div>
        <div className="flex justify-center px-[2px]">
          <div className="w-full h-[100px] relative">
            <Image
              src="/assets/images/BannerImage1.svg"
              alt="배너"
              layout="fill"
              className="object-cover rounded-[7px]"
            />
          </div>
        </div>
        <div className="flex justify-center px-[2px]">
          <div className="w-full h-[100px] relative px-[2px]">
            <Image
              src="/assets/images/BannerImage2.svg"
              alt="배너"
              layout="fill"
              className="object-cover rounded-[7px]"
            />
          </div>
        </div>  
      </Slider>
    </div>
  );
}

export default Banner;