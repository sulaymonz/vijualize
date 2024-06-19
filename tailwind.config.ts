import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      primary: '#25628d',
      secondary: {
        light: '#f6dee0',
        DEFAULT: '#f2cfd2',
      },
      accent: '#c16f33',
    },
    fontFamily: {
      sans: ['"DM Sans"', 'sans-serif'],
      mono: ['"Space Mono"', 'monospace'],
      serif: ['"Noto Sans JP"', 'sans-serif'],
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1280px',
            paddingLeft: '4rem',
            paddingRight: '4rem',
          },
          '@screen xl': {
            maxWidth: '1400px',
          },
        },
      });
    },
  ],
};
export default config;
