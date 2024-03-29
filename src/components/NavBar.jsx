import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1, link: "home",
    },
    {
      id: 2,link: "about",   
    },
    {
      id: 3,link: "Projects",
    },
    {
      id: 4,link: "experience",
    },
    {
      id: 5,link: "contact",
    },
  ];
  return (
    <div
      className="flex justify-between items-center w-full
    h-20 px-4  text-cyan-300 bg-black fixed"
    >
      <div>
        <h1 className="text-3xl font-signature nl-2 md:text-4xl">Daniel</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium
                text-cyan-300 hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>{link}</Link>
              
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-cyan-300 md:hidden" 
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
      { nav && 
      <ul className="flex flex-col justify-center
       items-center absolute top-0 
       left-0 w-full  h-screen bg-gradient-to-b from-black to-gray-800 
       text-gray-500
       ">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="py-3 cursor-pointer capitalize font-medium
                text-cyan-300 text-xl hover:scale-105 duration-200"
            >
              <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          );
        })}
      </ul>
      }
      
    </div>
  );
};

export default NavBar;
