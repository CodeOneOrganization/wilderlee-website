"use client"

import styles from "./tipsSection.module.css";

import Line from "@/app/layouts/TipsSection/Line";
// import { hover } from "@/app/layouts/TipsSection/animations/Hover";

import Arrow from "@/common/components/Arrow";

interface Props {
  Title: string,
  Paragraph: string,
  Image: string
}

export default function Card({ Title, Paragraph, Image }: Props) {
  return (
    <div className={styles.card}>
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
