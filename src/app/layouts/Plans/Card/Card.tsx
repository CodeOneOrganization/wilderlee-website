import styles from "../Plans.module.css";

import Button from "@/app/layouts/Plans/Button";

import { IBenefit, ICard } from "../PlansTypes";
import convertPointToComma from "@/common/utils/convert-point-to-comma";

interface Props extends ICard { }

interface BenefitProps extends IBenefit { }

function Benefit({ content }: BenefitProps) {
  return (
    <li className={styles.benefit}>
      <svg className={styles.checkIcon} viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.7831 2.00001L5.09094 10.7554L1.87004 7.30833" stroke="white" stroke-width="2.5772" stroke-linecap="square" /> </svg>
      {content}
    </li>

  )
}

export default function Card({
  title,
  price,
  benefits,
  time,
  target
}: Props) {
  function getDiscount(newValue: number, oldValue: number){
    const ratio = newValue / oldValue
    const decreasedRatio = 1 - ratio
    
    const percentage = 100 * decreasedRatio
    return percentage.toFixed(0)
  }

  const discount = getDiscount(price.current, price.old)
  return (
    <article className={styles.card}>
      <div className={styles.linearGradientBorder} />
      <div className={styles.upper}>
        <h4 className={styles.titleCard}>{title}</h4>
        <p className="tiny">{target}</p>

        <h5 className={styles.oldPrice}>R${convertPointToComma(price.old)}</h5>
        <h3>R${convertPointToComma(price.current)}</h3>
        <h5 className={styles.division}>{price.installment.amount} x R${convertPointToComma(price.installment.value)}</h5>

        <p className={`${styles.time} small`}>Por {time.value} {time.measure}</p>
        <Button title="Entrar em contato" plan={title}/>
      </div>
      <ul className={styles.info}>
        {benefits.map((x, index) => <Benefit key={`Benefit_${title}_${index}`} {...x} />)}
      </ul>
      {/* <div className={styles.rounded}>
        <h4>{discount}%</h4>
      </div> */}
    </article>

  );
}
