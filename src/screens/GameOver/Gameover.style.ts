import { StyleSheet } from "react-native"
import COLORS from "../../constants/colors"

const GameoverStyle = StyleSheet.create({
  imgContainer: {
    width: 300,
    height: 300,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 200,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderWidth: 2,
    borderRadius: 200,
  },
  msg: {
    fontSize: 15,
    fontWeight: "bold",
  },
  textRounds: {
    color: COLORS.text.secondary,
  },
  pickedNum: {
    color: COLORS.text.secondary,
  },
})

export default GameoverStyle
