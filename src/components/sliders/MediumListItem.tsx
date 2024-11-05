import React from "react";

interface MediumListItemProps {
    label: string;
    imgurl: string;
    addr: string;
}

export default function MediumListItem({label, imgurl, addr} : MediumListItemProps){
    return (
        <div className="w-[154px]">
            <img src={imgurl} className="w-[154px] h-[110px] rounded-[4px]" />
            <div className="w-[154px] pt-[8px] font-subtitle2">{label}</div>
            <div className="w-full text-caption2 text-gray-700 text-opacity-60 pt-[4px]">{addr}</div>
        </div>
    );
}
