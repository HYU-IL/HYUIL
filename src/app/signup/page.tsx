"use client";
import { useState, useEffect, useRef } from "react";
import LOGO from "@_images/logo.svg";
import PAPERICON from "@_icons/paperplaneicon.svg";
import StepCard from "./_component/StepCard";
import {
  bgocean,
  bgfestival,
  bgleisure,
  bgcamping,
  bgmountain,
  bgresort,
} from "@_images/background";
import {
  PEOPLE1OFF,
  PEOPLE2OFF,
  PEOPLE3OFF,
  PEOPLE1,
  PEOPLE2,
  PEOPLE3,
  BYCAR,
  BYCAROFF,
  BYROAD,
  BYROADOFF,
} from "@_images/step";
import DOWN from "@_icons/downicon.svg";
import UP from "@_icons/upicon.svg";
import KakaoButton from "./_component/KakaoButton";

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
    <div className="flex flex-col w-full whitespace-nowrap h-full">
      {/* 상단바 div(고정) */}
      <div className="flex flex-col w-full fixed top-0 left-0 bg-opacity-0 z-50">
        <div className="w-full h-[48px] items-center justify-center flex border-b bg-white">
          <LOGO className="" />
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
          {/* <Image src={PAPERICON} alt="icon" /> */}
          <PAPERICON />
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
          <DOWN className="pt-2" />
        </div>
      ) : (
        <div className="flex flex-col w-full items-center text-body2 text-gray-900 h-[80px] pt-7">
          <UP className="pt-2" />
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
          <PAPERICON />
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
          <PAPERICON />몇 명과 떠날지 하나만 선택해주세요
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          {data.partner_type === "alone" ? (
            <PEOPLE1OFF
              onClick={(e: { currentTarget: { id: string } }) =>
                onStep3Click(e.currentTarget.id)
              }
            />
          ) : (
            <PEOPLE1
              onClick={(e: { currentTarget: { id: string } }) =>
                onStep3Click(e.currentTarget.id)
              }
            />
          )}
          {data.partner_type === "twoorthree" ? (
            <PEOPLE2OFF
              onClick={(e: { currentTarget: { id: string } }) =>
                onStep3Click(e.currentTarget.id)
              }
            />
          ) : (
            <PEOPLE2
              onClick={(e: { currentTarget: { id: string } }) =>
                onStep3Click(e.currentTarget.id)
              }
            />
          )}
          {data.partner_type === "together" ? (
            <PEOPLE3OFF
              onClick={(e: { currentTarget: { id: string } }) =>
                onStep3Click(e.currentTarget.id)
              }
            />
          ) : (
            <PEOPLE3
              onClick={(e: { currentTarget: { id: string } }) =>
                onStep3Click(e.currentTarget.id)
              }
            />
          )}
        </div>
      </div>

      {/* 내려가요 div */}
      {whatStep === 3 ? (
        <div className="flex flex-col w-full items-center text-body2 text-gray-900 h-[80px] pt-7">
          <span>선택하면 아래로</span>
          <span>내려가요</span>
          <DOWN className="pt-2" />
        </div>
      ) : (
        <div className="flex flex-col w-full items-center text-body2 text-gray-900 h-[80px] pt-7">
          <UP className="pt-2" />
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
          <PAPERICON />
          여행 방법에 따라 추천해드려요
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          {data.transportation === "car" ? (
            <BYCAROFF
              onClick={(e: { currentTarget: { id: string } }) =>
                onStep4Click(e.currentTarget.id)
              }
            />
          ) : (
            <BYCAR
              onClick={(e: { currentTarget: { id: string } }) =>
                onStep4Click(e.currentTarget.id)
              }
            />
          )}
          {data.transportation === "car" ? (
            <BYROADOFF
              onClick={(e: { currentTarget: { id: string } }) =>
                onStep4Click(e.currentTarget.id)
              }
            />
          ) : (
            <BYROAD
              onClick={(e: { currentTarget: { id: string } }) =>
                onStep4Click(e.currentTarget.id)
              }
            />
          )}
          {/* <Image
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
          <LOGO />
          <span className="">일과 휴식을 연결하는</span>
          <span className="">강릉 워케이션, 휴일</span>
        </div>

        <div className="flex flex-col w-full h-[30%] items-center gap-2 text-gray-800 text-body2 mt-[150px]">
          SNS 계정으로 간편 가입하기
          <KakaoButton />
        </div>
      </div>
    </div>
  );
}
