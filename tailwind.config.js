module.exports = {
  content: ['./src/**/*.{html,js,vue}'],

  theme: {
    extend: {
      width: {
        main_width: '1400px',
      },
      height: {
        height_val1: 'calc(100vh-56px)',
        height_val2: 'calc(100vh-108px)',
      },
      colors: {
        'grey-rgba': 'rgba(57, 76, 102, 0.5)',
      },
      fontFamily: {
        body: ['Manrope'],
      },
    },
  },
  plugins: [],
}
