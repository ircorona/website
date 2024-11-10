/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#dcf3ff',
          200: '#b3e7ff',
          300: '#66d2ff',
          400: '#1cb7ff',
          500: '#009fff',
          600: '#007fd4',
          700: '#0066ab',
          800: '#00568f',
          900: '#004875',
        },
        accent: {
          50: '#fff1f3',
          100: '#ffe0e4',
          200: '#ffc7cf',
          300: '#ff99a8',
          400: '#ff5c74',
          500: '#ff1f44',
          600: '#ff0032',
          700: '#d70029',
          800: '#b30022',
          900: '#98001d',
        },
      },
    },
  },
  plugins: [],
};