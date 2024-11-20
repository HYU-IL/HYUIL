"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import LOGO from "../../../../public/assets/images/logo.svg";
import LOGOKorean from "../../../../public/assets/images/logo_korean.svg";

export default function Splash() {
  return (
    <div className="flex flex-col w-full min-h-[760px] items-center pt-[200px]">
      <div className="w-fit items-start flex flex-col gap-1">
        <Image src={LOGOKorean} alt="logo" />
        <Image src={LOGO} alt="logo" />
      </div>
    </div>
  );
}
