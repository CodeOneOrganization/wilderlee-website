import Form from "@/app/(contact)/contact/Layouts/Hero/Form"
import styles from "./Hero.module.css"
import Button from "@/app/(contact)/contact/Layouts/Hero/Button"

export default function Hero() {
    return(
        <section className="container">
            <h3>Fale <b className="blue">Diretamente </b> <br /> comigo</h3>

            <div className={`${styles.ornament} row`}>
            <p className={`${styles.paragraph} small blue`}>Preencha os dados abaixo</p>
            <div className={styles.line}></div>
            </div>
            <Form/>
            <div className={styles.submit_div}>
                <Button/>
            </div>
        </section>
    )
}