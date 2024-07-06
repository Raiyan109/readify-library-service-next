/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [{
      night: {
        ...require("daisyui/src/theming/themes")["night"],
        ".hero-bg": {
          "background-color": 'hsla(270, 73%, 35%, 1)',
          "border-color": "#1EA1F1",
        },
        // ".hero-bg:hover": {
        //   "background-color": "red",
        //   "border-color": "#1C96E1",
        // },
      },
    }, "light"],
  },
  plugins: [require("daisyui")],
}