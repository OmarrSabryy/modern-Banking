import React from "react";
import styles from "../styles";
import Button from "./Button";
import cardDeal from "../assets/card.png";
const CardDeal = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-col min-h-screen gap-20 sm:flex-row sm:my-16`}
    >
      <div className="flex justify-start items-center flex-1 font-poppins">
        <div className="flex flex-col text-white justify-center items-start gap-8">
          <h1 className="text-[27px] sm:text-[48px] font-semibold">
            Find a better card deal in few easy steps.
          </h1>
          <p className={styles.paragraph}>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <Button />
        </div>
      </div>
      <div className="flex-1 flex justify-end items-center">
        <img src={cardDeal} />
      </div>
    </section>
  );
};

export default CardDeal;
