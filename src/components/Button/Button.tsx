import {
  View,
  Text,
  Pressable,
  PressableAndroidRippleConfig,
} from "react-native"
import { ButtonVariants, ButtonVariantProps, btnVariants } from "./Button.style"
import React, { useEffect } from "react"
import useVariant from "../../hooks/useVariant/useVariant"
import { Style } from "../../hooks/useVariant/useVariant.type"

type ButtonProps = {
  title: string
  variant?: ButtonVariants
  w?: Style["width"]
  h?: Style["height"]
  c?: Style["color"]
  bg?: Style["backgroundColor"]
  bc?: Style["borderColor"]
  ripple?: PressableAndroidRippleConfig
  onPress?: () => void
  onLongPress?: () => void
}

function Button({
  title,
  variant,
  w,
  h,
  bc,
  bg,
  c,
  ripple,
  onPress,
  onLongPress,
}: ButtonProps) {
  const { getStyle, set, apply } = useVariant<
    ButtonVariants,
    ButtonVariantProps
  >(btnVariants, "default")

  const pressHandler = () => {
    apply("clicked")
    if (onPress) {
      onPress()
    }
  }

  useEffect(() => {
    if (variant) {
      set(variant)
    }
  }, [variant])

  const style = getStyle()

  return (
    <Pressable
      onPress={pressHandler}
      onLongPress={onLongPress}
      android_ripple={ripple}
      style={({ pressed }) => ({
        ...style?.container,
        backgroundColor: bg ?? style?.container.backgroundColor,
        borderColor: bc,
        width: w ?? style?.container.width,
        height: h ?? style?.container.height,
        opacity: pressed ? 0.8 : 1,
      })}
    >
      <View>
        <Text
          style={{
            ...style?.text,
            color: c ?? style?.text.color,
          }}
        >
          {title}
        </Text>
      </View>
    </Pressable>
  )
}

export default Button
