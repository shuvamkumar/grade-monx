import React from "react";
import "../styles/landing.scss";
import heroCicle from "../assets/heroCircle.png";
import heroBG from "../assets/heroBG.png";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";

const Landing = () => {
  return (
    <div className="landing-container">
      <Navbar />
      <div className="hero-container">
        <h1>Monks developing meaningful products and experience</h1>
        <img src={heroCicle} alt="" />
        <div>
          <p>
            We will help you design and develop from start to end. Just sit back
            and relax and enjoy the journey.
          </p>
          <img src={heroBG} alt="" />
        </div>
        {/* <Marquee /> */}
      </div>
      <div className="card-container">
        <h3>When creative thinking meets technology</h3>
        <div className="grid-container">
          <div className="card">Contents for card 1</div>
          <div className="card">Contents for card 2</div>
          <div className="card">Contents for card 3</div>
          <div className="card">Contents for card 4</div>
        </div>
      </div>
      <div className="about-container">
        <h3>About us</h3>
        <p>
          From the moment our company was founded, we have helped our clients
          fond exceptional solutions for their businesses, creating memorable
          brands and digital products. Our expertise grows with each year, and
          our accumukated experience empowers us to develop products exactluy as
          they should be.
        </p>
      </div>
    </div>
  );
};

export default Landing;
