"use client"

import styles from "./TrainYourMind.module.css"

import PlayIcon from "@/common/components/Play"
import OnView from "./OnView"
import Arrow from "@/common/components/Arrow"

export default function TrainYourMind() {
  return (
    <section className={`${styles.trainYourMind} container`}>
      <div className={styles.wrapper}>
        <OnView>
          <video muted data-video-content loop className={styles.video} src="videos/SonyVideo.mp4" autoPlay typeof="video/mp4" />
          <PlayIcon className={styles.play} />
        </OnView>
      </div>
      <h1 className={styles.call}>
        Quero Mudar Minha<br /><b className={`${styles.inherit} blue`}>Vida</b> Agora
        <Arrow className={styles.arrow} />
      </h1>
    </section>
  )
}