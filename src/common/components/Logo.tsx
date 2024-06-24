interface Props extends React.SVGAttributes<SVGSVGElement>{
  fill?: string 
}
export default function Logo({fill = "white", ...props}: Props) {
  return (
    <svg
      viewBox="0 0 49 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_19_324"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="49"
        height="50"
      >
        <rect
          x="0.05"
          y="0.05"
          width="48.9"
          height="49"
          rx="0.45"
          fill={fill}
          stroke="white"
          strokeWidth="0.1"
        />
      </mask>
      <g mask="url(#mask0_19_324)">
        <path
          d="M6 3.00003V3.12328e-05H7.15256e-07V3.00003H6ZM3 32.65H7.15256e-07V39.8927L5.12132 34.7714L3 32.65ZM21.9 13.75L24.0213 15.8714L21.9 13.75ZM21.9 13.75L19.7787 15.8714L21.9 13.75ZM7.15256e-07 3.00003V32.65H6V3.00003H7.15256e-07ZM5.12132 34.7714L24.0213 15.8714L19.7787 11.6287L0.87868 30.5287L5.12132 34.7714ZM19.7787 15.8714L34.0287 30.1214L38.2713 25.8787L24.0213 11.6287L19.7787 15.8714ZM24.0213 15.8714C22.7261 17.1666 20.8226 16.9153 19.7787 15.8714L24.0213 11.6287C22.9774 10.5848 21.0739 10.3335 19.7787 11.6287L24.0213 15.8714Z"
          fill={fill}
        />
        <path
          d="M45.75 3.25003V45.7H41.8L21.95 25.85C15.1744 32.6256 5.5256 42.2744 -1.25 49.05"
          stroke={fill}
          strokeWidth="6.5"
          strokeLinecap="square"
        />
      </g>
    </svg>
  );
}
