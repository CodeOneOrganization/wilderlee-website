"use client"
import gsap from "gsap";
import styles from "../Nav.module.css";
interface AnimationClass {
  className: string;
}

export function arrowHover({ className }: AnimationClass) {
  gsap.to(className, {
    opacity: 1,
    x: "0%",
    duration: 0.5,
    ease: "power3.out",
  });
}
export function arrowHoverOut({ className }: AnimationClass) {
  gsap.to(className, {
    opacity: 0,
    x: "-100%",
    duration: 0.5,
  });
}
