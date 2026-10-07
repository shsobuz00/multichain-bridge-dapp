module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fff5f7',
          100: '#ffe6ef',
          200: '#ffc7d9',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
        },
        night: '#0f0b14',
        panel: '#1a101b',
        rose: '#ffbfd8',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(244,114,182,0.45), 0 0 32px rgba(244,114,182,0.25)',
      },
      backgroundImage: {
        'pink-radial': 'radial-gradient(circle at top, rgba(251, 113, 133, 0.25), transparent 55%)',
      },
    },
  },
  plugins: [],
};
