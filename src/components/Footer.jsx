import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import FooterLinks from "./FooterLinks";
import styles from "../styles";
const links = footerLinks.map((item) => (
  <FooterLinks key={item.title + "L"} title={item.title} links={item.links} />
));
const socialLinks = socialMedia.map((item) => (
  <a key={item.id} href={item.link}>
    <img src={item.icon} className="w-3 h-3 sm:w-5 sm:h-5" />
  </a>
));
const Footer = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-col text-white mt-[8rem] mb-8`}
    >
      <div className="flex justify-between w-full items-start border-b-[1px] border-b-dimWhite pb-8 flex-col sm:flex-row gap-4 ">
        <div className=" flex flex-col flex-1 justify-start items-start gap-2">
          <div className="flex justify-center items-center w-[155px] h-[50px] sm:w-[255px] sm:h-[70px]">
            <img src={logo} />
          </div>
          <p className={`${styles.paragraph} ml-4`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex flex-[2] flex-col sm:flex-row justify-evenly items-start w-full gap-4">
          {links}
        </div>
      </div>
      <div className="flex flex-col justify-between w-full p-2 sm:p-8 sm:flex-row gap-4 text-[10px] sm:text-[14px]">
        <p>Copyright © 2021 HooBank. All Rights Reserved.</p>
        <div className="flex justify-center items-center gap-4">
          {socialLinks}
        </div>
      </div>
    </section>
  );
};

export default Footer;
