"use client"

import styles from "./TrainYourMind.module.css"
import PlayIcon from "@/common/components/Play"
import Arrow from "@/common/components/Arrow"
import OnView from "./OnView"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function TrainYourMind() {
  
  const goToPlans = () => {
    
  }

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

      <a href="https://bit.ly/caluladorawiderlee" target="_blank">
      <h1 className={styles.call} onClick={goToPlans}>
      <b className={`${styles.inherit} blue`}> CALCULADORA </b> DE <br />CALORIAS DIÁRIAS
        <div className={styles.overflowBox}>
          <Arrow className={styles.arrow} fill="var(--color-white)" />
          <Arrow className={`${styles.arrow} ${styles.over}`} fill="var(--color-white)" />
        </div>
      </h1>
      </a>
    </section>
  )
}