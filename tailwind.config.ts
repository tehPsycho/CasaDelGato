import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#11100d',
        bronze: '#9d7a4b',
        parchment: '#efe3ce'
      }
    }
  },
  plugins: []
} satisfies Config;
