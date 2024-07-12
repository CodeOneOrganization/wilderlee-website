"use client"

import styles from "./TrainYourMind.module.css"

import PlayIcon from "@/common/components/Play"
import Arrow from "@/common/components/Arrow"
import useLenisScroll from "@/common/hooks/useLenisScroll";

import OnView from "./OnView"


export default function TrainYourMind() {

  const lenis = useLenisScroll()

  const goToPlans = () => lenis?.current.scrollTo("#plans", {duration: 1, easing: t => Math.pow(t, 5)})


  return (
    <section className={`${styles.trainYourMind} container`} id="introduction">
      <div className={styles.wrapper}>
        <OnView>
          <video
            muted
            data-video-content
            loop
            className={styles.video}
            src="videos/SonyVideo.mp4"
            autoPlay
            typeof="video/mp4"
          />
          <PlayIcon className={styles.play} />
        </OnView>
      </div>
      <h1 className={styles.call} onClick={goToPlans}>
        Quero Mudar Minha<br /><b className={`${styles.inherit} blue`}>Vida</b> Agora
        <Arrow className={styles.arrow} fill="var(--color-white)" />
      </h1>
    </section>
  )
}