/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myGray: "#71767B",
      },
      animation: {
        "spin-mine": "spin 1s",
        pingSlow: "pingSlow 0.7s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      gridTemplateColumns: {
        "auto-fill-100": "repeat(auto-fill, 240px)",
      },
      width: {
        layoutOpenDetail: "calc(100% - 380px)",
      },
      keyframes: {
        pingSlow: {
          "75%, 100%": {
            transform: "scale(1.5)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
