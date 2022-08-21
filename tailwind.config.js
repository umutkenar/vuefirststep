module.exports = {
  content: ['./src/**/*.{html,js,vue}'],

  theme: {
    extend: {
      width: {
        main_width: '1400px',
        main_screen: 'calc(100vw - 56px)'
      },
      height: {
        height_val1: 'calc(100vh - 6px)',
        height_val2: 'calc(100vh - 108px)',
      },
      colors: {
        'grey-rgba': 'rgba(57, 76, 102, 0.5)',
      },
      fontFamily: {
        body: ['Manrope'],
      },
      boxShadow: {
        'inner-border': '0 0px 0px 2px rgba(35, 86, 246, 0.4)',
      },
    },
  },
  plugins: [],
}
