/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        lightBgPrimary: "#FAF9F6",
        darkBgPrimary: "#121212",
      },
      fontFamily: {
        Poppins: [`'Poppins', sans-serif`],
      },
    },
  },
  plugins: [],
};
