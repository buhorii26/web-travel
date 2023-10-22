/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily :{
        "inter" : ['inter'],
        "Circular" : ['Circular STD'],
      },
      colors: {
        "ungu" : '#5D50C6',
        "pink" : '#F85E9F',
        "orange" : '#FF5722',
        "grey" : '#222831',
      },
      dropShadow: {
        "sm-shadow": [
          '0 1px 2px rgb(0 0 0 / 0.1)',
          '0 1px 1px rgb(0 0 0 / 0.05)',
          '0 2px 2px rgb(0 0 0 / 0.06)',
          '0 10px 8px rgb(0 0 0 / 0.04)',
          '0 4px 3px rgb(0 0 0 / 0.1)',
          '0 20px 13px rgb(0 0 0 / 0.03)',
        ],
        "lg-shadow":[
          '0 1px 2px rgb(0 0 0 / 0.1)',
          '0 1px 1px rgb(0 0 0 / 0.05)',
          '0 2px 2px rgb(0 0 0 / 0.06)',
          '0 10px 8px rgb(0 0 0 / 0.04)',
          '0 4px 3px rgb(0 0 0 / 0.1)',
          '0 20px 13px rgb(0 0 0 / 0.03)',
        ],
      }
    },
  },
  plugins: [],
}

