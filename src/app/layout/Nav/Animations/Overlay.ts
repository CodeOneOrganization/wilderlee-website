import gsap from "gsap";
import styles from "../Nav.module.css";

export function Open(state: any) {
  state(true);
  gsap.set(`.${styles.asterisc}`, {
    top: "1.19vw",
    right: "var(--padding-inline)",
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
    duration: 2.5,
  });
}

export function Close(state: any) {
  state(false);
  
  // Animação para retornar à posição inicial sem movimento lateral indesejado
  gsap.to(`.${styles.asterisc}`, {
    top: "1.19vw",
    right: "-20vw",
    ease: "power3.out",
    rotate: 0, // Ajustado para garantir a rotação correta
    duration: 2,
    attr: {
      width: 101,
      height: 100,
    },
    onComplete: () => {
      // Certificar que a posição final esteja correta
      gsap.set(`.${styles.asterisc}`, {
        right: "var(--padding-inline)",
      });
    }
  });
}
