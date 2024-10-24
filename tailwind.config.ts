import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "sans-serif"], // Pretendard 추가
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
        'walkorcar_blue' : '#527AFF',
        'likeortype_green' : '#48694A',
        'likeortype_gray' : '#8F8F8F'
      }
    },
  },
  plugins: [],
};
export default config;
