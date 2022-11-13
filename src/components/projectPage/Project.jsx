import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../constants";

const Project = () => {
  return (
    <section id="projects" className="relative left-0 max-lg:top-24   w-screen min-h-screen flex flex-col justify-center items-center">
      <div className="relative w-full h-full -top-5 flex justify-center ">
        <div className="flex flex-col justify-center items-center gap-7 max-[640px]:translate-y-5">
          <h1 className="text-6xl font-pacifico max-[800px]:text-5xl text-purple">
            Projects
          </h1>
          <h3 className="relative text-xl max-[1000px]:text-base max-[640px]:text-sm font-leaguespartan opacity-60 max-[800px]:text-base max-[1200px]:text-[15px]">
            The key to successful leadership today is influence not authority.
          </h3>
          <span className="w-96 max-[600px]:w-82 h-1 text-center bg-purple -translate-y-4 origin-center animate-skillsLine" />
        </div>
      </div>
      <div className="relative w-[1200px] max-[640px]:translate-y-5 max-xl:scale-x-[.88] max-lg:flex-col max-lg:w-[500px] max-lg:gap-12   h-full gap-20 bg-lightWhite bg-opacity-30 rounded-3xl p-16 flex justify-center items-center">
        <ProjectCard source={projects.projectOne}/>
        <ProjectCard source={projects.projectTwo}/>
        <ProjectCard source={projects.projectThree}/>
      </div>
    </section>
  );
};

export default Project;
