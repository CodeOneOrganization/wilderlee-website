import Card from "./Avaliator"

import styles from "./Avaliations.module.css"


const users = [
  {
    name: "natalia",
    socialmedia: "@natalia_diaz",
    content: "ao seguir o plano de personal trainer de wilderlee, minha vida mudou para melhor. com programas personalizados e suporte contínuo, alcancei meus objetivos de saúde e bem-estar, levando a uma vida mais próspera.",
    imageurl: "/images/unknown-user1.jpg"
  },
  {
    name: "natalia",
    socialmedia: "@natalia_diaz",
    content: "ao seguir o plano de personal trainer de wilderlee, minha vida mudou para melhor. com programas personalizados e suporte contínuo, alcancei meus objetivos de saúde e bem-estar, levando a uma vida mais próspera.",
    imageurl: "/images/unknown-user2.jpg"
  },
  {
    name: "natalia",
    socialmedia: "@natalia_diaz",
    content: "ao seguir o plano de personal trainer de wilderlee, minha vida mudou para melhor. com programas personalizados e suporte contínuo, alcancei meus objetivos de saúde e bem-estar, levando a uma vida mais próspera.",
    imageurl: ""
  },
  {
    name: "natalia",
    socialmedia: "@natalia_diaz",
    content: "ao seguir o plano de personal trainer de wilderlee, minha vida mudou para melhor. com programas personalizados e suporte contínuo, alcancei meus objetivos de saúde e bem-estar, levando a uma vida mais próspera.",
    imageurl: "/images/unknown-user1.jpg"
  },
  {
    name: "natalia",
    socialmedia: "@natalia_diaz",
    content: "ao seguir o plano de personal trainer de wilderlee, minha vida mudou para melhor. com programas personalizados e suporte contínuo, alcancei meus objetivos de saúde e bem-estar, levando a uma vida mais próspera.",
    imageurl: "/images/unknown-user2.jpg"
  },
  {
    name: "natalia",
    socialmedia: "@natalia_diaz",
    content: "ao seguir o plano de personal trainer de wilderlee, minha vida mudou para melhor. com programas personalizados e suporte contínuo, alcancei meus objetivos de saúde e bem-estar, levando a uma vida mais próspera.",
    imageurl: ""
  },
]

export default function Avaliations() {
  return (
    <section className={`${styles.avaliations} container`} data-lenis-prevent >
      {users.map(x => <Card {...x} />)}
    </section>
  )
}