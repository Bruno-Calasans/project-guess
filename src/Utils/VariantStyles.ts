import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native"

type Style = ViewStyle | TextStyle | ImageStyle
type StyleProp = keyof Style
type Variant<V extends string> = Record<V, Style>
type PartialVariant<V extends string> = Partial<Variant<V>>

type StyleManager<V extends string> = {
  styles: Variant<V>
  variants: PartialVariant<V>
  clear: () => void
  add: (variants: V[]) => void
  get: (variant: V) => Style | undefined
  set: (variant: V) => void
  setProp: (variant: V, prop: StyleProp, value: Style[StyleProp]) => void
  remove: (variants: V[]) => void
  merge: () => Style
}

function VariantStyles<V extends string>(styles: Variant<V>, defaultStyle?: V) {
  const manager: StyleManager<V> = {
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
    manager.add([defaultStyle])
  }

  return manager
}

export default VariantStyles
