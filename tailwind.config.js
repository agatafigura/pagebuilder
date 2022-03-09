module.exports = {
  content: [],
  theme: {
    extend: {
      minHeight: {
        '75vh': '75vh'
      },
      inputWidth: {
        '200px': '200px'
      },
      animation: {
        'shake': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
      },
      keyframes: {
        'shake': {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)'
          },
          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0)'
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)'
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)'
          }
      },
      
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
