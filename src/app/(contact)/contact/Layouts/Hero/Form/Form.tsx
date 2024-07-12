import styles from "../Hero.module.css"

export default function Form() {
    return(
        <form action="">

        <div className={`${styles.form_wrapper} col`}>
            <div className="col">
                <label htmlFor="name" className={`${styles.label} small`}>Como devo lhe chamar?</label>
                <input className={styles.input} type="text" id="name" placeholder="Seu nome"/>
            </div>
            <div className="col">
                <label htmlFor="email" className={`${styles.label} small`}>Qual o seu email?</label>
                <input className={styles.input} type="email" id="email" placeholder="algumemail@mail.com"/>
            </div>
        </div>
        <div className={`${styles.textArea_div} col`}>
                <label htmlFor="message" className={`${styles.label} small`}>Digite sua mensagem:</label>
                <textarea  className={styles.textArea} name="message" id="message" placeholder="Como são os protocolos?"></textarea>
            </div>
        </form>
    )
}