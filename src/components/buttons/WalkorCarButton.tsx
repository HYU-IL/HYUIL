"use client";
import React, { useState } from "react";

export default function WalkorCarButton({
  onModeChange,
}: {
  onModeChange: (mode: string) => void;
}) {
  const [selected, setSelected] = useState<string>("walk"); // 초기값: "도보"

  const handleSelect = (value: string) => {
    setSelected(value);
    onModeChange(value === "walk" ? "decrease" : "increase"); // 모드에 따라 확대/축소
  };

  return (
    <div className="flex border rounded-md">
      <button
        onClick={() => handleSelect("walk")}
        className={` w-[50.6px] h-[36px] text-[12px] rounded-l-md ${
          selected === "walk"
            ? "bg-primary-core text-white"
            : "bg-white text-gray-800"
        }`}
      >
        도보
      </button>
      <button
        onClick={() => handleSelect("car")}
        className={` w-[50.6px] h-[36px] text-[12px] rounded-r-md ${
          selected === "car"
            ? "bg-primary-core text-white"
            : "bg-white text-gray-800"
        }`}
      >
        차량
      </button>
    </div>
  );
}
