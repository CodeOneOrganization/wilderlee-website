"use client"

import Card from "./Avaliator"

import styles from "./Avaliations.module.css"
import DraggableSlide from "@/common/components/DraggableSlide"


const users = [
  {
    name: "natalia",
    socialMedia: "@natalia_diaz",
    content: "ao seguir o plano de personal trainer de wilderlee, minha vida mudou para melhor. com programas personalizados e suporte contínuo, alcancei meus objetivos de saúde e bem-estar, levando a uma vida mais próspera.",
    imageUrl: "/images/unknown-user1.jpg",
    gender: "ela"
  },
  {
    name: "natalia",
    socialMedia: "@natalia_diaz",
    content: "Wilderlee me ajudou a transformar meu corpo e mente. Com seus planos personalizados e apoio constante, conquistei uma saúde melhor e maior bem-estar, vivendo uma vida mais plena.",
    imageUrl: "/images/unknown-user2.jpg",
    gender: "ele"
  },
  {
    name: "natalia",
    socialMedia: "@natalia_diaz",
    content: "Com Wilderlee como personal trainer, alcancei uma nova forma física. Seus treinos personalizados e suporte contínuo me levaram a uma saúde ótima , um corpo dos sonhos e uma vida mais próspera.",
    imageUrl: "ele",
    gender: "ele"
  },
  {
    name: "natalia",
    socialMedia: "@natalia_diaz",
    content: "Graças ao plano de personal de Wilderlee, alcancei meu melhor. Programas personalizados e suporte contínuo me proporcionaram saúde, bem-estar e uma vida mais próspera.",
    imageUrl: "/images/unknown-user1.jpg",
    gender: "ela"
  },
  {
    name: "natalia",
    socialMedia: "@natalia_diaz",
    content: "Ao seguir o plano de personal trainer de Wilderlee, minha vida mudou para melhor. Com programas personalizados e suporte contínuo, alcancei meus objetivos de saúde e bem-estar, levando a uma vida mais próspera",
    imageUrl: "/images/unknown-user2.jpg",
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