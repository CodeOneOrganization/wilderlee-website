"use client";

import styles from "./Hero.module.css";

export default function NewHero() {
  return (
    <section className={`${styles.hero}`} id="hero">
      <div className={styles.overlay}/>
      <video className={styles.video} autoPlay loop muted src="/videos/WilderleeVideo.mp4" />
      <h1 className={styles.title} data-animate="slide-text">
        Wilderlee
      </h1>
      <h4 className={styles.subTitle} data-animate="fade-in">
        <span className={styles.subTitle_span}>Personal <b className="blue">Trainer</b></span>
      </h4>
    </section>
  );
}
