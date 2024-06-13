"use client"

import styles from "./TrainYourMind.module.css"

import PlayIcon from "@/common/components/Play"
import OnView from "./OnView"

export default function TrainYourMind() {
  return (
    <section className={`${styles.trainYourMind} container`}>
      <div className={`${styles.top} row`}>
        <h3 className={styles.title}>Trene sua mente</h3>
        <div className={styles.divider}>
          <hr className={styles.line} />
          <p className={styles.innerText}>Foco no treino</p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <OnView>
          <video muted data-video-content loop className={styles.video} src="videos/SonyVideo.mp4" autoPlay typeof="video/mp4" />
          <PlayIcon className={styles.play} />
        </OnView>
      </div>
    </section>
  )
}