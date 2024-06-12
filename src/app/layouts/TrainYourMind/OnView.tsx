import useIsomorphicEffect from "@/common/hooks/useIsomorphicEffect"

import GSAP from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import styles from "./TrainYourMind.module.css"

interface Props extends React.PropsWithChildren {}
export default function OnView({children}: Props) {
  useIsomorphicEffect(() => {
    const videoRef = document.querySelector("[data-video-content]") as HTMLVideoElement

    GSAP.registerPlugin(ScrollTrigger)

    let ctx = GSAP.context((_ctx) => {
      const timeline = GSAP.timeline()

      _ctx.add("onView", () => {
        timeline.to(`.${styles.play}`, {
          opacity: 0,
          ease: "power3.out",
          duration: 0.8
        })

        videoRef.play()
      })

      _ctx.add("onFar", () => {
        timeline.to(`.${styles.play}`, {
          opacity: 1,
          ease: "power3.out",
          duration: 0.8
        })

        videoRef.pause()
      })

      ScrollTrigger.create({
        trigger: `.${styles.wrapper}`,
        start: "0 50%",
        end: "100% 50%",
        onEnter: () => { _ctx.onView() },
        onEnterBack: () => { _ctx.onView() },
        onLeave: () => { _ctx.onFar() },
        onLeaveBack: () => { _ctx.onFar() },
        markers: true
      })
    })

    return () => ctx.revert()
  }, [])

  return children
}