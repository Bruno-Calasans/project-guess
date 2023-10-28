import { StyleSheet } from "react-native"
import { VariantStyle } from "./createVariant"

export default function createVariantStyle<V extends string>(
  variant: VariantStyle<V>
) {
  return StyleSheet.create<VariantStyle<V>>(variant)
}
