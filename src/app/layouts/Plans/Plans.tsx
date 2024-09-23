"use client";

import styles from "./Plans.module.css";
import PlanCard from "./Card";

import mockedPlans from "./mockedPlans"


export default function Plans() {
  return (
    <section className={`${styles.plans} col`} id="plans">
      <div className={`${styles.cards} container row`}>
        {mockedPlans.map((x, index) => <PlanCard key={`CardAAAA_${index}`} {...x} />)}
      </div>
    </section >
  );
}
