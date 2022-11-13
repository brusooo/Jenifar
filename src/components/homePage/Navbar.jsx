import React from "react";
import { navLinks } from "../../constants";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 z-[11] w-screen">
      <nav className="w-full flex p-4 z-1 ">
        <div className="font-bold text-3xl font-leaguespartan py-3  px-8">
          <h3>Brusooo</h3>
        </div>
        <ul className="w-full h-full flex font-leaguespartan flex-row items-end justify-end list-none text-xl py-2 px-8 font-bold md:gap-14 max-[870px]:hidden">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`px-3 py-1 rounded-3xl ${nav.title == "Home" ? 'bg-[#8807c9] text-white' : 'bg-transparent'}`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute right-0 w-10 h-10 bg-red-500">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
