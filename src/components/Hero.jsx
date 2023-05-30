import React from "react";
import styles from "../styles";
import { discount, robot } from "../assets";
import Getstarted from "./GetStarted";
const Hero = () => {
  return (
    <section
      className={`flex flex-col sm:flex-row sm:gap-8 sm:mb-[4rem] justify-between items-center min-h-screen my-8 mx-4 gap-4`}
      id="home"
    >
      <div className={`${styles.flexStart}  flex-col  flex-1 gap-4`}>
        <div
          className={`bg-discount-gradient flex items-center text-white px-2 py-1 rounded-xl`}
        >
          <img src={discount} alt="%" />
          <p className={`${styles.paragraph} text-[9px] sm:text-[14px]`}>
            <span className="text-white">20%</span> DISCOUNT FOR{" "}
            <span className="text-white">1 MONTH</span> ACCOUNT
          </p>
        </div>
        <div className="flex flex-1 items-center gap-8 z-20">
          <h1 className="flex-1 font-poppins text-white  font-semibold text-[30px] sm:text-[40px] ">
            The Next <span className="text-gradient">Generation</span>
          </h1>
          <div className="flex-1  justify-center items-center sm:flex hidden">
            <Getstarted />
          </div>
        </div>
        <h1 className="font-poppins text-white w-full font-semibold text-[30px] md:text-[40px]">
          PAYMENT METHOD.
        </h1>
        <p className={`${styles.paragraph} sm:text-[12px] text-[9px]`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="flex-1 relative justify-center items-center flex">
        <img className="object-cover z-10" src={robot} alt="robot" />
        <div className="pink__gradient absolute w-[100px] h-[600px] top-1 right-16"></div>
        <div className="blue__gradient absolute w-[100px] h-[600px] top-1 right-16"></div>
        <div className="white__gradient absolute w-[200px] h-[600px] top-1 right-16"></div>
      </div>
      <div className="sm:hidden flex">
        <Getstarted />
      </div>
    </section>
  );
};

export default Hero;
