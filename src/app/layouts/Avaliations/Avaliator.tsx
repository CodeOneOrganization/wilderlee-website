import Arrow from "@/common/components/Arrow";

import styles from "./Avaliator.module.css"

interface Props {
  name: string,
  socialMedia: string,
  imageUrl: string,
  content: string
}
export default function Avaliator({ name, socialMedia, imageUrl, content }: Props) {
  return (
    <article className={styles.card}>
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
        <button className={styles.call}>Mude Como Elas</button>
        <Arrow className={styles.arrow} />
      </div>
    </article>
  )
}