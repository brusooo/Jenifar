import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="z-10  relative top-0 left-0 w-screen min-h-[95vh] overflow-y-visible"
    >
      <Navbar />

      <div className="absolute top-0 left-0 w-screen h-screen bg-white -z-10 blur-lg ">
        <div className="relative md:w-60 md:h-60 lg:w-80 lg:h-80 w-56 h-56  bg-violet-700 opacity-[.35] rounded-full top-1/4 -left-[12%]  animate-moveUp"></div>
        <div className="absolute float-right  md:w-60 md:h-60 lg:w-80 lg:h-80 w-56 h-56 bg-green-500 opacity-40 rounded-full top-[32%] -right-[13%] animate-moveDown"></div>
      </div>

      <div className="absolute top-0 left-0 w-screen h-screen max-[870px]:flex-col-reverse max-[870px]:top-10 flex flex-row flex-initial justify-center items-center">
        <motion.div
          className="relative w-1/2 h-full  max-[870px]:w-full max-[870px]:h-1/2  max-[600px]:mb-24"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="relative w-full h-full max-[1070px]:translate-x-12 translate-x-24 translate-y-10 max-[600px]:-translate-y-0 flex flex-col justify-center items-start max-[870px]:translate-x-1/4 max-[870px]:-translate-y-8 max-[600px]:translate-x-11">
            <h1 className="font-bold max-[870px]:text-5xl max-[600px]:text-4xl min-[970px]:text-8xl  text-6xl font-leaguespartan">
              Hi , I am
            </h1>
            <div className="flex justify-center items-center translate-x-14">
              <div className="relative w-[120px] mr-10 h-8 rounded-2xl flex justify-between place-items-end">
                <div className="relative w-4 h-4 rounded-full bg-teal-500"></div>
                <div className="relative w-5 h-5 rounded-full bg-[#5E548E]"></div>
                <div className="relative w-6 h-6 rounded-full bg-yellow-400"></div>
              </div>
              <h1 className="font-bold rounded-[5px] border-4 max-[600px]:text-4xl max-[870px]:text-5xl border-x-transparent border-y-transparent border-b-violet-700  max[970px]:text-9xl text-6xl font-leaguespartan py-3">
                Jenifar
              </h1>
            </div>

            <p className="py-3 font-bold min-[1070px]:text-[28px] max-[600px]:text-xl max-[1070px]:text-[20px]  font-leaguespartan">
              Creative Web Designer and Developer
              <br />
              <span className="text-2xl text-[#5E548E]">and a</span> Aspiring
              Data Scientist
            </p>
          </div>
        </motion.div>
        <div className="relative w-1/2 h-full max-[870px]:mt-12  flex justify-center items-center  max-[870px]:w-full max-[870px]:h-1/2">
          <div className="relative top-12 max-[870px]:top-0  w-[420px] h-[420px] flex justify-center items-center">
            <img
              src="/images/homePage/mike.png"
              className="max-[870px]:scale-100 scale-150"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
