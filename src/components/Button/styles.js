import styled from "styled-components";
import { Link as StyledLink } from "react-router-dom";

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 8px 12px;
  color: ${({ theme }) => theme.primaryText};
  background-color: rgba(29, 161, 242, 0.1);
  border-radius: 9999px;
  font-family: "Chirp Bold";
  transition-duration: 0.2s;
  transition-property: background-color, box-shadow, color;
  &:focus {
    color: ${({ theme }) => theme.colors.focusBlue};
    outline: none;
    box-shadow: rgb(142, 208, 249) 0px 0px 0px 2px;
    background-color: rgb(0, 0, 0, 0.1);
  }
  &:hover {
    color: ${({ theme }) => theme.colors.focusBlue};
  }
  &.active {
    color: ${({ theme }) => theme.colors.focusBlue};
  }
`;
export default StyledButton;
export const Link = styled(StyledLink)``;
