import React from "react";

const Button = (props) => {
  return (
    <button
      className={`${props.className} text-[12px] py-2 px-4 bg-blue-gradient border-none outline-none sm:py-4 sm:px-8 rounded-lg text-black cursor-pointer sm:text-[18px] font-medium`}
      type="button"
    >
      Get Started
    </button>
  );
};

export default Button;
