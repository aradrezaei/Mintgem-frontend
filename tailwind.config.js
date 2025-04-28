module.exports = {
  darkMode: 'class', // اضافه کن
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        shabnam: ['Shabnam', 'sans-serif'],
      },
      colors: {
        primary: '#6D28D9',   // بنفش سلطنتی
        secondary: '#9333EA', // بنفش پررنگ‌تر
        accent: '#F472B6',    // صورتی شیک
        darkbg: 'rgba(0,0,0,0.7)', // بک گراند دارک مود
      }
    },
  },
  plugins: [],
}
