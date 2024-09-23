import TrainYourMind from "@/app/layouts/TrainYourMind";
import Nav from "@/app/layouts/Nav";
import Hero from "@/app/layouts/Hero";
import Footer from "@/app/layouts/Footer/Footer";
import Avaliations from "@/app/layouts/Avaliations";
import Plans from "@/app/layouts/Plans";
import Info from "@/app/layouts/Info";
import WhatsAppBtn from "@/app/layouts/WhatsAppBtn/WhatsAppBtn";
import MyClients from "@/app/layouts/MyClients/MyClients";


export default function Home() {
  return (
    <>
    <WhatsAppBtn/>
      <Nav/>
      <Hero/>
      <TrainYourMind />
      <Avaliations />
      <Info/>
      <MyClients/>
      <Plans/>
      <Footer/>
    </>
  );
}
