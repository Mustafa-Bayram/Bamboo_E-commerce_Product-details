/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      merriWeather: ["Merriweather", "serif"],
      Inter: ["Inter", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "991px",
      xl: "1440px",
    },
    extend: {
      flex: {
        '2': '1 1 20rem'
      }
    },
  },
  plugins: [],
};
