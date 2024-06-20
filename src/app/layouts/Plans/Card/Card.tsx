import Arrow from "@/common/components/Arrow";

import styles from "../Plans.module.css";

interface Props {
  title: string;
  For: string;
  oldPrice: string;
  price: string;
  division: string;
  time: string;

}

export default function Card({
  title,
  oldPrice,
  price,
  division,
  time,
  For,
}: Props) {
  return (
    <div className={styles.card}>
      <h4 className={styles.titleCard}>{title}</h4>
      <p className="tiny">{For}</p>

      <h5 className={styles.oldPrice}>R${oldPrice}</h5>
      <h3>R${price}</h3>
      <h5 className={styles.division}>ou {division}</h5>

      <div>
        <p className={`${styles.time} small`}>{time}</p>
        <button className={styles.contact}>
          Entrar em contato <Arrow />
        </button>
      </div>

      <div className={styles.rounded}>
        <h4>-13%</h4>
      </div>
      <div className={styles.effect}></div>
    </div>
  );
}
