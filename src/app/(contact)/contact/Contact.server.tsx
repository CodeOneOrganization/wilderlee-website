import Hero from "@/app/(contact)/contact/Layouts/Hero";
import ContactClient from "./Contact.client";
import Nav from "@/app/(contact)/contact/Layouts/Nav";



export default async function ContactServer(){
  return (
    <ContactClient>
      <Nav/>
      <Hero/>
    </ContactClient>
  )
}