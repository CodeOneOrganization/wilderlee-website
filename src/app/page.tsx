import TrainYourMind from "@/app/layouts/TrainYourMind";
import Nav from "@/app/layouts/Nav";
import Hero from "@/app/layouts/Hero";
import Footer from "@/app/layouts/Footer/Footer";
import Avaliations from "@/app/layouts/Avaliations";
import MyClients from "@/app/layouts/MyClients/MyClients";
import Plans from "@/app/layouts/Plans";
import Info from "@/app/layouts/Info";


export default function Home() {
  return (
    <>
      <Nav/>
      <Hero/>
      <TrainYourMind />
      <Avaliations />
      {/* <MyClients /> */}
      {/* <TrainYourMind /> */}
      <Info/>
      <Plans/>
      <Footer/>
    </>
  );
}
