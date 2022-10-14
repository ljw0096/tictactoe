import { DefaultTheme } from "styled-components"

const colors = {
  mainBlack: "#212121",
  baseGray: "#DEDEDE",
  accentGreen: "#A5FFC9",
  accentBlue: "#a5c9ff",
}

const fontSize = {
  title: 32,
  subTitle: 24,
  text: 16,
}

export type ColorsTypes = typeof colors
export type FontSizeTypes = typeof fontSize

const theme: DefaultTheme = {
  colors,
  fontSize,
}

export default theme
