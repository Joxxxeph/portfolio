/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "darkMode": "class",
  theme: {
    extend: {
      keyframes: {
        'left-rigth': {
          '0%': {
            transform: 'translateX(-60px)',
            opacity: '0%'
          },
          '100%': {
            transform: 'translateX(0px)',
            opacity: '100%'
          }
        },
        'rigth-left': {
          '0%': {
            transform: 'translateX(60px)',
            opacity: '0%'
          },
          '100%': {
            transform: 'translateX(0px)',
            opacity: '100%'
          }
        },
        'fade-in1': {
          '0%': {    
            opacity: '0%'
          },
          '50%': {
            opacity: '0%'
          },
          '100%': { 
            opacity: '100%'
          }
        },
        'nav-bar': {
          '0%': {
            transform: 'translateY(60px)',
            opacity: '0%'
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: '100%'
          }
        },
        
      },
      animation: {
        'left-rigth': 'left-rigth 1.5s',
        'rigth-left': 'rigth-left 1.5s',
        'nav-bar': 'nav-bar 1.5s'
      }
    },
    
  },
  plugins: [],
}

