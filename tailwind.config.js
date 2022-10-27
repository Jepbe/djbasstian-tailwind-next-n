module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // "sans": ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen"]
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      dark: "#212121",
      darkest: "#151515",
      light: "#e8e8e8",
      hover: "#6b72ff", 
      select: "#ff3d87",
      blue: "#003b71",
      darkblue: "#002E57",
      yellow: "#FFFF00"
    },
    extend: {
      backgroundImage: {
        'forsideBg': "url('/forsideBg.jpg')",
        'forsideBg2': "url('/forsideBg2.jpg')",
      }
    },
    screens: {
      'sm': '700px',
      // => @media (min-width: 700px) { ... }

      'sml': '800px',
      // => @meda (min-witdth: 800px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'ev': '1055px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
  mode: 'jit',
}