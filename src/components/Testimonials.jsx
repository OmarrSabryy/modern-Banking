import React from "react";
import styles from "../styles";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
const feedbacklist = feedback.map((item) => (
  <FeedbackCard
    key={item.id}
    content={item.content}
    authorImg={item.img}
    authorName={item.name}
    authorDesc={item.title}
  />
));
const Testimonials = () => {
  return (
    <section
      className={`flex justify-center items-center flex-col my-8 text-white min-h-screen sm:my-16 gap-4`}
    >
      <div className="flex flex-col justify-between items-center flex-1 sm:gap-20 sm:flex-row gap-4">
        <h1 className="flex-1 text-[27px] sm:text-[48px] font-semibold">
          What people are saying about us
        </h1>
        <p className={`${styles.paragraph} flex-1`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row flex-1 justify-evenly items-center">
        {feedbacklist}
      </div>
    </section>
  );
};

export default Testimonials;
