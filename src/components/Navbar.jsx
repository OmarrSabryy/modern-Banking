import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
const links = navLinks.map((link) => (
  <li key={link.id}>
    <a className="cursor-pointer" href={`#${link.id}`}>
      {link.title}
    </a>
  </li>
));
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="flex justify-between w-full items-center py-4">
      <img className="w-24 h-8 xl:w-32 xl:h-12" src={logo} alt="hookbank" />
      <ul className="hidden sm:flex text-white items-center font-poppins gap-8">
        {links}
      </ul>
      <div className="sm:hidden flex">
        <img
          src={toggleMenu ? close : menu}
          alt={`${toggleMenu ? "close" : "menu"}`}
          className="cursor-pointer relative object-contain"
          onClick={() => setToggleMenu((prev) => !prev)}
        />
        {toggleMenu && (
          <ul className="flex flex-col gap-2 justify-center items-center font-poppins absolute top-12 sidebar p-4 bg-blue-900 rounded-lg box-shadow right-4 text-white z-10">
            {links}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
