import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 13px;
  font-family: "Chirp Bold";
`;

export const StyledInput = styled.input`
  all: unset;
  line-height: 20px;
  padding: 5px 0px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primaryDarkBorder};
`;

export const Validate = styled.div`
  position: absolute;
  bottom: -20px;
  left: 0;
  color: ${({ theme }) => theme.colors.focusBlue};
  font-weight: 700;
  font-size: 12px;
`;

export default Container;
