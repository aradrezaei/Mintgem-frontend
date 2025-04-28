module.exports = {
  darkMode: 'class', // اضافه کن
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6D28D9',
        secondary: '#9333EA',
        accent: '#F472B6',
        darkbg: 'rgba(0,0,0,0.7)',
      },
      
      fontFamily: {
        sans: ['Shabnam', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
