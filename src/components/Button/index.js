import React from "react";
import StyledButton, { Link } from "./styles";

const Button = ({ children, href, ...rest }) => {
  return (
    <>
      {href ? (
        <Link {...{ href }} {...rest}>
          {children}
        </Link>
      ) : (
        <StyledButton {...rest}>{children}</StyledButton>
      )}
    </>
  );
};

export default Button;
