/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        greatVibe: "Great Vibes",
      },
      colors: {
        primary: "#32012F",
        secondary : "#4a1a46"
      },
    },
  },
  plugins: [],
};
