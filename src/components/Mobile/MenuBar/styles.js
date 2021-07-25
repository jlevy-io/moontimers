import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: calc(100% - 20px);
  height: 7.5vmax;
  margin: 0;
  padding: 0px 10px;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryDarkBorder};
  z-index: 1000;
`;

export const Logo = styled(Link)`
  all: unset;
  color: inherit;
  display: flex;
  h1 {
    margin: 0;
    font-family: "Chirp Heavy";
    font-size: 1.25rem;
    & > span:first-of-type {
      margin-right: 5px;
    }
  }
`;
export const MenuButtons = styled.div`
  display: flex;
  div {
    margin-right: 10px;
  }
  div:last-of-type {
    margin-right: 0px;
  }
`;

export const MenuButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6vh;
  width: 6vh;
  filter: invert(92%) sepia(2%) saturate(1718%) hue-rotate(212deg)
    brightness(105%) contrast(102%);
  img {
    width: 4vh;
    height: auto;
  }
`;

export const MenuContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 90vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #000;
  border-left: 1px solid ${({ theme }) => theme.colors.primaryDarkBorder};
  z-index: 1001;
`;

export default Container;
