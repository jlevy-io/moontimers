import React from "react";
import variants from "./variants";
import Container, { Inner } from "./styles";

const Loader = ({ full, small }) => {
  return (
    <Container className={full ? "full" : ""}>
      <Inner
        className={full ? "inner-full" : ""}
        initial="hidden"
        animate="visible"
        exit="hidden"
        {...{ variants, small }}
      >
        <div className={small ? "moon small" : "moon"}>
          <div className="disc" />
        </div>
        {full && <div>loading</div>}
      </Inner>
    </Container>
  );
};

export default Loader;
