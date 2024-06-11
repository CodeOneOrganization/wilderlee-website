import Hero from "@/app/layout/Hero";
import TrainYourMind from "./layout/TrainYourMind";
import Nav from "@/app/layout/Nav";
import TipsSection from "@/app/layout/TipsSection";

export default function Home() {
  return (
    <>
      <Nav/>
      <Hero/>
      <TipsSection/>
      <TrainYourMind />
    </>
  );
}
