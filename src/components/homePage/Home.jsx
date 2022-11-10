import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <section className="relative top-0 left-0 w-screen min-h-screen overflow-y-visible">
      <Navbar />

      <div className="absolute top-0 left-0 w-screen h-screen bg-white -z-10 blur-lg ">
        <div className="relative md:w-60 md:h-60 lg:w-80 lg:h-80 w-56 h-56  bg-violet-700 opacity-[.35] rounded-full top-1/4 -left-[12%]  animate-moveUp"></div>
        <div className="absolute float-right  md:w-60 md:h-60 lg:w-80 lg:h-80 w-56 h-56 bg-green-500 opacity-40 rounded-full top-[32%] -right-[13%] animate-moveDown"></div>
      </div>

      <div className="absolute top-0 left-0 w-screen h-screen max-[870px]:flex-col-reverse max-[870px]:top-10 flex flex-row flex-initial justify-center items-center">
        <div className="relative w-1/2 h-full  max-[870px]:w-full max-[870px]:h-1/2  max-[600px]:mb-24">
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

            <p className="py-3 font-bold min-[1070px]:text-[36px] max-[600px]:text-2xl max-[1070px]:text-[27px]  font-leaguespartan">
              A Creative Web Designer and Developer{" "}
            </p>
          </div>
        </div>
        <div className="relative w-1/2 h-full max-[870px]:mt-12  flex justify-center items-center  max-[870px]:w-full max-[870px]:h-1/2">
          <div className="relative   max-[1300px]:scale-[.85] max-[870px]:scale-100 w-[420px] h-[420px] flex justify-center items-center rounded-full border-8 border-y-transparent border-x-[#8807c9] ">
            <div className="relative w-96 max-[600px]:scale-100   h-96 bg-[url('/images/avatar.jpg')] rounded-full bg-cover bg-no-repeat bg-center bg-red-500 overflow-hidden"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
