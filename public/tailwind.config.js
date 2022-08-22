/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        tablet: { min: '768px', max: '1023px' },
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        primary: '#66FCF1',
        secondary: '#0B0C10',
        txtColor: '#334155',
        pColor: '#1F2833',
        sColor: '#45A29E',
      },
    },
  },
  plugins: [],
};
