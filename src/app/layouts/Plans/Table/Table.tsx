import Line from "@/app/layouts/Plans/Table/Line";
import styles from "../Plans.module.css"
import Button from "@/app/layouts/Plans/Button";

interface Props{
  title: string
  padding: string
}



export default function Table({title, padding}: Props) {
  return (
    <div className={styles.cardTable}>
      <h4 className={styles.titleTable} style={{paddingLeft: padding}}>{title}</h4>
      <Line padding={padding}/>
      <div className={`${styles.contactTable} row`}>
        <Button title="Eu quero"/>
      </div>
    </div>
  );
}
