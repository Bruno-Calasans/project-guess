import { View, Text } from "react-native"
import GuessLogStyle from "./GuessLog.style"

type GuessLogProps = {
  pos: number
  guess: number
}

function GuessLog({ pos, guess }: GuessLogProps) {
  return (
    <View style={GuessLogStyle.container}>
      <Text style={GuessLogStyle.text}>
        #{pos} guess: {guess}
      </Text>
    </View>
  )
}

export default GuessLog
