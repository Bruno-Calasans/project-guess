import { Alert } from "react-native"
import { useState } from "react"
import Box from "../../components/Box/Box"
import NumberInput from "../../components/Input/NumberInput/NumberInput"
import Button from "../../components/Button/Button"
import Title from "../../components/Title/Title"
import CONFIG from "../../constants/config"

type HomeProps = {
  onPickNumber?: (num: string) => void
}

function Home({ onPickNumber }: HomeProps) {
  const [num, setNum] = useState("")

  const submitHandler = () => {
    if (Number(num) <= 0) {
      return Alert.alert(
        "Número Inválido",
        "Você deve informar um número maior que 0"
      )
    }

    if (onPickNumber) {
      onPickNumber(num)
    }
  }

  const resetHandler = () => {
    setNum("")
  }
  return (
    <Box bg="rgba(165, 138, 112, 0.253)" w="100%" gap={10} pd={10}>
      <Box gap={10}>
        <Title>Guess the Number</Title>
        <NumberInput
          ph="Choose a number"
          c="white"
          value={num}
          onChange={setNum}
          minValue={CONFIG.minValue}
          maxValue={CONFIG.maxValue}
        />
      </Box>
      <Box gap={5}>
        <Button
          title="Confirm"
          variant="filled"
          bg="purple"
          w="100%"
          onPress={submitHandler}
        />
        <Button
          title="Reset"
          variant="filled"
          bg="purple"
          w="100%"
          onPress={resetHandler}
        />
      </Box>
    </Box>
  )
}

export default Home
