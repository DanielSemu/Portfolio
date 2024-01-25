import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
      to:"/"
    },
    {
      id: 2,
      link: "about",
      to:"about"
    },
    {
      id: 3,
      link: "portfolio",
      to:"portfolio"
    },
    {
      id: 4,
      link: "experience",
      to:"experiance"
    },
    {
      id: 5,
      link: "contact",
      to:"contact"
    },
  ];
  return (
    <div
      className="flex justify-between items-center w-full
    h-20 px-4 text-white bg-black fixed"
    >
      <div>
        <h1 className="text-5xl font-signature nl-2">Daniel</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({to, id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium
                text-cyan-300 hover:scale-105 duration-200"
            >
              <Link to={to}>{link}</Link>
              
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-cyan-300 md:hidden" 
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
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
              className="py-4 cursor-pointer capitalize font-medium
                text-cyan-300 text-4xl hover:scale-105 duration-200"
            >
              {link}
            </li>
          );
        })}
      </ul>
      }
      
    </div>
  );
};

export default NavBar;
