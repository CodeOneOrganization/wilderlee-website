import GSAP from "gsap"

import styles from "./Hero.module.css"

import Asterisk from "@/common/components/Asterisc"

const items = [
  { src: "/images/image1.jpg" },
  { src: "/images/image2.jpeg" },
  { src: "/images/image3.jpeg" },
  { src: "/images/image4.jpeg" },
]
export default function Hero() {
  return (
    <section className={`${styles.hero} fullHeight container`}>
      <div className={`${styles.left}`}>
        <h1 className={`${styles.title} fadeIn`}>
          Wilderlee
          <br />
          <b className="blue">
            Personal
          </b>
          <br />
          Trainer
          <Asterisk className={styles.asterisk} />
        </h1>
        <p className={styles.text}>
          <span className={`${styles.innerText} ${styles.textLeft} fadeIn`}>Sou Wilderlee, um personal trainer certificado com anos de experiência ajudando pessoas a transformarem seus corpos e vidas. Minha abordagem é personalizada, focando nas necessidades individuais de cada cliente para garantir resultados reais e duradouros.</span>
          <span className={`${styles.innerText} ${styles.textRight} fadeIn`}>No meu site, você encontrará recursos valiosos para guiá-lo em sua jornada de fitness, todos criados com cuidado e profissionalismo.</span>
        </p>
      </div>
      <div className={`${styles.right} row`}>
        <div className={`${styles.imageBoard} col`}>
          <img className={`${styles.image} ${styles.big}`} src={items[0].src} alt="" />
          {items.splice(1, 3).map((x, i) => <img key={`${x.src}`} className={`${styles.image} ${styles.small}`} src={x.src} />)}
        </div>
        <h1 className={styles.textAcrossTheBoard}>
          {"FITNESS".split("").map((x, i) => <span className={styles.innerLetter} key={`${x}_${i}`}>{x}</span>)}
        </h1>
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