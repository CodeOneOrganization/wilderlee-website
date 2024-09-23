import Menu from "@/app/layouts/Nav/Menu";
import styles from "./Nav.module.css";

export default function Overlay() {

  const goToWhats = () =>{
    window.open(`${process.env.NEXT_PUBLIC_CONTACT}Olá, eu gostaria de saber sobre os planos`)
  }

  return (
    <div className={`${styles.overlay} col`}>
      <Menu />
      <div className={styles.bottom}>
        <div className={styles.divisor}>
          <small className={`${styles.spreadText} tiny`}>Redes Sociais</small>
          <hr className={styles.line} />
        </div>
        <div className={styles.contacts}>
          <a href="https://www.instagram.com/wilderlee.personal/" target="_blank" className="tiny">Instagram</a>
          <a href={`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_WHATSAPP}&text=Olá, eu gostaria de saber mais sobre as consultorias`} target="_blank" className="tiny">whatsapp</a>
        </div>
      </div>
    </div>
  );
}
