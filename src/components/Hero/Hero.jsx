import React from "react";
import "./Hero.css";
import "../../App.css";
import Header from "../Header/Header";

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>The best fitness club in the town</span>
        </div>

        {/* hero  */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND
              LIVE UP YOUR LIFE TO FULLEST
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coachs</span>
          </div>

          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>

          <div>
            <span>+56</span>
            <span>fitness program</span>
          </div>
        </div>

        {/* hero button */}
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart Rate </span>
          <span>116 PPM</span>
        </div>

        <img src={hero_image} alt="" className="hero-image " />
        <img src={hero_image_back} alt="" className="hero-image-back" />

        <div className="calories">
          <img src={calories} alt="" />
          <div className="calories-text">
            <span>calories burned</span>
            <span>220 kcal</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
