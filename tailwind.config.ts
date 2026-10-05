import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

/**
 * SKILLEX DESIGN SYSTEM
 * Navy + lime identity taken from the official logo.
 * Roughly 70% white/off-white, 20% navy, 10% lime. Lime is an accent only.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./ui/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0D0E2B",
        lime: "#A7C82D",
        "lime-dark": "#6E8A0F", // AA-contrast lime for text on white
        offwhite: "#F7F8F4",
        line: "#E7E9E2",
        grey: "#63666F",
        // Legacy aliases so untouched components keep working
        charcoal: "#0D0E2B",
        "skill-green": "#A7C82D",
        "medium-gray": "#63666F",
        "light-gray": "#F7F8F4",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: { container: "1200px" },
      screens: { xs: "375px" },
      borderRadius: { card: "22px" },
    },
  },
  plugins: [
    // Hover only on real hover devices, so taps never leave stuck hover states.
    plugin(function ({ addVariant }) {
      addVariant("hover", "@media (hover: hover) and (pointer: fine) { &:hover }");
      addVariant("group-hover", "@media (hover: hover) and (pointer: fine) { :merge(.group):hover & }");
    }),
  ],
};

export default config;
