import { StyleSheet } from "react-native"
import { VariantStlye, Variants } from "../../hooks/useVariant/useVariant.type"

export type ButtonVariants = "default" | "filled" | "outline" | "subtle"
export type ButtonVariantProps = "container" | "text"

const defaultVariant: VariantStlye<ButtonVariantProps> = {
  container: {
    padding: 5,
    opacity: 1,
    borderRadius: 5,
  },
  text: {},
}

const outlineVariant: VariantStlye<ButtonVariantProps> = {
  container: {
    backgroundColor: "transparent",
    borderColor: "black",
    borderWidth: 2,
  },
  text: {
    color: "black",
  },
}

const filledVariant: VariantStlye<ButtonVariantProps> = {
  container: {
    backgroundColor: "black",
  },
  text: {
    color: "white",
  },
}

const subtleVariant: VariantStlye<ButtonVariantProps> = {
  container: {
    backgroundColor: "rgba(0,0,0,0.08)",
  },
  text: {
    color: "black",
  },
}

export const btnVariants = {
  default: defaultVariant,
  outline: outlineVariant,
  filled: filledVariant,
  subtle: subtleVariant,
}
