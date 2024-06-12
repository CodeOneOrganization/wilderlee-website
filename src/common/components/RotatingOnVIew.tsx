"use client"

import useIsomorphicEffect from "../hooks/useIsomorphicEffect"
import useLenisScroll from "@/common/hooks/useLenisScroll"

import GSAP from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

interface Props extends React.PropsWithChildren { }
export default function RotatingOnView({ children }: Props) {
  const lenis = useLenisScroll()

  useIsomorphicEffect(() => {
    GSAP.registerPlugin(ScrollTrigger)

    function _onScroll() {
      
    }

    // lenis?.current.on("scroll", (e) => {
    //   e.5 
    // })

    return () => lenis?.current.off("scroll", ScrollTrigger.update)

  }, [lenis])
  return children
}