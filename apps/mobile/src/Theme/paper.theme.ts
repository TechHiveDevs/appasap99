import {
  DefaultTheme,
  // configureFonts
} from "react-native-paper";

// -------------------------------------------------
const fonts = {
  fontFamily: "sans-serif",
  fontWeight: "normal",
};

// -------------------------------------------------

const fontSizes = {
  regular: fonts,
  medium: fonts,
  light: fonts,
  thin: fonts,
};

// -------------------------------------------------

const fontConfig = {
  web: fontSizes,
  ios: fontSizes,
  android: fontSizes,
};

// -------------------------------------------------

const theme = {
  ...DefaultTheme,
  roundness: 15,
  colors: {
    ...DefaultTheme.colors,
    primary: "#2AA6DE",
    accent: "#0AA1DD",
    white: "#FFFFFF",
    black: "black",
    grey: "rgb(180, 180, 184)",
    lightgrey: "rgb(199, 199, 204)",
  },
  // fonts: configureFonts(fontConfig),
};

// -------------------------------------------------

export default theme;
