import { StyleSheet } from "react-native"
import COLORS from "../../../constants/colors"

const GuessLogStyle = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bg.secondary,
    borderColor: COLORS.border.primary,
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
  },
  text: {
    color: COLORS.text.secondary,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
})

export default GuessLogStyle
