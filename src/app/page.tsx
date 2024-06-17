import TrainYourMind from "@/app/layouts/TrainYourMind";
import Nav from "@/app/layouts/Nav";
import Hero from "@/app/layouts/Hero";
import TipsSection from "@/app/layouts/TipsSection";
import Footer from "@/app/layouts/Footer/Footer";
import Avaliations from "@/app/layouts/Avaliations/Avaliations";

export default function Home() {
  return (
    <>
      <Nav/>
      <Hero/>
      <TrainYourMind />
      <Avaliations />
      {/* <Hero/> */}
      {/* <TipsSection/> */}
      {/* <Hero/> */}
      {/* <NewHero/> */}
      <Footer/>
    </>
  );
}
