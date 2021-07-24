import React from "react";
import { withRouter } from "react-router-dom";
import StyledViewContainer from "./styles";

const ViewContainer = ({ children }) => {
  return <StyledViewContainer>{children}</StyledViewContainer>;
};

export default withRouter(ViewContainer);
