import React from "react";
import classnames from "classnames";

const Link = ({ link, stretched, className, children }) => {
  let href = null;
  if (link !== undefined) {
    const { id, content = "Search", type = "cgid", extra = "" } = link;
    href = {
      href: `$httpUrl('${content}-Show', '${type}', '${id}')$${extra}`
    };
  }

  return (
    <a
      className={classnames({ "stretched-link": stretched }, className)}
      {...href}
    >
      {children}
    </a>
  );
};

export default Link;