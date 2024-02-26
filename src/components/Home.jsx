// Home.js
import React from "react";
import heroImage from "../assets/heroImage.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Home.css";

const Home = () => {
  return (
    <div name="home" className="home-container">
      <div className="content-container">
        <div className="text-container">
          <h2 className="hero-text">I'm Full Stack Developer</h2>
          <p className="hero-description">
            A Full Stack Developer is a versatile professional proficient in
            both front-end and back-end technologies, capable of developing
            end-to-end web applications.
          </p>
          <div>
            <Link
              to="Projects"
              smooth
              duration={500}
              className="btn-portfolio group"
            >
              Portfolio
              <span className="fa-arrow">
                <FaLongArrowAltRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={heroImage} alt="" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
