import ContactServer from "./Contact.server"

export {metadata} from "./metadata"

export default async function ContactPage(){
  return <ContactServer />
}