import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': '#f6f3f4',
        'primary-hover': '#e8e5e6',
        'secondary': '#242424',
        'secondary-hover': '#1c1c1c',
        'danger': '#fe483b',
        'danger-hover': '#e44034',
        'success': '#135cfe',
        'success-hover': '#104ecc',
        'white': '#ffffff',
        'white-hover': '#f2f2f2',
        'dark': '#000000',
        'dark-hover': '#1a1a1a',
      },
    },
  },
  plugins: [],
};
export default config;
