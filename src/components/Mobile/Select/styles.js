import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  &:after {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid ${({ theme }) => theme.colors.primaryDarkBorder};
    position: absolute;
    right: 5px;
    top: 29px;
    pointer-events: none;
  }
`;

export const Label = styled.label`
  font-size: 13px;
  font-family: "Chirp Bold";
`;

export const StyledSelect = styled.select`
  all: unset;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  position: relative;
  display: block;
  line-height: 20px;
  padding: 5px 0px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primaryDarkBorder};
}
`;

export const StyledOption = styled.option`
  background: #000;
  color: inherit;
  padding: 5px;
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
