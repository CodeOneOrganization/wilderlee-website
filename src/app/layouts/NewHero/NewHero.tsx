"use client";

import styles from "./Hero.module.css";

import { rotateHover, rotateHoverOut } from "@/common/animations/RotateHover";
import useIsomorphicEffect from "@/common/hooks/useIsomorphicEffect";
import { TextAnimationHero } from "@/app/layouts/NewHero/animations/TitleAnimationHero";

export default function NewHero() {
  useIsomorphicEffect(() => {
    TextAnimationHero();
  });
  return (
    <section className={`${styles.hero} fullHeight`}>
      <h1 className={styles.title}>
        <span className={styles.title_span}>WilderLee</span>
      </h1>
      <h4 className={styles.subTitle}>
        <span className={styles.subTitle_span}>Personal <b className="blue">Trainer</b></span>
      </h4>

    </section>
  );
}
