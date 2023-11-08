import { StyleSheet, ImageBackground, StatusBar } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import COLORS from "./src/constants/colors"

// screens
import Home from "./src/screens/Home/Home"
import Game from "./src/screens/Game/Game"
import Gameover from "./src/screens/GameOver/Gameover"

export default function App() {
  const [pickedNum, setPickedNum] = useState("")
  const [guesses, setGuesses] = useState<number[]>([])
  const [home, setHome] = useState(false)
  const [game, setGame] = useState(false)
  const [gameover, setGameover] = useState(true)

  const pickNumberHandler = (num: string) => {
    setPickedNum(num)
    setHome(false)
    setGame(true)
  }

  const gameoverHandler = (guesses: number[]) => {
    setGame(false)
    setGameover(true)
    setGuesses(guesses)
  }

  const playAgainHandler = () => {
    setGameover(false)
    setHome(true)
    setGuesses([])
  }

  return (
    <LinearGradient
      colors={[COLORS.bg.secondary, COLORS.bg.primary]}
      style={styles.container}
    >
      <ImageBackground
        style={styles.content}
        imageStyle={styles.bgImage}
        source={require("./assets/background.png")}
        resizeMode="cover"
      >
        {home && <Home onPickNumber={pickNumberHandler} />}
        {game && (
          <Game pickedNum={Number(pickedNum)} onGameover={gameoverHandler} />
        )}
        {gameover && (
          <Gameover guesses={guesses} onPlayAgain={playAgainHandler} />
        )}
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  content: {
    flex: 1,
    paddingTop: StatusBar.currentHeight! + 50,
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  bgImage: {
    opacity: 0.16,
  },
})
