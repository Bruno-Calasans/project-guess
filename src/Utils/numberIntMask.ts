export default function numberIntMask(text: string) {
  return text.replace(/[^0-9]/gi, "")
}
