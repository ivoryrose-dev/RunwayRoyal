/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001F3F',
        gold: '#D4AF37',
        white: '#FFFFFF',
        'white/90': 'rgba(255, 255, 255, 0.9)',
        'white/70': 'rgba(255, 255, 255, 0.7)',
        'white/10': 'rgba(255, 255, 255, 0.1)',
        'gold/20': 'rgba(212, 175, 55, 0.2)',
        'royalBlue/10': 'rgba(0, 31, 63, 0.1)',
        royalBlue: '#001F3F',
        champagneGold: '#D4AF37',
        skyBlue: '#BDC3C7',
        cleanWhite: '#FFFFFF',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.3)',
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, rgba(11, 11, 11, 0.95) 0%, rgba(11, 11, 11, 0.8) 100%)',
      },
    },
  },
  plugins: [],
};
