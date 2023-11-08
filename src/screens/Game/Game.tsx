import { View, Text, Alert, ScrollView, FlatList } from "react-native"
import { useEffect, useState } from "react"
import GameStyle from "./Game.style"
import Button from "../../components/Button/Button"
import Box from "../../components/Box/Box"
import Title from "../../components/Title/Title"
import GuessLog from "./GuessLog/GuessLog"

function genRanInt(min: number, max: number, except?: number) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min

  if (except && num === except) {
    return genRanInt(min, max, except)
  }

  return num
}

type GameProps = {
  pickedNum: number
  onGameover: (guesses: number[]) => void
}

function Game({ pickedNum, onGameover }: GameProps) {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(100)
  const [guessedNum, setGuessedNum] = useState(0)
  const [guesses, setGuesses] = useState<number[]>([])

  const guessHandler = (direction: "lower" | "higher") => {
    // guessing a number too lower
    if (direction === "lower" && guessedNum < pickedNum) {
      Alert.alert("Higher", "It's higher than it", [
        { text: "Sorry!", style: "cancel" },
      ])
      return
    }

    // guessing a number too higher
    if (direction === "higher" && guessedNum > pickedNum) {
      Alert.alert("Lower", "It's lower than it", [
        { text: "Sorry!", style: "cancel" },
      ])
      return
    }

    if (direction === "higher") {
      setMin(guessedNum + 1)
    } else {
      setMax(guessedNum - 1)
    }
  }

  const checkGameOver = () => {
    if (guessedNum === pickedNum) {
      onGameover(guesses)
    }
  }

  useEffect(() => {
    const randNum = genRanInt(min, max, guessedNum)
    setGuessedNum(randNum)
    setGuesses((curr) => [randNum, ...curr])
  }, [min, max])

  useEffect(() => {
    checkGameOver()
  }, [guessedNum])

  return (
    <Box f={1}>
      <Box gap={10} ai="center">
        <Title>Opponent's Guesses</Title>
        <Box w={60} ai="center" bc="snow" bw={5} br={50}>
          <Text style={GameStyle.guessTitleText}>{guessedNum}</Text>
        </Box>
      </Box>

      <Box f={1} pd={10} gap={10}>
        <Box gap={10}>
          <Text style={GameStyle.guesserText}>Higher or Lower?</Text>
          <Box fd="row" ai="center" jc="center" gap={5}>
            <Button
              title="+"
              variant="outline"
              w={30}
              onPress={() => guessHandler("higher")}
            />
            <Button
              title="-"
              variant="outline"
              w={30}
              onPress={() => guessHandler("lower")}
            />
          </Box>
        </Box>
        <FlatList
          contentContainerStyle={GameStyle.guesses}
          data={guesses}
          keyExtractor={(item, index) => `${guesses.length - index}`}
          renderItem={({ item, index }) => (
            <GuessLog pos={guesses.length - index} guess={item} />
          )}
        />
      </Box>
    </Box>
  )
}

export default Game
