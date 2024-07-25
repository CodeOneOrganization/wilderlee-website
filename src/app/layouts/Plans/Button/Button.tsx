import Arrow from "@/common/components/Arrow";
import styles from "../Plans.module.css"

interface Props {
    title: string
    plan: string
}

export default function Button({title, plan}: Props) {

  const goToWhats = () =>{
    window.open(`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_WHATSAPP}&text=Olá, eu gostaria de saber mais sobre as consultorias.`)
  }

  return (
    <button className={styles.contact} onClick={goToWhats}>
      {title} <Arrow />
    </button>
  );
}
