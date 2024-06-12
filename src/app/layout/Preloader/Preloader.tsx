"use client"

import GSAP from "gsap"

import useIsomorphicEffect from "@/common/hooks/useIsomorphicEffect"

import styles from "./Preloader.module.css"

export default function Preloader() {
  useIsomorphicEffect(() => {
    const _ctx = GSAP.context(() => {
      const timeline = GSAP.timeline()

      timeline.set(`.${styles.preloader}`, {
        visibility: "visible"
      })
      timeline.set(`.${styles.blackSpot}`, {
        height: "0dvh"
      })
      timeline.set(`.${styles.preloader} .fadeIn`, {
        opacity: 0
      })

      timeline.to(`.${styles.preloader} .fadeIn`, {
        delay: 1,
        stagger: 0.75,
        ease: "power3.out",
        duration: 1,
        opacity: 1
      })
      timeline.to(`.${styles.preloader} .fadeIn`, {
        stagger: 0.2,
        opacity: 0,
        duration: 0.6,
        delay: 0.2
      })
      timeline.to(`.${styles.blackSpot}`, {
        height: "100dvh",
        duration: 0.8,
        ease: "power3.out",
      }, "+=0.750")
      timeline.to(`.${styles.preloader}`, {
        height: "0dvh" 
      }, "+=0.2")
    })

    return () => _ctx.revert()
  }, [])

  return (
    <div className={styles.preloader}>
      <svg className={`${styles.wChar}`} width="196" height="197" viewBox="0 0 196 197" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_145_73" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="196" height="197">
          <rect y="0.300049" width="196" height="196.4" rx="2" fill="#0F0F0F" />
        </mask>
        <g mask="url(#mask0_145_73)">
          <path className="fadeIn" d="M24 12.2986V0.298583H-9.53674e-07V12.2986H24ZM12 130.899H-9.53674e-07V159.869L20.4853 139.384L12 130.899ZM87.6 55.2986L96.0852 63.7839L87.6 55.2986ZM87.6 55.2986L79.1147 63.7839L87.6 55.2986ZM-9.53674e-07 12.2986V130.899H24V12.2986H-9.53674e-07ZM20.4853 139.384L96.0852 63.7839L79.1147 46.8133L3.51472 122.413L20.4853 139.384ZM79.1147 63.7839L136.115 120.784L153.085 103.813L96.0853 46.8133L79.1147 63.7839ZM96.0852 63.7839C90.9043 68.9649 83.2905 67.9597 79.1147 63.7839L96.0853 46.8133C91.9095 42.6375 84.2957 41.6324 79.1147 46.8133L96.0852 63.7839Z" fill="#0F0F0F" />
          <path className="fadeIn" d="M183.001 13.2991V183.099H167.201L87.8005 103.699C60.6981 130.801 22.1029 169.397 -4.99951 196.499" stroke="#0F0F0F" strokeWidth="26" strokeLinecap="square" />
        </g>
      </svg>
      <span className={`${styles.job} fadeIn`}>personal trainer</span>
      <div className={styles.blackSpot} />
    </div>
  )
}