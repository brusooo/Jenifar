import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ pos, source }) => {
  return (
    <motion.div
      className={`${pos} p-2 max-[1000px]:relative max-[1000px]:mb-3 max-[1000px]:mt-3 w-64 h-80 rounded-xl bg-white flex flex-col shadow-skills`}
      initial={{ opacity: 0 , y : 100}}
      whileInView={{ opacity: 1 , y : 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="w-full h-1/2 flex justify-center gap-5 items-center">
        <img
          className="w-24 h-24 p-4 rounded-lg bg-gray-100 "
          src={source.imgSrcOne}
          alt=""
        />
        <img
          className="w-24 h-24 p-4  rounded-lg bg-gray-100"
          src={source.imgSrcTwo}
          alt=""
        />
      </div>
      <div className="w-full h-[75%] ">
        <p className="mx-4 mt-3 font-leaguespartan">
          <span className="text-purple font-pacifico">
            {source.descriptionStartPurple}
          </span>
          {source.descriptionStart}
          <span className="text-purple font-pacifico">
            {source.descriptionEndPurple}
          </span>
          {source.descriptionEnd}
        </p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
