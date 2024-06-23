"use client";

import Arrow from "@/common/components/Arrow";

import styles from "./Nav.module.css";

// import { arrowHover, arrowHoverOut } from "@/app/layouts/Nav/Animations/Hover";

import { useRouter } from "next/navigation"


export default function Menu() {

  const router = useRouter()

  const goToContact = () => router.push("/contact")


  return (
    <div className={styles.menu}>
      <menu>
        <li
          className={styles.sitemap}
          onClick={goToContact}
        >
          {" "}
          <span className={styles.innerText}>Contato</span>
          <Arrow className={styles.arrow} fill="var(--color-white)"/>
        </li>
        <li className={styles.sitemap}>
          <span className={styles.innerText}>Sobre</span>
          <Arrow className={styles.arrow} />
        </li>
        <li className={styles.sitemap} >
          <span className={styles.innerText}>Planos</span>
          <Arrow className={styles.arrow} />
        </li>
      </menu>
    </div>
  );
}
