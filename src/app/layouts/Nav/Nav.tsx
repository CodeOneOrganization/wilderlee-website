'use client'
import styles from "./Nav.module.css";

import Logo from "@/common/components/Logo";

import Overlay from "@/app/layouts/Nav/Overlay";
import Button from "@/app/layouts/Nav/Button";
import useLenisScroll from "@/common/hooks/useLenisScroll";

export default function Nav() {

   const lenis = useLenisScroll()

   const backToTop = () => {
    lenis?.current.scrollTo("#hero", {
      duration: 1,
    })
  }

  return (
    <nav className={`${styles.nav} container`}>
      <div className="logo fadeIn" onClick={backToTop}>
        <Logo className={styles.logo} />
      </div>
      <Button/>
      <Overlay />
    </nav>
  );
}
