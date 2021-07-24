import React from "react";
import Container, {
  Label,
  StyledSelect,
  StyledOption,
  Validate,
} from "./styles";

const Select = ({
  name,
  value,
  label,
  onChange,
  validate,
  options,
  disabled,
  ...rest
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <StyledSelect {...{ name, value, onChange, disabled }} {...rest}>
        {options.map(({ value: _value, displayValue }) => (
          <StyledOption key={`option-${_value}`} value={_value}>
            {displayValue}
          </StyledOption>
        ))}
      </StyledSelect>
      {validate && <Validate>{validate}</Validate>}
    </Container>
  );
};

export default Select;
