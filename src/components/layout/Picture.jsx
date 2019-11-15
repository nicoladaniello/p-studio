import React from "react";
import classnames from "classnames";

const imagesURL =
  "https://stage.phase-eight.com/on/demandware.static/-/Library-Sites-P8SharedLibrary/default/dwa6e29ab2/%PATH%?$staticlink$";
const defaultMobBreakpoint = "768px";

const Picture = ({ images, align = "center", className }) => {
  if (!images) return null;
  const { desktop, mobile } = images;
  const mobBreakpoint =
    mobile && mobile.breakpoint ? mobile.breakpoint : defaultMobBreakpoint;

  if (!desktop || desktop.src === undefined || desktop.alt === undefined)
    throw new Error("Error in Picture element: bad images formatting.");

  if (mobile && mobile.src === undefined)
    throw new Error("Error in Picture element: bad images formatting.");

  return (
    <picture className={classnames(`text-${align}`, className)}>
      {!!mobile && (
        <source
          media={`(max-width: ${mobBreakpoint})`}
          srcSet={imagesURL.replace("%PATH%", mobile.src)}
        />
      )}
      <img
        className={classnames({"img-fluid": images.classes === undefined}, images.classes)}
        alt={desktop.alt}
        src={imagesURL.replace("%PATH%", images.desktop.src)}
      />
    </picture>
  );
};

export default Picture;
