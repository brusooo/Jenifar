import React from "react";

const SkillCard = ({ pos, description, imgSrcOne, imgSrcTwo }) => {
  return (
    <div
      className={`${pos} p-2  max-[1000px]:relative w-64 h-80 bg-white flex flex-col shadow-skills rounded-3xl`}
    >
      <div className="w-full h-1/2 flex justify-center gap-10 items-center">
        <img className="w-16 h-16" src={imgSrcOne} alt="" />
        <img className="w-16 h-16" src={imgSrcTwo} alt="" />
      </div>
      <div className="w-full h-[75%] ">
        <p className="mx-4 mb-4 font-leaguespartan text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
