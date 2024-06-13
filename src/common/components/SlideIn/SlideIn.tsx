"use client";

import useIsomorphicEffect from "../../hooks/useIsomorphicEffect"

import GSAP from "gsap"

import styles from "./SlideIn.module.css"

interface Props extends React.HTMLAttributes<HTMLDivElement> {}
export default function SlideIn({children, ...props}: Props) {
  

  useIsomorphicEffect(() => {
    const _element = document.querySelector("[data-animate='slide-in']")     
    const _targetElement = document.querySelector("[data-animate-actor]")  as HTMLElement

    function onHover() {
      const timeline = GSAP.timeline()

      timeline.set()
    }

    _targetElement?.addEventListener("mouseover", onHover)

    return () => {
      _targetElement.removeEventListener("mouseover", onHover)
    }
  }, [children])

  return (
    <div className={styles.slideIn} {...props}>
      {children}
    </div>
  )
}