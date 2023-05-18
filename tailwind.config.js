/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        // flowbite-svelte
        primary: {
          50: "#ebf5ff",
          100: "#fff1ee",
          200: "#ffe4de",
          300: "#ffd5cc",
          400: "#ffbcad",
          500: "#fe795d",
          600: "#ef562f",
          700: "#eb4f27",
          800: "#d3330a",
          900: "#d3330a",
        },
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("flowbite/plugin"),
  ],
  // plugins: [require("@tailwindcss/typography")],

  darkMode: "class",

  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
