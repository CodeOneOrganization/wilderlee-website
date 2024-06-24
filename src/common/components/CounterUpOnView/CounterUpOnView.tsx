import useIsomorphicEffect from "@/common/hooks/useIsomorphicEffect"

import GSAP from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"


interface Props extends React.PropsWithChildren {
  target: string
}
export default function CounterUpOnView({ children, target }: Props) {
  useIsomorphicEffect(() => {
    GSAP.registerPlugin(ScrollTrigger)
    const _element = document.querySelector<HTMLElement>(`[data-animation='counter']`)!
    const targetValue = Number(_element.dataset.counterTarget)

    const _ctx = GSAP.context((ctx) => {
      ctx.add("onView", () => {
        GSAP.to(_element, {
          innerText: targetValue,
          duration: 1.2,
          snap: {
            innerText: 1
          }
        })
      })
    })

    const _scrollTrigger = ScrollTrigger.create({
      trigger: `.${target}`,
      once: true,
      start: "0% 50%",
      end: "100% 50%",
      onEnter: () => { _ctx.onView() }
    })

    return () => {
      _scrollTrigger.kill()
      _ctx.revert()
    }
  }, [])
  return children
}