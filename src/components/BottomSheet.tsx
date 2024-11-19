"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const BottomSheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDragEnd = (
    _: any,
    info: { offset: { y: number }; velocity: { y: number } }
  ) => {
    // 드래그 동작을 분석하여 시트를 열거나 닫음
    if (info.offset.y > 100 || info.velocity.y > 500) {
      setIsOpen(false);
    } else if (info.offset.y < -100 || info.velocity.y < -500) {
      setIsOpen(true);
    }
  };

  return (
    <motion.div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: isOpen ? "60%" : "80px",
        backgroundColor: "#fff",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 15,
        overflow: "hidden",
      }}
      drag="y" // Y축으로만 드래그 가능
      dragConstraints={{ top: 0, bottom: 0 }} // 드래그 제한
      onDragEnd={handleDragEnd} // 드래그 종료 시 동작 처리
      initial={{ y: "calc(100% - 80px)" }}
      animate={{ y: isOpen ? 0 : "calc(100% - 80px)" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* 클릭 영역 */}
      <div
        onClick={handleToggle} // 클릭으로 열기/닫기
        style={{
          padding: "1rem",
          cursor: "pointer",
          textAlign: "center",
          fontWeight: "bold",
          borderBottom: "1px solid #ddd",
          userSelect: "none", // 드래그 방지
        }}
      >
        {isOpen ? "" : ""}
      </div>
      {isOpen && (
        <div style={{ padding: "1rem" }}>
          {/* bottom sheet 내용 들어갈 부분*/}
        </div>
      )}
    </motion.div>
  );
};

export default BottomSheet;
