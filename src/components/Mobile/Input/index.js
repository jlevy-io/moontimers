import React from "react";
import Container, { Label, StyledInput, Validate } from "./styles";

const Input = ({ name, value, label, onChange, validate, disabled }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput {...{ name, value, onChange, disabled }} />
      {validate && <Validate>{validate}</Validate>}
    </Container>
  );
};

export default Input;
