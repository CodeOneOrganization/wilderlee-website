import Card from "@/app/layout/TipsSection/Card";
import styles from "./styles.module.css";
import Line from "@/app/layout/TipsSection/Line";

export default function TipsSection() {
  return (
    <section className="container">
      <div className={styles.uper}>
        <h3>Programas e dicas <br /> para o seu <b className="blue">shape</b></h3>

        <p className={`${styles.p} small`}>
          Sou Wilderlee, um personal trainer certificado com anos de <br /> experiência
          ajudando pessoas a transformarem seus corpos e <br /> vidas. Minha abordagem
        </p>
      </div>

      <Card />
      <Card />
      <Card />
      <Line/>
    </section>
  );
}
