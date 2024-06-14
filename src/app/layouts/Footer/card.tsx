import styles from "./Footer.module.css"

interface Props{
    Title: string,
    paragraph1: string,
    paragraph2: string,
    paragraph3: string
}

export default function Card({Title,paragraph1, paragraph2, paragraph3}: Props) {
    return(
        <div className={styles.contact}>
        <h3 className={styles.contact_h3}>{Title}</h3>

        <div className={styles.info}>
            <p className={styles.paragraph}>{paragraph1}</p>
            <p className={styles.paragraph}>{paragraph2}</p>
            <p className={styles.paragraph}>{paragraph3}</p>
        </div>
    </div>
    )
}