"use client"
// import Card from "@/app/layouts/Info/Card";
import CounterUpOnView from "@/common/components/CounterUpOnView/CounterUpOnView"

import styles from "./Info.module.css"

// const cards = [
//     {
//         title: "Alunos <br/> +1000",
//         paragraph: ""
//     },
//     {
//         title: "vidas <br/> mudadas",
//         paragraph: "Sou Wilderlee, um personal trainer certificado <br /> com anos deexperiência ajudando pessoas a <br /> transformarem seus corpos e vidas. Minha <br />abordagem "
//     },
//     {
//         title: "referência <br/> nacional",
//         paragraph: "Sou Wilderlee, um personal trainer certificado <br /> com anos deexperiência ajudando pessoas a <br /> transformarem seus corpos e vidas. Minha <br />abordagem "
//     },

// ]

export default function Info() {
  return (
    <section className={`${styles.info} container`}>
      <div className={`${styles.cards} row`}>
        {/* {cards.map((card, index) => (
                    <Card key={index} paragraph={card.paragraph} title={card.title} />
                ))} */}
        <article className={styles.card}>
          <div className={styles.line}></div>
          <h3>
            Alunos
            <br />
            <CounterUpOnView target={styles.info}>
              +<b className={styles.counter} data-animation="counter" data-counter-target="1000" >0</b>
            </CounterUpOnView>
          </h3>
          <p className={`${styles.paragraph} small`} >
            Sou Wilderlee, um personal trainer certificado <br /> com anos deexperiência ajudando pessoas a <br /> transformarem seus corpos e vidas. Minha <br />abordagem
          </p>
        </article>
        <article className={styles.card}>
          <div className={styles.line}></div>
          <h3>
            Vidas
            <br />
            Mudadas
            <br />
          </h3>
          <p className={`${styles.paragraph} small`} >
            Sou Wilderlee, um personal trainer certificado <br /> com anos deexperiência ajudando pessoas a <br /> transformarem seus corpos e vidas. Minha <br />abordagem
          </p>
        </article>
        <article className={styles.card}>
          <div className={styles.line}></div>
          <h3>
            Referência
            <br />
            Nacional
          </h3>
          <p className={`${styles.paragraph} small`} >
            Sou Wilderlee, um personal trainer certificado <br /> com anos deexperiência ajudando pessoas a <br /> transformarem seus corpos e vidas. Minha <br />abordagem
          </p>
        </article>

      </div>
    </section>
  )
}