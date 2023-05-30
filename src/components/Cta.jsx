import React from "react";
import Button from "./Button";
import styles from "../styles";
const Cta = () => {
  return (
    <section
      className={`${styles.flexCenter}  my-20  text-white font-poppins p-1 `}
    >
      <div className="flex flex-col justify-center sm:items-center px-4 py-4 sm:py-12 sm:px-16  bg-black-gradient-2 rounded-2xl box-shadow sm:flex-row items-start gap-2">
        <div className="flex flex-col justify-center items-start flex-[2]">
          <h1 className="sm:text-[48px] text-[30px] font-semibold">
            Let’s try our service now!
          </h1>
          <p className={`${styles.paragraph} md:text-[16px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="flex-1 flex justify-end items-center">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Cta;
