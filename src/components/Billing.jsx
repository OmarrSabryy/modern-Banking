import React from "react";
import styles, { layout } from "../styles";
import billingImage from "../assets/bill.png";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
const Billing = () => (
  <section
    className={`${styles.flexCenter} min-h-screen gap-4 sm:gap-20 flex-col sm:flex-row`}
    id="product"
  >
    <div className="flex-1 relative flex justify-start items-center">
      <img className="z-20" src={billingImage} />
      <div className="pink__gradient absolute w-[100px] h-[600px] top-1 left-16"></div>
      <div className="blue__gradient absolute w-[100px] h-[600px] top-1 left-16"></div>
      <div className="white__gradient absolute w-[200px] h-[600px] top-1 left-16"></div>
    </div>
    <div className="flex-1 justify-end items-center z-10">
      <div className="text-white flex flex-col gap-8">
        <h1 className="text-[27px] sm:text-[48px] font-semibold">
          Easily control your billing & invoicing.
        </h1>
        <p className={styles.paragraph}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex justify-start items-center gap-2 sm:gap-4">
          <img src={apple} className="w-20 sm:w-auto" />
          <img src={google} className="w-20 sm:w-auto" />
        </div>
      </div>
    </div>
  </section>
);

export default Billing;
