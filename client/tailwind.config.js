/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "r-arrow": {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(5px)" },
        },
        "d-arrow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(5px)" },
        },
        bounce: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // 'cal-sans' is the class name, 'Cal Sans' is the font family name
      },

      colors: {
        "bg-primary": "#121212",
        "bg-secondary": "#2f2b3a",
        "bg-third": "#1a1625",
        "bg-fourth": "#3a3645",
        "bg-hover": "#262036",
        "input-text": "#2f2b3a",
        gradient: "#6d4f99",
        "text-primary": "#F4EEE0",
        "text-light": "#908d96",
        "text-secondary": "#b3b0a7",
        "button-primary": "#7a5af5",
        "button-p-hover": "#9171f8",
        "links-hover": "#a688fa",
        "button-dark": "#2f2b3a",
        "button-d-hover": "#46424f",
        "bg-duration": "#201a2d",
        severe: "#fe8686",
        mild: "#91d191",
        moderate: "#fecc86",
        least: "#ba9ffb",

        // "border-common": "",
      },
    },
  },
  plugins: [],
};

// background: #1A1625;
// background: linear-gradient(315deg, #1A1625, #7B5AF5);
