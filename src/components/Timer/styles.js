import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: rgba(29, 161, 242, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.primaryDarkBorder};
  border-radius: 16px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: baseline;
  padding: 10px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryDarkBorder};
`;

export const Badge = styled.span`
  white-space: pre;
  /*
  background-color: ${({ badgeColor, theme }) =>
    badgeColor || theme.colors.focusBlue};
  */
  font-family: "Chirp Heavy";
  font-size: 17px;
`;
export const DateTime = styled.div`
  display: flex;
  padding-right: 10px;
  font-weight: 400;
  & > span:first-of-type {
    margin-right: 20px;
  }
`;
export const TimerBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
export const TimerBoxSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 80px;
`;

export const TimerBoxHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 5px;
  // color: ${({ theme }) => theme.colors.moonYellow};
  // font-weight: 700;
`;

export const TimerBoxBody = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: "DS Digital";
  font-size: 2.25rem;
  padding: 5px;
  color: ${({ theme }) => theme.colors.moonYellow};
`;

export default Container;
