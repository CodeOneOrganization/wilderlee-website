import Menu from "@/app/layouts/Nav/Menu";
import styles from "./Nav.module.css";

export default function Overlay() {
  return (
    <div className={`${styles.overlay} col`}>
      <Menu />
    </div>
  );
}
