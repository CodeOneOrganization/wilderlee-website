
interface Props extends React.SVGAttributes<SVGSVGElement>{}
export default function Asterisc({...props}: Props) {
  return (
    <svg
      width="101"
      height="100"
      viewBox="0 0 101 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="37.7532"
        y="6.10352e-05"
        width="25.4237"
        height="100"
        fill="#00BAF7"
      />
      <rect
        x="0.465149"
        y="62.7119"
        width="25.4237"
        height="100"
        transform="rotate(-90 0.465149 62.7119)"
        fill="#00BAF7"
      />
      <rect
        x="76.8318"
        y="5.6561"
        width="25.4237"
        height="100"
        transform="rotate(45 76.8318 5.6561)"
        fill="#00BAF7"
      />
      <rect
        width="25.4237"
        height="100"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 24.0986 5.6561)"
        fill="#00BAF7"
      />
    </svg>
  );
}
