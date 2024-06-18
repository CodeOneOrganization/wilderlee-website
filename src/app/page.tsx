import TrainYourMind from "@/app/layouts/TrainYourMind";
import Nav from "@/app/layouts/Nav";
import Hero from "@/app/layouts/Hero";
import Footer from "@/app/layouts/Footer/Footer";
import Avaliations from "@/app/layouts/Avaliations/Avaliations";
import MyClients from "./layouts/MyClients/MyClients";

export default function Home() {
  return (
    <>
      <Nav/>
      <Hero/>
      <TrainYourMind />
      <Avaliations />
      <MyClients />
      <Footer/>
    </>
  );
}
