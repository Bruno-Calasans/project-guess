import { StyleSheet } from "react-native"

const GameStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    padding: 10,
  },
  title: {
    padding: 15,
  },
  titleText: {
    color: "#F9D423",
    fontWeight: "bold",
    fontSize: 25,
    borderWidth: 2,
    borderColor: "#F9D423",
    padding: 10,
  },
  guessTitle: {
    color: "#F9D423",
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "snow",
    borderRadius: 50,
    padding: 10,
  },
  guessTitleText: {
    color: "snow",
    fontSize: 30,
  },
  footer: {
    flex: 1,
    width: "100%",
    padding: 10,
    gap: 20,
  },
  guesser: {
    gap: 10,
  },
  guesserText: {
    color: "snow",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  guesserBtns: {
    gap: 10,
  },
  guesses: {
    flex: 1,
    gap: 10,
  },
  guess: {
    backgroundColor: "orange",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
  },
  guessText: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
})

export default GameStyle
