'use client'

import { useState, useCallback, useRef } from "react"

import emailjs from "@emailjs/browser"

import styles from "../Hero.module.css"

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null!)
  const [error, setError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleOnSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    // Wilderleep@gmail.com
    e.preventDefault()

    setIsLoading(true)

    const serviceId = "service_811dob9"
    const formElement = formRef.current
    const templateId = "template_o9l4b3r"
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
        formElement.reset()
      })

  }, [formRef.current, isLoading])

  return (
    <form ref={formRef} onSubmit={handleOnSubmit}>
      <div className={`${styles.form_wrapper} col`}>
        {/* isError: {String(error)} */}
        <br />

        <div className="col">
          <label htmlFor="from_name" className={`${styles.label} small`}>Como devo lhe chamar?</label>
          <input name="from_name" className={styles.input} type="text" id="name" required placeholder="Seu nome" />
        </div>

        <div className="col">
          <label htmlFor="from_email" className={`${styles.label} small`}>Qual o seu email?</label>
          <input name="from_email" className={styles.input} type="email" id="email" placeholder="seuemail@mail.com" />
        </div>

        <div className="col">
          <label htmlFor="from_phone" className={`${styles.label} small`}>Qual o seu WhatsApp?</label>
          <input name="from_phone" className={styles.input} type="text" id="phone" placeholder="81 9xxxx-xxxx" />
        </div>

      </div>

      <div className={`${styles.textArea_div} col`}>
        <label htmlFor="from_message" className={`${styles.label} small`}>Digite sua mensagem:</label>
        <textarea className={styles.textArea} name="from_message" id="from_message" placeholder="Como são os protocolos?"></textarea>
      </div>

      <button className={styles.submit} disabled={isLoading}>
        {isLoading ? "enviando" : "enviar"}
      </button>
    </form>
  )
}