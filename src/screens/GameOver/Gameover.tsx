import { View, Text, Image } from "react-native"
import GameoverStyle from "./Gameover.style"
import Button from "../../components/Button/Button"
import Title from "../../components/Title/Title"
import Box from "../../components/Box/Box"

type GameoverProps = {
  guesses: number[]
  onPlayAgain: () => void
}

function Gameover({ guesses, onPlayAgain }: GameoverProps) {
  return (
    <Box f={1} ai="center" gap={20}>
      <Title>Game Over</Title>
      <Box style={GameoverStyle.imgContainer}>
        <Image
          source={require("../../../assets/success.png")}
          style={GameoverStyle.img}
        />
      </Box>
      <Box gap={20}>
        <Text style={GameoverStyle.msg}>
          You needed{" "}
          <Text style={GameoverStyle.textRounds}>{guesses.length} rounds</Text>{" "}
          to guess the number{" "}
          <Text style={GameoverStyle.textRounds}>{guesses[0]}</Text>.
        </Text>
        <Button title="< Play Again" variant="outline" onPress={onPlayAgain} />
      </Box>
    </Box>
  )
}
export default Gameover
