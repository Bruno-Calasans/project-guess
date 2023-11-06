import { useState, useEffect } from "react"
import {
  Variants,
  VariantState,
  VariantStlye,
  PartialVariants,
  Style,
} from "./useVariant.type"

function useVariant<V extends string, P extends string>(
  variants: Variants<V, P>,
  defaultStyleName?: V
) {
  const [state, setState] = useState<VariantState<V, P>>({
    variants,
    defaultStyle: null,
    appliedVariants: null,
    selectedProp: {},
  })

  const apply = (name: V) => {
    const variant = get(name)
    setState((curr) => ({
      ...curr,
      appliedVariants: { ...curr.appliedVariants, [name]: variant },
    }))
  }

  const remove = (name: V) => {
    const appliedVariants = state.appliedVariants
    if (appliedVariants && appliedVariants[name]) {
      delete appliedVariants[name]
    }
    setState((curr) => ({
      ...curr,
      appliedVariants: appliedVariants,
    }))
  }

  const set = (name: V) => {
    reset()
    apply(name)
  }

  const get = (name: V) => {
    return state.variants[name] as VariantStlye<P>
  }

  const setProp = (name: V, prop: P, style: Style) => {
    const variant = get(name)
    variant[prop] = style
    setState((curr) => ({
      ...curr,
      appliedVariant: { ...curr.appliedVariants, [name]: variant },
    }))
  }

  const clear = () => {
    setState((curr) => ({
      ...curr,
      appliedVariant: null,
      defaultVariant: null,
    }))
  }

  const reset = () => {
    if (defaultStyleName) {
      const defaultStyle = get(defaultStyleName)
      const newApliedVariants = {
        [defaultStyleName]: defaultStyle,
      } as PartialVariants<V, P>

      setState((curr) => ({
        ...curr,
        defaultStyle,
        appliedVariants: newApliedVariants,
      }))
    } else {
      clear()
    }
  }

  const setDefault = (name: V) => {
    const defaultStyle = get(name)
    setState((curr) => ({
      ...curr,
      defaultStyle,
    }))
  }

  const getStyle = () => {
    const appliedVariants = state.appliedVariants
    const defaultStyle = state.defaultStyle

    let style: VariantStlye<P> = {} as any

    if (!appliedVariants) {
      return
    }

    if (defaultStyle) {
      style = { ...defaultStyle }
    }

    for (let variantName in appliedVariants) {
      const variant = appliedVariants[variantName] as VariantStlye<P>

      for (let propName in variant) {
        const currentStyle = style[propName]
        const variantStyle = variant[propName]
        style = { ...style, [propName]: { ...currentStyle, ...variantStyle } }
      }
    }

    return style
  }

  const selectProp = (variant: V, prop: P) => {
    setState((curr) => ({
      ...curr,
      selectedProp: {
        prop,
        variant,
      },
    }))
  }

  useEffect(() => {
    if (defaultStyleName) {
      reset()
    }
  }, [defaultStyleName])

  return {
    ...state,
    get,
    set,
    apply,
    remove,
    setProp,
    setDefault,
    getStyle,
    clear,
  }
}
export default useVariant
