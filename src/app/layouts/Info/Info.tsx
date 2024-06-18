import Card from "@/app/layouts/Info/Card";
import styles from "./Info.module.css"
const cards = [
    {
        title: "Alunos <br/> +1000",
        paragraph: "Sou Wilderlee, um personal trainer certificado <br /> com anos deexperiência ajudando pessoas a <br /> transformarem seus corpos e vidas. Minha <br />abordagem "
    },
    {
        title: "vidas <br/> mudadas",
        paragraph: "Sou Wilderlee, um personal trainer certificado <br /> com anos deexperiência ajudando pessoas a <br /> transformarem seus corpos e vidas. Minha <br />abordagem "
    },
    {
        title: "referência <br/> nacional",
        paragraph: "Sou Wilderlee, um personal trainer certificado <br /> com anos deexperiência ajudando pessoas a <br /> transformarem seus corpos e vidas. Minha <br />abordagem "
    },

]

export default function Info() {
    return(
        <section className="container ">   
            <div className={`${styles.cards} row`}>
            {cards.map((card, index)=>(
                <Card key={index} paragraph={card.paragraph} title={card.title}/>
            ))}
            </div>
        </section>
    )
}