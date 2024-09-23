"use client"

import Card from "./Avaliator"

import styles from "./Avaliations.module.css"
import DraggableSlide from "@/common/components/DraggableSlide"


const users = [
  {
    name: "Elon",
    socialMedia: "@elonssantos",
    content: "ao seguir o plano de personal trainer de wilderlee, minha vida mudou para melhor. com programas personalizados e suporte contínuo, alcancei meus objetivos de saúde e bem-estar, levando a uma vida mais próspera.",
    imageUrl: "/images/elon.jpg",
    gender: "ele"
  },
  {
    name: "Lúcia",
    socialMedia: "@jacintasilva.designer",
    content: "Wilderlee me ajudou a transformar meu corpo e mente. Com seus planos personalizados e apoio constante, conquistei uma saúde melhor e maior bem-estar, vivendo uma vida mais plena.",
    imageUrl: "/images/jacinta.jpg",
    gender: "ela"
  },
  {
    name: "Douglas",
    socialMedia: "@eu_douglaas",
    content: "Com Wilderlee como personal trainer, alcancei uma nova forma física. Seus treinos personalizados e suporte contínuo me levaram a uma saúde ótima , um corpo dos sonhos e uma vida mais próspera.",
    imageUrl: "/images/douglas.jpg",
    gender: "ele"
  },
  {
    name: "Huann",
    socialMedia: "@huann_vt",
    content: "Graças ao plano de personal de Wilderlee, alcancei meu melhor. Programas personalizados e suporte contínuo me proporcionaram saúde, bem-estar e uma vida mais próspera.",
    imageUrl: "/images/huann.jpg",
    gender: "ele"
  },
  {
    name: "Jonathas",
    socialMedia: "@jhcastros",
    content: "Ao seguir o plano de personal trainer de Wilderlee, minha vida mudou para melhor. Com programas personalizados e suporte contínuo, alcancei meus objetivos de saúde e bem-estar, levando a uma vida mais próspera",
    imageUrl: "/images/jhon.jpg",
    gender: "ele"
  },
  
  
]

export default function Avaliations() {
  return (
    <section className={`${styles.avaliations}`} data-slide-element>
      <DraggableSlide trigger={styles.avaliations}>
      <div className={styles.slide} data-slide-wrapper>
        {users.map((x, i) => <Card {...x} key={`user_${i}`}/>)}
      </div>
      </DraggableSlide>
    </section>
  )
}