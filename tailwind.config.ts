import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        greenCustom: {
          300: '#EFF1EE',
          400: '#B2CCC0',
          500: '#4C635A',
          600: '#145442',
          700: '#343A40',
          800: '#8db819',
        },
        grayCustom: {
          300: '#FBFDF9',
          400: '#676767',
          500: '#dad7cd'
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
