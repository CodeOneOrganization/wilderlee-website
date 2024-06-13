"use client"

// import useIsomorphicEffect from "@/common/hooks/useIsomorphicEffect";
<<<<<<< HEAD
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
=======
// import Preloader from "./layouts/Preloader/Preloader";

import useLenisScroll from "@/common/hooks/useLenisScroll";
// import { useEffect } from "react";

interface Props extends React.PropsWithChildren { }
export default function Template({ children }: Props) {

  return (
    <>
      {/* <Preloader /> */}
>>>>>>> 1053f84aea8413c5342dd51f9a7a248a99506b59
      {children}
    </>
  )
}