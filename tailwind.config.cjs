/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}" , "./index.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'skill': 'repeat(auto-fill, 250px)',
      },
      colors: {
        'purple': '#8807c9',
      },
      boxShadow: {
        'cards': '6px 6px 10px 6px rgba(0, 0, 0, 0.1)',
        'skills': '0 0 10px 5px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        'leaguespartan': ['leaguespartan' ,'sans-serif'],
        'pacifico': ['pacifico' ,'sans-serif'],
        'quintessential': ['quintessential' ,'sans-serif']
      },
      animation: {
        'moveUp': 'moveUp 5s linear infinite',
        'moveDown': 'moveDown 5s linear infinite',
        'moveSide': 'moveSide 5s linear infinite',
        'scaleLine': 'scaleLine 5s linear infinite'
      },
      keyframes: {
        moveUp: {
          '0%, 100%': { transform: 'translate(0%,-25%)' },
          '50%': { transform: 'translate(0%,25%)' },
        }
        ,
        moveDown: {
          '0%, 100%': { transform: 'translate(0%,25%)' },
          '50%': { transform: 'translate(0%,-25%)' },
        },
        moveSide: {
          '0%, 100%': { transform: 'translate(25%,0%)' },
          '50%': { transform: 'translate(-25%,0%)' },
        },
        scaleLine: {
          '0%,100%' : { width : '30px' },
          '50%': { width : '128px' },
        }
      }
    },
  },
  plugins: [],
}
