/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B35',
          light: '#FF8C61',
          dark: '#E55A2B',
        },
        dark: {
          DEFAULT: '#0A0E27',
          light: '#1A1F3A',
          lighter: '#2A2F4A',
        },
        accent: {
          DEFAULT: '#00D9FF',
          light: '#33E3FF',
          dark: '#00B8D9',
        },
        // Bright theme colors
        bright: {
          DEFAULT: '#FFFFFF',
          light: '#F8FAFC',
          lighter: '#F1F5F9',
          dark: '#E2E8F0',
        },
        'bright-text': {
          DEFAULT: '#1E293B',
          light: '#475569',
          lighter: '#64748B',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundSize: {
        '200': '200%',
      },
      backgroundPosition: {
        '0': '0%',
        '100': '100%',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #FF6B35, 0 0 10px #FF6B35' },
          '100%': { boxShadow: '0 0 20px #FF6B35, 0 0 30px #FF6B35' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
