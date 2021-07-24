import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  @media screen and (max-width: 1223px) {
    max-width: 350px;
  }
`;

export const Ticker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(29, 161, 242, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.primaryDarkBorder};
  border-radius: 8px;
  padding: 3px 5px;
  min-width: 45px;
  margin-right: 5px;
  width: 100%;
  &:last-of-type {
    margin-right: 0px;
  }
  .header {
    font-size: 13px;
    margin-bottom: 5px;
  }
  .body {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.moonYellow};
  }
  &.mobile {
    min-width: 38px;
    max-width: 100px;
    .header {
      font-size: 11px;
    }
    .body {
      font-size: 12px;
    }
  }
`;

export default Container;
