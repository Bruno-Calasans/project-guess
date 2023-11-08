import { StyleSheet } from "react-native"
import COLORS from "../../constants/colors"

const GameStyle = StyleSheet.create({
  guessTitleText: {
    color: COLORS.text.secondary,
    fontSize: 30,
  },
  guesserText: {
    color: COLORS.text.secondary,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  guesses: {
    flex: 1,
    gap: 10,
  },
})

export default GameStyle
