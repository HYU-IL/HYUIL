'use client';
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import Image from 'next/image';

const items = [
  {
    title:"강릉 피크닉 앤 글램핑",
    imgurl: "/HotelImage.png"
  },
  {
    title:"울미숲 캠핑장",
    imgurl: "/HotelImage.png"
  },
  {
    title:"더존 카라반",
    imgurl: "/HotelImage.png"
  },
  {
    title:"강릉 피크닉 앤 글램핑",
    imgurl: "/HotelImage.png"
  },
  {
    title:"울미숲 캠핑장",
    imgurl: "/HotelImage.png"
  },
  {
    title:"더존 카라반",
    imgurl: "/HotelImage.png"
  }
]

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
    <div className="slider-container h-[248px] relative ">
      <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index} className="my-[50px] flex flex-col justify-center items-center">
          <div className="item h-[110px] mx-[16px]  flex flex-col items-center justify-center relative">
          <Image
              src={item.imgurl}
              alt="background"
              layout="fill"
              className="object-cover rounded-[7px]"
            />
          </div>
          <div className="text text-center font-Pretendard ">{item.title}</div>
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