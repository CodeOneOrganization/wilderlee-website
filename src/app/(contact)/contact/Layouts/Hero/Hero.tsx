import Form from "@/app/(contact)/contact/Layouts/Hero/Form"
import styles from "./Hero.module.css"
import Logo from "@/common/components/Logo"

export default function Hero() {
    return (
        <section className={`${styles.contact} container`}>
            <h3>Fale <b className="blue">Diretamente </b> <br /> comigo</h3>
            <div className={styles.branding}>
                <img className={styles.personalTrainer} src="images/WilderleeImage.jpg" alt="" />
                <Logo className={styles.logo} />
            </div>
            <div className={styles.contentToLeft}>
                <div className={`${styles.ornament} row`}>
                    <small className={`${styles.paragraph} tiny blue`}>Preencha os dados abaixo</small>
                    <div className={styles.line}></div>
                </div>
                <Form />
                <button className={styles.submit}>enviar</button>
            </div>
            <div className={styles.contentToRight}>
                <div className={`${styles.ornament} row`}>
                    <small className={`${styles.paragraph} tiny blue`}>Redes sociais</small>
                    <div className={styles.line}></div>
                </div>
                <ul className={`${styles.list} col`}>
                    <li className={`${styles.index} tiny`}>Instagram</li>
                    <li className={`${styles.index} tiny`}>Facebook</li>
                    <li className={`${styles.index} tiny`}>WhatsApp</li>
                </ul>
                <div className={`${styles.ornament} row`}>
                    <small className={`${styles.paragraph} tiny blue`}>Informações de Contato</small>
                    <div className={styles.line}></div>
                </div>
                <ul className={`${styles.list} col`}>
                    <li className={`${styles.index} tiny`}>wilderleepersonal@hotmail.com</li>
                    <li className={`${styles.index} tiny`}>+55 (81) 9 9513-3284</li>
                </ul>
                <div className={`${styles.ornament} row`}>
                    <small className={`${styles.paragraph} tiny blue`}>Onde me encontrar</small>
                    <div className={styles.line}></div>
                </div>
                <ul className={`${styles.list} col`}>
                    <li className={`${styles.index} tiny`}>Pernambuco, Brasil</li>
                    <li className={`${styles.index} tiny`}>Av. Horácio Ferraz Cavalcanti, n° 185</li>
                </ul>
            </div>
        </section>
    )
}