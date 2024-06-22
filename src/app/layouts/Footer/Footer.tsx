import Card from "@/app/layouts/Footer/card";
import styles from "./Footer.module.css";
import Logo from "@/common/components/Logo";
import Arrow from "@/common/components/Arrow";

export default function Footer() {
  return (
    <footer className={`${styles.footer} container row`}>
      <div className={styles.top}>
        <article className={styles.road}>
          <h3 className={styles.title}>Contato</h3>
          <ul className={styles.info}>
            <li>named@gmail.com</li>
            <li>+55 81 00000-0000</li>
            <li>@wilderlee.personal</li>
          </ul>
        </article>
        <article className={styles.road}>
          <h3 className={styles.title}>Sitemap</h3>
          <ul className={styles.info}>
            <li>
              Contato
              <Arrow className={styles.arrow} fill="var(--color-black)" />
            </li>
            <li>Suporte e Ajuda</li>
            <li>Planos</li>
          </ul>
        </article>
        <article className={styles.road}>
          <button className={styles.button_call}>Entrar em Contato</button>
          <Logo className={styles.logo} fill="var(--color-blue, #fff)" />
        </article>
      </div>
      <div className={styles.bottom}>
        <p className="tiny">Todos os direitos reservados</p>
        <p className="tiny">Website by Synergy Code</p>
      </div>
    </footer>
  );
}
