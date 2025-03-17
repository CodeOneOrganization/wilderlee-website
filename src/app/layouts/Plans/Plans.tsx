"use client";

import styles from "./Plans.module.css";
import PlanCard from "./Card";

import mockedPlans from "./mockedPlans"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function Plans() {

  const animation = () => {
    gsap.to(`.${styles.card}`,{
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "power2.inOut",
      stagger: .1
    })
  }

  useEffect(()=>{

    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.create({
      trigger: `.${styles.plans}`,
      start: "-25% 50%",
      end: "30% 100%",
      onEnter: () => animation()
    })

    return () => {
      ScrollTrigger.killAll()
      gsap.killTweensOf(`.${styles.card}`)
    }

  },[])

  return (
    <section className={`${styles.plans} col`} id="plans">
      <div className={`${styles.cards} container row`}>
        {mockedPlans.map((x, index) =>
          <div className={styles.card}>
            <PlanCard key={`CardAAAA_${index}`} {...x} />
          </div>
        )}
      </div>
    </section >
  );
}
