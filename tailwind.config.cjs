/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}" , "./index.html"],
  theme: {
    extend: {
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
