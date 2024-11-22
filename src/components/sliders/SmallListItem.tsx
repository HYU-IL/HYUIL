import React from "react";
import Image from 'next/image';

interface SmallListItemProps {
    label: string;
    imgurl: string;
}


export default function SmallListItem({label, imgurl} : SmallListItemProps){
    return (
        <div className="w-[140px]">
            <div className="w-[140px] h-[105px] mb-[8px] relative overflow-hidden rounded-[4px]">
                <Image src={imgurl} alt={"backgroundImg"} layout="fill" objectFit="cover"/>
            </div>
            <span className="w-[140px] pt-[8px] text-body1 whitespace-pre-wrap">{label}</span>
        </div>
    );
}

