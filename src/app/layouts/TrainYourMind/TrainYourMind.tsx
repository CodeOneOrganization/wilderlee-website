"use client"

import styles from "./TrainYourMind.module.css"
import PlayIcon from "@/common/components/Play"
import Arrow from "@/common/components/Arrow"
import useLenisScroll from "@/common/hooks/useLenisScroll";
import OnView from "./OnView"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function TrainYourMind() {
  
  const lenis = useLenisScroll()
  const goToPlans = () => lenis?.current.scrollTo("#plans", { duration: 1 })

  const animation = () => {
    gsap.to(`.${styles.video}`,{
      y: "0%",
      ease: "power2.inOut",
      duration: .5
    })
  }

  
  useEffect(()=>{

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: `.${styles.trainYourMind}`,
      start: "0% 50%",
      end: "50% 100%",
      onEnter: () => animation()
    })

    return () => {
      ScrollTrigger.killAll()
      gsap.killTweensOf(`.${styles.video}`)
    }

  }, [])


  return (
    <section className={`${styles.trainYourMind} container`} id="introduction">

      <div className={styles.wrapper} >
        <OnView>
          <video
            data-video-content
            autoPlay
            loop
            className={styles.video}
            src="videos/apresentation.mp4"
            typeof="video/mp4"
          />
          <PlayIcon className={styles.play} />
        </OnView>
      </div>

      <h1 className={styles.call} onClick={goToPlans}>
        Quero Mudar Minha<br /><b className={`${styles.inherit} blue`}>Vida</b> Agora
        <div className={styles.overflowBox}>
          <Arrow className={styles.arrow} fill="var(--color-white)" />
          <Arrow className={`${styles.arrow} ${styles.over}`} fill="var(--color-white)" />
        </div>
      </h1>
    </section>
  )
}