import React from "react";
import styles from "../styles";
import { clients } from "../constants";
const clientsList = clients.map((client) => (
  <div
    className="flex justify-center items-center h-[10px] w-[100px] sm:h-[12px] sm:w-[170px] "
    key={client.id}
  >
    <img src={client.logo} />
  </div>
));
const Cleints = () => {
  return (
    <section
      className={`sm:${styles.flexCenter} sm:justify-around grid grid-cols-2 grid-rows-2 gap-8 sm:gap-12`}
    >
      {clientsList}
    </section>
  );
};

export default Cleints;
