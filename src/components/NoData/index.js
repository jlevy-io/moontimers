import React from "react";
import variants from "./variants";
import Container, { Icons } from "./styles";

const NoData = ({ isMobile }) => {
  return (
    <Container initial="hidden" animate="visible" {...{ variants, isMobile }}>
      <Icons>🚫💾</Icons>
      <div>
        <span>No Results Found</span>
      </div>
    </Container>
  );
};

export default NoData;
