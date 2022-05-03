module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Karla: ['Karla', 'sans-serif']
      },
      colors:{
        'life-coffee':'#C89F94'
      },
      keyframes: {
        slideDown: {
          '0%' : { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        }
      },
      animation: {
        slideDown: 'slideDown .6s ease-in-out',
      }
    },
  },
  plugins: [],
}
