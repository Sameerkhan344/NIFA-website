/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      spartan: ["spartan", "sans-serif"],
      lexend: ["lexend", "sans-serif"],
      roboto: ['"roboto"', "serif"], // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {},
  },
  plugins: [],
};
