import { fontFamily } from "tailwindcss/defaultTheme"
import animate from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'apple': {
          white: 'var(--apple-white)',
          black: 'var(--apple-black)',
          blue: 'var(--apple-blue)',
          gray: 'var(--apple-gray)',
          'light-gray': 'var(--apple-light-gray)',
        }
      },
      boxShadow: {
        'apple-sm': 'var(--shadow-sm)',
        'apple-md': 'var(--shadow-md)',
        'apple-lg': 'var(--shadow-lg)',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'apple-fast': '200ms',
        'apple-normal': '300ms',
        'apple-slow': '450ms',
      },
    },
  },
  plugins: [animate],
}

