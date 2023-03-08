/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bluePrimary: "#194efb",
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
