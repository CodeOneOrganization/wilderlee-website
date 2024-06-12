import styles from "./Nav.module.css";

import Logo from "@/common/components/Logo";
import Button from "@/app/layouts/Nav/Button";
import Menu from "@/app/layouts/Nav/Menu";

import RotatingOnScroll from "@/common/components/RotateWhenScrolling";

export default function Nav() {
  return (
    <nav className={`${styles.nav} container`}>
      <div className="logo">
        <Logo />
      </div>

      <RotatingOnScroll>
        <Button data-rotate />
      </RotatingOnScroll>
      <Menu />
    </nav>

  );
}
