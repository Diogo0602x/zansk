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
          DEFAULT: "#1A1A1A",
          50: "#F8F9FA",
          100: "#E9ECEF",
          200: "#DEE2E6",
          300: "#ADB5BD",
          400: "#6C757D",
          500: "#495057",
          600: "#343A40",
          700: "#212529",
          800: "#1A1A1A",
        },
        secondary: {
          DEFAULT: "#6C757D",
          50: "#F8F9FA",
          100: "#E9ECEF",
          200: "#DEE2E6",
          300: "#CED4DA",
          400: "#ADB5BD",
          500: "#868E96",
          600: "#6C757D",
          700: "#495057",
        },
        accent: {
          DEFAULT: "#6B7280",
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
        },
        dark: {
          DEFAULT: "#212529",
          50: "#F8F9FA",
          100: "#E9ECEF",
          200: "#495057",
          300: "#343A40",
          400: "#212529",
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
        glass: "0 8px 32px 0 rgba(31, 41, 55, 0.15)",
        "glass-sm": "0 4px 16px 0 rgba(31, 41, 55, 0.1)",
        "glass-lg": "0 12px 48px 0 rgba(31, 41, 55, 0.2)",
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
