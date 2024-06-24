import Menu from "@/app/layouts/Nav/Menu";
import styles from "./Nav.module.css";

export default function Overlay() {
  return (
    <div className={`${styles.overlay} col`}>
      <Menu />
      <div className={styles.bottom}>
        <div className={styles.divisor}>
          <small className={`${styles.spreadText} tiny`}>Redes Sociais</small>
          <div className={styles.line} />
        </div>
        <div className={styles.justifyCenter}>
          <p className="tiny">Instagram</p>
          <p className="tiny">Facebook</p>
        </div>
      </div>
    </div>
  );
}
