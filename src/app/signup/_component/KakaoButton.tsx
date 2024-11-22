"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
interface KakaoButtonProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

declare global {
  interface Window {
    Kakao: any;
  }
}

function KakaoButton({ onClick, ...props }: KakaoButtonProps) {
  const redirectUri = `http://localhost:3000/login`;
  const scope = "profile_nickname, profile_image";

  useEffect(() => {
    console.log("window.Kakao: ", window.Kakao);
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
        console.log("after Init: ", window.Kakao.isInitialized());
      }
    } else {
      console.error("window.Kakao가 정의되지 않았습니다.");
    }
  }, []);

  // 카카오 SDK 초기화
  useEffect(() => {
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
        console.log("after Init: ", window.Kakao.isInitialized());
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.Kakao]);

  const handleLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri,
      scope,
    });
    console.log("Kakao login 진행중");
  };

  return (
    <button
      className={`w-[90%] bg-[#fff703] text-black font-bold text-subtitle2 border rounded-lg py-3`}
      onClick={handleLogin}
    >
      카카오로그인
    </button>
  );
}

export default KakaoButton;
