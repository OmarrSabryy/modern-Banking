import React from "react";
import styles from "../styles";
const Feature = (props) => {
  return (
    <div
      className={`${styles.flexCenter} gap-1 p-1 text-white font-poppins sm:gap-4 feature-card sm:p-4 rounded-2xl cursor-pointer`}
    >
      <div className={`${styles.flexCenter} bg-dimBlue p-2 rounded-full`}>
        <img src={props.image} />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-[12px] sm:text-[18px]">{props.title}</h4>
        <p className="text-[8px] sm:text-[16px] text-dimWhite">
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default Feature;
