module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#CFDBD5',
          DEFAULT: '#F2AF29',
          dark: '#6B2737',
        },
        secondary: {
          light: '#f6ad55',
          DEFAULT: '#ed8936',
          dark: '#dd6b20',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
