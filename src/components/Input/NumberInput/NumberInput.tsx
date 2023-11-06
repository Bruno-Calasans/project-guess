import { View, TextInput } from "react-native"
import { Style } from "../../../hooks/useVariant/useVariant.type"
import { useEffect, useState } from "react"
import numberIntMask from "../../../Utils/numberIntMask"
import { inputVariants, InputVariants, InputVariantProps } from "../Input.style"
import useVariant from "../../../hooks/useVariant/useVariant"

type NumberInputProps = {
  ph?: string
  c?: Style["color"]
  start?: number
  value?: string
  minValue?: number
  maxValue?: number
  onChange?: (value: string) => void
}

function NumberInput({
  ph,
  c,
  start,
  value,
  minValue,
  maxValue,
  onChange,
}: NumberInputProps) {
  const { set, getStyle, appliedVariants } = useVariant<
    InputVariants,
    InputVariantProps
  >(inputVariants, "default")

  const [num, setNum] = useState("")

  const focusHandler = () => {
    set("focus")
  }
  
  const blurHandler = () => {
    set("blur")
  }

  const changeNumberHandler = (text: string) => {
    let numberText = numberIntMask(text)
    let number = Number(numberText)

    if (minValue) {
      number = number < minValue ? minValue : number
    }

    if (maxValue) {
      number = number > maxValue ? maxValue : number
    }

    numberText = String(number)

    if (onChange) {
      onChange(numberText)
    }

    setNum(numberText)
  }

  const checkStartValue = () => {
    let startValue = start ?? 0

    if (minValue && startValue <= minValue) {
      startValue = minValue
    }

    if (maxValue && startValue >= maxValue) {
      startValue = maxValue
    }

    setNum(String(startValue))
  }

  useEffect(() => {
    if (start) {
      checkStartValue()
    }
  }, [start, minValue, maxValue])

  const style = getStyle()

  if (style) {
    if (c) {
      style.input.color = c ?? style.input.color
      if (appliedVariants?.focus) {
        style.input.borderBottomColor = c
      }
    }
  }

  return (
    <View style={style?.container}>
      <TextInput
        style={style?.input}
        placeholder={ph ?? "Tip some number"}
        onFocus={focusHandler}
        onBlur={blurHandler}
        onChangeText={changeNumberHandler}
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        value={value ?? num}
      />
    </View>
  )
}

export default NumberInput
