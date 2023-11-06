import { View } from "react-native"
import GroupStyle from "./Group.style"
import { Style } from "../../hooks/useVariant/useVariant.type"

type GroupProps = {
  children: React.ReactNode
  jc?: Style["justifyContent"]
  gap?: Style["gap"]
}

function Group({ children, jc, gap }: GroupProps) {
  return (
    <View
      style={{
        ...GroupStyle.container,
        justifyContent: jc ?? GroupStyle.container.justifyContent,
        gap: gap ?? GroupStyle.container.gap,
      }}
    >
      {children}
    </View>
  )
}

export default Group
