/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 10s linear infinite",
      },
      keyframes: {
        scroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      colors: {
        bgcolor: "#F9F9F9",
        primary: "#F37021",
        blackColor:'#3D3D3D',
        dark: "#3c3c3c",
        trackingPrimary:'#2F8CF4',
      },
    },
  },
  plugins: [],
};
