import React from "react";
import { navLinks } from "../../constants";

const Navbar = () => {
  return (
    <div>
      <nav class="w-full flex p-4 z-1">
        <div class="font-bold text-3xl font-leaguespartan py-3  px-8">
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
    </div>
  );
};

export default Navbar;
