/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ocean: {
          950: '#04171f',
          900: '#062330',
          800: '#083549',
          700: '#0d4b62',
          500: '#1684a3',
          300: '#64c7d8',
        },
        sand: {
          50: '#fff8ea',
          100: '#f7e7c4',
          300: '#d5b06d',
          700: '#725023',
        },
      },
    },
  },
  plugins: [],
};
