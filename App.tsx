import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, ImageBackground } from "react-native"
import Button from "./src/components/Button/Button"
import Box from "./src/components/Box/Box"
import Group from "./src/components/Group/Group"
import TextInput from "./src/components/Input/TextInput/TextInput"
import NumberInput from "./src/components/Input/NumberInput/NumberInput"
import { LinearGradient } from "expo-linear-gradient"

export default function App() {
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
        <Box bg="rgba(165, 138, 112, 0.253)" w="90%" gap={10} pd={10}>
          <View>
            <NumberInput
              ph="Choose a number"
              c="white"
              onChange={console.log}
            />
          </View>
          <Box gap={5}>
            <Button title="Reset" variant="filled" bg="purple" w="100%" />
            <Button title="Confirm" variant="filled" bg="purple" w="100%" />
          </Box>
        </Box>
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
