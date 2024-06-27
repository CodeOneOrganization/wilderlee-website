"use client";

import Arrow from "@/common/components/Arrow";
import Logo from "@/common/components/Logo";

import GSAP from "gsap"

import styles from "./Nav.module.css";

import { useRouter } from "next/navigation";
import { useRef } from "react";

import _preloaderStyles from "@/app/layouts/Preloader/Preloader.module.css"
import useLenisScroll from "@/common/hooks/useLenisScroll";

export default function Nav() {
  const router = useRouter();
  const lenis = useLenisScroll()
  const timeline = useRef(GSAP.timeline())

  const backToHome = () => pageTransitionIn("/")

  function pageTransitionIn(route: string) {
    document.documentElement.style.cursor = "wait"
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

  return (
    <nav className={`${styles.nav} row container`}>
      <Logo className={styles.logo} fill="var(--color-white)" />
      <button className={styles.backHome} onClick={backToHome}>
        <Arrow className={styles.arrow} />
      </button>
    </nav>
  );
}
