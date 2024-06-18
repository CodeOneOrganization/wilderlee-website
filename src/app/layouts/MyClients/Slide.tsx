import useIsomorphicEffect from "@/common/hooks/useIsomorphicEffect"

import DragScroll from "./DragScroll"

import { useRef } from "react"


interface Props extends React.PropsWithChildren { }
export default function Slide({ children }: Props) {
  const _requestAnimationId = useRef<number | null>()

  useIsomorphicEffect(() => {
    const scroll = new DragScroll({
      wrap: "[data-slide-wrapper]",
      bar: "[data-slide-bar]",
      element: "[data-slide-element]",
      items: "[data-slide-item]"
    })

    function raf() {
      scroll.raf()
      requestAnimationFrame(raf)
    }

    _requestAnimationId.current = requestAnimationFrame(raf)

    // const _cleanRequestAnimationFrameId = _requestAnimationId

    // return () => {
    //   cancelAnimationFrame(_cleanRequestAnimationFrameId.current!)
    //   _requestAnimationId.current = null
    // }
  }, [])

  return children
}