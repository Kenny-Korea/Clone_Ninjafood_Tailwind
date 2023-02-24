/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // custom한 클래스 등록하기
  theme: {
    extend: {
      colors: {
        primary: "#ff6363",
        secondary: {
          100: "#e2e2d5",
          200: "888883",
        },
      },

      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
};
