import Menu from "@/app/layout/Nav/Menu";
import styles from "./Nav.module.css";

export default function Overlay() {
  return (
    <div className={`${styles.overlay} col`}>
      <Menu />
    </div>
  );
}
