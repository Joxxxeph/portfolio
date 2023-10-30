/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        "color-button": "linear-gradient(90deg,#842cd7,#21f5f1);"
      },
      boxShadow: {
        "shadow-button": "0 20px 40px rgba(132,44,215,.3)"
      },
      textColor: {
        "color-text": "linear-gradient(90deg,#842cd7,#21f5f1);"
      }
    },
  },
  plugins: [],
}

