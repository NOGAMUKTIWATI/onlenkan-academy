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
        detail: "#0DCAF0",
        download: "#4564E5",
        primary: "#4564E5",
        secondary: "#212529",
        hijau: "#198754",
        kuning: "#FFCE8F",
        "btn-grey": "#F8F9FA",
        "theme-footer": "#011C39",
        "why-choose-us": "#ECEFFC",
        "biru-muda": "#ECEFFC",

      },
    },
    plugins: [],
  },
};
