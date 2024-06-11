"use client"
import { useRef, createContext, MutableRefObject } from "react";

import Lenis from "lenis";

import useIsomorphicEffect from "@/common/hooks/useIsomorphicEffect";

export const LenisScrollContext = createContext<MutableRefObject<Lenis> | null>(null)

interface Props extends React.PropsWithChildren { }
export default function LenisScrollProvider({ children }: Props) {
  const _lenis = useRef<Lenis>(null!)

  useIsomorphicEffect(() => {
    console.log("isomorphic lenis scroll fired")
    const lenis = new Lenis({
      autoResize: true,
      easing: (t) => Math.pow(t, 5)

    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    _lenis.current = lenis

    requestAnimationFrame(raf)

    return () => {
      _lenis.current.destroy()
      lenis.destroy()
    }

  }, [])

  return (
    <LenisScrollContext.Provider value={_lenis}>
      {children}
    </LenisScrollContext.Provider>
  )
}