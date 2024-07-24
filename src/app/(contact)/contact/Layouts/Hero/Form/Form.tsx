'use client'

import { useState, useCallback, useRef } from "react"

import emailjs from "@emailjs/browser"

import styles from "../Hero.module.css"

// function getTemplateParams(formData: FormData) {
//   let obj: any = {}

//   for (const [key, value] of formData) {
//     obj[key] = value
//   }

//   obj["to_name"] = "Wilderlee"


//   return obj
// }

export default function Form() {
  const ref = useRef<HTMLFormElement>(null!)
  const [error, setError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleOnSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsLoading(true)

    // const formData = new FormData(ref.current)
    
    const serviceId = "service_811dob9"
    const formElement = ref.current
    const templateId = "template_zm4fg9g"
    const emailJsPublicKey = "6jR2WevNx08rP13w7"

    emailjs.sendForm(serviceId, templateId, formElement, emailJsPublicKey)
      .then((response) => {
        console.log("Success", response.status, response.text)
        setError(false)
      }).catch((error) => {
        console.error("Form error", error)
        setError(true)
      }).finally(() => {
        setIsLoading(false)
      })

  }, [ref.current, isLoading])

  return (
    <form ref={ref} onSubmit={handleOnSubmit}>
      <div className={`${styles.form_wrapper} col`}>
        isError: {String(error)}
        <br />
        <div className="col">
          <label htmlFor="name" className={`${styles.label} small`}>Como devo lhe chamar?</label>
          <input name="from_name" className={styles.input} type="text" id="name" required placeholder="Seu nome" />
        </div>
        <div className="col">
          <label htmlFor="email" className={`${styles.label} small`}>Qual o seu email?</label>
          <input name="email" className={styles.input} type="email" id="email" placeholder="algumemail@mail.com" />
        </div>
      </div>
      <div className={`${styles.textArea_div} col`}>
        <label htmlFor="message" className={`${styles.label} small`}>Digite sua mensagem:</label>
        <textarea className={styles.textArea} name="message" id="message" placeholder="Como são os protocolos?"></textarea>
      </div>
      <button className={styles.submit} disabled={isLoading}>
        {isLoading ? "enviando" : "enviar"}
      </button>
    </form>
  )
}