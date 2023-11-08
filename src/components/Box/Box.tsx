import React from "react"
import { View } from "react-native"
import { Style } from "../../hooks/useVariant/useVariant.type"
import BoxStyle from "./Box.style"

type BoxProps = {
  bg?: Style["backgroundColor"]
  pd?: Style["padding"]
  w?: Style["width"]
  h?: Style["height"]
  br?: Style["borderRadius"]
  bc?: Style["borderColor"]
  bw?: Style["borderWidth"]
  gap?: Style["gap"]
  f?: Style["flex"]
  fd?: Style["flexDirection"]
  ai?: Style["alignItems"]
  jc?: Style["justifyContent"]
  style?: Style
  children: React.ReactNode
}

function Box({
  children,
  pd,
  bg,
  w,
  h,
  br,
  bc,
  bw,
  gap,
  f,
  fd,
  ai,
  jc,
  style,
}: BoxProps) {
  const { container } = BoxStyle
  return (
    <View
      style={{
        ...container,
        backgroundColor: bg ?? container.backgroundColor,
        gap: gap ?? container.gap,
        width: w ?? container.width,
        height: h ?? container.height,
        borderRadius: br ?? container.borderRadius,
        borderColor: bc ?? container.borderColor,
        borderWidth: bw ?? container.borderWidth,
        padding: pd ?? container.padding,
        flex: f ?? container.flex,
        flexDirection: fd ?? container.flexDirection,
        alignItems: ai ?? container.alignItems,
        justifyContent: jc ?? container.justifyContent,
        ...style,
      }}
    >
      {children}
    </View>
  )
}

export default Box
