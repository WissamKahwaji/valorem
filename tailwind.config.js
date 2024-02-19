/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        subTitle: "hsl(var(--subTitle))",
        background: "hsl(var(--background))",
        hoverColor: "hsl(var(--hoverColor))",
        seconBackground: "hsla(var(--seconBackground))",
      },
      fontFamily: {
        header: ["Playfair Display", "Poppins"],
        body: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
