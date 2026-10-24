/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#EDF0EE',
        paper: '#FAFBFA',
        ink: '#10212B',
        mut: '#5B6B73',
        line: '#CBD3D6',
        cable: '#FF5A1F',
        led: '#22C55E',
        amber: '#FFB020',
        rack: '#10212B',
        rack2: '#1B3340',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      keyframes: {
        blink: { '0%,100%': { opacity: 1 }, '45%': { opacity: 0.25 }, '60%': { opacity: 1 } },
        slide: { from: { transform: 'translateX(100%)' } },
      },
      animation: { blink: 'blink 2.4s infinite', slide: 'slide .25s ease' },
    },
  },
  plugins: [],
};
