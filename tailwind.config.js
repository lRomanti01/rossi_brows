/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pulseLess: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.80 }, // Ajusta este valor para cambiar la opacidad mínima
        },
      },
      animation: {
        pulseFastLess: "pulseLess 2s infinite",
        pulseFast: "pulse 1.5s infinite",
      },
    },
  },
  plugins: [],
};
