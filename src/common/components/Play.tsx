interface Props extends React.SVGAttributes<SVGSVGElement> { }

export default function Play({ ...props }: Props) {
  return (
    <svg width="44" height="51" viewBox="0 0 44 51" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M14 9.5L33.5 25.75L14 42" stroke="#00BAF7" stroke-width="12.71" stroke-linecap="square" />
      <path d="M7 44.5L7 7" stroke="#00BAF7" stroke-width="12.71" stroke-linecap="square" />
      <path d="M12.9607 37.1755L16.557 25.1668" stroke="#00BAF7" stroke-width="15.7143" stroke-linecap="square" />
    </svg>
  )
}