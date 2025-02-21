import Arrow from "@/common/components/Arrow";

import styles from "./Avaliator.module.css"
import gsap from "gsap";

interface Props {
  name: string,
  socialMedia: string,
  imageUrl: string,
  content: string,
  gender: string
}
export default function Avaliator({ name, socialMedia, imageUrl, content, gender }: Props) {
  
  const goToWhats = () =>{
    window.open(`${process.env.NEXT_PUBLIC_CONTACT}Olá, eu gostaria de saber mais sobre as consultorias`)
  }

  const linearGradienteAnimationIn = () => {
    gsap.to(`.${styles.linearGradientBorder}`,{
      width: "100%",
      duration: 1,
      ease: "power2.inOut",
      stagger: .1
    })
  }

  return (
    <article className={styles.card} data-slide-item onMouseEnter={linearGradienteAnimationIn}>

      <div className={styles.linearGradientBorder} />

      <div className={`${styles.top} row`}>
        <img className={styles.image} src={imageUrl} alt="" />
        <h4 className={styles.name}>
          {name}
          <small className={styles.socialMedia}>{socialMedia}</small>
        </h4>
      </div>
      <p className={styles.opinion}>{content}</p>
      <div className={styles.bottom}>
        <button className={styles.call} onClick={goToWhats}>Mude Como {gender}</button>
        <Arrow className={styles.arrow} />
      </div>
    </article>
  )
}