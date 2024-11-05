import React from "react";

interface SmallListItemProps {
    label: string;
    imgurl: string;
}


export default function SmallListItem({label, imgurl} : SmallListItemProps){
    return (
        <div className="w-[140px]">
            <img src={imgurl} className="w-[140px] h-[105px] rounded-md" />
            <div className="w-[140px] pt-[8px] text-subtitle2">{label}</div>
        </div>
    );
}

