interface Props extends React.SVGAttributes<SVGSVGElement>{}
export default function Arrow({fill, ...props}: Props) {
  return (
    <svg
      // width="44"
      // height="38"
      viewBox="0 0 44 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.75 7L36.5 19L23.75 31"
        stroke={fill}
        strokeWidth="9.5325"
        strokeLinecap="square"
      />
      <path
        d="M5 19L33.125 19"
        stroke={fill}
        strokeWidth="9.5325"
        strokeLinecap="square"
      />
    </svg>
  );
}
