import React from "react";
import heroImage from "../assets/heroImage.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full  pt-12"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold  text-cyan-300">I'm Full Stack Developer</h2>
          <p className="text-gray-400 py-4 max-w-md">
            A Full Stack Developer is a versatile professional proficient in
            both front-end and back-end technologies, capable of developing
            end-to-end web applications. 
          </p>
          <div>
            <Link to="Projects" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FaLongArrowAltRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt=""
            className="rounded-2xl
          mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
