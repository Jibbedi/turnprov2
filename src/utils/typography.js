import Typography from "typography";

const typography = new Typography({
  googleFonts: [
    {
      name: "Open Sans",
      styles: ["light", "bold"]
    }
  ],
  baseFontSize: "18px",
  baseLineHeight: 1.7,
  headerFontFamily: ["Open Sans"],
  bodyFontFamily: ["Open Sans"]
});

export default typography;
