"use client";

import Arrow from "@/common/components/Arrow";
import Logo from "@/common/components/Logo";

import styles from "./Nav.module.css";

import { useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter();

  const backToHome = () => router.push("/");

  return (
    <nav className={`${styles.nav} row container`}>
      <Logo className={styles.logo} fill="var(--color-white)" />
      <button className={styles.backHome} onClick={backToHome}>
        <Arrow className={styles.arrow} />
      </button>
    </nav>
  );
}
