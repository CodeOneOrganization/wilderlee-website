import GSAP from "gsap"

import styles from "./Hero.module.css"
export default function Hero() {
  return (
    <section className={`${styles.hero} fullHeight container`}>
      <div className={`${styles.left}`}>
        <h1 className={styles.title}>
          Wilderlee
          <br />
          <b className="blue">
            Personal
          </b>
          <br />
          Trainer
        </h1>
        <p className={styles.text}>
          <span className={`${styles.innerText} ${styles.textLeft}`}>Sou Wilderlee, um personal trainer certificado com anos de experiência ajudando pessoas a transformarem seus corpos e vidas. Minha abordagem é personalizada, focando nas necessidades individuais de cada cliente para garantir resultados reais e duradouros.</span>
          <span className={`${styles.innerText} ${styles.textRight}`}>No meu site, você encontrará recursos valiosos para guiá-lo em sua jornada de fitness, todos criados com cuidado e profissionalismo.</span>
        </p>
      </div>
      <div className={`${styles.right} row`}>
        <div className={`${styles.imageBoard} col`}>
          <img className={`${styles.image} ${styles.big}`} src="" alt="" />
          <img className={`${styles.image} ${styles.small}`} src="" alt="" />
          <img className={`${styles.image} ${styles.small}`} src="" alt="" />
          <img className={`${styles.image} ${styles.small}`} src="" alt="" />
        </div>
        <h1 className={styles.textAcrossTheBoard}>
          {"FITNESS".split("").map((x, i) => <span className={styles.innerLetter} key={`${x}_${i}`}>{x}</span>)}
        </h1>
      </div>
    </section>
  )
}