import Nav from "./Layouts/Nav"
import Hero from "./Layouts/Hero"

interface Props extends React.PropsWithChildren { }
export default function ContactClient({ children }: Props) {
  return (
    <>
      <Nav />
      <Hero />
      {children}
    </>
  )
}