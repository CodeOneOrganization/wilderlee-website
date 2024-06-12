import Hero from "@/app/layouts/Hero";
import TrainYourMind from "@/app/layouts/TrainYourMind";
import Nav from "@/app/layouts/Nav";
import TipsSection from "@/app/layouts/TipsSection";

export default function Home() {
  return (
    <>
      <Nav/>
      <Hero/>
      <TipsSection/>
      <TrainYourMind />
      <Hero/>
    </>
  );
}
