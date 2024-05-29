module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
}
