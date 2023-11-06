import { ImageStyle, TextStyle, ViewStyle } from "react-native"

export type Style = ViewStyle & TextStyle & ImageStyle
export type StyleProps = keyof Style

export type VariantStlye<P extends string> = Record<P, Style>
export type Variants<V extends string, P extends string> = Record<
  V,
  VariantStlye<P>
>
export type PartialVariants<V extends string, P extends string> = Partial<
  Variants<V, P>
>

type SelectedProp<V extends string, P extends string> = {
  variant: V
  prop: P
  style: StyleProps
}

export type VariantState<V extends string, P extends string> = {
  variants: Variants<V, P>
  defaultStyle: VariantStlye<P> | null
  appliedVariants: PartialVariants<V, P> | null
  selectedProp: Partial<SelectedProp<V, P>>
}
