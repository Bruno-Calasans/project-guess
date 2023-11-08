import { StyleSheet, TextStyle, ViewStyle } from "react-native"

export type TextSize = "default" | "sm" | "md" | "lg" | "xl"

const textStyle = StyleSheet.create({
  default: {
    fontFamily: "sans-serif",
  },
  sm: {
    fontSize: 10,
  },
  md: {
    fontSize: 15,
  },
  lg: {
    fontSize: 20,
  },
  xl: {
    fontSize: 25,
  },
})

export default textStyle
