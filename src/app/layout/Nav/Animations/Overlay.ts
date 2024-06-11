import gsap from "gsap";
import styles from "../Nav.module.css";

export function Open(state: any) {

  state(true);
  gsap.set(`.${styles.asterisc}`, {
    top: "1.19vw",
    right: "var(--container-padding)",
  });

  gsap.to(`.${styles.asterisc}`, {
    top: "-13vw",
    rotate: 360,
    duration: 3,
    ease: "power3.out",
    attr: {
      width: window.innerHeight * 1.5,
      height: window.innerHeight * 1.5,
    },
  });
  gsap.to(`.${styles.asterisc}`, {
    right: "-30vw",
    duration: 2,
  });
}

export function Close(state: any) {

  state(false);
  
  gsap.to(`.${styles.asterisc}`, {
    top: "1.19vw",
   
    ease: "power3.out",
    rotate: 0, 
    duration: 1.2,
    attr: {
      width: 101,
      height: 100,
    },

  });

  gsap.to(`.${styles.asterisc}`, {
    right: "5.98vw",
    duration: 0.8,

        onComplete: () => {

      gsap.to(`.${styles.asterisc}`, {
        right: "var(--container-padding)",
      });
    }
  });
}
