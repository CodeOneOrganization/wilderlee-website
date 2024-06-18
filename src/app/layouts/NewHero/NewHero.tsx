"use client";

import styles from "./Hero.module.css";

// import { rotateHover, rotateHoverOut } from "@/common/animations/RotateHover";
import useIsomorphicEffect from "@/common/hooks/useIsomorphicEffect";
import { TextAnimationHero } from "@/app/layouts/NewHero/animations/TitleAnimationHero";

export default function NewHero() {
  // useIsomorphicEffect(() => {
  //   TextAnimationHero();
  // });
  return (
    <section className={`${styles.hero} fullHeight`}>
      <div className={styles.overlay}/>
      <video className={styles.video} autoPlay loop muted src="/videos/SonyVideo2.webm" />
      <h1 className={styles.title} data-animate="slide-text">
        Wilderlee
      </h1>
      <h4 className={styles.subTitle} data-animate="fade-in">
        <span className={styles.subTitle_span}>Personal <b className="blue">Trainer</b></span>
      </h4>
    </section>
  );
}
