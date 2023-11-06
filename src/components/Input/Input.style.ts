import type { Variants } from "../../hooks/useVariant/useVariant.type"

export type InputVariants = "default" | "focus" | "blur"
export type InputVariantProps = "container" | "input"

export const inputVariants: Variants<InputVariants, InputVariantProps> = {
  default: {
    input: {
      padding: 5,
      color: "blue",
      fontWeight: "bold",
      backgroundColor: "rgba(0,0,0,0.05)",
    },
    container: {
      elevation: 1,
      shadowColor: "black",
      shadowRadius: 2,
      shadowOpacity: 0.5,
      shadowOffset: {
        width: 2,
        height: 2,
      },
    },
  },
  focus: {
    input: {
      borderBottomWidth: 2,
      borderBottomColor: "orange",
    },
    container: {},
  },
  blur: {
    input: {
      borderBottomWidth: 0,
      borderBottomColor: "transparent",
    },
    container: {},
  },
}
