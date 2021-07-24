import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1002;
`;

export const FormContainer = styled(motion.form)`
  display: flex;
  flex-direction: column;
  width: 50vw;
  max-width: 550px;
  min-height: 630px;
  padding: 25px;
  background: ${({ theme }) => theme.colors.primaryDark};
  border: 1px solid ${({ theme }) => theme.colors.primaryDarkBorder};
  border-radius: 16px;
  overflow-y: auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 20px 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryDarkBorder};
  span {
    font-family: "Chirp Heavy";
    font-size: 2rem;
  }
`;

export const Page = styled(motion.div)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Success = styled(motion.div)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
  div.icon {
    font-size: 10vh;
    margin-bottom: 20px;
  }
  div.message {
    width: 80%;
    text-align: center;
    font-size: 2rem;
    font-family: "Chirp Bold";
  }
`;

export const InputRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px 10px 20px;
  margin-bottom: 15px;
`;

export const SelectRow = styled.div`
  display: flex;
  margin-bottom: 30px;
  margin-left: 20px;
  & > div {
    margin-right: 20px;
    min-width: 60px;
  }
`;

export const Label = styled.label`
  font-size: 13px;
  font-family: "Chirp Bold";
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 44px;
  cursor: pointer;
  filter: invert(92%) sepia(2%) saturate(1718%) hue-rotate(212deg)
    brightness(105%) contrast(102%);
  img {
    width: 2vh;
    height: auto;
  }
`;

export const FormButtonRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  min-height: 44px;
  margin-top: 20px;
`;

export const FormButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 25px;
  background: ${({ theme }) => theme.colors.focusBlue};
  border-radius: 9999px;
  font-weight: 700;
  min-width: 44px;
  cursor: pointer;
  &:disabled {
    background: ${({ theme }) => theme.colors.primaryDarkBorder};
  }
`;

export const Message = styled.div`
  font-size: 13px;
  margin-left: 20px;
  margin-bottom: 20px;
  font-family: "Chirp Bold";
`;

export default Container;
