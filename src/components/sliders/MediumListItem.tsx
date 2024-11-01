"use client";
import React from "react";


export default function MediumListItem(){
    return (
        <div className="w-[154px]">
            <img src={"/hotelImage.png"} className="w-[154px] h-[110px] rounded-[4px]" />
            <div className="w-[154px] font-semibold text-[16px] pt-[8px]">강릉 모던 프라이빗 공간 | 휴휴가</div>
            <div className="w-full text-[12px] text-gray-700 pt-[4px]">강릉시 황리단 민속마을</div>
        </div>
    );
}
