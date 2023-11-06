import { TextInput as TI, View } from "react-native"
import { InputVariantProps, InputVariants, inputVariants } from "../Input.style"
import useVariant from "../../../hooks/useVariant/useVariant"
import { Style } from "../../../hooks/useVariant/useVariant.type"

type TextInputProps = {
  msg?: string
  c?: Style["color"]
  onChange?: (text: string) => void
}

function TextInput({ c, msg, onChange }: TextInputProps) {
  const { getStyle, set, appliedVariants } = useVariant<
    InputVariants,
    InputVariantProps
  >(inputVariants, "default")

  const focusHandler = () => {
    set("focus")
  }
  const blurHandler = () => {
    set("blur")
  }

  const changeHandler = (text: string) => {
    if (onChange) {
      onChange(text)
    }
  }

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
      <TI
        onChangeText={changeHandler}
        placeholder={msg ?? "placeholder"}
        style={style?.input}
        onFocus={focusHandler}
        onBlur={blurHandler}
      />
    </View>
  )
}

export default TextInput
