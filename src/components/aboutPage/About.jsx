import React from "react";
import AboutCard from "./AboutCard";
import { aboutCards } from "../../constants";

const About = () => {
  return (
    <section class="relative w-screen min-h-[100vh] bg-white flex max-[1070px]:flex-col ">
      <div class="relative w-1/2 min-h-full max-[1070px]:w-full translate-y-11  flex flex-col gap-14  justify-center items-center">
        <img
          src="/images/man.png"
          alt="pencil"
          class="max-[1200px]:scale-[.85] max-[1070px]:translate-x-0  max-[1070px]:translate-y-0  max-[1200px]:-translate-y-4 -translate-y-12 -translate-x-20"
        />
        <h1 class="text-7xl max-[1200px]:text-6xl -translate-x-20 -translate-y-24 font-pacifico max-[1070px]:translate-x-0 ">
          Know more <br />
          <span class="relative text-6xl max-[1200px]:text-5xl text-[#8807c9]">
            About Me
          </span>
        </h1>
      </div>
      <div class="relative w-1/2 min-h-full flex justify-center items-center max-[1070px]:w-full max-[1070px]:gap-32  max-[1070px]:flex-col">
        <AboutCard
          divProps="max-[1070px]:translate-y-10 top-[11%] -left-[10%] max-[1200px]:-translate-x-28 max-[1380px]:-translate-x-11 "
          quotes={aboutCards.cardOne.quotes}
          percentage={aboutCards.cardOne.percentage}
          year={aboutCards.cardOne.year}
          img={aboutCards.cardOne.imgSrc}
        />

        <AboutCard
          divProps="max-[1070px]:translate-y-4  max-[1200px]:-translate-y-8 max-[1200px]:right-0 right-20   max-[1380px]:translate-y-0  max-[1380px]:translate-x-8  -translate-y-24"
          quotes={aboutCards.cardTwo.quotes}
          percentage={aboutCards.cardTwo.percentage}
          year={aboutCards.cardTwo.year}
          img={aboutCards.cardTwo.imgSrc}
        />

        <AboutCard
          divProps="max-[1070px]:translate-y-0  bottom-6 max-[1200px]:-translate-x-20   -left-0  max-[1380px]:-left-[8%]"
          quotes={aboutCards.cardThree.quotes}
          percentage={aboutCards.cardThree.percentage}
          year={aboutCards.cardThree.year}
          img={aboutCards.cardThree.imgSrc}
        />
      </div>
    </section>
  );
};

export default About;
