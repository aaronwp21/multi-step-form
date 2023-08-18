import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': '#322653',
      'primary-active': '#f4f2f9',
      'secondary': '#8062D6',
      'tertiary': '#9288F8',
      'accent': '#FFD2D7',
      'white': '#fff',
      'cool-grey': '#9699AB',
      'light-grey': '#D5D8E5',
      'bronze': '#a17652',
      'silver': '#D6D6D6',
      'gold': '#fcb434',
      'error': '#cc0000'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config