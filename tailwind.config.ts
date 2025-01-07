import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondaryBase: "#8432b0",
        secondaryBase2: "#87ab40",
      },
      backgroundImage: {
        "gradient-cover": "linear-gradient(90.21deg, rgba(184, 180, 172, 0.5) -5.91%, rgba(166, 162, 154, 0.5) 111.58%)"
      },
      animation: {
        blob: "blob 7s infinite",
        blob2: "blob2 10s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
            filter: "blur(2px)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
            filter: "blur(0px)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
            filter: "blur(2px)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
            filter: "blur(1px)",
          },
        },
        blob2: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
            filter: "blur(2px)",
          },
          "50%": {
            transform: "translate(20px, -20px) scale(1.1)",
            filter: "blur(0px)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
            filter: "blur(1px)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
