import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 938px;
  padding: 25px;
  align-items: flex-end;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  border: 1px solid ${({ theme }) => theme.colors.primaryDarkBorder};
  border-top: 0px;
`;

export const ButtonRow = styled.div`
  display: flex;
  & > button {
    margin-right: 10px;
    &:last-of-type {
      margin-right: 0px;
    }
  }
`;

export default Container;
