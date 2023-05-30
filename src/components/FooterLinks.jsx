import React from "react";

const FooterLinks = (props) => {
  const linksList = props.links?.map((link) => (
    <li key={link.name}>
      <a className="cursor-pointer underline sm:no-underline" href={link.link}>
        {link.name}
      </a>
    </li>
  ));
  return (
    <div className="flex flex-col sm:gap-4 gap-1 font-poppins">
      <p className="text-[12px] sm:text-[18px]">{props.title}</p>
      <ul className="flex sm:flex-col flex-wrap justify-start items-center sm:justify-center sm:items-start text-[10px] sm:text-[16px] gap-2 text-dimWhite">
        {linksList}
      </ul>
    </div>
  );
};

export default FooterLinks;
