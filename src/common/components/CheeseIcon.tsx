interface Props extends React.SVGAttributes<SVGSVGElement> { }
export default function CheeseIcon({ ...props }: Props) {
  return (
    <svg viewBox="0 0 38 33" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0 4H6.75" stroke="white" stroke-width="7.1475" />
      <path d="M10.5 4H37.5" stroke="white" stroke-width="7.1475" />
      <path d="M0 16.375H6.75" stroke="white" stroke-width="7.1475" />
      <path d="M10.5 16.375H37.5" stroke="white" stroke-width="7.1475" />
      <path d="M0 28.75H6.75" stroke="white" stroke-width="7.1475" />
      <path d="M10.5 28.75H37.5" stroke="white" stroke-width="7.1475" />
    </svg>
  )
}