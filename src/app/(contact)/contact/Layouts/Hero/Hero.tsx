import Form from "@/app/(contact)/contact/Layouts/Hero/Form"
import styles from "./Hero.module.css"

export default function Hero() {
    return (
        <section className={`${styles.contact} container`}>
            <div className={styles.contentToLeft}>
                <h3>Fale <b className="blue">Diretamente </b> <br /> comigo</h3>

                <div className={`${styles.ornament} row`}>
                    <small className={`${styles.paragraph} tiny blue`}>Preencha os dados abaixo</small>
                    <div className={styles.line}></div>
                </div>
                <Form />
                <button className={styles.submit}>enviar</button>
            </div>
            {/* <div className={styles.contentToRight}>
                <img src="" alt="" />
                <div className={`${styles.ornament} row`}>
                    <small className={`${styles.paragraph} tiny blue`}>Redes sociais</small>
                    <div className={styles.line}></div>
                </div>
                <ul className={`${styles.socialMedias} row`}>
                    <li className="tiny">Instagram</li>
                    <li className="tiny">Facebook</li>
                    <li className="tiny">WhatsApp</li>
                </ul>
            </div> */}
        </section>
    )
}