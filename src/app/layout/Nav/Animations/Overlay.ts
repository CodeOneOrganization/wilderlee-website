import gsap from "gsap";
import styles from "../Nav.module.css";

export function Open(state: any) {
  gsap.set(`.${styles.asterisc}`, {
    top: "1.19vw",
    right: "var(--container-padding)",
  });

  gsap.set(`.${styles.menu}`, {
    display: "block",
  });

  gsap.to(`.${styles.asterisc}`, {
    top: "-13vw",
    rotate: 360,
    duration: 2,
    ease: "power3.out",
    attr: {
      width: window.innerHeight * 1.5,
      height: window.innerHeight * 1.5,
    },
  });
  gsap.to(`.${styles.asterisc}`, {
    right: "-29vw",
    duration: 1,
  });

  gsap.to(".spanMenu1", {
    y: 0,
    duration: 1,
    ease: "elastic.out(1,8)",
    delay: 1.3,
  });

  gsap.to(".spanMenu2", {
    y: 0,
    duration: 1,
    ease: "elastic.out(1,8)",
    delay: 1.4,
  });

  gsap.to(".spanMenu3", {
    y: 0,
    duration: 1,
    ease: "elastic.out(1,8)",
    delay: 1.5,

    onComplete: () => {
      state(true);
    },
  });
}

export function Close(state: any) {
  gsap.to(`.${styles.menu}`, {
    display: "none",
    delay: 0.4,
  });
  gsap.to(".spanMenu1", {
    y: "20vw",
    duration: 2,
    ease: "elastic.out(1,8)",
  });

  gsap.to(".spanMenu2", {
    y: "20vw",
    duration: 2,
    ease: "elastic.out(1,8)",
    delay: 0.1,
  });

  gsap.to(".spanMenu3", {
    y: "20vw",
    duration: 2,
    ease: "elastic.out(1,8)",
    delay: 0.2,
  });

  gsap.to(`.${styles.asterisc}`, {
    top: "1.19vw",

    ease: "power3.out",
    rotate: 0,
    duration: 1.2,
    attr: {
      width: 101,
      height: 100,
    },
    delay: 0.3,
  });

  gsap.to(`.${styles.asterisc}`, {
    right: "5.98vw",
    duration: 0.8,
    delay: 0.3,

    onComplete: () => {
      gsap.to(`.${styles.asterisc}`, {
        right: "var(--container-padding)",
      });
      state(false);
    },
  });
}
