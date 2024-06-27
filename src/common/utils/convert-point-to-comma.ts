export default function convertPointToComma(str: string | number) {
  return String(str).replace(/\./g, ",")
}