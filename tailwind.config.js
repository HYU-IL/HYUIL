// tailwind.config.js
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // 다양한 폰트 크기 정의
        title1: [
          "30px",
          { lineHeight: "40px", letterSpacing: "-0.025em", fontWeight: "bold" },
        ],
        title2: [
          "20px",
          {
            lineHeight: "20px",
            letterSpacing: "-0.025em%",
            fontWeight: "bold",
          },
        ],
        subtitle1: [
          "18px",
          {
            lineHeight: "20px",
            letterSpacing: "-0.025em",
            fontWeight: "semibold",
          },
        ],
        subtitle2: [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "-0.025em",
            fontWeight: "medium",
          },
        ],
        subtitle3: [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "-0.025em",
            fontWeight: "semibold",
          },
        ],
        body1: [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "-0.025em",
            fontWeight: "regular",
          },
        ],
        body2: [
          "12px",
          {
            lineHeight: "14px",
            letterSpacing: "-0.025em",
            fontWeight: "regular",
          },
        ],
        caption1: [
          "14px",
          {
            lineHeight: "16px",
            letterSpacing: "-0.025em",
            fontWeight: "semibold",
          },
        ],
        caption2: [
          "12px",
          { lineHeight: "16px", letterSpacing: "0", fontWeight: "medium" },
        ],
        caption3: [
          "10px",
          { lineHeight: "16px", letterSpacing: "0", fontWeight: "regular" },
        ],
      },
      fontFamily: {
        sans: ["Pretendard", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        walkorcar_blue: "#527AFF",
        likeortype_green: "#48694A",
        likeortype_gray: "#8F8F8F",
        primary: {
          900: "#27342E",
          800: "#45564B",
          700: "#2E6742",
          core: "#5FBA8E",
          300: "#6DD8A4",
          200: "#8EDB9B",
        },
        secondary: {
          700: "#FF903D",
          core: "#F7B787",
          100: "#F7CA87",
        },
        sub: {
          core: "#3DA2FF",
          200: "#84CAFF",
          100: "#F0F8FF",
        },
        gray: {
          900: "#393939",
          800: "#767676",
          700: "#999999",
          600: "#A2A2A2",
          500: "#C9C9C9",
          400: "#F2F2F2",
          300: "#F8F8F8",
        },
        system: {
          red: "#FF5858",
          100: "#FF8A8A",
        },
      },
      dropShadow: {
        custom: "0px 40px 10px rgba(0,0,0,0,25)",
      },
      boxShadow: {
        chip: "0px 1px 7px 0px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
