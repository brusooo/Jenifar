import React from "react";
import SkillCard from "./SkillCard";
import { skillCards } from "../../constants";

const Skill = () => {
  return (
    <section class="relative w-screen min-h-[100vh] bg-white flex justify-center items-center">
      <div className="relative w-[90%] max-[1000px]:w-[95%] min-h-screen max-[1000px]:h-96 flex justify-center items-center max-[1000px]:flex-col-reverse  ">
        <div className=" relative w-[90%] max-[1200px]:w-full max-[1000px]:h-[350px] h-[700px] flex-col  justify-center items-center">
          <div className="absolute top-0 left-0 w-1/2  min-h-full flex max-[640px]:flex-col justify-center items-center max-[1000px]:relative max-[1000px]:w-full max-[1000px]:left-0 max-[1000px]:gap-10">
            <SkillCard
              pos={"absolute top-0 left-0"}
              description={skillCards.cardOne.description}
              imgSrcOne={skillCards.cardOne.imgSrcOne}
              imgSrcTwo={skillCards.cardOne.imgSrcTwo}
            />
            <SkillCard
              pos={"absolute bottom-0 left-[20%] max-[1000px]:left-0 max-[1000px]:top-0"}
              description={skillCards.cardTwo.description}
              imgSrcOne={skillCards.cardTwo.imgSrcOne}
              imgSrcTwo={skillCards.cardTwo.imgSrcTwo}
            />
          </div>

          <div className="absolute top-0 right-0  w-1/2 min-h-full max-[640px]:mt-10 max-[1000px]:relative max-[640px]:flex-col flex justify-center items-center max-[1000px]:w-full max-[1000px]:left-0 max-[1000px]:gap-10">
            <SkillCard
              pos={"absolute top-0 right-0 "}
              description={skillCards.cardThree.description}
              imgSrcOne={skillCards.cardThree.imgSrcOne}
              imgSrcTwo={skillCards.cardThree.imgSrcTwo}
            />
            <SkillCard
              pos={"absolute bottom-0 right-[20%] max-[1000px]:bottom-0 max-[1000px]:left-0 max-[1000px]:right-0"}
              description={skillCards.cardFour.description}
              imgSrcOne={skillCards.cardFour.imgSrcOne}
              imgSrcTwo={skillCards.cardFour.imgSrcTwo}
            />
          </div>
        </div>
        <div className="absolute max-[1000px]:relative max-[1000px]:w-full max-[1000px]:h-1/4 max-[1000px]:-top-[7%] top-28 left[25%] flex justify-center items-center flex-col gap-10">
          <h1 className="text-8xl font-pacifico max-[1300px]:text-6-xl text-purple">
            Skills
          </h1>
          <h3 className="text-xl max-[1000px]:text-xl max-[640px]:text-base font-leaguespartan opacity-60 max-[1300px]:text-base max-[1200px]:text-[15px]">
            When love and skill work together, expect a masterpiece.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Skill;
