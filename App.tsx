import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import Button from "./src/components/Button/Button"
import Box from "./src/components/Box/Box"
import Group from "./src/components/Group/Group"
import TextInput from "./src/components/Input/TextInput/TextInput"
import NumberInput from "./src/components/Input/NumberInput/NumberInput"
import { LinearGradient } from "expo-linear-gradient"

export default function App() {
  return (
    <LinearGradient colors={["#FF4E50", "#d3b51e"]} style={styles.container}>
      <Box w="90%" bg="rgba(165, 138, 112, 0.253)" gap={10} pd={10}>
        <View>
          <NumberInput ph="Choose a number" c="white" onChange={console.log} />
        </View>
        <Box gap={5}>
          <Button title="Reset" variant="filled" bg="purple" w="100%" />
          <Button title="Confirm" variant="filled" bg="purple" w="100%" />
        </Box>
      </Box>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 100,
  },
})
