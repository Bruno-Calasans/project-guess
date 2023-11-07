import { StyleSheet, ImageBackground, StatusBar } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"

// screens
import Home from "./src/screens/Home/Home"
import Game from "./src/screens/Game/Game"

export default function App() {
  const [pickedNum, setPickedNum] = useState("")
  const [home, setHome] = useState(false)
  const [game, setGame] = useState(true)

  const pickNumberHandler = (num: string) => {
    setPickedNum(num)
    setHome(false)
    setGame(true)
  }

  const gameOverhandler = () => {}

  return (
    <LinearGradient colors={["#FF4E50", "#F9D423"]} style={styles.container}>
      <ImageBackground
        style={styles.content}
        imageStyle={styles.bgImage}
        source={{
          uri: "https://raw.githubusercontent.com/academind/react-native-practical-guide-code/04-deep-dive-real-app/extra-files/images/background.png",
        }}
        resizeMode="cover" // default
      >
        {home && <Home onPickNumber={pickNumberHandler} />}
        {game && <Game pickedNum={50} onGameOver={gameOverhandler} />}
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  content: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
  },
  bgImage: {
    opacity: 0.16,
  },
})
