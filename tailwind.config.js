/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"], // Enables class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
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
        // Default Tailwind CSS colors
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

        // Custom CabBook colors
        "cab-primary": {
          light: "#8B5CF6", // Light purple
          DEFAULT: "#8B5CF6", // Purple
          dark: "#7C3AED", // Dark purple
        },
        "cab-secondary": {
          light: "#54A0FF", // Light blue
          DEFAULT: "#2E86DE", // Blue
          dark: "#0077C0", // Dark blue
        },
        "cab-accent": {
          light: "#5ED4F3", // Light cyan
          DEFAULT: "#48DBFB", // Cyan
          dark: "#34C6E8", // Dark cyan
        },
        "cab-background": {
          light: "#FFFFFF", // White background for light mode
          DEFAULT: "#FFFFFF", // Default white background
          dark: "#000000", // Black background for dark mode
        },
        "cab-text": {
          light: "#2F3542", // Dark text for light mode
          DEFAULT: "#2F3542", // Default dark text
          dark: "#FFFFFF", // White text for dark mode
        },
        "cab-hover": {
          light: "#000000", // Black text on hover for light mode
          DEFAULT: "#000000", // Default black text on hover
          dark: "#FFFFFF", // White text on hover for dark mode
        },

        // Additional colors from the second config
        navy: {
          900: "#0a192f",
        },
        amber: {
          400: "#fbbf24",
          500: "#f59e0b",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
        display: ["var(--font-display)", "sans-serif"],
      },
      animation: {
        "fade-in-down": "fadeInDown 1s ease-out",
        "fade-in-up": "fadeInUp 1s ease-out",
        "fade-in": "fadeIn 1s ease-out",
        pulse: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        scroll: "scroll 30s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        pulse: {
          "0%, 100%": { opacity: 0.2 },
          "50%": { opacity: 0.3 },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};

// /** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme")

// export default {
//   darkMode: ["class"],
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "*.{js,ts,jsx,tsx,mdx}",
//     "app/**/*.{ts,tsx}",
//     "components/**/*.{ts,tsx}",
//     "./pages/**/*.{ts,tsx,js,jsx}",
//   ],
//   theme: {
//     container: {
//       center: true,
//       // Responsive padding for better mobile layout
//       padding: {
//         DEFAULT: "1rem",
//         sm: "2rem",
//         lg: "4rem",
//         xl: "5rem",
//         "2xl": "6rem",
//       },
//     },
//     extend: {
//       colors: {
//         // Custom color palette for consistent theming
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//         // Cab-specific colors for branding consistency
//         "cab-primary": {
//           light: "#8B5CF6",
//           DEFAULT: "#8B5CF6",
//           dark: "#7C3AED",
//         },
//         "cab-secondary": {
//           light: "#54A0FF",
//           DEFAULT: "#2E86DE",
//           dark: "#0077C0",
//         },
//         "cab-accent": {
//           light: "#5ED4F3",
//           DEFAULT: "#48DBFB",
//           dark: "#34C6E8",
//         },
//         "cab-background": {
//           light: "#FFFFFF",
//           DEFAULT: "#FFFFFF",
//           dark: "#000000",
//         },
//         "cab-text": {
//           light: "#2F3542",
//           DEFAULT: "#2F3542",
//           dark: "#FFFFFF",
//         },
//         // Additional colors for specific use cases
//         navy: {
//           900: "#0a192f",
//         },
//         amber: {
//           400: "#fbbf24",
//           500: "#f59e0b",
//         },
//       },
//       borderRadius: {
//         // Consistent border radius using CSS variables
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       fontFamily: {
//         // Optimized font stacks with fallbacks for better performance
//         sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
//         serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
//         mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
//         display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
//       },
//       animation: {
//         // Simplified animations for better performance, especially on mobile
//         "fade-in": "fadeIn 0.3s ease-out",
//         "slide-in": "slideIn 0.3s ease-out",
//         pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
//         "accordion-down": "accordionDown 0.2s ease-out",
//         "accordion-up": "accordionUp 0.2s ease-out",
//       },
//       keyframes: {
//         // Optimized keyframes for smoother animations
//         fadeIn: {
//           "0%": { opacity: "0" },
//           "100%": { opacity: "1" },
//         },
//         slideIn: {
//           "0%": { transform: "translateY(10px)", opacity: "0" },
//           "100%": { transform: "translateY(0)", opacity: "1" },
//         },
//         pulse: {
//           "0%, 100%": { opacity: "1" },
//           "50%": { opacity: "0.5" },
//         },
//         accordionDown: {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         accordionUp: {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//       },
//     },
//   },
//   // Only essential plugins to reduce JavaScript execution time
//   plugins: [require("@tailwindcss/forms")],
// }




// Last========================

// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: ["class"], // Enables class-based dark mode
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         // Default Tailwind CSS colors
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },

//         // Custom CabBook colors
//         "cab-primary": {
//           light: "#8B5CF6", // Light purple
//           DEFAULT: "#8B5CF6", // Purple
//           dark: "#7C3AED", // Dark purple
//         },
//         "cab-secondary": {
//           light: "#54A0FF", // Light blue
//           DEFAULT: "#2E86DE", // Blue
//           dark: "#0077C0", // Dark blue
//         },
//         "cab-accent": {
//           light: "#5ED4F3", // Light cyan
//           DEFAULT: "#48DBFB", // Cyan
//           dark: "#34C6E8", // Dark cyan
//         },
//         "cab-background": {
//           light: "#FFFFFF", // White background for light mode
         
//           DEFAULT: "#FFFFFF", // Default white background
//           dark: "#000000", // Black background for dark mode
//         },
//         "cab-text": {
//           light: "#2F3542", // Dark text for light mode
//           DEFAULT: "#2F3542", // Default dark text
//           dark: "#FFFFFF", // White text for dark mode
//         },
//         "cab-hover": {
//           light: "#000000", // Black text on hover for light mode
//           DEFAULT: "#000000", // Default black text on hover
//           dark: "#FFFFFF", // White text on hover for dark mode
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       fontFamily: {
//         sans: ["var(--font-sans)", "sans-serif"],
//         serif: ["var(--font-serif)", "serif"],
//         mono: ["var(--font-mono)", "monospace"],
//         display: ["var(--font-display)", "sans-serif"],
//       },
//       animation: {
//         "fade-in-down": "fadeInDown 1s ease-out",
//         "fade-in-up": "fadeInUp 1s ease-out",
//         "fade-in": "fadeIn 1s ease-out",
//       },
//       keyframes: {
//         fadeInDown: {
//           "0%": {
//             opacity: "0",
//             transform: "translateY(-20px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateY(0)",
//           },
//         },
//         fadeInUp: {
//           "0%": {
//             opacity: "0",
//             transform: "translateY(20px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateY(0)",
//           },
//         },
//         fadeIn: {
//           "0%": {
//             opacity: "0",
//           },
//           "100%": {
//             opacity: "1",
//           },
//         },
//         animation: {
//           scroll: "scroll 30s linear infinite",
//         },
//         keyframes: {
//           scroll: {
//             "0%": { transform: "translateX(0)" },
//             "100%": { transform: "translateX(-50%)" },
//           },
//         },
//       },
//     },
//   },
//   plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
// };

// ==========================================================================================================================================================

/** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: ["class"],
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//         "cab-primary": {
//           light: "#FF6B6B",
//           DEFAULT: "#FF4757",
//           dark: "#FF3E4D",
//         },
//         "cab-secondary": {
//           light: "#54A0FF",
//           DEFAULT: "#2E86DE",
//           dark: "#0077C0",
//         },
//         "cab-accent": {
//           light: "#5ED4F3",
//           DEFAULT: "#48DBFB",
//           dark: "#34C6E8",
//         },
//         "cab-background": {
//           light: "#F9F9F9",
//           DEFAULT: "#FFFFFF", // Default white background
//           dark: "#000000", // Dark mode black background
//         },
//         "cab-text": {
//           light: "#F1F2F6",
//           DEFAULT: "#2F3542",
//           dark: "#FFFFFF",
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       fontFamily: {
//         sans: ["var(--font-sans)", "sans-serif"],
//         serif: ["var(--font-serif)", "serif"],
//         mono: ["var(--font-mono)", "monospace"],
//         display: ["var(--font-display)", "sans-serif"],
//       },
//       animation: {
//         "fade-in-down": "fadeInDown 1s ease-out",
//         "fade-in-up": "fadeInUp 1s ease-out",
//         "fade-in": "fadeIn 1s ease-out",
//       },
//       keyframes: {
//         fadeInDown: {
//           "0%": {
//             opacity: "0",
//             transform: "translateY(-20px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateY(0)",
//           },
//         },
//         fadeInUp: {
//           "0%": {
//             opacity: "0",
//             transform: "translateY(20px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateY(0)",
//           },
//         },
//         fadeIn: {
//           "0%": {
//             opacity: "0",
//           },
//           "100%": {
//             opacity: "1",
//           },
//         },
//       },
//     },
//   },
//   plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
// };