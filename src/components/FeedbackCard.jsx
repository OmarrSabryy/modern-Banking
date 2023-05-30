import React from "react";
import { quotes } from "../assets";
const FeedbackCard = (props) => {
  return (
    <div className="flex flex-1 justify-center items-center px-4 py-4 sm:px-8 sm:py-16 feedback-card rounded-2xl font-poppins">
      <div className="flex flex-col justify-center items-start text-white gap-4  sm:gap-10">
        <img src={quotes} className="w-8 h-8" />
        <h2 className="text-[10px] sm:text-[18px]">{props.content}</h2>
        <div className="flex justify-center items-center gap-4">
          <img src={props.authorImg} className="w-10 h-10" />
          <div className="flex flex-col justify-center items-start gap-2">
            <h4 className="text-[12px] sm:text-[20px]">{props.authorName}</h4>
            <p className="text-[8px] sm:text-16px text-dimWhite">
              {props.authorDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
