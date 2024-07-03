import Arrow from "@/common/components/Arrow";
import styles from "../Plans.module.css"

interface Props {
    title: string
    plan: string
}

export default function Button({title, plan}: Props) {

  const goToWhats = () =>{
    window.open(`${process.env.NEXT_PUBLIC_CONTACT}Olá, eu gostaria de assinar o plano ${plan}`)
  }

  return (
    <button className={styles.contact} onClick={goToWhats}>
      {title} <Arrow />
    </button>
  );
}
