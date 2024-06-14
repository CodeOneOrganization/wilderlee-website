"use client"

import { useRouter } from "next/navigation"

interface Props extends React.PropsWithChildren { }
export default function ContactClient({ children }: Props) {
  const router = useRouter()

  const backToHome = () => router.push("/")

  return (
    <>
      {children}
      <button onClick={backToHome}>Hello Wilderlee me pague</button>
    </>
  )
}