import React from "react";

interface SmallListItemProps {
    label: string;
    imgurl: string;
}


export default function SmallListItem({label, imgurl} : SmallListItemProps){
    return (
        <div className="w-[140px]">
            <div className="w-[140px] h-[105px] mb-[8px]">
              <img src={imgurl} className="w-[140px] h-[105px] rounded-[4px] " />
            </div>
            <span className="w-[140px] pt-[8px] text-subtitle2 whitespace-pre-wrap">{label}</span>
        </div>
    );
}

