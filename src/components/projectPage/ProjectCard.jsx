import React from "react";

const ProjectCard = ({ source }) => {
  return (
    <div
      className={`relative w-[330px] max-lg:scale-100 max-xl:scale-x-[1.2] h-96 flex flex-col bg-white rounded-lg shadow-2xl p-2 ${
        source.pos == "center" ? "scale-110" : "scale-100"
      }`}
    >
      <div className="relative w-full h-[20%] flex justify-start items-center ">
        <span className="relative left-3 w-[6px] rounded-full h-12 bg-purple"></span>
        <div className="relative left-5 flex flex-col justify-center items-start">
          <h1 className="text-xl font-leaguespartan">{source.title}</h1>
          <h3 className="text-sm font-pacifico">{source.subtitle}</h3>
        </div>
      </div>
      <div className="relative w-full h-[48%] px-3 py-5">
        <div className="relative w-full h-full rounded-lg bg-lightWhite truncate">
          <img className="relative w-full h-full" src={source.img} />
        </div>
      </div>
      <div className="relative w-full h-[32%] px-3 py-1  font-leaguespartan">
        <p>
          {source.description}
          <a href="/" className="text-purple">
            {" "}
            Watch the live demo{" "}
          </a>{" "}
          of this project here.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
