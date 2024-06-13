
import styles from "./AboutMe.module.css"

export default function AboutMe() {
  return (
    <section className={`${styles.aboutMe} container`}>
      <div className={styles.top}>
        <h3 className={styles.title}>Sobre Mim</h3>
        <div className={styles.bar}>
          <small className={`${styles.job} blue`}>Personal Trainer</small>
          <hr className={styles.line} />
        </div>
      </div>
      <div className={`${styles.row} row`}>
        <p className={styles.innerText}>Sou Wilderlee, um personal trainer certificado com anos de experiência ajudando pessoas a transformarem seus corpos e vidas. Minha abordagem é personalizada, focando nas necessidades individuais de cada cliente para garantir resultados reais e duradouros. No meu site, você encontrará recursos valiosos para guiá-lo em sua jornada de fitness, todos criados com cuidado e profissionalismo.</p>
        <p className={styles.innerText}>Sou Wilderlee, um personal trainer certificado com anos de experiência ajudando pessoas a transformarem seus corpos e vidas. Minha abordagem é personalizada, focando nas necessidades individuais de cada cliente para garantir resultados reais e duradouros. No meu site, você encontrará recursos valiosos para guiá-lo em sua jornada de fitness, todos criados com cuidado e profissionalismo.</p>
      </div>
    </section>
  )
}