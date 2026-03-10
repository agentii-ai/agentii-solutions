import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          dark: "hsl(var(--color-primary-dark))",
          light: "hsl(var(--color-primary-light))",
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
        teal: {
          DEFAULT: "hsl(var(--color-teal))",
          dark: "hsl(var(--color-teal-dark))",
          light: "hsl(var(--color-teal-light))",
        },
        purple: {
          DEFAULT: "hsl(var(--color-purple))",
          dark: "hsl(var(--color-purple-dark))",
          light: "hsl(var(--color-purple-light))",
        },
        lilac: {
          DEFAULT: "hsl(var(--color-lilac))",
          dark: "hsl(var(--color-lilac-dark))",
          light: "hsl(var(--color-lilac-light))",
        },
        cyan: {
          DEFAULT: "hsl(var(--color-cyan))",
          dark: "hsl(var(--color-cyan-dark))",
          light: "hsl(var(--color-cyan-light))",
        },
        navy: "hsl(var(--color-navy))",
        slate: {
          DEFAULT: "hsl(var(--color-slate))",
          200: "hsl(var(--color-slate-200))",
          400: "hsl(var(--color-slate-400))",
          700: "hsl(var(--color-slate-700))",
        },
        charcoal: "hsl(var(--color-charcoal))",
        "gray-700": "hsl(var(--color-gray-700))",
        "gray-500": "hsl(var(--color-gray-500))",
        "gray-300": "hsl(var(--color-gray-300))",
        "gray-100": "hsl(var(--color-gray-100))",
        "gray-50": "hsl(var(--color-gray-50))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        brand: ['"Futura PT"', '"Futura"', '"Century Gothic"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', '"SF Mono"', '"Consolas"', 'monospace'],
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
        "dash-flow": {
          to: { strokeDashoffset: "-8" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          from: { opacity: "0", transform: "translateX(-32px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          from: { opacity: "0", transform: "translateX(32px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.92)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "draw-line": {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
        "shimmer": {
          from: { backgroundPosition: "-200% 0" },
          to: { backgroundPosition: "200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "bar-fill": {
          from: { width: "0%" },
          to: { width: "var(--bar-width)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "dash-flow": "dash-flow 1s linear infinite",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in-left": "fade-in-left 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in-right": "fade-in-right 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "scale-in": "scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
        "draw-line": "draw-line 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "shimmer": "shimmer 2s linear infinite",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
        "bar-fill": "bar-fill 1s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
