import Arrow from "@/common/components/Arrow";
import styles from "../Plans.module.css"

interface Props {
    title: string
}

export default function Button({title}: Props) {
  return (
    <button className={styles.contact}>
      {title} <Arrow />
    </button>
  );
}
