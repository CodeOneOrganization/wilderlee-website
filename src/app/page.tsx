// import Hero from "@/app/layout/Hero";
import TrainYourMind from "./layouts/TrainYourMind";
import Nav from "@/app/layouts/Nav";
import NewHero from "@/app/layouts/NewHero";
import TipsSection from "@/app/layouts/TipsSection";
import AboutMe from "@/app/layouts/AboutMe";
import Footer from "@/app/layouts/Footer/Footer";

export default function Home() {
  return (
    <>
      <Nav/>
      <NewHero/>
      {/* <Hero/> */}
      <TipsSection/>
      <TrainYourMind />
      {/* <Hero/> */}
      <AboutMe />
      <NewHero/>
      <Footer/>
    </>
  );
}
