"use client"

// import useIsomorphicEffect from "@/common/hooks/useIsomorphicEffect";
// import Preloader from "./layouts/Preloader/Preloader";

import useLenisScroll from "@/common/hooks/useLenisScroll";
// import { useEffect } from "react";

interface Props extends React.PropsWithChildren { }
export default function Template({ children }: Props) {

  return (
    <>
      {/* <Preloader /> */}
      {children}
    </>
  )
}