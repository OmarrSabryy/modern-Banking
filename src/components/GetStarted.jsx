import React from "react";
import arrow from "../assets/arrow-up.svg";
const Getstarted = () => {
  return (
    <div className="w-16 h-16 sm:w-28 text-[10px] sm:h-28 bg-blue-gradient rounded-full p-[1px] flex justify-center items-center font-poppins ">
      <div className="flex-col w-full h-full bg-primary rounded-full text-secondary flex justify-center items-center cursor-pointer z-10">
        <div className="flex gap-1 items-center justify-center">
          <p>Get</p>
          <img src={arrow} />
        </div>
        <p>Started</p>
      </div>
    </div>
  );
};

export default Getstarted;
