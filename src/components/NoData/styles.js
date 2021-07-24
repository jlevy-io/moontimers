import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  padding-top: 10vh;
  font-size: ${({ isMobile }) => (isMobile ? "1.5rem" : "2rem")};
  span {
    padding-left: 10px;
  }
`;

export const Icons = styled.div`
  display: flex;
  font-size: 10vh;
  margin-bottom: 20px;
`;

export default Container;
