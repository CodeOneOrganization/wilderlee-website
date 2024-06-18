import gsap from "gsap";

import SplitType from "split-type";

import styles from "../Hero.module.css"

export function TextAnimationHero() {
    const _element = document.querySelector("[data-animate='slide-text']") as HTMLElement

    SplitType.create(_element, { types: "chars" })
    // const chars = gsap.utils.toArray(_element)
    const timeline = gsap.timeline()

    timeline.set(`.${styles.title}`, {
        overflow: "hidden"
    })
    timeline.set(`.${styles.title} .char`, {
        y: "100%",
        position: "relative",
        display: "inline-flex",
    })

    timeline.to(`.${styles.title} .char`, {
        y: "0%",
        stagger: 0.04,
        duration: 1.2,
        ease: "power3.out",
    })
    timeline.to(`.${styles.subTitle_span}`, {
        y: 0,
        ease: "elastic.inOut(1,8)",
        duration: 1,
    })
}