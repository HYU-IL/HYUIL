import React from "react";

interface MediumListItemProps {
    label: string;
    imgurl: string;
    addr: string;
}

export default function MediumListItem({label, imgurl, addr} : MediumListItemProps){
    return (
        <div className="w-[154px] h-fit">
            <div className="w-[154px] h-[110px] mb-[8px]">
                <img src={imgurl} className="w-full h-full rounded-[4px]"/>
            </div>
                <div className="flex flex-col">
                <span className="text-[16px] block leading-[20px] whitespace-pre-wrap mb-[4px]">
                    {label && label}
                </span>
                <span className="h-fit text-[12px] text-[#999999] whitespace-pre-wrap">
                    {addr && addr}
                </span>
            </div>
        </div>
    );
}
