import { StyleSheet } from "react-native"
import { VariantStlye } from "../../hooks/useVariant/useVariant.type"

const BoxStyle: VariantStlye<"container"> = {
  container: {
    backgroundColor: "transparent",
    width: "100%",
    height: "auto",
    borderRadius: 4,
  },
}

export default BoxStyle
