import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./content/**/*.{md,mdx}'],
  theme: {
    extend: {
      container: { center: true, padding: '1rem' },
      colors: {
        primary: { DEFAULT: '#85abe4', foreground: '#0b1220' },
        muted: '#d9d9d9'
      },
      boxShadow: { soft: '0 8px 30px rgba(0,0,0,0.06)' },
      borderRadius: { xl: '1rem', '2xl': '1.25rem' }
    }
  },
  plugins: []
};
export default config;
