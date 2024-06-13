import gsap from "gsap";

interface Props{
    className: string
}

export function rotateHover({className}: Props) {
    gsap.to(className, {
      rotate: 40,
      duration: 1,
    });
  }
  export function rotateHoverOut({className}: Props) {
    gsap.to(className, {
      rotate: 0,
      duration: 1,
    });
  }