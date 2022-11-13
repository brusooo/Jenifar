import React from "react";
import AboutCard from "./AboutCard";
import { aboutCards } from "../../constants";

const About = () => {
  return (
    <section id="about" className="relative w-screen min-h-[100vh] bg-white flex max-[1070px]:flex-col ">
      <div className="relative w-1/2 min-h-full max-[1070px]:w-full translate-y-6 flex flex-col  justify-center items-center">
        <img
          src="/images/aboutPage/mike.png"
          alt="pencil"
          className="scale-75 max-[1070px]:translate-x-0  max-[1200px]:-translate-y-4  -translate-x-20"
        />
        <h1 className="text-7xl max-[1200px]:text-6xl max-[640px]:text-5xl flex justify-center items-center flex-col gap-5 -translate-x-20 -translate-y-24 font-pacifico max-[1070px]:translate-x-0 ">
          Know more <br />
          <span className="relative text-6xl max-[1200px]:text-5xl max-[640px]:text-4xl text-purple">
            About Me
          </span>
        </h1>
      </div>
      <div className="relative w-1/2 min-h-full flex justify-center items-center max-[1070px]:w-full max-[1070px]:gap-32  max-[1070px]:flex-col">
        <AboutCard
          divProps="max-[1070px]:translate-y-10 top-[11%] translate-y-5 -left-[10%] max-[1200px]:-translate-x-28 max-[1380px]:-translate-x-11 "
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
          divProps="max-[1070px]:-translate-y-4  bottom-5 max-[1200px]:-translate-x-20   left-5  max-[1380px]:-left-[10%]"
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
