// tailwind.config.js
export default {
  darkMode: 'class',
  content: [
    './*.html',
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  safelist: [
    'mix-blend-difference',
    'text-white',
    'bg-black',
    'bg-white',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
