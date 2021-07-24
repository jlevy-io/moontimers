import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.primaryDarkBorder};
  margin-bottom: 2px;
  transition: all 0.3s ease-out;
  &:hover,
  &:focus,
  &:active {
    color: #fff;
    background: ${({ theme }) => theme.colors.primaryDarkHover};
  }
`;
export const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px;
`;

export const ContentInner = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  align-items: flex-start;
`;
export const ContentLeft = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 2;
  padding-right: 25px;
`;
export const Badge = styled.span`
  padding: 5px 8px 6px;
  white-space: pre;
  background-color: ${({ badgeColor, theme }) =>
    badgeColor || theme.colors.focusBlue};
  border-radius: 8px;
  font-family: "Chirp Bold";
  font-size: 13px;
`;

export const Title = styled(motion.div)`
  width: 100%;
  font-size: 1.1rem;
  font-family: "Chirp";
  font-weight: 700;
  margin-bottom: 10px;
`;
export const Description = styled(motion.div)`
  // font-size: 1.2rem;
  line-height: 20px;
  margin-bottom: 20px;
`;
export const InfoBar = styled(motion.div)`
  display: flex;
  align-items: baseline;
`;
export const CategoryLabel = styled(motion.div)`
  & > span {
    // font-family: "Chirp Bold";
    text-align: left;
    font-size: 14px;
    padding: 3px 6px 4px 3px;
    border-radius: 6px;
    background-color: rgba(29, 161, 242, 0.2);
    margin-right: 10px;
  }
`;
export const Link = styled(motion.a)`
  // color: ${({ theme }) => theme.colors.focusBlue};
  // font-family: "Chirp Bold";
  color: inherit;
  text-decoration: none;
  font-size: 14px;
  padding: 3px 6px 4px;
  border-radius: 6px;
  background-color: rgba(29, 161, 242, 0.2);
  margin-right: 10px;
`;
export const ContentRight = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  flex: 1;
`;

export default Container;
