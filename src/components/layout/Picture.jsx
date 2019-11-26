import React from "react";
import classnames from "classnames";

const assetURL =
  "https://stage.phase-eight.com/on/demandware.static/-/Library-Sites-P8SharedLibrary/default/dwa6e29ab2/%PATH%?$staticlink$";
const slotsURL =
  "https://stage.phase-eight.com/on/demandware.static/-/Sites/default/dw39254118/%PATH%?$staticlink$";

const defaultMobBreakpoint = "768px";

const Picture = ({ images, className, align = "center", noUrl }) => {
  if (!images) return null;

  const { desktop, mobile, fromSlot } = images;
  const mobBreakpoint =
    mobile && mobile.breakpoint ? mobile.breakpoint : defaultMobBreakpoint;

  let imagesURL = fromSlot ? slotsURL : assetURL;
  if (noUrl) imagesURL = "%PATH%";

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
        className={classnames(
          { "img-fluid": images.classes === undefined },
          images.classes
        )}
        style={images.styles || null}
        alt={desktop.alt}
        src={imagesURL.replace("%PATH%", images.desktop.src)}
      />
    </picture>
  );
};

export default Picture;
