"use client";
import React from "react";


export default function SmallListItem(){
    return (
        <div className="w-[140px]">
            <img src={"/hotelImage.png"} className="w-[140px] h-[105px] rounded-md" />
            <div className="w-[140px] font-semibold text-[16px] pt-[8px]">강릉 모던 프라이빗</div>
        </div>
    );
}

