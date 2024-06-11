"use client"
import Arrow from "@/common/components/Arrow";
import styles from "./Nav.module.css";
import { arrowHover, arrowHoverOut } from "@/app/layout/Nav/Animations/Hover";
export default function Menu() {
  return (
    <div className={styles.menu}>
      <menu>
        <li onMouseEnter={()=> arrowHover({className: ".arrow1"})} onMouseLeave={()=> arrowHoverOut({className: ".arrow1"})}> <Arrow className="arrow1"/><span  className="spanMenu1">Contato</span></li>
        <li onMouseEnter={()=> arrowHover({className: ".arrow2"})} onMouseLeave={()=> arrowHoverOut({className: ".arrow2"})}><Arrow className="arrow2"/><span className="spanMenu2">Sobre</span></li>
        <li onMouseEnter={()=> arrowHover({className: ".arrow3"})} onMouseLeave={()=> arrowHoverOut({className: ".arrow3"})}><Arrow className="arrow3"/><span className="spanMenu3">Planos</span></li>
      </menu>
    </div>
  );
}
