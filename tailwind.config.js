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
          { lineHeight: "40px", letterSpacing: "-2.5%", fontWeight: "bold" },
        ],
        title2: [
          "20px",
          { lineHeight: "20px", letterSpacing: "-2.5%", fontWeight: "bold" },
        ],
        subtitle1: [
          "18px",
          {
            lineHeight: "20px",
            letterSpacing: "-2.5%",
            fontWeight: "semibold",
          },
        ],
        subtitle2: [
          "18px",
          { lineHeight: "24px", letterSpacing: "-2.5%", fontWeight: "medium" },
        ],
        subtitle3: [
          "18px",
          { lineHeight: "24px", letterSpacing: "-2.5%", fontWeight: "regular" },
        ],
        body1: [
          "14px",
          { lineHeight: "20px", letterSpacing: "2%", fontWeight: "regular" },
        ],
        body2: [
          "12px",
          { lineHeight: "14px", letterSpacing: "2%", fontWeight: "regular" },
        ],
        caption1: [
          "14px",
          {
            lineHeight: "16px",
            letterSpacing: "-2.5%",
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
        sans: ["Arial", "sans-serif"],
        Pretendard: ["Pretendard"],
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
          400: "#8EDB9B",
          500: "#5FBA8E",
          900: "#45564B",
        },
        secondary: {
          400: "#F7CA87",
          500: "#F7B787",
        },
        gray: {
          900: "#27342E",
          800: "#767676",
          700: "#A2A2A2",
          600: "#C9C9C9",
          500: "#F2F2F2",
          400: "#F8F8F8",
        },
      },
    },
  },
  plugins: [],
};
