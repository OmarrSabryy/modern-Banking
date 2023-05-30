import React from "react";
import { stats } from "../constants";
import styles from "../styles";
const list = stats.map((item, index) => (
  <li
    key={item.id}
    className="flex justify-center items-center gap-4 uppercase "
  >
    <span className="text-[18px] sm:text-[30px] ">{item.value}</span>
    <span className="text-[12px] text-gradient">{item.title}</span>
    {index !== stats.length - 1 && (
      <span className="w-[1px] h-[14px] bg-white mr-8  hidden sm:flex "></span>
    )}
  </li>
));
const Stats = () => {
  return (
    <section className="flex font-poppins">
      <ul className="flex flex-col sm:flex-row items-start w-full text-white justify-center gap-4 sm:items-center">
        {list}
      </ul>
      ;
    </section>
  );
};

export default Stats;
