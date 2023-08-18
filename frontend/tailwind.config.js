/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      background: "#FFFBFE",
      primary: "#6750A4",
      secondary: "#625B71",
      primaryContainer: "#EADDFF",
      secondaryCont: "#E8DEF8",
      primaryText: "#21005D",
      secondaryText: "#1D192B",
      backgroundText: "#1C1B1F",
      outline: "#79747E",
      main: "#1C1B1F",
      onPrimary: "#FFFFFF",
      tertiert: "#7D5260",
      onTertiert: "#FFFFFF",
      surface: "#FFFBFE",
      onSurface: "#1C1B1F",
    },
    fontFamily: {
      head: ["Roboto Slab", "sans-serif"],
      sub: ["Merriweather", "serif"],
    },
  },
  fontFamily: {
    sans: ["Graphik", "sans-serif"],
    serif: ["Merriweather", "serif"],
  },
  plugins: [],
};

