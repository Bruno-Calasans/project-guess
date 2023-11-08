import { View, Text } from "react-native"
import { Style } from "../../hooks/useVariant/useVariant.type"
import TitleStyle from "./Title.style"

type TitleProps = {
  children: React.ReactNode
  c?: Style["color"]
  bc?: Style["borderColor"]
}

function Title({ children, c, bc }: TitleProps) {
  return (
    <View
      style={{
        ...TitleStyle.container,
        borderColor: bc ?? TitleStyle.container.borderColor,
      }}
    >
      <Text
        style={{
          ...TitleStyle.text,
          color: c ?? TitleStyle.text.color,
        }}
      >
        {children}
      </Text>
    </View>
  )
}

export default Title
