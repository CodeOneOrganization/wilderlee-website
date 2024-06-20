"use client";

import Table from "@/app/layouts/Plans/Table";
import Card from "./Card";
import styles from "./Plans.module.css";
import useIsomorphicEffect from "@/common/hooks/useIsomorphicEffect";
import { useState } from "react";

export default function Plans() {
  const [windowWidth, setWindowWidth] = useState<boolean>(false);
  useIsomorphicEffect(() => {
    const windowWidth = window.matchMedia("(max-width: 850px)").matches;

    setWindowWidth(windowWidth);
  }, [windowWidth]);

  const cards = [
    {
      title: "Trimestral",
      For: "Para Alunos Intermediários",
      oldPrice: "449,99",
      price: "299,99",
      division: "3 X R$119,99",
      time: "Por 3 meses",
    },
    {
      title: "Semestral",
      For: "Para Atletas",
      oldPrice: "749,99",
      price: "599,99",
      division: "7 X R$99,99",
      time: "Por 6 meses",
    },
    {
      title: "Anual",
      For: "Para Atletas de fisiculturismo",
      oldPrice: "1150,99",
      price: "999,99",
      division: "12 X R$99,99",
      time: "Por 1 ano",
    },
  ];

  const tables = [
    {
      title: "Trimestral",
      padding: windowWidth ? "12vw" : "5.9vw",
    },
    {
      title: "Semestral",
      padding: windowWidth ? "12vw" : "4vw",
    },
    {
      title: "Plano Anual",
      padding: windowWidth ? "12vw" : "2vw",
    },
  ];

  const buttons = [1, 2, 3];

  return (
    <section className={`${styles.plans} col`}>
      <div className={`${styles.cards} container row`}>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            For={card.For}
            oldPrice={card.oldPrice}
            price={card.price}
            division={card.division}
            time={card.time}
          />
        ))}
      </div>
      <div className={`${styles.tableContainer} row`}>
        {tables.map((table, index) => (
          <Table key={index} title={table.title} padding={table.padding} />
        ))}
      </div>
  
    </section>
  );
}
