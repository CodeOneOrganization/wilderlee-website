"use client"

import Card from "./Avaliator"

import styles from "./Avaliations.module.css"
import DraggableSlide from "@/common/components/DraggableSlide"


const users = [
  {
    name: "natalia",
    socialMedia: "@natalia_diaz",
    content: "ao seguir o plano de personal trainer de wilderlee, minha vida mudou para melhor. com programas personalizados e suporte contínuo, alcancei meus objetivos de saúde e bem-estar, levando a uma vida mais próspera.",
    imageUrl: "/images/unknown-user1.jpg"
  },
  {
    name: "natalia",
    socialMedia: "@natalia_diaz",
    content: "ao seguir o plano de personal trainer de wilderlee, minha vida mudou para melhor. com programas personalizados e suporte contínuo, alcancei meus objetivos de saúde e bem-estar, levando a uma vida mais próspera.",
    imageUrl: "/images/unknown-user2.jpg"
  },
  {
    name: "natalia",
    socialMedia: "@natalia_diaz",
    content: "ao seguir o plano de personal trainer de wilderlee, minha vida mudou para melhor. com programas personalizados e suporte contínuo, alcancei meus objetivos de saúde e bem-estar, levando a uma vida mais próspera.",
    imageUrl: ""
  },
  {
    name: "natalia",
    socialMedia: "@natalia_diaz",
    content: "ao seguir o plano de personal trainer de wilderlee, minha vida mudou para melhor. com programas personalizados e suporte contínuo, alcancei meus objetivos de saúde e bem-estar, levando a uma vida mais próspera.",
    imageUrl: "/images/unknown-user1.jpg"
  },
  {
    name: "natalia",
    socialMedia: "@natalia_diaz",
    content: "ao seguir o plano de personal trainer de wilderlee, minha vida mudou para melhor. com programas personalizados e suporte contínuo, alcancei meus objetivos de saúde e bem-estar, levando a uma vida mais próspera.",
    imageUrl: "/images/unknown-user2.jpg"
  },
  {
    name: "natalia",
    socialMedia: "@natalia_diaz",
    content: "ao seguir o plano de personal trainer de wilderlee, minha vida mudou para melhor. com programas personalizados e suporte contínuo, alcancei meus objetivos de saúde e bem-estar, levando a uma vida mais próspera.",
    imageUrl: ""
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