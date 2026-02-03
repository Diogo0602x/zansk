import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FEFEFE",
          50: "#FFFFFF",
          100: "#FEFEFE",
          200: "#FCFCFC",
          300: "#FAFAFA",
        },
        secondary: {
          DEFAULT: "#B3B3B3",
          50: "#E6E6E6",
          100: "#D9D9D9",
          200: "#CCCCCC",
          300: "#B3B3B3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
        },
        dark: {
          DEFAULT: "#1A1A1A",
          50: "#333333",
          100: "#262626",
          200: "#1A1A1A",
          300: "#0D0D0D",
        },
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-glass": "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        "glass-sm": "0 4px 16px 0 rgba(31, 38, 135, 0.1)",
        "glass-lg": "0 12px 48px 0 rgba(31, 38, 135, 0.2)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "100": "25rem",
        "112": "28rem",
        "128": "32rem",
      },
    },
  },
  plugins: [],
};

export default config;
