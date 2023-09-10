/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
      },

      colors: {
        "bg-primary": "#121212",
        "bg-secondary": "#2f2b3a",
        "input-text": "#2f2b3a",
        "bg-third": "#1a1625",
        "text-primary": "#F4EEE0",
        "text-light": "#908d96",
        "button-primary": "#7a5af5",
        "button-p-hover": "#9171f8",
        links: "#9171f8",
        "links-hover": "#a688fa",
        "button-dark": "#2f2b3a",
        "button-d-hover": "#46424f",
        // "border-common": "",
      },
    },
  },
  plugins: [],
};
