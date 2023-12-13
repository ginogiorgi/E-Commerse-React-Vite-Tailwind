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
        "ping-mine": "ping 1s",
      },
      gridTemplateColumns: {
        "auto-fill-100": "repeat(auto-fill, 240px)",
      },
    },
  },
  plugins: [],
};
