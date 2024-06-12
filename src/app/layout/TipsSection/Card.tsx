import Line from "@/app/layout/TipsSection/Line";
import styles from "./styles.module.css";
import Arrow from "@/common/components/Arrow";

interface Props{
    Title: string,
    Paragraph: string,
    Image: string
}

export default function Card() {
  return (
    <div className={styles.card}>
      <Line />
      <div className={styles.card_container}>
        
      <div className={styles.image}>
          <img src="/images/tipsImage1.png" alt="Image" />
        </div>

        <div className={styles.text}>
        <h4>
          Transforme Seu Corpo em <b className="blue">30</b> Dias
        </h4>

        <p className="tiny">O Guia Definitivo de Treino e Dieta </p>
        <p className={`${styles.p_card} small`}>
          Sou Wilderlee, um personal trainer certificado com anos de experiência <br />
          ajudando pessoas a transformarem seus corpos e vidas. Minha abordagem
        </p>

        </div>
        <Arrow className={styles.arrow}/>

      </div>
    </div>
  );
}
