import useIsomorphicEffect from "@/common/hooks/useIsomorphicEffect"

import DragScroll from "./DragScroll"

import { useRef } from "react"


interface Props extends React.PropsWithChildren {
  trigger: string
}
export default function Slide({ trigger = "", children }: Props) {
  const _requestAnimationId = useRef<number | null>()

  useIsomorphicEffect(() => {
    const scroll = new DragScroll({
      wrap: `.${trigger} [data-slide-wrapper]`,
      bar: `.${trigger} [data-slide-bar]`,
      element: `.${trigger}[data-slide-element]`,
      items: `.${trigger} [data-slide-item]`
    })

    function raf() {
      requestAnimationFrame(raf)
      scroll.raf()
    }

    _requestAnimationId.current = requestAnimationFrame(raf)

    const _cleanRequestAnimationFrameId = _requestAnimationId

    return () => {
      cancelAnimationFrame(_cleanRequestAnimationFrameId.current!)
      _requestAnimationId.current = null
    }
  }, [_requestAnimationId])

  return children
}