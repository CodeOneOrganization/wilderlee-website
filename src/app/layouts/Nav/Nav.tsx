import styles from "./Nav.module.css";

import Logo from "@/common/components/Logo";

import Overlay from "@/app/layouts/Nav/Overlay";
import CheeseIcon from "@/common/components/CheeseIcon";
import useIsomorphicEffect from "@/common/hooks/useIsomorphicEffect";

export default function Nav() {
  return (
    <nav className={`${styles.nav} container`}>
      <div className="logo fadeIn">
        <Logo className={styles.logo} />
      </div>
      <div className={styles.cheeseBurger}>
        <CheeseIcon />
      </div>
      <Overlay />
    </nav>
  );
}
