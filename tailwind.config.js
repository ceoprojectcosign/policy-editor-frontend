/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ⬅️ required for toggling via class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brand: {
          blue: {
            light: '#4D88FF',
            DEFAULT: '#1155cc',
            dark: '#0e47a1',
          },
          red: {
            light: '#ff6666',
            DEFAULT: '#ff0000',
            dark: '#cc0000',
          },
        },
      },
    },
  },
  plugins: [],
}
