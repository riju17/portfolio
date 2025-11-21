import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: '#0f0f0f',
        neutral: '#1a1a1a',
        accent: '#f4ede1',
        studio: {
          light: '#fbeed7',
          dark: '#8e4b62',
          accent: '#ff7a18'
        },
        lab: {
          base: '#03030a',
          neon: '#35ffe7',
          magenta: '#ff1d9d'
        },
        street: {
          base: '#0e1714',
          muted: '#3c604f',
          accent: '#d5f6e3'
        }
      },
      fontFamily: {
        display: ['var(--font-display)', ...defaultTheme.fontFamily.serif],
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['"Space Mono"', ...defaultTheme.fontFamily.mono]
      },
      boxShadow: {
        glow: '0 0 25px rgba(255, 255, 255, 0.25)',
        neon: '0 0 30px rgba(53, 255, 231, 0.55)'
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.19, 1, 0.22, 1)'
      }
    }
  },
  plugins: []
};

export default config;
