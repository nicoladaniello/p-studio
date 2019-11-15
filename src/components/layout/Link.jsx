import React from "react";
import classnames from "classnames";

const linkTypes = {
  page: {
    content: "Page-Show",
    type: "cid"
  },
  product: {
    content: "Search-Show",
    type: "pid"
  },
  category: {
    content: "Search-Show",
    type: "cgid"
  }
}

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
