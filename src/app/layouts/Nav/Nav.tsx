import styles from "./Nav.module.css";

import Logo from "@/common/components/Logo";

import Overlay from "@/app/layouts/Nav/Overlay";
import Button from "@/app/layouts/Nav/Button";

export default function Nav() {
  return (
    <nav className={`${styles.nav} container`}>
      <div className="logo fadeIn">
        <Logo className={styles.logo} />
      </div>
      <Button/>
      <Overlay />
    </nav>
  );
}
