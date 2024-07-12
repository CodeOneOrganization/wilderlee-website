"use client";

import GSAP from "gsap";

import styles from "./Footer.module.css";
import _preloaderStyles from "@/app/layouts/Preloader/Preloader.module.css"

import Logo from "@/common/components/Logo";

import Arrow from "@/common/components/Arrow";

import { useRef } from "react";
import useLenisScroll from "@/common/hooks/useLenisScroll";
import { useRouter } from "next/navigation";

export default function Footer() {
  const timeline = useRef(GSAP.timeline())
  const lenis = useLenisScroll()
  const router = useRouter()

  const goToContact = () => handleToPageTransition({ to: "/contact" })

  const goToAbout = () => lenis?.current.scrollTo("#introduction")
  const goToPlans = () => lenis?.current.scrollTo("#plans")

  const goToInstagram = () => {
    window.open("https://www.instagram.com/wilderlee.personal/")
  }

  function pageTransitionIn({ onComplete }: { onComplete: () => void }) {
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
      onComplete
    })

  }

  function handleToPageTransition({ to }: { to: string }) {
    pageTransitionIn({
      onComplete: () => {
        lenis?.current.stop()
        router.push(to)
      }
    })
  }

  return (
    <footer className={`${styles.footer} container row`}>
      <div className={styles.top}>
        <article className={styles.road}>
          <h3 className={styles.title}>Contato</h3>
          <ul className={styles.info}>
            <li className={styles.item}>
              named@gmail.com
              <Arrow className={styles.arrow} fill="var(--color-black)" />
            </li>
            
            <li className={`${styles.item} small`} onClick={goToInstagram}>
              @wilderlee.personal
              <Arrow className={styles.arrow} fill="var(--color-black)" />
            </li>
          </ul>
        </article>
        <article className={styles.road}>
          <h3 className={styles.title}>Sitemap</h3>
          <ul className={styles.info}>
            <li className={styles.item} onClick={goToContact}>
              Contato
              <Arrow className={styles.arrow} fill="var(--color-black)" />
            </li>
            
            <li className={styles.item} onClick={goToPlans}>
              Planos
              <Arrow className={styles.arrow} fill="var(--color-black)" />
            </li>
           
            <li className={styles.item} onClick={goToAbout}>
              Sobre
              <Arrow className={styles.arrow} fill="var(--color-black)" />
            </li>
          </ul>
        </article>
        <article className={styles.road}>
          <button onClick={goToContact} className={styles.button_call}>Fale diretamente comigo</button>
          <Logo className={styles.logo} fill="var(--color-blue, #fff)" />
        </article>
      </div>
      <div className={styles.bottom}>
        <div className={styles.socialMedias}>
          <p className="tiny" onClick={goToInstagram}>Instagram</p>
          <p className="tiny">Facebook</p>
        </div>
        <p className="tiny">Site criado pela SynergyCode</p>
      </div>
    </footer>
  );
}
