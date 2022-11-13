import React from "react";
import SkillCard from "./SkillCard";
import { skillCards } from "../../constants";

const Skill = () => {
  return (
    <section id="skills" className="relative w-screen min-h-[100vh] max-[1000px]:min-h-[120vh] top-10 flex justify-center items-center">
      <div className="relative w-[90%] max-[1000px]:w-[95%] min-h-screen flex justify-center items-center max-[1000px]:flex-col-reverse  ">
        <div className=" relative w-[90%] max-[1200px]:w-full h-[700px] max-[1000px]:h-full flex-col  justify-center items-center">
          <div className="absolute top-0 left-0 w-1/2  min-h-full flex max-[640px]:flex-col justify-center items-center max-[1000px]:relative max-[1000px]:w-full max-[1000px]:left-0 max-[1000px]:gap-10">
            <SkillCard
              pos={"absolute top-0 left-0"}
              source={skillCards.cardOne}
            />
            <SkillCard
              pos={"absolute bottom-0 left-[20%] max-[1000px]:left-0 max-[1000px]:top-0"}
              source={skillCards.cardTwo}
            />
          </div>

          <div className="absolute top-0 right-0  w-1/2 min-h-full max-[640px]:mt-10 max-[1000px]:relative max-[640px]:flex-col flex justify-center items-center max-[1000px]:w-full max-[1000px]:left-0 max-[1000px]:gap-10">
            <SkillCard
              pos={"absolute top-0 right-0 "}
              source={skillCards.cardThree}
            />
            <SkillCard
              pos={"absolute bottom-0 right-[20%] max-[1000px]:bottom-0 max-[1000px]:left-0 max-[1000px]:right-0"}
              source={skillCards.cardFour}
            />
          </div>
        </div>
        <div className="absolute max-[1000px]:relative max-[1000px]:w-full max-[1000px]:h-1/4 max-[1000px]:-top-0 top-28 left[25%] flex justify-center items-center flex-col gap-10">
          <h1 className="text-6xl font-pacifico max-[1300px]:text-5xl text-purple">
            Skills
          </h1>
          <h3 className="text-xl max-[1000px]:text-xl max-[640px]:text-base font-leaguespartan opacity-60 max-[1300px]:text-base max-[1200px]:text-[15px]">
            When love and skill work together, expect a masterpiece.
          </h3>
          <div className="w-1/2 max-[1000px]:scale-x-[0.5]  h-1 bg-purple -translate-y-5 origin-center animate-skillsLine" />
        </div>
    
      </div>
    </section>
  );
};

export default Skill;
