import React from "react";
import classnames from "classnames";

const Title = ({
  color,
  transform,
  className,
  inner,
  children,
  size = "h1",
  chronicle = false,
  ...rest
}) => {
  const innerHTML = inner
    ? { dangerouslySetInnerHTML: { __html: inner } }
    : null;

  return (
    <div
      className={classnames(
        size,
        {
          font_chronicle: chronicle,
          [`text-${color}`]: color,
          [`text-${transform}`]: transform
        },
        className
      )}
      {...innerHTML}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Title;
