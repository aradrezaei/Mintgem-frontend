/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Shabnam', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#6D28D9',      // Royal Purple
        secondary: '#9333EA',    // Deeper Purple
        accent: '#F472B6',       // Elegant Pink
        darkbg: 'rgba(0,0,0,0.7)', // Dark Mode Background
      },
    },
  },
  plugins: [],
};
