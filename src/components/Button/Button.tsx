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
  color?: React.CSSProperties["color"]
  bgColor?: React.CSSProperties["color"]
  borderColor?: React.CSSProperties["color"]
  ripple?: PressableAndroidRippleConfig
  onPress?: () => void
  onLongPress?: () => void
}

function Button({
  title,
  variant,
  bgColor,
  borderColor,
  color,
  ripple,
  onPress,
  onLongPress,
}: ButtonProps) {
  const { getStyle, set } = useVariant<ButtonVariants, ButtonVariantProps>(
    btnVariants,
    "default"
  )

  useEffect(() => {
    if (variant) {
      set(variant)
    }
  }, [variant])

  const style = getStyle()

  if (style) {
    if (color) {
      style.text.color = color
    }

    if (bgColor) {
      style.container.backgroundColor = bgColor
    }

    if (borderColor) {
      style.container.borderColor = borderColor
    }
  }

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      android_ripple={ripple}
    >
      <View style={style?.container}>
        <Text style={style?.text}>{title}</Text>
      </View>
    </Pressable>
  )
}

export default Button
