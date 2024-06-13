"use client"

// import useIsomorphicEffect from "@/common/hooks/useIsomorphicEffect";
import Preloader from "./layouts/Preloader/Preloader";

import useLenisScroll from "@/common/hooks/useLenisScroll";
import { useEffect } from "react";

interface Props extends React.PropsWithChildren { }
export default function Template({ children }: Props) {
  const lenis = useLenisScroll()

  useEffect(() => {
    // if(!lenis?.current) return
    console.log("lenis scroll on template.tsx", lenis?.current)
    
    // lenis?.current.stop()
    console.log("stop to scroll")
  }, [lenis])

  return (
    <>
      <Preloader />
      {children}
    </>
  )
}