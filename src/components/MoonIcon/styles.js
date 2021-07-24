import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  height: 100%;
  place-self: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  margin-right: 25px;
  padding-bottom: 10px;
  &.mobile {
    font-size: 8vmax;
    margin-left: 0;
    margin-right: 0;
    padding-bottom: 5px;
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
      font-size: 5vmax;
    }
  }
  span.moon-icon {
    margin-bottom: ${({ isMobile }) => (isMobile ? "0px" : "10px")};
  }
`;

export const Label = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Badge = styled.span`
  white-space: pre;
  background-color: ${({ badgeColor, theme }) =>
    badgeColor || theme.colors.focusBlue};
  font-size: 12px;
  font-family: "Chirp";
  padding: 4px 6px 3px;
  border-radius: 6px;
`;

export default Container;
