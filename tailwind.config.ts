import containerQueries from "@tailwindcss/container-queries";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import scThemePlugin from "./src/plugins/themes";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,svelte,ts}"],
  safeList: ["dark"],

  theme: {
    extend: {
      colors: {
        icon: "hsl(var(--icon) / <alpha-value>)",
        link: "hsl(var(--link) / <alpha-value>)",
        hover: "hsl(var(--hover) / <alpha-value>)",
        maxed: "hsl(var(--maxed) / <alpha-value>)",
        gold: "hsl(var(--gold) / <alpha-value>)",
        text: "hsl(var(--text) / <alpha-value>)",
        background: {
          DEFAULT: "hsl(var(--background) / <alpha-value>)",
          grey: "hsl(var(--grey_background) / <alpha-value>)",
          lore: "var(--lore_background)"
        },
        header: "hsl(var(--header) / <alpha-value>)",
        minecraft: {
          0: "var(--§0)",
          1: "var(--§1)",
          2: "var(--§2)",
          3: "var(--§3)",
          4: "var(--§4)",
          5: "var(--§5)",
          6: "var(--§6)",
          7: "var(--§7)",
          8: "var(--§8)",
          9: "var(--§9)",
          a: "var(--§a)",
          b: "var(--§b)",
          c: "var(--§c)",
          d: "var(--§d)",
          e: "var(--§e)",
          f: "var(--§f)"
        }
      },
      bg: "var(--bg)",
      logo: "var(--logo)",
      textShadow: {
        sm: "0 0px 2px var(--tw-shadow-color)",
        DEFAULT: "0 0px 4px var(--tw-shadow-color)",
        lg: "0 0px 8px var(--tw-shadow-color)"
      },
      animation: {
        shine: "shine 4s infinite"
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateY(120%)" },
          "33%, 100%": { transform: "translateY(-120%)" }
        }
      },
      fontFamily: {
        icomoon: ["icomoon", "Montserrat"],
        sans: ["Montserrat", ...fontFamily.sans]
      }
    }
  },

  safelist: [
    {
      // safelist bg/text minecraft colors as they are dynamic
      pattern: /^(bg|text)-minecraft-[0-9a-f]$/
    }
  ],

  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value
          })
        },
        { values: theme("textShadow") }
      );
    }),
    scThemePlugin,
    containerQueries
  ]
} satisfies Config;
