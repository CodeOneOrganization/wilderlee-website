import styles from "./Nav.module.css";
import Logo from "@/common/components/Logo";
import Button from "@/app/layout/Nav/Button";
import Menu from "@/app/layout/Nav/Menu";

export default function Nav() {

  return (

    <nav className={styles.nav}>
      <div className="logo">
        <Logo />
      </div>

      <Button />
      <Menu/>
    </nav>

  );
}
