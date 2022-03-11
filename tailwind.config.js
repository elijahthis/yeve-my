module.exports = {
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
        gold: '#DE8E0E',
        black1: '#1D2124',
        black2: '#111217',
        lightgrey1: '#D2D2D2',
        lightgrey2: '#8C8C8C',
        purple: '#9446F9',
        faded_purple: '#9546FA',
        red: '#cf142b',
      },
    },
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': { max: '1535px' },
      // => @media (max-width: 1140px) { ... }

      lg: { max: '1140px' },
    },
  },
  plugins: [],
}
