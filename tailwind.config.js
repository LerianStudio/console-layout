/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Console custom colors
        sunglow: {
          50: "var(--color-sunglow-50)",
          100: "var(--color-sunglow-100)",
          200: "var(--color-sunglow-200)",
          300: "var(--color-sunglow-300)",
          400: "var(--color-sunglow-400)",
          500: "var(--color-sunglow-500)",
          600: "var(--color-sunglow-600)",
          700: "var(--color-sunglow-700)",
          800: "var(--color-sunglow-800)",
          900: "var(--color-sunglow-900)",
          950: "var(--color-sunglow-950)",
        },
        "de-york": {
          50: "var(--color-de-york-50)",
          100: "var(--color-de-york-100)",
          200: "var(--color-de-york-200)",
          300: "var(--color-de-york-300)",
          400: "var(--color-de-york-400)",
          500: "var(--color-de-york-500)",
          600: "var(--color-de-york-600)",
          700: "var(--color-de-york-700)",
          800: "var(--color-de-york-800)",
          900: "var(--color-de-york-900)",
          950: "var(--color-de-york-950)",
        },
        "vivid-tangerine": {
          50: "var(--color-vivid-tangerine-50)",
          100: "var(--color-vivid-tangerine-100)",
          200: "var(--color-vivid-tangerine-200)",
          300: "var(--color-vivid-tangerine-300)",
          400: "var(--color-vivid-tangerine-400)",
          500: "var(--color-vivid-tangerine-500)",
          600: "var(--color-vivid-tangerine-600)",
          700: "var(--color-vivid-tangerine-700)",
          800: "var(--color-vivid-tangerine-800)",
          900: "var(--color-vivid-tangerine-900)",
          950: "var(--color-vivid-tangerine-950)",
        },
        "cod-gray": {
          50: "var(--color-cod-gray-50)",
          100: "var(--color-cod-gray-100)",
          200: "var(--color-cod-gray-200)",
          300: "var(--color-cod-gray-300)",
          400: "var(--color-cod-gray-400)",
          500: "var(--color-cod-gray-500)",
          600: "var(--color-cod-gray-600)",
          700: "var(--color-cod-gray-700)",
          800: "var(--color-cod-gray-800)",
          900: "var(--color-cod-gray-900)",
          950: "var(--color-cod-gray-950)",
        },
        shadcn: {
          100: "var(--color-shadcn-100)",
          200: "var(--color-shadcn-200)",
          300: "var(--color-shadcn-300)",
          400: "var(--color-shadcn-400)",
          500: "var(--color-shadcn-500)",
          600: "var(--color-shadcn-600)",
          700: "var(--color-shadcn-700)",
          800: "var(--color-shadcn-800)",
        },
        // Shadcn colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      boxShadow: {
        // Console custom shadows
        sidebar: "var(--shadow-sidebar)",
        "data-table": "var(--shadow-data-table)",
        "sheet-bottom": "var(--shadow-sheet-bottom)",
        drawer: "var(--shadow-drawer)",
        "entity-box": "var(--shadow-entity-box)",
      },
      backgroundColor: {
        background: "hsl(var(--background))",
      },
      textColor: {
        foreground: "hsl(var(--foreground))",
      },
      borderColor: {
        border: "hsl(var(--border))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
