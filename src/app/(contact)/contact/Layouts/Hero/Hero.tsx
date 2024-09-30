"use client"

import styles from "./Hero.module.css"

import Form from "@/app/(contact)/contact/Layouts/Hero/Form"
import Logo from "@/common/components/Logo"
import Arrow from "@/common/components/Arrow"
import { useRouter } from "next/navigation"

export default function Hero() {
  const router = useRouter()

  const goToWhatsApp = () => {
    window.open(`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT}`)
  }
  return (
    <section className={`${styles.contact} container`}>
      <h3 className={styles.title}>
        Fale <b className="blue">Diretamente </b> <br /> comigo
      </h3>
      <div className={styles.branding}>
        <img
          className={styles.personalTrainer}
          src="images/wilderleephoto.jpg"
          alt=""
        />
        <Logo className={`${styles.logo} mobileNone`} />
      </div>
      <div className={styles.contentToLeft}>
        <div className={`${styles.ornament} row`}>
          <small className={`${styles.paragraph} tiny blue`}>
            Preencha os dados abaixo
          </small>
          <div className={styles.line}></div>
        </div>
        <Form />
      </div>
      <div className={styles.contentToRight}>
        <div className={`${styles.ornament} row`}>
          <small className={`${styles.paragraph} tiny blue`}>
            Redes sociais
          </small>
          <div className={styles.line}></div>
        </div>
        <ul className={`${styles.list} col`}>
          <li className={`${styles.index} tiny`}>
            <a
              href="https://www.instagram.com/wilderlee.personal/"
              target="_blank"
            >
              Instagram
            </a>
            <Arrow className={styles.arrow} />
          </li>
          <li className={`${styles.index} tiny`}>
            <a
              href={`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_WHATSAPP}&text=Olá, eu gostaria de saber mais sobre os planos.`}
              target="_blank"
            >
              WhatsApp
            </a>
            <Arrow className={styles.arrow} />
          </li>
        </ul>
        <div className={`${styles.ornament} row`}>
          <small className={`${styles.paragraph} tiny blue`}>
            Informações de Contato
          </small>
          <div className={styles.line}></div>
        </div>
        <ul className={`${styles.list} col`}>
          <li className={`${styles.index} tiny`}>
            Wilderleep@gmail.com
            <Arrow className={styles.arrow} />
          </li>
          <li className={`${styles.index} tiny`}>
            <a
              href={`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_WHATSAPP}&text=Olá, eu gostaria de saber mais sobre os planos.`}
              target="_blank"
            >
              {process.env.NEXT_PUBLIC_WHATSAPP_FORMATTED}
              {/* {process.env.NEXT_PUBLIC_WHATSAPP_FORMATED} */}
            </a>
            <Arrow className={styles.arrow} />
          </li>
        </ul>
        <div className={`${styles.ornament} row`}>
          <small className={`${styles.paragraph} tiny blue`}>
            Onde me encontrar
          </small>
          <div className={styles.line}></div>
        </div>
        <ul className={`${styles.list} col`}>
          <li className={`${styles.index} tiny`}>Pernambuco, Brasil</li>
          <li className={`${styles.index} tiny`}>
            Av. Horácio Ferraz Cavalcanti, n° 185
          </li>
        </ul>
      </div>
    </section>
  )
}
