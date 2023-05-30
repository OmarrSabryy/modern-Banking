import React from "react";
import Button from "./Button";
import styles from "../styles";
import { features } from "../constants";
import Feature from "./Feature";
const feturesList = features.map((item) => (
  <Feature
    key={item.id}
    image={item.icon}
    title={item.title}
    content={item.content}
  />
));
const Business = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-col min-h-screen font-poppins my-16 gap-20 sm:flex-row`}
      id="features"
    >
      <div className={`${styles.flexStart} flex-col text-white flex-1 gap-8`}>
        <h1 className="text-[23px] sm:text-[48px] font-semibold">
          You do the business, we’ll handle the money.
        </h1>
        <p className={`${styles.paragraph} text-[10px] sm:tex-[16px]`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className="flex-1 flex justify-end items-center">
        <div className={`${styles.flexStart} flex-col gap-4`}>
          {feturesList}
        </div>
      </div>
    </section>
  );
};

export default Business;
