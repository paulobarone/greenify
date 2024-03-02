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
        'light-gray': '#767676',
        'white': '#ffffff'
      },
      fontFamily: {
        secondary: ['Lato', 'sans-serif']
      },
      transitionProperty: {
        'width': 'width'
      },
      maxWidth: {
        'mobile': '25rem',
        'tablet': '60rem',
        'desktop': '56.25rem',
        'large-desktop': '75rem'
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      }
    },
  },
  plugins: [],
}

