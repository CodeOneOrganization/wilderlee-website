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
      
      <svg xmlns="http://www.w3.org/2000/svg" width="1650" height="631" viewBox="0 0 1750 731" fill="none">
        <ellipse cx="875" cy="351" rx="875" ry="380" fill="url(#paint0_radial_1073_986)" />
        <defs>
          <radialGradient id="paint0_radial_1073_986" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(875 351) rotate(90) scale(380 875)">
            <stop stopColor="#080808" />
            <stop offset="1" stopColor="#080808" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <DraggableSlide trigger={styles.avaliations}>
        <div className={styles.slide} data-slide-wrapper>
          {users.map((x, i) => <Card {...x} key={`user_${i}`} />)}
        </div>
      </DraggableSlide>
    </section>
  )
}