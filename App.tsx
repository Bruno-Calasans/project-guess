import { StyleSheet, View, ImageBackground, Alert } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import Home from "./src/screens/Home/Home"
import { useState } from "react"

export default function App() {
  const [num, setNum] = useState("")
  const [home, setHome] = useState(true)

  const pickNumberHandler = (num: string) => {
    setNum(num)
    setHome(false)
  }

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
    paddingTop: 50,
    alignItems: "center",
  },
  bgImage: {
    opacity: 0.16,
  },
})
