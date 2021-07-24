import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Container = styled(motion.div)`
  position: fixed;
  top: calc(7.5vh + 1px);
  right: 0;
  width: 90vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #000;
  border-left: 1px solid ${({ theme }) => theme.colors.primaryDarkBorder};
  z-index: 1001;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 30px);
  font-family: "Chirp Heavy";
  font-size: 1.25rem;
  height: 7.5vh;
  padding-left: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryDarkBorder};
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 44px;
  filter: invert(92%) sepia(2%) saturate(1718%) hue-rotate(212deg)
    brightness(105%) contrast(102%);
  img {
    width: 2.5vh;
    height: auto;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryDarkBorder};
  padding-bottom: 5px;
  margin-bottom: 25px;
`;

export const MenuItem = styled(Link)`
  all: unset;
  display: flex;
  align-items: center;
  min-height: 44px;
  min-width: 44px;
  padding-left: 20px;
`;

export const MenuItemInner = styled.div`
  display: flex;
  align-items: baseline;
  .icon {
    font-size: 3vh;
  }
  .text {
    color: inherit;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    margin-left: 10px;
    & > span {
      &.active {
        color: ${({ theme }) => theme.colors.focusBlue};
      }
    }
  }
`;

export const FormButtonRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormButton = styled.button`
  all: unset;
  display: flex;
  padding: 15px 20px;
  background: ${({ theme }) => theme.colors.focusBlue};
  border-radius: 9999px;
  font-weight: 700;
`;

export default Container;
