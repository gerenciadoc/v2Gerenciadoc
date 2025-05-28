/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
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
        // Design System Colors - Cores primárias
        primary: {
          DEFAULT: "#0052CC",
          50: "#E6F0FF",
          100: "#CCE1FF",
          200: "#99C3FF",
          300: "#66A5FF",
          400: "#3387FF",
          500: "#0052CC", // cor base
          600: "#0747A6",
          700: "#043584",
          800: "#032E6E",
          900: "#022757",
          hover: "#0747A6",
          active: "#043584",
        },
        
        // Cores secundárias
        success: {
          DEFAULT: "#36B37E",
          50: "#E8F7F0",
          100: "#D1EFE1",
          200: "#A3DFC3",
          300: "#75CFA5",
          400: "#47BF87",
          500: "#36B37E", // cor base
          600: "#2E9E6B",
          700: "#268C5F",
          800: "#1E7A53",
          900: "#166847",
          hover: "#2E9E6B",
          active: "#268C5F",
        },
        
        teal: {
          DEFAULT: "#00B8D9",
          50: "#E6F8FC",
          100: "#CCF1F9",
          200: "#99E3F3",
          300: "#66D5ED",
          400: "#33C7E7",
          500: "#00B8D9", // cor base
          600: "#00A3BF",
          700: "#008DA3",
          800: "#007787",
          900: "#00616B",
          hover: "#00A3BF",
          active: "#008DA3",
        },
        
        // Cores semânticas
        error: {
          DEFAULT: "#DE350B",
          50: "#FBEEE8",
          100: "#F7DDD1",
          200: "#EFBBA3",
          300: "#E79975",
          400: "#DF7747",
          500: "#DE350B", // cor base
          600: "#C62F0A",
          700: "#AE2A09",
          800: "#962408",
          900: "#7E1F07",
          hover: "#C62F0A",
          active: "#AE2A09",
        },
        
        warning: {
          DEFAULT: "#FFAB00",
          50: "#FFF8E6",
          100: "#FFF1CC",
          200: "#FFE399",
          300: "#FFD566",
          400: "#FFC733",
          500: "#FFAB00", // cor base
          600: "#E69900",
          700: "#CC8800",
          800: "#B37700",
          900: "#996600",
          hover: "#E69900",
          active: "#CC8800",
        },
        
        // Cores neutras customizadas
        neutral: {
          50: "#F4F5F7",
          100: "#DFE1E6",
          200: "#C1C7D0",
          300: "#A5ADBA",
          400: "#7A869A",
          500: "#6B778C",
          600: "#505F79",
          700: "#42526E",
          800: "#253858",
          900: "#091E42",
        },

        // Shadcn/UI color system
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
      
      // Tipografia
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.4' }],    // 12px
        'sm': ['0.875rem', { lineHeight: '1.5' }],   // 14px
        'base': ['1rem', { lineHeight: '1.6' }],     // 16px
        'lg': ['1.125rem', { lineHeight: '1.5' }],   // 18px
        'xl': ['1.25rem', { lineHeight: '1.4' }],    // 20px
        '2xl': ['1.5rem', { lineHeight: '1.4' }],    // 24px
        '3xl': ['1.75rem', { lineHeight: '1.3' }],   // 28px
        '4xl': ['2rem', { lineHeight: '1.3' }],      // 32px
      },
      
      // Espaçamentos
      spacing: {
        'xxs': '0.25rem',  // 4px
        'xs': '0.5rem',    // 8px
        'sm': '0.75rem',   // 12px
        'md': '1rem',      // 16px
        'lg': '1.5rem',    // 24px
        'xl': '2rem',      // 32px
        'xxl': '2.5rem',   // 40px
        'xxxl': '3rem',    // 48px
        'xxxxl': '4rem',   // 64px
        'sidebar': '240px',
        'header': '64px',
      },
      
      // Border radius
      borderRadius: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        'DEFAULT': 'var(--radius)',
      },
      
      // Box shadows
      boxShadow: {
        'custom-sm': '0 1px 3px rgba(9, 30, 66, 0.1)',
        'custom-md': '0 3px 6px rgba(9, 30, 66, 0.15)',
        'custom-lg': '0 8px 16px rgba(9, 30, 66, 0.2)',
        'custom-xl': '0 12px 24px rgba(9, 30, 66, 0.25)',
      },
      
      // Animations
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-down": {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "pulse-custom": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-down": "slide-down 0.3s ease-out",
        "slide-up": "slide-up 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "pulse-custom": "pulse-custom 2s infinite",
      },
      
      // Transition timing
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      
      // Layout
      maxWidth: {
        'content': '1200px',
      },
      
      // Grid
      gridTemplateColumns: {
        'sidebar': '240px 1fr',
        'auto-fit-250': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fit-300': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Plugin customizado para utilities do design system
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.transition-custom': {
          transition: 'all 0.25s ease-in-out',
        },
        '.transition-fast': {
          transition: 'all 0.15s ease-in-out',
        },
        '.transition-slow': {
          transition: 'all 0.4s ease-in-out',
        },
        '.text-gradient': {
          background: 'linear-gradient(135deg, var(--tw-gradient-stops))',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.scrollbar-custom': {
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: theme('colors.neutral.50'),
            borderRadius: '3px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: theme('colors.neutral.200'),
            borderRadius: '3px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: theme('colors.neutral.300'),
          },
        },
      }
      
      addUtilities(newUtilities)
    }
  ],
}