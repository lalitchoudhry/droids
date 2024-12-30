/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
        mon: ["Montserrat", "sans-serif"],
        int: ["Inter", "sans-serif"],
      },
      colors: {
        "dark-purple": "#7209b7",
        brand: "#9933ff",
        accent: "#99FF33",
        head: "#282828",
        text: "rgb(94, 105, 127)",
        pallete: "#252935",
        primary: "#6633cc",
        "primary-light": "#7c4ddb",
        "primary-dark": "#5429b3",
        "dark-gray": "#060607",
        "light-gray": "#F9F9F8",
        hero: "#B1B1B1",
      },
      backgroundImage: {
        home: "url('/images/1.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-white":
          "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
      },
      animation: {
        glow: "glow 4s ease-in-out infinite alternate",
        gradient: "gradient 8s linear infinite",
      },
      keyframes: {
        glow: {
          "0%": { opacity: 0.4 },
          "100%": { opacity: 0.8 },
        },
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
