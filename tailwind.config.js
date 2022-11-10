/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      dominant: {
        light: "#BFDEF8",
        DEFAULT: "#329BE2",
      },
      secondary: {
        DEFAULT: "#FAFAFA",
      },
      accent: {
        light: "#EBF5FF",
        DEFAULT: "#0E5E7B",
        dark: "#092932",
      },
      gray: {
        100: "#FFFFFF",
        90: "#F0F0F0F2",
        80: "#E1E1E1",
        70: "#C3C3C3",
        50: "#969696",
        20: "#4B4B4B",
        0: "#000000",
      },
      state: {
        success: "#38A169",
        info: "#3182CE",
        warning: "#DD6B20",
        error: "#A42D30",
      },
    },
    fontFamily: {
      sans: [
        "Poppins",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen-Sans",
        "Ubuntu",
        "Cantarell",
        "Helvetica Neue",
        "sans-serif",
      ],
    },
  },
  plugins: [],
};
