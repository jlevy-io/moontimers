import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: stretch;
  height: 7.5vmax;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  border-top: 1px solid ${({ theme }) => theme.colors.primaryDarkBorder};
  z-index: 1000;
`;

export const FooterItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5vmin;
  height: 100%;
  flex: 1;
  border-right: 2px solid ${({ theme }) => theme.colors.primaryDarkBorder};
  &.active {
    background-color: ${({ theme }) => theme.colors.primaryDarkHighlight};
  }
  &:last-of-type {
    border-right: none;
  }
  span.icon {
    font-size: 3vmax;
    margin-right: 5px;
  }
  span.text {
    font-size: 12px;
    max-width: 40px;
    text-align: center;
  }
`;

export default Container;
