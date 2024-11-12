"use client";
import React from "react";
import gps from "./gps.svg";

export default function ChangeLocationButton() {
  return (
    <button className="w-[50px] h-[33.33px] rounded-md bg-primary-core text-white flex justify-center items-center">
      <div className="flex flex-col justify-center items-center text-[8px]">
        <img className="w-[20px] h-[20px]" src={gps.src}></img>
        위치 변경
      </div>
    </button>
  );
}
