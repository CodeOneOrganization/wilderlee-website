import Check from "@/common/components/Check"
import styles from "../Plans.module.css"
const lines = [
  {
    theme: "light",
    paragrph: "Plano alimentar atualizado a cada 45 dias"
  },
  {
    theme: "dark",
    paragrph: "Protocolo de treinamento atualizado a cada 30"
  },
  {
    theme: "light",
    paragrph: "Dias o Correção de exercícios por vídeos"
  },
  {
    theme: "dark",
    paragrph: "Feedbacks quinzenal com ajustes nos no treino e dieta"
  },
]

interface Props{
  padding: string
}

export default function Line({padding}: Props) {
    return(
      <>
      {lines.map((line, index) => (
        <div key={index} className={` ${line.theme}  row`}>
          <div className={`${styles.line} row`} style={{paddingLeft: padding}}>
          <div className={styles.roundedCheck}><Check/></div>
          <p className="small">{line.paragrph}</p>
          </div>
        </div>
      ))}
      </>
    )
}