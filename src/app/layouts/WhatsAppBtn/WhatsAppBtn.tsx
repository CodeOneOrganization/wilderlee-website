import styles from "./WhatsAppBtn.module.css"

export default function WhatsAppBtn() {
  return <a href={`${process.env.NEXT_PUBLIC_CONTACT}Olá, eu gostaria de saber mais sobre as consultorias`} target="_blank" className={styles.call}> <img src="/images/whatsapp.png" alt="whats app" className={styles.callImage}/> </a>
}