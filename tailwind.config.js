/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        // Ajustar `brand` ao vermelho exacto do logótipo da Drilha, se necessário.
        brand: { DEFAULT: '#D1202F', dark: '#A81724' },
        ink: '#0E1113',
        graphite: '#1A1F23',
        steel: '#5A646C',
        mist: '#EEF0F1',
        line: '#D7DCDF',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', '"Arial Narrow"', 'sans-serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
