import React from "react";
import womenImg from "../img/woman_hero.png";

const Hero = () => {
  return (
    <div className="bg-hero bg-no-repeat bg-cover bg-center w-full h-[500px] mt-16">
      <div className="container mx-auto w-[80%] flex justify-center items-center">
        <div className="max-lg:translate-y-28 max-lg:mx-auto">
          <div className="flex gap-2 items-center">
            <div className="w-[40px] h-[3px] bg-blue-800"></div>
            <h1 className="font-semibold text-sm">New Trends</h1>
          </div>
          <h1 className="uppercase font-light text-[60px] max-sm:text-[40px]">
            autumn sale stylish
          </h1>
          <h1 className="uppercase font-bold text-[60px] max-sm:text-[40px]">
            womens
          </h1>
        </div>
        <div>
          <img
            className="object-cover w-full h-[500px] hidden lg:block"
            src={womenImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
