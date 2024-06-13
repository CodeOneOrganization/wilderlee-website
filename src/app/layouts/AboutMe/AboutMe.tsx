
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
      <svg className={styles.blurredBackground} viewBox="0 0 1920 920" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#blurred)">
          <ellipse cx="50%" cy="50%" rx="calc(1920 / 2 - 1)" ry="calc(920 / 2 - 60)" fill="#1C1C1C" />
        </g>
        <defs>
          <filter id="blurred" x="-295" y="0" width="2257" height="1087" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0.0" result="BackgroundImageFix" />
            <feBlend mode="color-dodge" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_25_562" />
          </filter>
        </defs>
      </svg>
    </section>
  )
}