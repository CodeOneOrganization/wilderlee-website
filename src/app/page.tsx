import TrainYourMind from "@/app/layouts/TrainYourMind";
import Nav from "@/app/layouts/Nav";
import NewHero from "@/app/layouts/NewHero";

import Footer from "@/app/layouts/Footer/Footer";
import Plans from "@/app/layouts/Plans";

export default function Home() {
  return (
    <>
      <Nav/>
      <NewHero/>
      {/* <TrainYourMind /> */}
      <Plans/>
      <Footer/>
    </>
  );
}
