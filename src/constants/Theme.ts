export enum TextSizes {
  small = 10,
  medium = 16,
  large = 22,
  extraLarge = 30,
}

export enum FontFamily {
  regular = "Mukta-Regular",
  medium = "Mukta-Medium",
  bold = "Mukta-Bold",
}

const THEME = {
  TextSizes,
  FontFamily,
  Elements: {
    borderRadius: 5,
  },
  Colors: {
    white: "#FFFFFF",
    lightTurquoise: "#47CECF",
    turquoise: "#2AB2B3",
    darkTurquoise: "#06A8A9",
    black: "#000",
    grey: "#4A4A4A",
    lightGrey: "#9A9A9A",
    orange: "#F16F08",
    lightBlue: "#08E3F1",
    red: "#F12808",
  },
};

export default THEME;
