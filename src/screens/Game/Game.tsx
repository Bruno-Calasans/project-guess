import { View, Text, Alert, ScrollView, FlatList } from "react-native"
import { useEffect, useState } from "react"
import GameStyle from "./Game.style"
import Button from "../../components/Button/Button"

function genRanInt(min: number, max: number, except?: number) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min

  if (except && num === except) {
    return genRanInt(min, max, except)
  }

  return num
}

type GameProps = {
  pickedNum: number
  onGameOver: (guesses: number[]) => void
}

function Game({ pickedNum, onGameOver }: GameProps) {
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
    // game over condition
    if (guessedNum === pickedNum) {
      onGameOver(guesses)
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
    <View style={GameStyle.container}>
      <View style={GameStyle.header}>
        <View style={GameStyle.title}>
          <Text style={GameStyle.titleText}>Opponent's Guesses</Text>
        </View>
        <View style={GameStyle.guessTitle}>
          <Text style={GameStyle.guessTitleText}>{guessedNum}</Text>
        </View>
      </View>

      <View style={GameStyle.footer}>
        <View style={GameStyle.guesser}>
          <Text style={GameStyle.guesserText}>Higher or Lower?</Text>
          <View style={GameStyle.guesserBtns}>
            <Button
              title="+"
              variant="outline"
              onPress={() => guessHandler("higher")}
            />
            <Button
              title="-"
              variant="outline"
              onPress={() => guessHandler("lower")}
            />
          </View>
        </View>
        <FlatList
          contentContainerStyle={GameStyle.guesses}
          data={guesses}
          keyExtractor={(item, index) => `${guesses.length - index}`}
          renderItem={({ item, index }) => (
            <View style={GameStyle.guess}>
              <Text style={GameStyle.guessText}>
                #{guesses.length - index} guess: {item}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}

export default Game
