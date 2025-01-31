/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Montserrat, sans-serif'
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          'base-content': '#848484',
          primary: '#f34643',
          secondary: '#666',
          'base-100': '#202020',
          'base-300': '#252525'
        },
        light: {
          'base-content': '#FFF',
          primary: '#FFF',
          secondary: '#666',
          'base-100': '#0d7350',
          'base-300': '#0d7350'
        }
      }
    ]
  }
}
