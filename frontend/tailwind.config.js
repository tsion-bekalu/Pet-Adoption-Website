/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8880ff',
          hover: '#884dff',
          light: '#e9d4ff',
          lighter: '#f3e8ff',
        },
        pawsome: {
          purple: '#8880ff',
          hover: '#884dff',
          light: '#e9d4ff',
          lighter: '#f3e8ff',
          bg: '#f7edff',
          text: '#323131',
          subtitle: '#464646',
          shadow: '#e6d1f8',
          aboutH1: '#d22ed2',
        },
        footer: {
          gradient1: '#59168b',
          gradient2: '#6e11b0',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        heading: ['Dosis', 'sans-serif'],
      },
      boxShadow: {
        'pawsome': '0 4px 15px rgba(136, 128, 255, 0.2)',
        'pawsome-hover': '0 6px 20px rgba(136, 128, 255, 0.3)',
      },
    },
  },
  plugins: [],
}
