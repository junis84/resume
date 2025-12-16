import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Deep Navy (신뢰감, 전문성, 리더십)
        navy: {
          900: "#1E3A5F", // 헤딩, 이름
          800: "#234B6E", // 섹션 제목
          700: "#2D5A87", // 링크, 보더
          600: "#3B6FA0", // 호버, 강조
          500: "#4A7BA7", // 라이트 악센트
          100: "#EDF2F7", // 아주 연한 배경
          50: "#F7FAFC",  // 카드 배경
        },
        // Neutral - Stone (따뜻한 회색, 부드러움)
        stone: {
          900: "#1C1917", // 본문 텍스트 (거의 검정)
          800: "#292524", // 강조 텍스트
          700: "#44403C", // 보조 텍스트
          600: "#57534E", // 설명 텍스트
          500: "#78716C", // 메타 정보
          400: "#A8A29E", // 비활성 텍스트
          300: "#D6D3D1", // 보더
          200: "#E7E5E4", // 연한 보더
          100: "#F5F5F4", // 배경
          50: "#FAFAF9",  // 카드 배경
        },
        // Accent - Blue (단일 악센트, 성과 강조)
        accent: {
          700: "#1D4ED8", // 성과 텍스트
          600: "#2563EB", // 강조, 링크
          500: "#3B82F6", // 호버
          100: "#DBEAFE", // 하이라이트 배경
          50: "#EFF6FF",  // 연한 배경
        },
      },
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
