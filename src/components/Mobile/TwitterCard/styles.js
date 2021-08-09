import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  // align-items: flex-start;
  // justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.primaryDarkBorder};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryDarkBorder};
  margin-bottom: 2px;
  padding: 20px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
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
  font-size: 1rem;
  font-family: "Chirp Bold";
  font-weight: 700;
  margin-left: 10px;
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    font-size: 1.25rem;
  }
`;
export const Description = styled(motion.div)`
  // font-size: 1.2rem;
  line-height: 20px;
  margin-bottom: 20px;
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    padding: 0px 20px;
  }
`;

export const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: calc(100vw - 40px);
  height: ${({ aspect }) => `calc((100vw - 40px) / ${aspect})`};
  aspect-ratio: ${({ aspect }) => aspect};
  margin-bottom: 10px;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
    video {
      object-fit: fill;
      height: 100%;
      width: 100%;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 100%;
  max-height: 70vh;
  aspect-ratio: ${({ aspect }) => aspect};
  margin-bottom: 10px;
  border-radius: 16px;
  overflow: hidden;
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;

export const InfoBar = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin-bottom: 10px;
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    padding: 0px 20px;
  }
  div {
    margin-right: 10px;
    margin-bottom: 10px;
  }
  a {
    margin-right: 10px;
    margin-bottom: 10px;
    border: 1px solid ${({ theme }) => theme.colors.primaryDarkBorder};
  }
`;

export const CategoryLabel = styled(motion.div)`
  & > span {
    // font-family: "Chirp Bold";
    text-align: left;
    font-size: 14px;
    padding: 3px 6px 4px 3px;
    border-radius: 6px;
    background-color: rgba(29, 161, 242, 0.2);
    border: 1px solid ${({ theme }) => theme.colors.primaryDarkBorder};
  }
`;
export const Link = styled(motion.a)`
  // color: ${({ theme }) => theme.colors.focusBlue};
  // font-family: "Chirp Bold";
  color: inherit;
  text-decoration: none;
  font-size: 14px;
  padding: 3px 8px 4px;
  border-radius: 6px;
  background-color: rgba(29, 161, 242, 0.2);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    flex-direction: row;
  }
`;
export const Left = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
`;
export const Right = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
`;

export const BottomRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const MarketMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-family: "Chirp Bold";
  margin-top: 10px;
  height: 40px;
  padding: 0px 20px;
  border-radius: 8px;
  background-color: rgba(29, 161, 242, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.primaryDarkBorder};
  color: ${({ theme }) => theme.colors.moonYellow};
`;
export default Container;
