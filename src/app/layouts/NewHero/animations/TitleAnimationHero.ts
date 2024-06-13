import gsap from "gsap";
import styles from "../Hero.module.css"
export function TextAnimationHero(){
    gsap.to(`.${styles.title_span}`,{
        y: 0,
        ease: "elastic.inOut(1,8)",
        duration: 2,
        delay: 2.5
    })
    gsap.to(`.${styles.subTitle_span}`,{
        y: 0,
        ease: "elastic.inOut(1,8)",
        duration: 2,
        delay: 2.55
    })
}