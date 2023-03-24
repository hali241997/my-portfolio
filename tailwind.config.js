/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bluePrimary: "#194efb",
        yellowPrimary: "#ffc96b",
        quote: "#3a4660",
        paragraph: "#001455",
        subtext: "#59647B",
      },
      backgroundColor: {
        lightBgPrimary: "#FAF9F6",
        darkPrimary: "#121212",
      },
      fontFamily: {
        Poppins: [`'Poppins', sans-serif`],
        RobotoMono: [`'Roboto Mono', monospace`],
        SourceCodePro: [`'Source Code Pro', monospace`],
      },
    },
  },
  plugins: [],
};
