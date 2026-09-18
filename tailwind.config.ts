import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

/**
 * SKILLEX DESIGN SYSTEM
 * Brand colors, type scale and spacing tokens live here so every
 * component pulls from a single source of truth. Do not hardcode
 * hex values or font stacks outside this file.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./ui/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1A1A1A",
        "skill-green": "#8CC63F",
        "medium-gray": "#6D6D6D",
        "light-gray": "#F2F2F2",
        brand: {
          black: "#1A1A1A",
          green: "#8CC63F",
          gray: "#6D6D6D",
          lightGray: "#F2F2F2",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
      maxWidth: {
        container: "1440px",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [
    // Touch devices don't have a real ":hover" — without this, tapping a
    // card/button can leave its hover state (glow, lift, spotlight) stuck
    // on screen until the next unrelated tap. Scoping hover/group-hover to
    // devices that report a genuine fine-pointer hover capability fixes
    // that across every component at once, instead of patching each one.
    plugin(function ({ addVariant }) {
      addVariant("hover", "@media (hover: hover) and (pointer: fine) { &:hover }");
      addVariant("group-hover", "@media (hover: hover) and (pointer: fine) { :merge(.group):hover & }");
      addVariant("peer-hover", "@media (hover: hover) and (pointer: fine) { :merge(.peer):hover ~ & }");
    }),
  ],
};

export default config;
