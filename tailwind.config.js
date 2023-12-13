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
      },
      padding: {
        "6px": "6px",
      },
    },
  },
  plugins: [],
};
