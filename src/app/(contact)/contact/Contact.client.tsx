import Nav from "./Layouts/Nav"
import Hero from "./Layouts/Hero"
import Footer from "@/app/layouts/Footer/Footer"

interface Props extends React.PropsWithChildren { }
export default function ContactClient({ children }: Props) {
  return (
    <>
      <Nav />
      <Hero />
      {children}
      <Footer />
    </>
  )
}