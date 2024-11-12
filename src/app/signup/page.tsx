"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import LOGO from "../../../public/assets/images/logo.svg";
import PAPERICON from "../../../public/assets/icons/paperplaneicon.svg";
import ChoiceComponent from "./_component/ChoiceComponent";
import bgocean from "../../../public/assets/images/bg_ocean.png";
import bgmountain from "../../../public/assets/images/bg_mountain.png";
import DOWN from "../../../public/assets/icons/downicon.svg";
import CAMPING from "../../../public/assets/images/step_camping.svg";
import RESORT from "../../../public/assets/images/step_resort.svg";
import LEISURE from "../../../public/assets/images/step_leisure.svg";
import FESTIVAL from "../../../public/assets/images/step_festival.svg";
import PEOPLE1 from "../../../public/assets/images/step_1or2_on.svg";
import PEOPLE2 from "../../../public/assets/images/step_3or4_on.svg";
import PEOPLE3 from "../../../public/assets/images/step_morethan5_on.svg";
import BYCAR from "../../../public/assets/images/step_car.svg";
import BYROAD from "../../../public/assets/images/step_road.svg";
import KAKAO from "../../../public/assets/images/kakaobutton.svg";

export default function SignupPage() {
  const [whatStep, setWhatStep] = useState<number>(1);
  const whatPercent =
    whatStep === 1
      ? 33
      : whatStep === 2
      ? 33
      : whatStep === 3
      ? 66
      : whatStep === 4
      ? 100
      : 0;
  const step2Ref = useRef<HTMLDivElement>(null);
  const stepRef = useRef<HTMLDivElement[]>([]);
  type dataType = {
    nature_type: string;
    residence: string[];
    partner_type: string;
    transportation: string;
  };

  const [data, setData] = useState<dataType>({
    nature_type: "",
    residence: [],
    partner_type: "",
    transportation: "",
  });
  // 스크롤 위치 조절 메소드
  const scrollCallBack = (targetDiv: number) => {
    stepRef.current[targetDiv]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  // step1 버튼 클릭 메소드
  const onStep1Click = (kind: string) => {
    setData({ ...data, nature_type: kind });
    scrollCallBack(2);
    console.log(data);
  };

  // step2 버튼 클릭 메소드
  const onStep2Click = (kind: string) => {
    setData({ ...data, residence: [...data.residence, kind] });
    console.log(data);
    data.residence.length > 1 ? scrollCallBack(3) : null;
    setWhatStep(2);
  };

  // step3 버튼 클릭 메소드
  const onStep3Click = (kind: string) => {
    setData({ ...data, partner_type: kind });
    scrollCallBack(4);
  };

  // step3 버튼 클릭 메소드
  const onStep4Click = (kind: string) => {
    setData({ ...data, transportation: kind });
    scrollCallBack(5);
  };

  const [step1Selected, setStep1Selcected] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  return (
    <div className="flex flex-col w-full scrollbar-hide whitespace-nowrap overflow-y-auto">
      {/* 상단바 div(고정) */}
      <div className="flex flex-col w-full fixed top-0 left-0">
        <div className="w-full h-[48px] items-center justify-center flex border-b bg-white">
          <Image src={LOGO} alt="logo" className="w-[76px]" />
        </div>
        <div className="flex flex-col w-full items-center justify-center">
          <div className="flex flex-row w-full h-[3px]">
            <div className={`w-[${whatPercent}%] bg-primary-core`} />
            <div className={`w-[${100 - whatPercent}%] bg-gray-300`} />
          </div>
          <span className="text-[12px] leading-3 tracking-tight text-gray-700 pt-3 items-center">
            {whatStep}/3
          </span>
        </div>
      </div>

      {/* step1 div */}
      <div
        id="step1"
        className="flex flex-col font-Pretendard text-[20px] leading-6 tracking-tight font-semibold text-primary-800 mx-[16px] mt-[120px]"
      >
        <span className="ml-3">평소, 가장 가고 싶은</span>
        <span className="ml-3">워케이션 한 곳을 선택해주세요</span>
        <div className="flex flex-row gap-1 text-caption1 text-sub-core pt-[8px] pb-[24px] ml-3">
          <Image src={PAPERICON} alt="icon" />
          선택한 유형을 기반으로 추천해드려요
        </div>
        <div className="flex flex-row justify-center rounded-xl shadow-lg py-[8px] gap-[8px] w-full h-[255px]">
          <ChoiceComponent
            id="mountain"
            imgurl={bgmountain}
            width={150}
            height={210}
            label="마운틴"
            selected={data.nature_type === "mountain"}
            onClick={(e) => onStep1Click(e.currentTarget.id)}
          />
          <ChoiceComponent
            id="ocean"
            imgurl={bgocean}
            width={150}
            height={210}
            label="오션"
            selected={data.nature_type === "ocean"}
            onClick={(e) => {
              onStep1Click(e.currentTarget.id);
              console.log(e.currentTarget.id);
            }}
          />
        </div>
      </div>

      {/* 내려가요 div */}
      <div className="flex flex-col w-full items-center text-body2 text-gray-900 pt-5 ">
        <span>선택하면 아래로</span>
        <span>내려가요</span>
        <Image src={DOWN} alt="down" className="pt-2" />
      </div>

      {/* step2 div */}
      <div
        id="step2"
        ref={(el: HTMLDivElement | null) => {
          if (el) {
            stepRef.current[2] = el;
          }
        }}
        className="flex flex-col h-fit font-Pretendard text-[20px] leading-6 tracking-tight font-semibold text-primary-800 mx-[16px] mt-[50px] mb-4"
      >
        <span className="ml-3">평소, 어디서 편하게</span>
        <span className="ml-3">휴일을 보내고 싶으신가요?</span>
        <div className="flex flex-row gap-1 text-caption1 text-sub-core pt-[8px] pb-[24px] ml-3">
          <Image src={PAPERICON} alt="icon" />
          2곳을 선택하면 휴일이 기억해서 추천해드려요
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl shadow-lg py-[8px] gap-[8px] w-full h-[472px] border">
          <div className="flex flex-row gap-[8px]">
            {/* <Image
              id="camping"
              src={CAMPING}
              alt="camping"
              onClick={(e) => onStep2Click(e.currentTarget.id)}
            />
            <Image
              id="resort"
              src={RESORT}
              alt="resort"
              onClick={(e) => onStep2Click(e.currentTarget.id)}
            /> */}
          </div>
          <div className="flex flex-row gap-[8px]">
            {/* <Image
              id="leisure"
              src={LEISURE}
              alt="leisure"
              onClick={(e) => onStep2Click(e.currentTarget.id)}
            />
            <Image
              id="festival"
              src={FESTIVAL}
              alt="festival"
              onClick={(e) => onStep2Click(e.currentTarget.id)}
            /> */}
          </div>
        </div>
      </div>

      {/* step3 div */}
      <div
        id="step3"
        ref={(el: HTMLDivElement | null) => {
          if (el) {
            stepRef.current[3] = el;
          }
        }}
        className="flex flex-col h-fit font-Pretendard text-[20px] leading-6 tracking-tight font-semibold text-primary-800 mx-[16px] mt-[50px] mb-4"
      >
        <span className="ml-3">편한 휴일을 함께</span>
        <span className="ml-3">보낼 지인은 몇 명인가요?</span>
        <div className="flex flex-row items-center h-fit gap-1 text-caption1 text-sub-core mt-[8px] pb-[20px] ml-3">
          <Image src={PAPERICON} alt="icon" />몇 명과 떠날지 하나만 선택해주세요
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          {/* <Image
            id="alone"
            src={PEOPLE1}
            alt="people"
            onClick={(e) => onStep3Click(e.currentTarget.id)}
          />
          <Image
            id="twoorthree"
            src={PEOPLE2}
            alt="people"
            onClick={(e) => onStep3Click(e.currentTarget.id)}
          />
          <Image
            id="together"
            src={PEOPLE3}
            alt="people"
            onClick={(e) => onStep3Click(e.currentTarget.id)}
          /> */}
        </div>
      </div>

      {/* 내려가요 div */}
      <div className="flex flex-col w-full items-center text-body2 text-gray-900 pt-5">
        <span>선택하면 아래로</span>
        <span>내려가요</span>
        <Image src={DOWN} alt="down" className="pt-2" />
      </div>

      {/* step4(이동방식) div*/}
      <div
        id="step4"
        ref={(el: HTMLDivElement | null) => {
          if (el) {
            stepRef.current[4] = el;
          }
        }}
        className="flex flex-col h-fit font-Pretendard text-[20px] leading-6 tracking-tight font-semibold text-primary-800 mx-[16px] mt-[50px] mb-4"
      >
        <span className="ml-3">차량과 도보 중</span>
        <span className="ml-3">어떻게 떠나실 건가요?</span>
        <div className="flex flex-row items-center h-fit gap-1 text-caption1 text-sub-core mt-[8px] ml-3">
          <Image src={PAPERICON} alt="icon" />
          여행 방법에 따라 추천해드려요
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          {/* <Image
            id="car"
            src={BYCAR}
            alt=""
            onClick={(e) => onStep4Click(e.currentTarget.id)}
          />
          <Image
            id="road"
            src={BYROAD}
            alt=""
            onClick={(e) => onStep4Click(e.currentTarget.id)}
          /> */}
        </div>
      </div>

      <button
        className={`bg-primary-core text-white text-subtitle1 rounded-lg mx-[28px] py-3 mb-[80px] ${
          isFinished
            ? ``
            : `bg-opacity-80 backdrop-filter backdrop-brightness-125`
        }`}
      >
        확인
      </button>

      {/* 카카오 로그인 div */}
      <div
        id="login"
        ref={(el: HTMLDivElement | null) => {
          if (el) {
            stepRef.current[5] = el;
          }
        }}
        className="flex flex-col justify-center items-center w-full h-[100vh] font-Pretendard text-[20px] leading-6 tracking-tight font-semibold text-primary-800"
      >
        <div className="flex flex-col justify-center items-center w-full h-[70%] mt-4">
          <Image src={LOGO} alt="logo" />
          <span className="">일과 휴식을 연결하는</span>
          <span className="">강릉 워케이션, 휴일</span>
        </div>

        <div className="flex flex-col w-full h-[30%] items-center gap-2 text-gray-800 text-body2 mt-[150px]">
          SNS 계정으로 간편 가입하기
          <Image src={KAKAO} alt="kakao" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
