import React, { useState } from "react";
import { navLinks } from "../../constants";

const Navbar = () => {
  const [active, setactive] = useState(false);
  return (
    <div className="absolute top-0 left-0 z-[11] w-screen">
      <nav className="w-full flex p-4 z-1 ">
        <div className="font-bold text-3xl font-leaguespartan py-3  px-4">
          <h3>Brusooo</h3>
        </div>
        <ul
          className={`realtive w-full h-full flex font-leaguespartan flex-row items-end justify-end list-none text-xl py-2 px-0 font-bold gap-14 max-lg:gap-7 max-md:hidden`}
        >
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`px-3 py-0 rounded-3xl ${
                nav.title == "Home"
                  ? "bg-[#8807c9] text-white"
                  : "bg-transparent"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={`max-md:flex  absolute top-8 right-2 w-16 h-5 hidden justify-center items-center`}
        onClick={() => setactive(!active)}
      >
        <span
          className={`absolute top-0 w-6 h-1 bg-black  rounded-full ${
            active == true ? "top-1/2 rotate-45" : ""
          }`}
        />
        <span
          className={`w-6 h-1 bg-black rounded-full ${
            active == true ? "hidden" : "absolute"
          }`}
        />
        <span
          className={`absolute bottom-0  w-6 h-1 bg-black rounded-full ${
            active == true ? "bottom-[27%] -rotate-45" : ""
          }`}
        />
      </div>

      <div className={`absolute w-44 h-56 right-4  hidden ${active == true ?  'max-md:flex' : 'hidden'}`}>
        <div className="absolute w-44 h-56 bg-white -z-10 rounded-3xl shadow-cards" />
        <div className="w-44 h-56 z-11">
          <ul
            className={`realtive w-full h-full flex font-leaguespartan flex-col items-center justify-center list-none text-xl  font-bold gap-3`}
          >
            {navLinks.map((nav) => (
              <li key={nav.id} className={`px-3 py-0 text-black`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
