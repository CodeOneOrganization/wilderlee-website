import gsap from "gsap";
import styles from "../Nav.module.css";

export function Open(state: any) {
  gsap.to(`.${styles.overlay}`, {
    top: "0vw",
    height: "100vh",
    ease: "elastic.inOut(1,8)",
    duration: 1,
    onComplete: () => {
      state(true);
    },
  });

  gsap.to(`.${styles.asterisc} svg rect`, {
    attr: {
      fill: "#fff",
    },
    duration: 1,
    delay: 0.2,
  });

  gsap.to(".spanMenu1", {
    y: 0,
    ease: "elastic.inOut(1,8)",
    duration: 2,
  });
  gsap.to(".spanMenu2", {
    y: 0,
    ease: "elastic.inOut(1,8)",
    duration: 2,
    delay: 0.1,
  });
  gsap.to(".spanMenu3", {
    y: 0,
    ease: "elastic.inOut(1,8)",
    duration: 2,
    delay: 0.2,
  });
}

export function Close(state: any) {
  gsap.to(`.${styles.overlay}`, {
    top: "-5vw",
    height: "0vh",
    ease: "power3.inOut",
    duration: 0.5,
    delay: 1,

    onComplete: () => {
      state(false);
    },
  });

  gsap.to(`.${styles.asterisc} svg rect`, {
    attr: {
      fill: "#00BAF7",
    },
    duration: 1,
    delay: 1,
  });

  gsap.to(".spanMenu1", {
    y: "22vw",
    ease: "elastic.inOut(1,8)",
    duration: 1,
  });
  gsap.to(".spanMenu2", {
    y: "22vw",
    ease: "elastic.inOut(1,8)",
    duration: 1,
    delay: 0.1,
  });
  gsap.to(".spanMenu3", {
    y: "22vw",
    ease: "elastic.inOut(1,8)",
    duration: 1,
    delay: 0.2,
  });
}
