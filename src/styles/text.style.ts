import { StyleSheet, TextStyle, ViewStyle } from "react-native"

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

// export type TextSize = "sm" | "md" | "lg" | "xl"

// export const getTextStyle = (size: TextSize) => {
//   const styles: TextStyle[] = [textStyle.default]
//   styles.push(textStyle[size])
//   return styles
// }

export default textStyle
