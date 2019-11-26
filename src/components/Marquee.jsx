import React from "react";
import Link from "./layout/Link";

const Marquee = ({ link, children }) => {
  return (
    <div
      class="marquee"
      data-duration="20000"
      data-gap="0"
      data-duplicated="true"
    >
      <Link link={link} className="stretched-link text-friday">
        {[1, 2, 3, 4].map(m => (
          <span
            class="mr-5"
            dangerouslySetInnerHTML={{ __html: children }}
          />
        ))}
      </Link>
    </div>
  );
};

export default Marquee;
