import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native"

type Style = ViewStyle | TextStyle | ImageStyle
type StyleProp = keyof Style
export type VariantStyle<V extends string> = Record<V, Style>
type PartialVariant<V extends string> = Partial<VariantStyle<V>>

type Variant<V extends string> = {
  styles: VariantStyle<V>
  variants: PartialVariant<V>
  clear: () => void
  add: (variants: V[]) => void
  get: (variant: V) => Style | undefined
  set: (variant: V) => void
  setProp: (variant: V, prop: StyleProp, value: Style[StyleProp]) => void
  remove: (variants: V[]) => void
  merge: () => Style
}

function createVariant<V extends string>(
  styles: VariantStyle<V>,
  defaultStyle?: V
) {
  const variant: Variant<V> = {
    styles,
    variants: {},
    clear() {
      this.variants = {}
      if (defaultStyle) {
        this.add([defaultStyle])
      }
    },
    add(variants) {
      for (let variant of variants) {
        if (!this.get(variant)) {
          this.variants = {
            ...this.variants,
            [variant]: this.styles[variant],
          }
        }
      }
    },
    set(variant) {
      this.clear()
      this.add([variant])
    },
    setProp(variant, prop, value) {
      const style = this.get(variant)
      if (style) {
        this.styles[variant]
      }
    },
    remove(variants) {
      for (let variant of variants) {
        if (this.get(variant)) {
          delete this.styles[variant]
        }
      }
    },
    merge() {
      let mergedStyle: ViewStyle = {}
      for (let key in this.styles) {
        mergedStyle = { ...mergedStyle, ...this.styles[key] }
      }
      return mergedStyle
    },
    get(variant) {
      return this.variants[variant]
    },
  }

  if (defaultStyle) {
    variant.add([defaultStyle])
  }

  return variant
}

export default createVariant
