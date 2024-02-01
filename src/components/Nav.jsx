import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { soundoff, soundon } from "../assets/icons";
import sakura from "../assets/sakura.mp3";

const Nav = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);
  return (
    <header className="fixed top-0 left-0 right-0 container max-auto bg-transparent flex justify-between items-center p-2 z-50">
      <div className="flex gap-2">
        {" "}
        <NavLink
          to="/"
          className="logo w-10 h-10 p-1 bg-white  rounded-lg flex justify-center items-center font-bold shadow-md"
        >
          <p className="text-[#127499]">Log</p>
        </NavLink>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className=" w-10 h-10 cursor-pointer object-contain"
        />
      </div>
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
