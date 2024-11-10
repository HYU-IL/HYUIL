"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import LOGO from "../../../public/assets/images/logo.svg";
import PAPERICON from "../../../public/assets/icons/paperplaneicon.svg";
import MOUNTAIN from "../../../public/assets/images/step_mountain.svg";
import OCEAN from "../../../public/assets/images/step_ocean.svg";
import DOWN from "../../../public/assets/icons/downicon.svg";

export default function SignupPage() {
  const whatStep = useRef(1);
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full h-[48px] items-center justify-center flex border-b">
        <Image src={LOGO} alt="logo" className="w-[76px]" />
      </div>

      {/* stepper div */}
      <div className="flex w-full items-center justify-center text-[12px] leading-3 tracking-tight text-gray-700 pt-3">
        {whatStep.current}/3
      </div>
      {/* step1 div */}
      <div className="flex flex-col font-Pretendard text-[20px] leading-6 tracking-tight font-semibold text-primary-800 mx-[16px] border border-red-500 mt-[50px]">
        <span className="ml-3">평소, 가장 가고 싶은</span>
        <span className="ml-3">워케이션 한 곳을 선택해주세요</span>
        <div className="flex flex-row gap-1 text-caption1 text-sub-core pt-[8px] pb-[24px] ml-3">
          <Image src={PAPERICON} alt="icon" />
          선택한 유형을 기반으로 추천해드려요
        </div>
        <div className="flex flex-row justify-center rounded-xl shadow-lg py-[8px] gap-[8px] w-full h-[255px] border">
          <Image src={MOUNTAIN} alt="moutain" />
          <Image src={OCEAN} alt="ocean" />
        </div>
      </div>

      {/* 내려가요 div */}
      <div className="flex flex-col w-full items-center text-body2 text-gray-900 pt-5 border border-blue-500">
        <span>선택하면 아래로</span>
        <span>내려가요</span>
        <Image src={DOWN} alt="down" className="pt-2"/>
      </div>
    </div>
  );
}
