"use client";
import React from "react";
import Img from "./hotel.png";


export default function SmallListItem(){
    return (
        <div className="w-[140px] h-[133px] ">
            <img src={Img.src} className="h-[105px] rounded-md w-full" />
            <div className="w-full font-semibold text-[16px] pt-[8px]">강릉 모던 프라이빗</div>
        </div>
    );
}

