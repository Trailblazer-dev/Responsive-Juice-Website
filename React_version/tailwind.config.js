/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // adding a background image
      backgroundImage: {
        "hero-pattern": "url('./src/assets/background.png')",
        feature_bg:
          "linear-gradient(180deg, #FFE2C8 0%, #FFF3C8 0.01%, #FEBA44 85.42%)",
        menu_bg:
          "linear-gradient(360deg, rgba(255, 155, 37, 0.87) 2.43%, #FFF3C8 83.67%)",
      },
      // adding font family
      fontFamily: {
        first: ["Quicksand", "sans-serif"],
        second: ["Jost", "sans-serif"],
        third: ["Poppins", "sans-serif"],
      },
      // adding color
      colors: {
        title: "#473525E5",
        desc: "#6e6348",
        dollar: "#FF3D00",
        nav: "#000000",
        menu_icon_bg: "#FF9900",
        menu_icon_color: "#FFFFFF",
        menu_border: "#FDFDFD",
        social_linkbg: "#EDFFEF",
        social_link_olor: "#484848",
      },
      // adding custom screen size
      screens: {
        custom: "414px"
      },
    },
  },
  plugins: [],
};
