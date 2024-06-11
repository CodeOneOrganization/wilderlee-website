import styles from "./Nav.module.css";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <menu>
        <li>Contato</li>
        <li>Sobre</li>
        <li>Planos</li>
      </menu>
    </div>
  );
}
