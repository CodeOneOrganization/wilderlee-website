// Verifique se o caminho para o CSS está correto
import styles from "../Info.module.css";

interface Props {
  title: string;
  paragraph: string;
}

export default function Card({ title, paragraph }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.line}></div>
      <h3 dangerouslySetInnerHTML={{ __html: title }} />
      <p
        className={`${styles.paragraph} small`}
        dangerouslySetInnerHTML={{ __html: paragraph }}
      ></p>
    </div>
  );
}
