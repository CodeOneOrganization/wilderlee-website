import styles from "./WhatsAppBtn.module.css"

export default function WhatsAppBtn() {
  return <a href={`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_WHATSAPP}&text=Olá, eu gostaria de saber mais sobre as consultorias.`} target="_blank" className={styles.call}> <img src="/images/whatsapp.png" alt="whats app" className={styles.callImage}/> </a>
}
