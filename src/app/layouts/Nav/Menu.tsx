"use client";

import Arrow from "@/common/components/Arrow";

import GSAP from "gsap"

import styles from "./Nav.module.css";
import _preloaderStyles from "@/app/layouts/Preloader/Preloader.module.css"

import { useRouter } from "next/navigation"
import { useRef } from "react";
import useLenisScroll from "@/common/hooks/useLenisScroll";


export default function Menu() {
  const router = useRouter()
  const lenis = useLenisScroll()
  const timeline = useRef(GSAP.timeline())

  const goToContact = () => {
    handleToPageTransition()
  }
  const goToAboutMe = () => {
    lenis?.current.scrollTo("#introduction", {
      duration: 1,
      onComplete: () => {
      }
    })
  }

  function pageTransitionIn(route: string) {
    timeline.current.set(`.${_preloaderStyles.preloader}`, {
      visibility: "visible",
      height: "0dvh"
    })
    timeline.current.set(`.${_preloaderStyles.blackSpot}`, {
      height: "0dvh"
    })
    timeline.current.set(`.${_preloaderStyles.preloader} .fadeIn`, {
      opacity: 0
    })

    timeline.current.to(`.${_preloaderStyles.preloader}`, {
      height: "100dvh",
    })
    timeline.current.to(`.${_preloaderStyles.preloader} .fadeIn`, {
      delay: 0.5,
      stagger: 0.2,
      opacity: 1,
      duration: 0.6,
      onComplete: () => {
        lenis?.current.stop()
        router.push(route)
      }
    })

  }

  function handleToPageTransition() {
    pageTransitionIn("/contact")
  }


  return (
    <div className={styles.menu}>
      <div className={`${styles.top} ${styles.divisor}`}>
        <small className={`${styles.spreadText} tiny`}>Navegação</small>
        <hr className={styles.line} />
      </div>
      <menu>
        <li
          className={styles.sitemap}
          onClick={goToContact}
        >
          {" "}
          <span className={`${styles.innerText} ${styles.link}`}>Contato</span>
          <Arrow className={styles.arrow} fill="var(--color-white)" />
        </li>
        <li className={styles.sitemap} onClick={goToAboutMe}>
          <h6 className={`${styles.innerText} ${styles.link}`}>Sobre</h6>
          <Arrow className={styles.arrow} />
        </li>
        <li className={styles.sitemap} >
          <span className={`${styles.innerText} ${styles.link}`}>Planos</span>
          <Arrow className={styles.arrow} />
        </li>
      </menu>
    </div>
  );
}
