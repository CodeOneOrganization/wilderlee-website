// import { useEffect } from "react"
import styles from "./TrainYourMind.module.css"

import PlayIcon from "@/common/components/Play"

export default function TrainYourMind() {
  // useEffect
  return (
    <section className={`${styles.trainYourMind} container`}>
      <div className={`${styles.top} row`}>
        <h3 className={styles.title}>Trene sua mente</h3>
        <div className={styles.divider}>
          <hr className={styles.line}/>
          <p className={styles.innerText}>Foco no treino</p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <video muted className={styles.video} src="videos/SonyVideo.mp4" autoPlay  type="video/mp4" />
        <PlayIcon className={styles.play} />
      </div>
    </section>
  )
}