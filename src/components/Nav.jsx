import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 container max-auto bg-transparent flex justify-between items-center p-2 z-50">
      <NavLink
        to="/"
        className="logo w-10 h-10 p-1 bg-white  rounded-lg flex justify-center items-center font-bold shadow-md"
      >
        <p className="text-[#127499]">Log</p>
      </NavLink>
      <nav className="links flex gap-7 text-lg font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-[#127499]" : "text-blue-950"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-[#127499]" : "text-blue-950"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-[#127499]" : "text-blue-950"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;
