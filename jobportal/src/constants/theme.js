import { Dimensions } from "react-native"
const { width, height } = Dimensions.get("window")

export const COLORS = {
  transparentPrimray: "rgba(227, 120, 75, 0.4)",
  orange: "#FFA133",
  lightOrange: "#FFA133",
  lightOrange2: "#FDDED4",
  lightOrange3: "#FFD9AD",
  green: "#27AE60",
  red: "#FF1717",
  blue: "#0064C0",
  darkBlue: "#111A2C",
  darkGray: "#525C67",
  darkGray2: "#757D85",
  gray: "#898B9A",
  gray2: "#BBBDC1",
  gray3: "#CFD0D7",
  lightGray1: "#DDDDDD",
  lightGray2: "#F5F5F8",
  white2: "#FBFBFB",
  white: "#FFFFFF",
  black: "#000000",

  transparent: "transparent",
  transparentBlack1: "rgba(0, 0, 0, 0.1)",
  transparentBlack2: "rgba(0, 0, 0, 0.2)",
  transparentBlack3: "rgba(0, 0, 0, 0.3)",
  transparentBlack7: "rgba(0, 0, 0, 0.7)",

  transparentWhite1: "rgba(255, 255, 255, 0.1)",
  transparentWhite2: "rgba(255, 255, 255, 0.2)",
  transparentWhite3: "rgba(255, 255, 255, 0.3)",
  transparentWhite4: "rgba(255, 255, 255, 0.4)",
  transparentWhite5: "rgba(255, 255, 255, 0.5)",
  transparentWhite7: "rgba(255, 255, 255, 0.7)",

  primary: "#00507A",
  secondary: "#F57F17",
  bg: "#E2E8EC",
  light: "#5A5A5A",
  text_color: "#000000",

  // alerts
  // success
  color_success_alert: "#15575c",
  bg_success_alert: "#d4edda",
  border_success_alert: "#c3e6cb",

  // danger
  color_danger_alert: "#721c29",
  bg_danger_alert: "#f8d7da",
  border_danger_alert: "#f5c6cb",

  // primary
  color_primary_alert: "#084298",
  bg_primary_alert: "#cfe2ff",
  border_primary_alert: "#b6d4fe",

  // secondary
  color_secondary_alert: "#41464b",
  bg_secondary_alert: "#e2e3e5",
  border_secondary_alert: "#d3d6d8",

  // warning
  color_warning_alert: "#664d03",
  bg_warning_alert: "#fff3cd",
  border_warning_alert: "#ffecb5",

  // info
  color_info_alert: "#055160",
  bg_info_alert: "#cff4fc",
  border_info_alert: "#b6effb",
}

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
}
export const FONTS = {
  largeTitle: { fontFamily: "Poppins-Black", fontSize: SIZES.largeTitle },
  h1: { fontFamily: "Poppins-Bold", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Poppins-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h5, lineHeight: 22 },
  body1: {
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
}

const appTheme = { COLORS, SIZES, FONTS }

export default appTheme
