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

  gsap.to(`.${styles.innerText}`, {
    y: 0,
    ease: "elastic.inOut(1,8)",
    duration: 2,
    stagger: 0.1
  })
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

  gsap.to(`.${styles.innerText}`, {
    y: "100%",
    ease: "elastic.inOut(1,8)",
    duration: 1,
    stagger: 0.1
  });
  
}
