"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import LOGO from "../../../public/assets/images/logo.svg";
import PAPERICON from "../../../public/assets/icons/paperplaneicon.svg";
import StepCard from "./_component/StepCard";
import LongStepCard from "./_component/LongStepCard";
import bgocean from "../../../public/assets/images/bg_ocean.png";
import bgmountain from "../../../public/assets/images/bg_mountain.png";
import bgcamping from "../../../public/assets/images/bg_camping.png";
import bgresort from "../../../public/assets/images/bg_resort.png";
import bgleisure from "../../../public/assets/images/bg_leisure.png";
import bgfestival from "../../../public/assets/images/bg_festival.png";
import PEOPLE1OFF from "../../../public/assets/images/step_1or2_off.svg";
import PEOPLE2OFF from "../../../public/assets/images/step_3or4_off.svg";
import PEOPLE3OFF from "../../../public/assets/images/step_morethan5_off.svg";
import PEOPLE1 from "../../../public/assets/images/step_1or2_on.svg";
import PEOPLE2 from "../../../public/assets/images/step_3or4_on.svg";
import PEOPLE3 from "../../../public/assets/images/step_morethan5_on.svg";
import BYCAR from "../../../public/assets/images/step_car.svg";
import BYROAD from "../../../public/assets/images/step_road.svg";
import BYCAROFF from "../../../public/assets/images/step_car_off.svg";
import BYROADOFF from "../../../public/assets/images/step_road_off.svg";
import DOWN from "../../../public/assets/icons/downicon.svg";
import UP from "../../../public/assets/icons/upicon.svg";
import KAKAO from "../../../public/assets/images/kakaobutton.svg";

export default function SignupPage() {
  const [whatStep, setWhatStep] = useState<number>(1); // percentage bar를 위한
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
    setWhatStep(2);
  };

  // step2 버튼 클릭 메소드
  const onStep2Click = (kind: string) => {
    // kind가 data.residence에 없으면 추가
    if (data.residence.indexOf(kind) === -1) {
      setData({ ...data, residence: [...data.residence, kind] });
    } else {
      // 있으면 빼기(토글 형식으로 되면 좋겠는데)
      setData({ ...data, residence: data.residence.filter((e) => e !== kind) });
    }
    // data.residence.length >= 1 ? scrollCallBack(3) : null;
    // data.residence.length >= 1 ? setWhatStep(3) : null;
    if (data.residence.length >= 1) {
      scrollCallBack(3);
      setWhatStep(3);
    }
    console.log(data.residence);
  };

  // step3 버튼 클릭 메소드
  const onStep3Click = (kind: string) => {
    setData({ ...data, partner_type: kind });
    scrollCallBack(4);
    setWhatStep(4);
  };

  // step3 버튼 클릭 메소드
  const onStep4Click = (kind: string) => {
    setData({ ...data, transportation: kind });
    scrollCallBack(5);
  };

  const [step1Selected, setStep1Selcected] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  return (
    <div className="flex flex-col w-full scrollbar-hide whitespace-nowrap overflow-y-auto h-full">
      {/* 상단바 div(고정) */}
      <div className="flex flex-col w-full fixed top-0 left-0 bg-opacity-0 z-50">
        <div className="w-full h-[48px] items-center justify-center flex border-b bg-white">
          <Image
            src={LOGO}
            alt="logo"
            className="w-[76px]"
            onClick={() => {
              console.log(whatStep);
              console.log(data);
            }}
          />
        </div>
        <div className="flex flex-col w-full items-center justify-center">
          <div className="flex flex-row w-full h-[3px]">
            <div
              className="bg-primary-core transition-width duration-500 ease-in-out"
              style={{ width: `${whatPercent}%` }}
            />
            <div
              className="bg-gray-300 transition-width duration-500 ease-in-out"
              style={{ width: `${100 - whatPercent}%` }}
            />
          </div>
          <span className="text-[12px] leading-3 tracking-tight text-gray-700 pt-3 items-center">
            {`${whatStep === 1 ? whatStep : whatStep - 1}`}/3
          </span>
        </div>
      </div>

      {/* 그라데이션 필터 div */}
      <div
        className={`w-full fixed left-0 z-10 via-[#00ff0000] ${
          whatStep === 1 || whatStep === 3
            ? `bottom-0 h-[30%] bg-gradient-to-b from-[#00ff0000] to-white`
            : whatStep === 2 || whatStep === 4
            ? `top-0 h-[40%] bg-gradient-to-t from-[#00ff0000] to-white`
            : ``
        } `}
      />

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
        <div className="flex flex-row justify-center items-center rounded-xl shadow-lg border py-[8px] gap-[8px] w-full h-[255px]">
          <StepCard
            id="mountain"
            imgurl={bgmountain}
            width={150}
            height={210}
            label="마운틴"
            selected={data.nature_type === "mountain"}
            onClick={(e) => onStep1Click(e.currentTarget.id)}
          />
          <StepCard
            id="ocean"
            imgurl={bgocean}
            width={150}
            height={210}
            label="오션"
            selected={data.nature_type === "ocean"}
            onClick={(e) => onStep1Click(e.currentTarget.id)}
          />
        </div>
      </div>

      {/* 내려가요 div */}
      {whatStep === 1 ? (
        <div className="flex flex-col w-full items-center text-body2 text-gray-900 h-[80px] pt-7">
          <span>선택하면 아래로</span>
          <span>내려가요</span>
          <Image src={DOWN} alt="down" className="pt-2" />
        </div>
      ) : (
        <div className="flex flex-col w-full items-center text-body2 text-gray-900 h-[80px] pt-7">
          <Image src={UP} alt="up" className="pt-2" />
        </div>
      )}

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
            <StepCard
              id="camping"
              imgurl={bgcamping}
              width={150}
              height={210}
              label="캠핑"
              selected={data.residence.indexOf("camping") !== -1}
              onClick={(e) => {
                onStep2Click(e.currentTarget.id);
              }}
            />
            <StepCard
              id="resort"
              imgurl={bgresort}
              width={150}
              height={210}
              label="휴양"
              selected={data.residence.indexOf("resort") !== -1}
              onClick={(e) => {
                onStep2Click(e.currentTarget.id);
              }}
            />
          </div>
          <div className="flex flex-row gap-[8px]">
            <StepCard
              id="leisure"
              imgurl={bgleisure}
              width={150}
              height={210}
              label="레저"
              selected={data.residence.indexOf("leisure") !== -1}
              onClick={(e) => {
                onStep2Click(e.currentTarget.id);
              }}
            />
            <StepCard
              id="festival"
              imgurl={bgfestival}
              width={150}
              height={210}
              label="페스티벌"
              selected={data.residence.indexOf("festival") !== -1}
              onClick={(e) => {
                onStep2Click(e.currentTarget.id);
              }}
            />
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
          <Image
            id="alone"
            src={data.partner_type === "alone" ? PEOPLE1OFF : PEOPLE1}
            alt="people"
            onClick={(e) => onStep3Click(e.currentTarget.id)}
          />
          <Image
            id="twoorthree"
            src={data.partner_type === "twoorthree" ? PEOPLE2OFF : PEOPLE2}
            alt="people"
            onClick={(e) => onStep3Click(e.currentTarget.id)}
          />
          <Image
            id="together"
            src={data.partner_type === "together" ? PEOPLE3OFF : PEOPLE3}
            alt="people"
            onClick={(e) => onStep3Click(e.currentTarget.id)}
          />
        </div>
      </div>

      {/* 내려가요 div */}
      {whatStep === 3 ? (
        <div className="flex flex-col w-full items-center text-body2 text-gray-900 h-[80px] pt-7">
          <span>선택하면 아래로</span>
          <span>내려가요</span>
          <Image src={DOWN} alt="down" className="pt-2" />
        </div>
      ) : (
        <div className="flex flex-col w-full items-center text-body2 text-gray-900 h-[80px] pt-7">
          <Image src={UP} alt="up" className="pt-2" />
        </div>
      )}

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
          <Image
            id="car"
            src={data.transportation === "car" ? BYCAROFF : BYCAR}
            alt=""
            onClick={(e) => onStep4Click(e.currentTarget.id)}
          />
          <Image
            id="road"
            src={data.transportation === "road" ? BYROADOFF : BYROAD}
            alt=""
            onClick={(e) => onStep4Click(e.currentTarget.id)}
          />
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
