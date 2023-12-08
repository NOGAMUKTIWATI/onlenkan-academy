/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },

      colors: {
        primary: "#4564E5",
        secondary: "#212529",
        "btn-grey": "#F8F9FA",
        "theme-footer": "#011C39",
        "why-choose-us": "#ECEFFC",
      },
    },
    plugins: [],
  },
};
