import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // shadcn/ui semantic tokens
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
        // Brand palette — driven by CSS variables injected from client.config.ts.
        // The `/ <alpha-value>` suffix enables Tailwind opacity modifiers (e.g. bg-brand-primary/40).
        "brand-primary":      "rgb(var(--color-primary-rgb) / <alpha-value>)",
        "brand-primary-text": "rgb(var(--color-primary-text-rgb) / <alpha-value>)",
        "brand-secondary":    "rgb(var(--color-secondary-rgb) / <alpha-value>)",
        "brand-accent":       "rgb(var(--color-accent-rgb) / <alpha-value>)",
        "brand-accent-dark":  "rgb(var(--color-accent-dark-rgb) / <alpha-value>)",
        "brand-accent-light": "rgb(var(--color-accent-light-rgb) / <alpha-value>)",
        "brand-accent-text":  "rgb(var(--color-accent-text-rgb) / <alpha-value>)",
        "brand-bg":           "rgb(var(--color-bg-rgb) / <alpha-value>)",
        "brand-bg-text":      "rgb(var(--color-bg-text-rgb) / <alpha-value>)",
        // Legacy named palette — kept for any remaining references
        forest: "var(--color-primary)",
        sage: "var(--color-secondary)",
        meadow: "var(--color-secondary)",
        cream: "var(--color-bg)",
        stone: "var(--color-bg)",
        bark: "var(--color-text-muted)",
        charcoal: "var(--color-bg-text)",
        gold: "var(--color-accent)",
        "gold-light": "var(--color-accent-light)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        dmsans: ["var(--font-dmsans)", "system-ui", "sans-serif"],
        sans: ["var(--font-dmsans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
