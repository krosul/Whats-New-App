/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: '#16161a',
        headline: '#fffffe',
        paragraph: '#94a1b2',
        button: '#7f5af0',
        buttonText: '#fffffe'
      }
    },
  },
  plugins: [],
}
