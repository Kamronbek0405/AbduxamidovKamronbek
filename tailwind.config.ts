import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        vilote: "#470d71",
        colorIcon: "#251C31"
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
        'star-move': 'starMove 2s linear infinite', // Yulduzcha harakatlanish animatsiyasi
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-20px)' },
        },
        starMove: {
          '0%': {
            transform: 'translateY(100vh) translateX(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-100vh) translateX(calc(100vw * var(--x-move)))',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
