import styles from "./Nav.module.css";

import Logo from "@/common/components/Logo";
import Button from "@/app/layouts/Nav/Button";

import RotatingOnScroll from "@/common/components/RotateWhenScrolling";
import Overlay from "@/app/layouts/Nav/Overlay";

export default function Nav() {
  return (
    <nav className={`${styles.nav} container`}>
      <div className="logo fadeIn">
        <Logo />
      </div>
      <RotatingOnScroll>
        <Button data-rotate />
      </RotatingOnScroll>
      <Overlay />
    </nav>
  );
}