/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bluePrimary: "#194efb",
        quote: "#3a4660",
        paragraph: "#001455",
        subtext: "#59647B",
      },
      backgroundColor: {
        lightBgPrimary: "#FAF9F6",
        darkBgPrimary: "#121212",
      },
      fontFamily: {
        Poppins: [`'Poppins', sans-serif`],
        ShipporiMincho: [`'Shippori Mincho', serif`],
      },
    },
  },
  plugins: [],
};
