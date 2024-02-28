/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#55B76B',
        'accent-green': '#8BD2A0',
        'gray': '#333333',
        'white': '#ffffff'
      },
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
        secondary: ['Lato', 'sans-serif']
      },
      transitionProperty: {
        'width': 'width'
      },
      maxWidth: {
        'mobile': '25rem',
        'tablet': '56.25rem',
        'desktop': '68.75rem'
      }
    },
  },
  plugins: [],
}

