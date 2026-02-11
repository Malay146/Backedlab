module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'bricolage-grotesque': ['var(--font-bricolage-grotesque)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
