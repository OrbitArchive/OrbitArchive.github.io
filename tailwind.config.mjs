/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"
  ],
  theme: {
    extend: {
      colors: {
        orbit: {
          bg: "#0B0F1A",
          surface: "#1E2A44",
          primary: "#3A5F8A",
          accent: "#6EE7F9",
          highlight: "#F5C842",
          text: {
            main: "#E6EAF2",
            secondary: "#A3ADC2",
          },
        },
      },
    },
  },
  plugins: [],
}