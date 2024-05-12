/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#2c3e50",
        otherColor: "#1abc9c",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
