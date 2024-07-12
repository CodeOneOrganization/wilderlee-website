import styles from "../Hero.module.css"

export default function Form() {
    return(
        <form action="">

        <div className={`${styles.form_wrapper} col`}>
            <div className="col">
                <label htmlFor="email" className={`${styles.label} small`}>Digite seu E-mail</label>
                <input className={styles.input} type="email" id="email" placeholder="E-mail"/>
            </div>
            <div className="col">
                <label htmlFor="name" className={`${styles.label} small`}>Digite seu Nome</label>
                <input className={styles.input} type="text" id="name" placeholder="Nome"/>
            </div>
        </div>
        <div className={`${styles.textArea_div} col`}>
                <label htmlFor="message" className={`${styles.label} small`}>Digite sua mensagem:</label>
                <textarea  className={styles.textArea} name="message" id="message"></textarea>
            </div>
        </form>
    )
}