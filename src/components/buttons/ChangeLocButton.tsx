"use client";
import React from "react";
import gps from "./gps.svg";
import Image from "next/image";

export default function ChangeLocationButton() {
  return (
    <button className="w-[48px] h-[36px] rounded-md bg-primary-core text-white flex justify-center items-center">
      <div className="flex flex-col justify-center items-center text-[10px]">
        <Image src={gps} alt="gps" />
        위치 변경
      </div>
    </button>
  );
}
