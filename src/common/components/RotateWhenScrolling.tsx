"use client"

import GSAP from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import useIsomorphicEffect from "../hooks/useIsomorphicEffect"
import useLenisScroll from "../hooks/useLenisScroll"

interface Props extends React.PropsWithChildren {
  rotate?: number
}

export default function RotatingOnScroll({ children, rotate = 180 }: Props) {
  const lenis = useLenisScroll()

  useIsomorphicEffect(() => {
    GSAP.registerPlugin(ScrollTrigger)

    const _element = document.querySelector("[data-rotate]") as HTMLElement

    const _scrollTrigger = ScrollTrigger.create({
      onUpdate: (e) => {
        const rpz = GSAP.getProperty(_element, "data-rotate-previous") || 0
        const p = e.progress

        const rnz = GSAP.utils.interpolate(rpz, rotate * p, 0.5)


        _element.style.transform = `rotate(${rnz}deg)`
        _element.setAttribute("data-rotate-previous", `${rnz}`)
      }
    })
    return () => _scrollTrigger.kill()
  }, [lenis])

  return children
}
