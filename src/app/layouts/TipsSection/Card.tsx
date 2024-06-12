"use client"
import Line from "@/app/layouts/TipsSection/Line";

import styles from "./styles.module.css";

import Arrow from "@/common/components/Arrow";
import { hover } from "@/app/layout/TipsSection/animations/Hover";

interface Props {
  Title: string,
  Paragraph: string,
  Image: string
}

export default function Card({ Title, Paragraph, Image }: Props) {
  return (
    <div className={styles.card} onMouseEnter={hover}>
      <Line />
      <div className={styles.card_container}>
        
        <div className={styles.image}>
          <img src={Image} alt="Image" />
        </div>

        <div className={styles.text}>
          <h4 dangerouslySetInnerHTML={{ __html: Title }}></h4>

          <p className="tiny">O Guia Definitivo de Treino e Dieta</p>
          <p className={`${styles.p_card} small`} dangerouslySetInnerHTML={{ __html: Paragraph }}></p>

        </div>
        <Arrow className={styles.arrow}/>

      </div>
    </div>
  );
}
