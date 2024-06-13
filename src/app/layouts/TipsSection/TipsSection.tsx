import Card from "@/app/layouts/TipsSection/Card";

import styles from "./tipsSection.module.css";

import Line from "@/app/layouts/TipsSection/Line";

export default function TipsSection() {
  const cards = [
    {
      Title: "Transforme Seu Corpo em <b class='blue'>30</b> Dias",
      Paragraph:
        "Sou Wilderlee, um personal trainer certificado com anos de experiência <br /> ajudando pessoas a transformarem seus corpos e vidas. Minha abordagem",
      Image: "/images/tipsImage1.png",
    },
    {
      Title: "Desvendando Mitos",
      Paragraph:
        "Sou Wilderlee, um personal trainer certificado com anos de experiência <br /> ajudando pessoas a transformarem seus corpos e vidas. Minha abordagem",
      Image: "/images/tipsImage2.png",
    },
    {
      Title: "Desvendando Mitos",
      Paragraph:
        "Sou Wilderlee, um personal trainer certificado com anos de experiência <br /> ajudando pessoas a transformarem seus corpos e vidas. Minha abordagem",
      Image: "/images/tipsImage2.png",
    },
  ];

  return (
    <section className="container">
      <div className={styles.uper}>
        <h3>
          Programas e dicas <br /> para o seu <b className="blue">shape</b>
        </h3>

        <p className={`${styles.p} small`}>
          Sou Wilderlee, um personal trainer certificado com anos de <br />{" "}
          experiência ajudando pessoas a transformarem seus corpos e <br />{" "}
          vidas. Minha abordagem
        </p>
      </div>

      {cards.map((card) => (
        <Card
          Title={card.Title}
          Image={card.Image}
          Paragraph={card.Paragraph}
        />
      ))}
      <Line />
    </section>
  );
}
